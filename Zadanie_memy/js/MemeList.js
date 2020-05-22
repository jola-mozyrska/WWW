"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemeList = void 0;
class MemeList {
    constructor() {
        this.list = new Array();
        this.idMap = new Map();
    }
    push(meme) {
        this.list.push(meme);
        this.idMap.set(meme.id, this.list.length - 1);
    }
    getMostExpensiveMemes() {
        this.list.sort((m1, m2) => m2.price - m1.price);
        let newL = new Array();
        for (let i = 0; i < Math.min(3, this.list.length); ++i) {
            newL.push(this.list[i]);
        }
        return newL;
    }
    getMeme(idStr) {
        const id = Number(idStr);
        return this.list[this.idMap.get(id)];
    }
}
exports.MemeList = MemeList;
//# sourceMappingURL=MemeList.js.map