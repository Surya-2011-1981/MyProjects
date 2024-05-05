const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const port = process.env.port || 8000;

const public_path = path.join(__dirname, "../public");
const view_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partial_path);
app.use(express.static(public_path));
app.set("views", view_path);
app.set("view engine", "hbs");
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  next();
});
app.get('/', (req, res) => {
  res.render("homepage");
})
// app.get('/nav', (req, res) => {
//   res.render("navbar");
// })
app.listen(port, () => {
  console.log("Listening at port ", port);
});