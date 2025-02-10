import express from "express";
import ejs, { name } from "ejs";

const app = express();
const port = 3000;
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    const today = new Date;
    res.render('index', {day: today.getDate()});
});

app.listen(port, function () {
    console.log('listening to port ' + port);
});