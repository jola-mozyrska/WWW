export class Meme {
    id: number;
    name: string;
    price: number;
    url: string;
    priceHistory: Array<number>;

    constructor(id: number, name: string, price: number, url: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.url = url;
        this.priceHistory = new Array();
        this.priceHistory.push(price);
    }

    insertPriceHistory(priceHistory: Array<number>) : void {
        this.priceHistory = priceHistory;
    }

    getPriceHistory(): Array<number> {
        return this.priceHistory;
    }

    // changePrice(p: number): void {
    //     this.priceHistory.push(p);
    //     this.price = p;
    // }
}