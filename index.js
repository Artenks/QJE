const express = require("express");
const app = express();
const PORT = 5500;

const homeRoute = require("./routes/home.js");
const emojiRoute = require("./routes/emoji.js");

const path = require("path");
let publicPath = path.join(__dirname,'../pages');
let cssPath = path.join(__dirname,'../css');

app.use(express.static(__dirname));

app.use('/', homeRoute);
app.use('/emoji', emojiRoute);

app.listen(PORT, () => {
  console.log("Server rodando");
})