// // Require Mongoose
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/my_database', { useNewUrlParser: true, useUnifiedTopology: true });

// const Schema = mongoose.Schema;
// const mySchema = new Schema({
//   name: String,
//   age: Number
// });

// const MyModel = mongoose.model('MyModel', mySchema);

// async function updateDocument(documentId, newData) {
//   try {
//     const updatedDocument = await MyModel.findByIdAndUpdate(documentId, newData, { new: true });

//     // Log the updated document
//     console.log('Updated Document:', updatedDocument);
//   } catch (error) {
//     console.error('Error updating document:', error);
//   }
// }

// // Usage
// const documentId = '609aebde57d2d2651c88e724'; // Replace with the ID of the document you want to update
// const newData = { name: 'Updated Name', age: 30 }; // Replace with the new data you want to set

// updateDocument(documentId, newData);



const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error('Failed to connect to MongoDB', err));

// Access document by ID
async function accessDocumentById(documentId) {
  try {
    const document = await mongoose.connection.db.collection('yourCollectionName').findOne({ _id: mongoose.Types.ObjectId(documentId) });
    if (!document) {
      console.log('Document not found');
      return;
    }
    console.log('Document:', document);
  } catch (error) {
    console.error('Error accessing document:', error);
  }
}
const documentId = 'yourDocumentId';
accessDocumentById(documentId);


