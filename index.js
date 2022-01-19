const express = require("express");
const app = express();
const articleRouter = require("./routes/articles");

const mongoose = require("mongoose");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/articles", articleRouter);

app.get("/", (req, res) => {
  const articles = [
    {
      title: "テスト記事",
      createdAt: new Date(),
      description: "これはテスト記事です。",
    },
    {
      title: "テスト記事2",
      createdAt: new Date(),
      description: "これはテスト記事2です。",
    },
  ];
  // res.render("index", { articles: articles });
  res.render("articles/index", { articles: articles });
});

app.listen(3000, () => {
  console.log("サーバーが起動しました");
});
