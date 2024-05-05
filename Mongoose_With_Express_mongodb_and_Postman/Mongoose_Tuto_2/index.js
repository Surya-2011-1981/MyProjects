const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/NewDB').then(() => console.log("Connection Succcess")).catch((arr) => console.log("Connection Failed "));

// Creating Schema
let details_Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    min: 18,
    default: 18,
  }
});


// Creating Model

new mongoose.model("Collection_One", details_Schema);  