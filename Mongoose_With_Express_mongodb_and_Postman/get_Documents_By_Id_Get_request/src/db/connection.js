const mongoose = require("mongoose");
(async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/Multiple_Data_Insertion_Using_Loop");
    console.log("Connection Success");
  } catch (error) {
    console.log("Connection Failed", error);
  }
})();
