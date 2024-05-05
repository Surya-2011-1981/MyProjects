const mongoose = require("mongoose");

(async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/My_dataBase");
    console.log("Success");

  } catch (error) {
    console.log("Connection Failed");
  }
})();

(async function () {
  try {
    let DB_Schema = new mongoose.Schema({
      name: {
        type: String,
        required: true
      },
      roll: {
        type: Number,
        required: true
      }
    });

    let Db_Model = await new mongoose.model("Student_Details", DB_Schema);
    let ch = "A";
    for (let i = 0; i < 50; i++) {
      // let doc = "doc_"+i;
      let doc = new Db_Model({
        name: `${ch}${i}`,
        roll: (i + 1)
      })
      await doc.save();

    }

  } catch (error) {
    console.log("Not  inserted");
  }
})();

