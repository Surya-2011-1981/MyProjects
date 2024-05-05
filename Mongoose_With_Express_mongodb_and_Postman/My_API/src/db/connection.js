const mongoose = require("mongoose");
(async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/My_API");
    console.log("Connection SuccessFul");
  } catch (error) {
    console.log("Connecion Failed with error", error);
  }
})();
