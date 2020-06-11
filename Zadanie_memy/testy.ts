import {Meme} from "./Meme.js";
import {MemeList} from "./MemeList.js";
import { strictEqual } from "assert";

describe("check MemeList", () => {
    it("should return 3 most expensive memes", () => {
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
})

describe("check changePrice", () => {
    it("should changed price", () => {
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

describe("check list with less than 3 memes", () => {
    it("should changed price", () => {
        const memeList: MemeList = new MemeList();
        const mem: Meme = new Meme(12, '', 99, '')
        memeList.push(mem);
        const mem2: Meme = new Meme(22, '', 29, '')
        memeList.push(mem);

        const mostExpList: Array<Meme> = memeList.getMostExpensiveMemes();
        strictEqual(mostExpList.length, 2);
    });
})