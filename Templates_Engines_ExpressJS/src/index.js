const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const view_Path = path.join(__dirname, "../templates/views");
const partial_Path = path.join(__dirname, "../templates/partials");
console.log(view_Path);
console.log(partial_Path);

app.set('views', view_Path);
app.set("view engine", "hbs");
hbs.registerPartials(partial_Path);
app.get('/index', (req, res) => {
  res.render('index');
})
app.get('/login', (req, res) => {
  res.render('login');
})
app.get('/signup', (req, res) => {
  res.render('signup');
})

app.listen(8000, () => {
  console.log("Listening at port ", 8000);
})