const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('./db/connection');
app.use(express.json());
const port = process.env.PORT || 3000;
const db = mongoose.connection;

app.patch('/classrooms/:room_no', async (req, res) => {
  const room_no = req.params.room_no;
  const collections_list = await db.listCollections();
  const collection_name = collections_list[1].name;
  const updated_document = await db.collection(collection_name).updateOne(
    { room_Number: room_no },
    {
      $set:
      {
        no_Of_Rows: 15
      },
    });
  console.log(updated_document);
  const doc = await db.collection(collection_name).find({ room_Number: room_no }).project({ _id: 1 }).toArray();
  console.log(doc);
  res.send(doc); 
});

app.listen(port, () => {
  console.log("Listening at port ", port);
})



// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// require('./db/connection');
// app.use(express.json());
// const port = process.env.PORT || 3000;
// const db = mongoose.connection;

// app.patch('/classrooms/:room_no', async (req, res) => {
//   const room_no = req.params.room_no;

//   // Get a list of collections
//   const collections_list = await db.listCollections().toArray();

//   // Check if collections_list has at least one collection
//   if (collections_list.length > 1) {
//     // Assuming you want the second collection, as per your code
//     const collection_name = collections_list[1].name;

//     // Update the document
//     const updated_document = await db.collection(collection_name).updateOne(
//       { room_Number: room_no },
//       {
//         $set:
//         {
//           no_Of_Rows: 15
//         },
//       },
//       { new: true } // Options should be passed as the third argument
//     );

//     console.log(updated_document); // Log the result of the update operation
//   } else {
//     console.log("No collections found.");
//   }
// });

// app.listen(port, () => {
//   console.log("Listening at port ", port);
// });
