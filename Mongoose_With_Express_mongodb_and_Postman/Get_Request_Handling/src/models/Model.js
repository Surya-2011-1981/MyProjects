const mongoose = require('mongoose');

const DB_Schema = new mongoose.Schema({
  name: String,
  roll: Number
});



const DB_Model = new mongoose.model("DB_Model", DB_Schema);

module.exports = DB_Model;