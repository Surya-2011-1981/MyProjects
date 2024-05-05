const mongoose = require("mongoose");


const Emp_Schema = new mongoose.Schema({
  Emp_id: {
    type: String,
    required: true,
    lowercase: true
  },
  Salary: {
    type: Number,
    required: true
  }
});

const Emp_Model = new mongoose.model("Emp_Model", Emp_Schema);

module.exports = Emp_Model;
