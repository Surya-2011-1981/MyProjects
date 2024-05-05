// // **************  Type 1 *************************

// const mongoose = require("mongoose");

// (async function () {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/Insetion_Multiple_Document");
//     console.log("Successful");
//   } catch (error) {
//     console.log("Failed");
//   }
// })();
// let creation_Schema = new mongoose.Schema({
//   name: String,
//   roll: Number,
//   age: {
//     type: Number,
//     min: 18,
//     default: 18
//   },
//   Semester: Number,
//   active: Boolean
// });

// let creation_Model = new mongoose.model("Multiple_Data", creation_Schema);


// (async function () {
//   try {
//     let Doc_1 = new creation_Model({
//       name: "Tony Satark",
//       roll: 1,
//       age: 40,
//       Semester: 6,
//       active: true
//     })
//     let Doc_2 = new creation_Model({
//       name: "Thor OdinGun",
//       roll: 2,
//       age: 400,
//       Semester: 6,
//       active: true
//     })
//     let Doc_3 = new creation_Model({
//       name: "Natasha Ramandeep",
//       roll: 3,
//       age: 35,
//       Semester: 6,
//       active: true
//     })
//     let Doc_4 = new creation_Model({
//       name: "Bruce Runner",
//       roll: 4,
//       age: 100,
//       Semester: 6,
//       active: true
//     })
//     let Doc_5 = new creation_Model({
//       name: "Klint Bartan",
//       roll: 1,
//       age: 40,
//       Semester: 6,
//       active: true
//     })

//     let Documents = [Doc_1, Doc_2, Doc_3, Doc_4, Doc_4, Doc_5];
//     for (let i = 0; i < Documents.length; i++) {
//       await Documents[i].save();
//     }
//     // await creation_Model.insertMany([Doc_1, Doc_2, Doc_3, Doc_4, Doc_4, Doc_5]);
//     console.log("Inserted");
//   } catch (error) {
//     console.log("Some Error Occured", error);
//   }
// })();


let mongoose = require("mongoose");
(async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/Multiple_Data_Insertion_Using_Loop");
    console.log("Conncetion Created");


    let M_Schema = new mongoose.Schema({
      roll: {
        type: String,
        required: true
      },
      subject: {
        type: String,
        required: true
      },
      id: {
        type: String,
        required: true
      }
    })
    let M_Model =  new mongoose.model("Students_Collection", M_Schema);

    let subject_Collection = ["C", "C++", "Java", "Python", "Ruby"];
    let j = 0;
    for (i = 0; i < 500; i++) {
      if (j == 5) {
        j = 0;
      }
      try {
        let stu_document = new M_Model({
          roll: "S000" + (i + 1),
          subject: subject_Collection[j],
          id: "student_" + i
        })
        await stu_document.save();
      } catch (error) {
        console.log("Not Inserted Document Number " + i);
      }
      j++;
    }
  } catch (error) {
    console.log("Connection Not Created", error);
  }
})();

