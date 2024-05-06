require('dotenv').config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
(async function () {

  const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: Number,
      length: 10,
      required: true,
    },
    email: {
      lowercase: true,
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    tokens: [{
      token: {
        type: String,
        required: true
      }
    }]
  })

  // Generating AuthToken

  // userSchema.methods.generateAuthToken = async function () {

  //   try {
  //     // console.log("Type is ", typeof this._id);
  //     // console.log("Type 2 is ", typeof this._id.toString());
  //     const token = await jwt.sign({ _id: this._id.toString() }, "thesecretkeyofjwttokenmustcontainatleast32characters");
  //     this.tokens = this.tokens.concat({ token });
  //     // console.log(` The token is : ${token}`);
  //     return token;
  //   } catch (error) {
  //     res.send(error);
  //     console.log(error);
  //   }
  // }
  // //  Applying Hashing

  // userSchema.pre("save", async function (next) {
  //   // console.log(`Normal password is ${this.password}`);
  //   this.password = await bcrypt.hash(this.password, 3);
  //   // console.log(`hashed password is ${this.password}`);
  //   next();
  // })

  const UserCollection = new mongoose.model("UserCollection", userSchema);
  module.exports = UserCollection;
})();