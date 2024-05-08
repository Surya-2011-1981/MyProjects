const jwt = require("jsonwebtoken");
const UserCollection = require("../models/userModels");
const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const varifyUser = jwt.verify(token, "thesecretkeyofjwttokenmustcontainatleast32characters");
    // console.log(token);
    // console.log(varifyUser);
    const user = await UserCollection.findOne({ _id: varifyUser._id });
    console.log("This is user Data", user);
    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).render("login");
  }
}

module.exports = auth;