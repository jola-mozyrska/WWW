"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Meme_js_1 = require("./Meme.js");
const MemeList_js_1 = require("./MemeList.js");
let memeList = new MemeList_js_1.MemeList();
memeList.push(new Meme_js_1.Meme(10, 'Gold', 800, 'https://i.redd.it/h7rplf9jt8y21.png'));
memeList.push(new Meme_js_1.Meme(9, 'Platinum', 1100, 'https://i.pinimg.com/736x/93/31/11/933111c388887067c9b5c945d4960343.jpg'));
memeList.push(new Meme_js_1.Meme(8, 'Priceless', 1000, 'https://i.imgflip.com/3sts2c.jpg'));
memeList.push(new Meme_js_1.Meme(7, 'Remarkable', 1300, 'https://66.media.tumblr.com/a3f6a62e625ae491163aefeb383c9b32/386cf25fed95fe23-bf/s640x960/394781f5179022cdf902f28b871930a19fb66e59.jpg'));
memeList.push(new Meme_js_1.Meme(6, 'Epic', 900, 'https://i.imgflip.com/30zz5g.jpg'));
const app = express_1.default();
app.set('view engine', 'pug');
app.get('/', function (req, res) {
    res.render('index', { title: 'Meme market', message: 'Hello there!', memes: memeList.getMostExpensiveMemes() });
});
app.get('/meme/:memeId', function (req, res) {
    const meme = memeList.getMeme(req.params.memeId);
    res.render('meme', { title: 'Historia cen', meme: meme });
});
app.use(express_1.default.urlencoded({
    extended: true
}));
app.post('/meme/:memeId', function (req, res) {
    let meme = memeList.getMeme(req.params.memeId);
    let price = req.body.price;
    meme.changePrice(price);
    console.log(req.body.price);
    res.render('meme', { meme: meme });
});
exports.default = app;
//# sourceMappingURL=app.js.map