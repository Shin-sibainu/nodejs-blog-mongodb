const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("これは記事です。");
// });

router.get("/new", (req, res) => {
  res.send("articles/new");
});

module.exports = router;
