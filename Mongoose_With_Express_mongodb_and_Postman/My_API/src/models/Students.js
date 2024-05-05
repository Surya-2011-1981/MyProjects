const mongoose = require("mongoose");
const validator = require("validator");

const student_Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 8,
    trim: true,
    lowercase: true
  },
  email: {
    required: true,
    type: String,
    unique: [true, "Email already Exists"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    }
  },
  phone: {
    type: Number,
    length: 10,
    required: true
  }
});

const Student = new mongoose.model("Student", student_Schema);


module.exports = Student;