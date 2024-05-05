const mongoose = require("mongoose");
(async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/Multiple_Data_Insertion_Using_Loop")
    console.log("Connection Success");
  } catch (error) {
    console.log("Connection failed");
  }

  let class_Schema = new mongoose.Schema({
    room_Number: {
      type: String,
      required: true
    },
    no_Of_Rows: {
      type: Number,
      required: true
    },
    No_Of_Columns: {
      type: Number,
      required: true
    }
  })

  let list_Of_ClassRooms = new mongoose.model("list_Of_ClassRooms", class_Schema);


  for (i = 0; i < 10; i++) {
    try {
      let doc = new list_Of_ClassRooms({
        room_Number: "R00" + (i + 1),
        no_Of_Rows: 10,
        No_Of_Columns: 2
      })
      await doc.save();
    } catch (error) {
      console.log("Insertion failed for ", i, "th data");
    }
  }

})();