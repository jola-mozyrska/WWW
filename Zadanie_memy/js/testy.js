"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Meme_js_1 = require("./Meme.js");
const MemeList_js_1 = require("./MemeList.js");
const assert_1 = require("assert");
describe("methods test", () => {
    it("check MemeList", function () {
        const memeList = new MemeList_js_1.MemeList();
        memeList.push(new Meme_js_1.Meme(12, '', 99, ''));
        memeList.push(new Meme_js_1.Meme(10, '', 1, ''));
        memeList.push(new Meme_js_1.Meme(9, '', 2, ''));
        memeList.push(new Meme_js_1.Meme(8, '', 3, ''));
        memeList.push(new Meme_js_1.Meme(7, '', 4, ''));
        const mostExpList = memeList.getMostExpensiveMemes();
        assert_1.strictEqual(mostExpList[0].price, 99);
        assert_1.strictEqual(mostExpList[1].price, 4);
        assert_1.strictEqual(mostExpList[2].price, 3);
    });
    it("check changePrice", function () {
        const memeList = new MemeList_js_1.MemeList();
        const mem = new Meme_js_1.Meme(12, '', 99, '');
        memeList.push(mem);
        memeList.push(new Meme_js_1.Meme(8, '', 3, ''));
        memeList.push(new Meme_js_1.Meme(7, '', 4, ''));
        mem.changePrice(999);
        const mostExpList = memeList.getMostExpensiveMemes();
        assert_1.strictEqual(mostExpList[0].price, 999);
    });
});
//# sourceMappingURL=testy.js.map