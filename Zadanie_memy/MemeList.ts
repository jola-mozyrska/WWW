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
        console.log(this.list.length - 1, "id: ", meme.id);
        console.log("lista: ", this.list);

    }

    getMostExpensiveMemes(): Array<Meme> {
        const sorted : Array<Meme> = Object.assign([], this.list);
        sorted.sort((m1, m2) => m2.price - m1.price);
        return sorted.slice(0, Math.min(3, this.list.length));
    }

    getMeme(idStr: string): Meme {
        const id: number = Number(idStr);
        console.log("id: ", id, " idx: ", this.idMap.get(id));
        console.log("lista: ", this.list);
        const m : Meme = this.list[this.idMap.get(id)];
        console.log("mem: ", m);
        return m;
    }

}