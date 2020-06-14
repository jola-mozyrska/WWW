import {Meme} from "./Meme.js";
import * as sqlite from 'sqlite3';
import { resolve } from "dns";

export class MemeList {
    db : sqlite.Database;

    constructor(db : sqlite.Database) {
        this.db = db;
    }

    async preparedb() : Promise<any> {
        this.create_table_prices().then(() => {
        this.create_table_memes().then(async () => {
        await this.push(1, 'Gold', 'https://i.redd.it/h7rplf9jt8y21.png', 800);
        await this.push(2, 'Platinum', 'https://i.pinimg.com/736x/93/31/11/933111c388887067c9b5c945d4960343.jpg', 1100);
        await this.push(3, 'Priceless', 'https://i.imgflip.com/3sts2c.jpg', 1000);
        await this.push(4, 'Remarkable', 'https://66.media.tumblr.com/a3f6a62e625ae491163aefeb383c9b32/386cf25fed95fe23-bf/s640x960/394781f5179022cdf902f28b871930a19fb66e59.jpg', 1300);
        await this.push(5, 'Epic', 'https://i.imgflip.com/30zz5g.jpg', 900)})});
    }

    create_table_memes() : Promise<any> {
        return new Promise((resolve, reject) => {
            this.db.run(`CREATE TABLE memes (id INTEGER PRIMARY KEY, name VARCHAR, price INTEGER, url VARCHAR)`, (err) => {
                if(err) {
                    reject('DB Error');
                    return;
                }
                resolve();
            });
        });
    }

    create_table_prices() : Promise<any> {
        return new Promise((resolve, reject) => {
            this.db.run(`CREATE TABLE prices (id INTEGER PRIMARY KEY AUTOINCREMENT, meme_id INTEGER, value INTEGER)`, (err) => {
                if(err) {
                    reject('DB Error');
                    return;
                }
                resolve();
            });
        });
    }

    push(id : number, name : string, url : string, price : number) : Promise<any> {
        return new Promise((resolve, reject) => {
            this.db.run(`INSERT INTO memes (id, name, url, price) VALUES (${id}, '${name}', '${url}', ${price})`, (err) => {
                if(err) {
                    reject(`DB Error ${err}`);
                    return;
                }
                resolve();
            });
        }).then(() => {
            return new Promise((resolve, reject) => {
                this.db.run(`INSERT INTO prices (meme_id, value) VALUES (${id}, ${price})`, (err) => {
                    if(err) {
                        reject('DB Error');
                        return;
                    }
                    resolve();
                })
            });
        });
    }

    getMostExpensiveMemes(): Promise<Array<Meme>> {
        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM memes ORDER BY price DESC LIMIT 3`, (err, memes) => {
                if(err) {
                    reject('DB Error');
                    return;
                }
                const mostExpensive = memes.map((meme) => new Meme(meme.id, meme.name, meme.price, meme.url));
                resolve(mostExpensive);
            });
        });
    }

    getMeme(idStr: string): Promise<Meme> {
        const id: number = Number(idStr);

        return new Promise((resolve, reject) => {
            this.db.all(`SELECT * FROM memes WHERE id = ${id};`, (err, row) => {
                if(err || row === undefined) {
                    reject('DB Error');
                    return;
                }
                const meme = new Meme(row[0].id, row[0].name, row[0].url, row[0].price);
                // fill priceHistory
                this.db.all(`SELECT * FROM prices WHERE meme_id = ${id} ORDER BY id`, (errPrices, rowsPrices) => {
                    if(errPrices) {
                        reject('DB Error');
                        return;
                    }

                    const prices = rowsPrices.map(price => price.value);

                    // if (row !== undefined) {
                        meme.insertPriceHistory(prices);
                        resolve(meme);
                    // }
                });
            });
        });
    }

    changeMemePrice(idStr: string, price : number) : Promise<any> {
        const id: number = Number(idStr);

        return new Promise((resolve, reject) => {
            this.db.run(`INSERT INTO prices (meme_id, value) VALUES (${id}, ${price})`, (err) => {
                if(err) {
                    reject('DB Error');
                    return;
                }
                resolve();
            })
        }).then(() => {
            return new Promise((resolve, reject) => {
                this.db.run(`UPDATE memes SET price = ${price} WHERE id = ${id}`, (err) => {
                    if(err) {
                        reject('DB Error');
                    }
                    resolve();
                })
            });
        });
    }
}