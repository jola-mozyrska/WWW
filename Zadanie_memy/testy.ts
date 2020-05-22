import {Meme} from "./Meme.js";
import {MemeList} from "./MemeList.js";
import { strictEqual } from "assert";

describe("methods test", () => {
    it("check MemeList", () => {
        const memeList: MemeList = new MemeList();
        memeList.push(new Meme(12, '', 99, ''));
        memeList.push(new Meme(10, '', 1, ''));
        memeList.push(new Meme(9, '', 2, ''));
        memeList.push(new Meme(8, '', 3, ''));
        memeList.push(new Meme(7, '', 4, ''));

        const mostExpList: Array<Meme> = memeList.getMostExpensiveMemes();
        strictEqual(mostExpList[0].price, 99);
        strictEqual(mostExpList[1].price, 4);
        strictEqual(mostExpList[2].price, 3);
    });

    it("check changePrice", () => {
        const memeList: MemeList = new MemeList();
        const mem: Meme = new Meme(12, '', 99, '')
        memeList.push(mem);
        memeList.push(new Meme(8, '', 3, ''));
        memeList.push(new Meme(7, '', 4, ''));

        mem.changePrice(999)

        const mostExpList: Array<Meme> = memeList.getMostExpensiveMemes();
        strictEqual(mostExpList[0].price, 999);
    });
})