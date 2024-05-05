const mongoose = require("mongoose");

(async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/Practise_Set_1");
    console.log("Connection SuccessFull");
  } catch (error) {
    console.log("Connection Failed");
  }
})();

let Schema_1 = new mongoose.Schema({
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

let Model_1 = new mongoose.model("Model_1", Schema_1);
(async function () {
  try {
    let Document_1 = new Model_1({
      name: "Surya",
      age: 20
    })
    await Document_1.save();
    console.log("Document Saved");
  } catch (error) {
    console.log("Document not Saved");
  }
})();