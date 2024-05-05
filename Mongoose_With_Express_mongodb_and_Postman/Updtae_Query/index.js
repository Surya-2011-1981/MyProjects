const mongoose = require("mongoose");

(async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/Updating_Database");
    console.log("Connection Success established...");
  } catch (error) {
    console.log("Connection establishment failed");
  }

  let M_Schema = mongoose.Schema({
    name: String,
    roll: Number
  })

  let M_model = mongoose.model("M_model", M_Schema);

  let doc_1 = new M_model({
    name: "ABC",
    roll: 1
  })
  let doc_2 = new M_model({
    name: "ABCD",
    roll: 2
  })
  let doc_3 = new M_model({
    name: "ABCDE",
    roll: 3
  })

  // let save_result = await M_model.insertMany([doc_1, doc_2, doc_3]);
  // console.log(save_result);


  let updated_Result = await M_model.updateOne({ roll: 1 }, {
    $set: {
      name: "abc"
    }
  })

  console.log(updated_Result);
})();