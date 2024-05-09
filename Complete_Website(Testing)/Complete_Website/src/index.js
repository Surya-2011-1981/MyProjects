require('dotenv').config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser")
const path = require("path");
const hbs = require("hbs");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const auth = require('./middleware/auth')
require("./db/connection");
const UserCollection = require("./models/userModels")
const view_Path = path.join(__dirname, "../templates/views");
const partial_Path = path.join(__dirname, "../templates/partials");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.set('views', view_Path);
app.set("view engine", "hbs");
hbs.registerPartials(partial_Path);




app.get('/index', (req, res) => {
  res.render('index');
})
app.get('/login', (req, res) => {
  res.render('login');
})

app.get("/gallery", (req, res) => {
  res.render("gallery");
})

app.post('/login', async (req, res) => {
  try {
    const Email = req.body.user_mail;
    const password = req.body.user_password;
    const isUser = await UserCollection.findOne({ email: Email });
    console.log(isUser);
    const isMatch = await bcrypt.compare(password, isUser.password);
    console.log(isMatch);
    if (isMatch) {
      res.status(200).render("logged_In_Successfully");
    }
    else {
      res.status(401).render("incorrect_Password");
    }
  } catch (error) {
    console.log(error);
    res.send("user not found");
  }
})
app.get('/signup', (req, res) => {
  res.render('signup');
})

app.post('/signup', async (req, res) => {
  try {
    if (req.body.password === req.body.cf_password) {
      const userDocument = new UserCollection({
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email,
        password: req.body.password
      })
      await userDocument.save().then(() => {
        res.status(201).render("registered_Successfullly")
      }).catch((err) => {
        res.status(400);
        console.log(err);
      });
    }
    else {
      res.send("Password mis match");
    }
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
})
app.listen(8000, () => {
  console.log("Listening at port ", 8000);
})