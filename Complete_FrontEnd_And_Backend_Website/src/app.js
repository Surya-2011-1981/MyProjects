// const express = require("express");
// const app = express();
// require("./db/connection")
// const path = require("path");
// const port = process.env.PORT || 8000;
// const hbs = require("hbs");


// const view_path = path.join(__dirname, "../templates/views")
// console.log(view_path);
// const partial_Path = path.join(__dirname, "../templates/partials");
// console.log(partial_Path);

// app.set("views", view_path)
// app.set("view engine", "hbs");
// hbs.registerPartials(partial_Path);

// app.get('/', (req, res) => {
//   res.render("index");
// })
// app.get('/login', (req, res) => {
//   res.render("login");
// })
// app.get('/register', (req, res) => {
//   res.render("register");
// })

// app.listen(port, () => {
//   console.log(`Server running at port ${port}`);
// })

const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

// const view_Path = path.join(__dirname, "../templates/views");
// const partial_Path = path.join(__dirname, "../templates/partials");

app.set('views', path.join(__dirname, "../templates/views"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "../templates/partials"));
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

