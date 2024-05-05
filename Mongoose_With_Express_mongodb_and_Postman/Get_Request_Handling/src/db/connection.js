const mongoose = require("mongoose");
(async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/POST_Method_Handling");
    console.log("Connection Successful");
  } catch (error) {
    console.log("Connection Failed", error);
  }
})();