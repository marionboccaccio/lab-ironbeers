const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");
app.set("env development");
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));
hbs.registerPartials(__dirname + "/views/partials");

const beerRouter = require("./routes/beers");
app.use(beerRouter);

const randomRouter = require("./routes/random-beer");
app.use(randomRouter);

app.get("/", (req, res, next) => {
  res.render("index");
});


app.listen(3000, () => {
  console.log("Listening in http://localhost:3000");
});
