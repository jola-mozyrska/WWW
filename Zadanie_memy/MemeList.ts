import {Meme} from "./Meme.js";

export class MemeList {
    list: Array<Meme>;
    idMap: Map<number, number>;

    constructor() {
        this.list = new Array();
        this.idMap = new Map();
    }

    push(meme: Meme):void {
        this.list.push(meme);
        this.idMap.set(meme.id, this.list.length - 1);
    }

    getMostExpensiveMemes(): Array<Meme> {
        this.list.sort((m1, m2) => m2.price - m1.price)
        const newL: Array<Meme> = new Array();
        for(let i = 0; i < Math.min(3, this.list.length); ++i) {
            newL.push(this.list[i]);
        }
        return newL;
    }

    getMeme(idStr: string): Meme {
        const id: number = Number(idStr);
        return this.list[this.idMap.get(id)];
    }

}