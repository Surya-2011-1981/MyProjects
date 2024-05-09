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

  // Applying Hashing
  userSchema.pre("save", async function () {
    if (this.isModified("password")) {
      this.password = await bcrypt.hash(this.password, 10);
    }


    next();
  })


  const UserCollection = new mongoose.model("UserCollection", userSchema);
  module.exports = UserCollection;
})();