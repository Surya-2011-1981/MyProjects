const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/BCA_Semesters');

const db = mongoose.connection;

// Once the connection is open, list collections
// db.once('open', async () => {
//   const collections = await db.listCollections();
// console.log(db);
// console.log("****************************************************************");
// console.log(collections);
// console.log("****************************************************************");
// console.log(db.collection());
// console.log("****************************************************************");
// console.log(db.collection(collections[0]));
// console.log("****************************************************************");
// console.log(db.collection(collections[0].name));
// console.log("****************************************************************");
// console.log(db.collection(collections[0].name).find({}));
// console.log("****************************************************************");
// console.log(await db.collection(collections[0].name).find({}).toArray());
//   let list_Arr = await db.collection(collections[0].name).find({}).toArray();
//   console.log("****************************************************************");
//   console.log(list_Arr.length);
//   console.log(list_Arr[0]);
//   console.log(list_Arr[1]);
//   console.log(list_Arr[2]);
//   console.log(list_Arr[3]);
//   console.log(list_Arr[4]);
//   console.log(list_Arr[5]);
//   console.log(list_Arr[6]);

// });


// console.log("*********************Type 2 ******************");



(async function () {
  const collections = await db.listCollections();
  console.log(collections);
  // let list_Arr = await db.collection(collections[0].name).find({ Semester: 1 }).toArray();
  // console.log(typeof db.collection(collections[0].name));
  // let list_Arr = db.collection(collections[0].name).find({ Semester: 1 }).name;
  // console.log(list_Arr);
  console.log("****************************************************************");
  // console.log(list_Arr.length);
  // console.log(list_Arr[0]);
  // console.log(list_Arr[1]);
  // console.log(list_Arr[2]);
  // console.log(list_Arr[3]);
  // console.log(list_Arr[4]);
  // console.log(list_Arr[5]);
  // console.log(list_Arr[6]);
})();

