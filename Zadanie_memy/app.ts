import express from 'express';
import {Meme} from "./Meme.js";
import {MemeList} from "./MemeList.js";
import {asyncDbRun} from "./utils.js";
import session from "express-session";
import cookieParser = require('cookie-parser');
import csurf = require('csurf');
import * as sqlite from "sqlite3";

const SQLiteStore = require("connect-sqlite3")(session);

const app = express();
app.use(cookieParser());
const csrfProtection = csurf({ cookie: true });
app.set('view engine', 'pug');
app.use(express.urlencoded({
    extended: true
}));

sqlite.verbose();
const db = new sqlite.Database("memes.db");
app.use(session({
    cookie: {
        maxAge: 900 * 1000,
    },
    resave: false,
    saveUninitialized: false,
    secret: "secret",
    store: new SQLiteStore({ db: "memes.db" }),
}));

app.use((req, res, next) => {
    res.locals.db = new sqlite.Database("memes.db");
    res.locals.memeList = new MemeList(res.locals.db);
    next();
});

// ======================================================================
const initialMemeList = new MemeList(db);
initialMemeList.preparedb().catch((e) => console.log(e));
initialMemeList.prepareUsers().catch((e) => console.log(e));

function error(res: express.Response) {
    res.render("error");
    return;
}

app.get('/', async (req, res) => {
    const mostExpensiveList = await res.locals.memeList.getMostExpensiveMemes()
    res.render('index', { title: 'Meme market', message: 'Hello there!', memes: mostExpensiveList});
});

app.get('/meme/:memeId', csrfProtection, async (req, res) =>{
    const memeId = req.params.memeId;
    const meme = await res.locals.memeList.getMeme(memeId);
    res.render('meme', { title: 'Historia cen', meme, csrfToken: req.csrfToken()})
})

app.post('/meme/:memeId', csrfProtection, async (req, res) => {
    const price = Number(req.body.price);

    if (isNaN(price)) {
        return error(res);
    }

    if (!req.session?.user) {
        return error(res);
    }

    await res.locals.memeList.changeMemePrice(req.params.memeId, price);
    const meme = await res.locals.memeList.getMeme(req.params.memeId);
    res.render('meme', { meme })
})

app.get("/login", csrfProtection, (req, res, next) => {
    return res.render("login", { csrfToken: req.csrfToken() });
});

function checkUser(user : string, passwd : string, memeList : MemeList) : Promise<any> {
    return new Promise((resolve, reject) => {
        memeList.db.run(`SELECT * FROM users WHERE username = '${user}' AND password = '${passwd}'`, (err) => {
            if(err) {
                reject(`DB Error ${err}`);
                return;
            }
            resolve();
        });
    });
}

app.post("/login", csrfProtection, async (req, res) => {
    checkUser(req.body.login, req.body.password, res.locals.memeList).then(async () => {
        if (!req.session) {
            throw new Error("No session present");
        }
        req.session.user = req.body.login;
        return res.render("login", { csrfToken: req.csrfToken(), message: "Login successfull" });
    }).catch(async (e : any) => {
        return res.render("login", { csrfToken: req.csrfToken(), message: e});
    });
});

app.get("/logout", csrfProtection, (req, res) => {
    if (req.session) {
        req.session.user = undefined;
    }
    return res.redirect("/");
})

export default app;
