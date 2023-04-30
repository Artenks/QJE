const express = require("express");
const router = express.Router();

const path = require("path");
let publicPath = path.join(__dirname,'../pages');

router.get("/", function(req, res){
  console.log("aba home");
  res.sendFile(`${publicPath}/index.html`)
});

module.exports = router;