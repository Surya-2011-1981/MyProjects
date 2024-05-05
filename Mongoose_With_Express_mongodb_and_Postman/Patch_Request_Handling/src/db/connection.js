const mongoose = require("mongoose");
(async () => {

  try {
    await mongoose.connect("mongodb://localhost:27017/Multiple_Data_Insertion_Using_Loop");
    console.log("Connection SuccessFull");
  } catch (error) {
    console.log("Connection Failed");
  }

})();