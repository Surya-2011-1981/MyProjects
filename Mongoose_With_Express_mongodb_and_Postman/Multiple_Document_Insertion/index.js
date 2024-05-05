// **************  Type 1 *************************

const mongoose = require("mongoose");

(async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/Insetion_Multiple_Document");
    console.log("Successful");
  } catch (error) {
    console.log("Failed");
  }
})();
let creation_Schema = new mongoose.Schema({
  name: String,
  roll: Number,
  age: {
    type: Number,
    min: 18,
    default: 18
  },
  Semester: Number,
  active: Boolean
});

let creation_Model = new mongoose.model("Multiple_Data", creation_Schema);


(async function () {
  try {
    let Doc_1 = new creation_Model({
      name: "Tony Satark",
      roll: 1,
      age: 40,
      Semester: 6,
      active: true
    })
    let Doc_2 = new creation_Model({
      name: "Thor OdinGun",
      roll: 2,
      age: 400,
      Semester: 6,
      active: true
    })
    let Doc_3 = new creation_Model({
      name: "Natasha Ramandeep",
      roll: 3,
      age: 35,
      Semester: 6,
      active: true
    })
    let Doc_4 = new creation_Model({
      name: "Bruce Runner",
      roll: 4,
      age: 100,
      Semester: 6,
      active: true
    })
    let Doc_5 = new creation_Model({
      name: "Klint Bartan",
      roll: 1,
      age: 40,
      Semester: 6,
      active: true
    })

    let Documents = [Doc_1, Doc_2, Doc_3, Doc_4, Doc_4, Doc_5];
    for (let i = 0; i < Documents.length; i++) {
      await Documents[i].save();
    }
    // await creation_Model.insertMany([Doc_1, Doc_2, Doc_3, Doc_4, Doc_4, Doc_5]);
    console.log("Inserted");
  } catch (error) {
    console.log("Some Error Occured", error);
  }
})();


// *******************************  Type 1 **********************************


// const mongoose = require("mongoose");
// (async function () {
//   try {
//     await mongoose.connect("mongodb://localhost:27017/Insetion_Multiple_Document");
//     console.log("Successful");
//   }
//   catch (err) {
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

// let creation_Model = mongoose.model("Multiple_Data", creation_Schema);

// (async function () {
//   try {
//     let Doc_1 = new creation_Model({
//       name: "Tony Stark",
//       roll: 1,
//       age: 40,
//       Semester: 6,
//       active: true
//     });
//     let Doc_2 = new creation_Model({
//       name: "Thor Odinsson",
//       roll: 2,
//       age: 400,
//       Semester: 6,
//       active: true
//     });
//     let Doc_3 = new creation_Model({
//       name: "Natasha Romanoff",
//       roll: 3,
//       age: 35,
//       Semester: 6,
//       active: true
//     });
//     let Doc_4 = new creation_Model({
//       name: "Bruce Banner",
//       roll: 4,
//       age: 100,
//       Semester: 6,
//       active: true
//     });
//     let Doc_5 = new creation_Model({
//       name: "Clint Barton",
//       roll: 5,
//       age: 40,
//       Semester: 6,
//       active: true
//     });

//     await creation_Model.insertMany([Doc_1, Doc_2, Doc_3, Doc_4, Doc_5]);
//     console.log("Inserted");
//   } catch (error) {
//     console.log("Not Inserted");
//   }
// })();
