const mongoose = require("mongoose");

(async function () {

  try {
    await mongoose.connect("mongodb://localhost:27017/Handling_Post_Request");
    console.log("Connection Success");
  } catch (error) {
    console.log("Connection Failed", error);
  }
})();
