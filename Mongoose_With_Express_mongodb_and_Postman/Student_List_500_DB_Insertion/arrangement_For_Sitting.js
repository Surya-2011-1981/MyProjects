const mongoose = require("mongoose");

(async function () {
  try {
    await mongoose.connect("mongodb://localhost:27017/Multiple_Data_Insertion_Using_Loop")
    console.log("Connection Success");
  } catch (error) {
    console.log("Connection failed");
  }

  let db = mongoose.connection;
  try {
    let collection_Of_List = await db.listCollections();
    let collection_length = collection_Of_List.length;
    // console.log(collection_Of_List[0].name);
    // console.log(collection_Of_List[1].name);
    // console.log(collection_length);
    let Classrooms = collection_Of_List[1].name;
    let Students = collection_Of_List[0].name;
    // console.log(typeof Students, typeof Classrooms);
    let total_Students = await db.collection(Students).find({}).toArray();
    let total_Class_Rooms = await db.collection(Classrooms).find({}).toArray();
    // console.log(total_Class_Rooms.length);
    // console.log(total_Students.length);
    // console.log(total_Class_Rooms[0]);
    let total_Number_Of_Students = total_Students.length;
    let no_Of_Students_In_One_Row = 3;
    let total_Number_Of_Rows_In_One_Classroom = total_Class_Rooms[0].no_Of_Rows;
    let total_Number_Of_Columns_In_One_Classroom = total_Class_Rooms[0].No_Of_Columns;
    // let C_language_Students = await db.collection(Students).find({ subject: "C" }).toArray();
    // let CPP_language_Students = await db.collection(Students).find({ subject: "C++" }).toArray();
    // let Java_language_Students = await db.collection(Students).find({ subject: "Java" }).toArray();
    // let Python_language_Students = await db.collection(Students).find({ subject: "Python" }).toArray();
    // let Ruby_language_Students = await db.collection(Students).find({ subject: "Ruby" }).toArray();
    // console.log(C_language_Students.length);
    // console.log(CPP_language_Students.length);
    // console.log(Java_language_Students.length);
    // for (i = 0; i <= total_Students.length; i++) {
    //   let capacity_Of_One_Classroom = no_Of_Students_In_A_Row *
    // }
    // for (let position = 0; position < total_Number_Of_Students; position++) {
    //   let c = position + 1;
    // }

    // Define constants
    const numRooms = total_Class_Rooms;
    const numColumns = total_Number_Of_Columns_In_One_Classroom;
    const numRows = total_Number_Of_Rows_In_One_Classroom;
    const studentsPerSubject = 100;
    const numSubjects = 5;

    // Function to initialize seating arrangement
    function initializeSeatingArrangement() {
      const seatingArrangement = [];
      for (let i = 0; i < numRooms; i++) {
        const room = [];
        for (let j = 0; j < numColumns; j++) {
          const column = [];
          for (let k = 0; k < numRows; k++) {
            column.push([]);
          }
          room.push(column);
        }
        seatingArrangement.push(room);
      }
      return seatingArrangement;
    }

    // Function to create students with subjects
    function createStudents() {
      const students = [];
      const subjects = [];
      for (let i = 0; i < numSubjects; i++) {
        subjects.push(`Subject${i + 1}`);
      }
      for (let i = 0; i < studentsPerSubject * numSubjects; i++) {
        const student = {
          id: i + 1,
          subject: subjects[i % numSubjects]
        };
        students.push(student);
      }
      return students;
    }

    // Function to assign students to seats
    function assignSeats(seatingArrangement, students) {
      let studentIndex = 0;
      for (let room = 0; room < numRooms; room++) {
        for (let column = 0; column < numColumns; column++) {
          for (let row = 0; row < numRows; row++) {
            for (let seat = 0; seat < 3; seat++) {
              if (studentIndex >= students.length) {
                return; // All students assigned
              }
              if (seatingArrangement[room][column][row].length < 3) {
                seatingArrangement[room][column][row].push(students[studentIndex]);
              } else {
                row++;
                seatingArrangement[room][column][row].push(students[studentIndex]);
              }
              studentIndex++;
            }
          }
        }
      }
    }

    // Function to ensure no same subject students are sitting just beside to one another
    // Function to ensure no same subject students are sitting just beside to one another
    function rearrangeSeats(seatingArrangement) {
      for (let room = 0; room < numRooms; room++) {
        for (let column = 0; column < numColumns; column++) {
          for (let row = 0; row < numRows; row++) {
            for (let seat = 1; seat < 3; seat++) {
              const currentStudents = seatingArrangement[room][column][row][seat];
              const previousStudents = seatingArrangement[room][column][row][seat - 1];
              if (currentStudents && previousStudents && currentStudents.length > 0 && previousStudents.length > 0) {
                for (let i = 0; i < 3; i++) {
                  const currentStudent = currentStudents[i];
                  const prevStudent = previousStudents[i];
                  if (currentStudent && prevStudent && currentStudent.subject === prevStudent.subject) {
                    // Swap current student with next student
                    seatingArrangement[room][column][row][seat][i] = prevStudent;
                    seatingArrangement[room][column][row][seat - 1][i] = currentStudent;
                  }
                }
              }
            }
          }
        }
      }
    }


    // Main function to generate seating arrangement
    function generateSeatingArrangement() {
      const seatingArrangement = initializeSeatingArrangement();
      const students = createStudents();
      assignSeats(seatingArrangement, students);
      rearrangeSeats(seatingArrangement);
      return seatingArrangement;
    }

    // Generate seating arrangement
    const arrangement = generateSeatingArrangement();
    console.log(arrangement);

  } catch (error) {
    console.log(error);
  }
})();



// Connect to your MongoDB database
// mongoose.connect('mongodb://localhost:27017/Multiple_Data_Insertion_Using_Loop')
//   .then(() => {
//     console.log('Connected to MongoDB database');
//     const db = mongoose.connection;
//     // Access documents from the database
//     (async function () {
//       let collections = await db.listCollections();
//       let cl_1 = collections[0].name;
//       let a = await db.collection(cl_1).find({ subject: "C" }).toArray();
//       console.log(a[0]);
//     })();
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB database:', error.message);
//   });

