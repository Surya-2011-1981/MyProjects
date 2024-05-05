const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const db_Collection = require("./models/collection");
require("./db/connection");
const path = require('path');
const { error } = require("console");
const port = process.env.PORT || 8000;
const view_Path = path.join(__dirname, "../templates/views");
const static_Path = path.join(__dirname, "../public");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_Path));
app.set("views", view_Path)
app.set("view engine", "hbs");

app.get("/register", (req, res) => {
  res.render("register");
})

app.get("/login", (req, res) => {
  res.render("login");
})


app.post("/register", async (req, res) => {

  const u_name = req.body.name;
  const u_roll = req.body.roll;
  const u_password = req.body.Confirm_Password;

  const user = new db_Collection({
    name: u_name,
    roll: u_roll,
    password: u_password
  });
  await user.save().then(() => {
    res.send(user);
  }).catch((err) => {
    console.log(error);
  });
})
app.post("/login", (req, res) => {

})


app.listen(port, () => {
  console.log("Listening at port ", port);
})