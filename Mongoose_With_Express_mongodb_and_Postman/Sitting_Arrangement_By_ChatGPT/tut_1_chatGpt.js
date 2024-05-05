function arrangeStudents(rooms, students) {
  let assignedStudents = [];

  // Iterate through each room
  rooms.forEach(room => {
    let { room_No, number_of_rows, number_of_columns, no_of_Students_In_each_row } = room;

    // Iterate through each column in the room
    for (let col = 1; col <= number_of_columns; col++) {
      let assignedCourses = new Set(); // Keep track of assigned courses in the column

      // Iterate through each row in the column
      for (let row = 1; row <= number_of_rows; row++) {
        // Check if we have enough students to fill this row
        if (assignedStudents.length < students.length) {
          // Find a student that satisfies the conditions
          let student = findAppropriateStudent(assignedStudents, assignedCourses);

          // Assign the student to the current row
          if (student) {
            assignedStudents.push({
              room_No,
              column: col,
              row,
              student
            });
            assignedCourses.add(student.courses);
          }
        }
      }
    }
  });

  return assignedStudents;
}

function findAppropriateStudent(assignedStudents, assignedCourses) {
  // Iterate through available students
  for (let student of students) {
    // Check if the student is not already assigned and the course is not assigned in this column
    if (!assignedStudents.find(s => s.student === student) && !assignedCourses.has(student.courses)) {
      return student;
    }
  }
  return null; // Return null if no appropriate student is found
}

// Example data
const rooms = [
  { room_No: "1", number_of_rows: 10, number_of_columns: 2, no_of_Students_In_each_row: 2 },
  // Add other rooms here if needed
];

const students = [
  { name: "Student 1", courses: "Math", rollNo: 101 },
  { name: "Student 2", courses: "Sci", rollNo: 102 },
  { name: "Student 3", courses: "Math", rollNo: 103 },
  { name: "Student 4", courses: "Sci", rollNo: 104 },
  { name: "Student 5", courses: "Math", rollNo: 105 },
  { name: "Student 6", courses: "Sci", rollNo: 106 },
  { name: "Student 7", courses: "Math", rollNo: 107 },
  { name: "Student 8", courses: "Sci", rollNo: 108 },
  { name: "Student 9", courses: "Math", rollNo: 109 },
  { name: "Student 10", courses: "Sci", rollNo: 110 },
  { name: "Student 11", courses: "Math", rollNo: 111 },
  { name: "Student 12", courses: "Sci", rollNo: 112 },
  { name: "Student 13", courses: "Math", rollNo: 113 },
  { name: "Student 14", courses: "Sci", rollNo: 114 },
  { name: "Student 15", courses: "Math", rollNo: 115 },
  { name: "Student 16", courses: "Sci", rollNo: 116 },
  { name: "Student 17", courses: "Math", rollNo: 117 },
  { name: "Student 18", courses: "Sci", rollNo: 118 },
  { name: "Student 19", courses: "Math", rollNo: 119 },
  { name: "Student 20", courses: "Sci", rollNo: 120 },
  { name: "Student 21", courses: "Math", rollNo: 121 },
  { name: "Student 22", courses: "Sci", rollNo: 122 },
  { name: "Student 23", courses: "Math", rollNo: 123 },
  { name: "Student 24", courses: "Sci", rollNo: 124 },
  { name: "Student 25", courses: "Math", rollNo: 125 },
  { name: "Student 26", courses: "Sci", rollNo: 126 },
  { name: "Student 27", courses: "Math", rollNo: 127 },
  { name: "Student 28", courses: "Sci", rollNo: 128 },
  { name: "Student 29", courses: "Math", rollNo: 129 },
  { name: "Student 30", courses: "Sci", rollNo: 130 },
  { name: "Student 31", courses: "Math", rollNo: 131 },
  { name: "Student 32", courses: "Sci", rollNo: 132 },
  { name: "Student 33", courses: "Math", rollNo: 133 },
  { name: "Student 34", courses: "Sci", rollNo: 134 },
  { name: "Student 35", courses: "Math", rollNo: 135 }

];

// Arrange students
const assignedStudents = arrangeStudents(rooms, students);

console.log(assignedStudents);
