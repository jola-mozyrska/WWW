import express from 'express';
import {Meme} from "./Meme.js";
import {MemeList} from "./MemeList.js";
import {asyncDbRun} from "./utils.js";

import cookieParser = require('cookie-parser');
import csurf = require('csurf');
import sqlite3 = require('sqlite3');

const app = express();
const db = new sqlite3.Database(':memory:');

const memeList: MemeList = new MemeList(db);
memeList.preparedb().catch((e) => console.log(e));

app.use(cookieParser());
const csrfProtection = csurf({ cookie: true });

function error(res: express.Response, code: number) {
    res.status(code);
    res.render("error", { code });
    return;
}

app.set('view engine', 'pug');

app.get('/', async (req, res) => {
    const mostExpensiveList = await memeList.getMostExpensiveMemes()
    res.render('index', { title: 'Meme market', message: 'Hello there!', memes: mostExpensiveList});
});

app.get('/meme/:memeId', async (req, res) =>{
    const memeId = req.params.memeId;
    const meme = await memeList.getMeme(memeId);
    res.render('meme', { title: 'Historia cen', meme})
})

app.use(express.urlencoded({
    extended: true
}));

app.post('/meme/:memeId', async (req, res) => {
    const price = Number(req.body.price);
    if (! isNaN(price)) {
        await memeList.changeMemePrice(req.params.memeId, price);
    }
    const meme = await memeList.getMeme(req.params.memeId);
    res.render('meme', { meme })
})

export default app;
