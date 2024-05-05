const mongoose = require("mongoose");
(async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/applying_hashing_in_password");
    console.log("Connection Successfull");
  } catch (error) {
    console.log("Connection Failed with ", error);
  }
})();
