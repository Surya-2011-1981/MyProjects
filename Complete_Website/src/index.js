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

app.get("/gallery", auth, (req, res) => {
  // console.log(req.cookies.jwt, " From Cookies Browser");
  res.render("gallery");
})

app.post('/login', async (req, res) => {
  try {
    const Email = req.body.user_mail;
    const password = req.body.user_password;
    const isUser = await UserCollection.findOne({ email: Email });
    console.log(isUser);
    // console.log(`Acutal Password hashed  value : ${isUser.password}`);

    // console.log(isUser.password);
    const isMatch = await bcrypt.compare(password, isUser.password);
    console.log(isMatch);

    const token = await isUser.generateAuthToken();
    // console.log("token is : ", token);
    // console.log(token, " at login time");
    // Cookies
    // console.log("token from browser cookie ", req.cookies.jwt);
    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 14000), // Expires in 14 second
      httpOnly: true, // Cookie cannot be accessed by client-side JavaScript
      // secure: true, // Cookie will only be sent over HTTPS
      // sameSite: 'strict'
    })
    // console.log("assigned");
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
  // res.render('signup');
  // console.log(req.body.name);
  try {
    if (req.body.password === req.body.cf_password) {
      const userDocument = new UserCollection({
        name: req.body.name,
        contact: req.body.contact,
        email: req.body.email,
        password: req.body.password
      })


      const token = await userDocument.generateAuthToken();
      // console.log("token is : ", token);

      // Cookies

      // res.cookie("jwt", token, {
      //   expires: new Date(Date.now() + 60 * 60), // Expires in 1 hour
      //   httpOnly: true, // Cookie cannot be accessed by client-side JavaScript
      //   secure: true, // Cookie will only be sent over HTTPS
      //   sameSite: 'strict' // Cookie will only be sent for same-site requests
      // });
      // console.log(cookie, "  Sent Successfully");
      // console.log(token, " at Sign Up Time");

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

app.get("/logout", auth, async (req, res) => {
  res.clearCookie("jwt");
  await req.user.save();
  console.log("Logged out");
  res.render("login");
})


app.listen(8000, () => {
  console.log("Listening at port ", 8000);
})