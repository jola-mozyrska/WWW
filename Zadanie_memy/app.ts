import express from 'express';
import {Meme} from "./Meme.js";
import {MemeList} from "./MemeList.js";

const memeList: MemeList = new MemeList();
memeList.push(new Meme(10, 'Gold', 800, 'https://i.redd.it/h7rplf9jt8y21.png'));
memeList.push(new Meme(9, 'Platinum', 1100, 'https://i.pinimg.com/736x/93/31/11/933111c388887067c9b5c945d4960343.jpg'));
memeList.push(new Meme(8, 'Priceless', 1000, 'https://i.imgflip.com/3sts2c.jpg'));
memeList.push(new Meme(7, 'Remarkable', 1300, 'https://66.media.tumblr.com/a3f6a62e625ae491163aefeb383c9b32/386cf25fed95fe23-bf/s640x960/394781f5179022cdf902f28b871930a19fb66e59.jpg'));
memeList.push(new Meme(6, 'Epic', 900, 'https://i.imgflip.com/30zz5g.jpg'));

const app = express();
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', { title: 'Meme market', message: 'Hello there!', memes: memeList.getMostExpensiveMemes()});
});

app.get('/meme/:memeId', (req, res) =>{
    const meme = memeList.getMeme(req.params.memeId);
    res.render('meme', { title: 'Historia cen', meme})
})

app.use(express.urlencoded({
    extended: true
}));

app.post('/meme/:memeId', (req, res) => {
    const meme = memeList.getMeme(req.params.memeId);
    const price = req.body.price;
    meme.changePrice(price);
    console.log(req.body.price);
    res.render('meme', { meme })
})

export default app;
