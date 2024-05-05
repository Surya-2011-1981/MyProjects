const mongoose = require("mongoose");
(async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/Complete_Website")
    console.log("Connection Successful");
  } catch (error) {
    console.log("Connection Failed due to ", error);
  }
})();