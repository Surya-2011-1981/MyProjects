let students = document.getElementById("students");
let subjects = document.getElementById("subjects");
let submit_btn = document.getElementById("submit_btn");
let classroom = document.getElementById("classrooms");

submit_btn.onclick = async (e) => {
  e.preventDefault();

  // Getting values
  let total_students = students.value;
  let total_subjects = subjects.value;
  let total_classrooms = classroom.value;
  // console.log(total_students);
  // console.log(total_subjects);
  // console.log(total_classrooms);

  // Creating classrooms name/id

  // console.log(classroom_names);

  // Calculating the capacity of students per classroom
  let classroom_capacity = Math.floor(total_students / total_classrooms);
  // console.log(classroom_capacity);

  // Creating students documents (dummy database)
  let students_doc = [];
  for (i = 0; i < total_students; i++) {
    // Assigning random Subjects (dummy)
    let random = Math.floor(Math.random() * total_subjects) + 1;

    // Assigning unique id and subject
    students_doc[i] = {
      id: "S00" + (i + 1),
      subject: "Subject" + random,
    };
  }
  // console.log(students_doc);

  // Finding number of students for each subject

  let students_per_subject = [];
  for (i = 0; i < total_subjects.length; i++) {

  }
  for (i = 0; i < students_doc.length; i++) {

  }


  // Arranging arrangement
  if (classroom_capacity <= 20) {
    classroom_capacity = 20;
    let col1 = [];
    let col2 = [];
    let classroom_names = [];
    for (i = 0; i < total_classrooms; i++) {
      // classroom_names.push("classroom"+(i+1));
      classroom_names[i] = {
        name: "classroom" + (i + 1),
        capacity: [col1, col2],
      };
    }
    let index = 0;
    for (j = 0; j < classroom_names.length; j++) {
      i = index;
      for (i = index; i < students_doc.length; i++) {
        // let classroom[i]=
        if (classroom_names[j].length <= classroom_capacity) {
          if (students_doc[i].subject == "Subject1") {
            col1.push(students_doc[i]);
          }
          if (students_doc[i].subject == "Subject2") {
            col2.push(students_doc[i]);
          }
          index = i;
        } else {
          index = i;
          break;
        }
      }
    }
  } else if (classroom_capacity > 20 && classroom_capacity <= 40) {
    classroom_capacity = 40;
    let col1_of_col1 = [];
    let col2_of_col1 = [];
    let col1_of_col2 = [];
    let col2_of_col2 = [];

    var classroom_names = [];
    for (i = 0; i < total_classrooms; i++) {
      // classroom_names.push("classroom"+(i+1));
      classroom_names[i] = {
        name: "classroom" + (i + 1),
        capacity: [[col1_of_col1, col2_of_col1], [col1_of_col2, col2_of_col2]],
      };
    }
    console.log(classroom_names);
  } else {
  }

};

// function low_capacity(params) {

// }
