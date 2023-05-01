const express = require("express");
const app = express();
const PORT = 5500;

const homeRoute = require("./routes/home.js");
const emojiRoute = require("./routes/emoji.js");

app.use(express.static(__dirname));

app.use('/', homeRoute);
app.use('/', emojiRoute);

app.listen(PORT, () => {
  console.log("Server rodando");
})