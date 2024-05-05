const mongoose = require("mongoose");

(async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/Second_API");
    console.log("Connection Success");
  } catch (error) {
    console.log("Connection Failed due to ", error);
  }
})();