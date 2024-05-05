const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const db_schema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  roll: {
    required: true,
    type: Number
  },
  password: {
    type: String,
    required: true
  }
});
// Hashing applying

db_schema.pre("save", async function (next) {
  console.log(`Normal password is ${this.password}`);
  this.password = await bcrypt.hash(this.password, 9);
  console.log(`hashed password is ${this.password}`);
  next();
})


const db_Collection = mongoose.model("db_Collection", db_schema);

module.exports = db_Collection;