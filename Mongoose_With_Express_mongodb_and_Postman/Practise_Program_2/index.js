const mongoose = require("mongoose");

(async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/Practise_Set_2");
    console.log("Connection SuccessFul");
  } catch (error) {
    console.log("Connection Failed");
  }
})();

let First_Schema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    default: 18,
    min: 18
  }
});

let Model_1 = new mongoose.model("First_Model", First_Schema);
(async function () {
  try {
    let First_Document = new Model_1({
      name: "Surya",
      age: 20
    })
    await First_Document.save();
    console.log("Document Saved");
  } catch (error) {
    console.log("Document not Saved");
  }
})();