const jwt = require("jsonwebtoken");
const UserCollection = require("../models/userModels");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const varifyUser = jwt.verify(token, "thesecretkeyofjwttokenmustcontainatleast32characters");
    console.log(verifyUser);
  } catch (error) {

  }.
}

module.exports = auth;