const mongooose = require("mongoose");

let DB_Schema = new mongooose.Schema({
  name: String,
  emp_id: Number
})

let DB_Model = new mongooose.model("DB_Model", DB_Schema);


module.exports = DB_Model;

