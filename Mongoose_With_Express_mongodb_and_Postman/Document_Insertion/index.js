const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhose:27017/NewDB").then(() => console.log("Connection Succesful")).catch((err) => console.log("Connection Failed"));


(async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/NewDB");
    console.log("Connection SuccessFull");
  } catch (error) {
    console.log(error);
  }
})();

// Creating Schema 

const MyDetails_Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    min: 18,
    default: 18,
    type: Number
  }
});

// Creating Model 

const MyDetail = new mongoose.model("MyDetail", MyDetails_Schema);

(async function () {
  try {
    const Suraj_Detail = new MyDetail({
      name: "Surya",
      age: 20
    })
    await Suraj_Detail.save();
  } catch (error) {
    console.log(error);
  }
})();