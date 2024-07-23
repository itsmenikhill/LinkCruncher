const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ShortUrl = require("./models/ShortUrls");
const crunch = require("./Controllers/shortUrlController");
const countItems = require("./Controllers/schemaCounter");

mongoose.connect("mongodb://0.0.0.0:27017/urlShortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const shortUrls = await ShortUrl.find();
  res.render("index", { shortUrls: shortUrls });
});

app.post("/crunchLink", async (req, res) => {
  const count = await countItems();
  const crunchedUrl = crunch(count);
  const fullUrl = await ShortUrl.findOne({ full: req.body.fullUrl });
  if (fullUrl == null) {
    await ShortUrl.create({
      full: req.body.fullUrl,
      short: crunchedUrl,
    });
  }
    res.redirect("/");
});

app.get("/:crunchedLink", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.crunchedLink });
  if (shortUrl == null) {
    res.sendStatus(400);
  }
  res.redirect(shortUrl.full);
});

app.listen(process.env.PORT || 5000);
