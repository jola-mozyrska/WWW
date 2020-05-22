"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meme = void 0;
class Meme {
    constructor(id, name, price, url) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.url = url;
        this.priceHistory = new Array();
        this.priceHistory.push(price);
    }
    getPriceHistory() {
        return this.priceHistory;
    }
    changePrice(p) {
        this.priceHistory.push(p);
        this.price = p;
    }
}
exports.Meme = Meme;
//# sourceMappingURL=Meme.js.map