const mongoose = require("mongoose")

const web_schema = new mongoose.Schema({
  name: {
    type: "String",
    required: true
  },

  roll: {
    type: Number,
    required: [true, "roll no must be filled"]
  }
})

const web_model = new mongoose.model("web_model", web_schema)

module.exports = web_model;


