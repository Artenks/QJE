const express = require("express");
const router = express.Router();

const path = require("path");
let publicPath = path.join(__dirname,'../pages');

console.log(__filename);

router.get("/emoji", function(req, res){
  console.log("aba emoji game");
  res.sendFile(`${publicPath}/gameEmoji.html`)
});

module.exports = router;