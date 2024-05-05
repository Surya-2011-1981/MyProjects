const mongoose = require("mongoose");

let submit_btn = document.querySelector(".submit_btn");
submit_btn.onclick = () => {
  let Student_input = document.querySelector(".Students");
  let Subject_input = document.querySelector(".Subject");
  (async function () {
    try {
      // await mongoose.connect("mongodb://localhost:27017/Sitting_Arrangement");

      // let Sitting_Arrangement_Schema = new mongoose.Schema({
      //   roll: {
      //     type: String,
      //     required: true,
      //   },
      //   Subject: {
      //     type: String,
      //     require: true
      //   }
      // })
      // // Schema Created SuccessFully

      // let Sitting_Arrangement_model = new mongoose.model("Students_List", Sitting_Arrangement_Schema);

      // Model Created SuccessFully

      let No_Of_Students = Student_input.value;
      let No_Of_Subjects = Subject_input.value;
      console.log(No_Of_Students);
      console.log(No_Of_Subjects);

    } catch (error) {
      console.log(error);
    }
  })();
}



