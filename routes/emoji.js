const express = require("express");
const router = express.Router();

const path = require("path");
let publicPath = path.join(__dirname,'../pages');
let cssPath = path.join(__dirname,'../css');

router.get("/", function(req, res){
  console.log("aba emoji game");
  res.sendFile(`${publicPath}/gameEmoji.html`)
});

module.exports = router;