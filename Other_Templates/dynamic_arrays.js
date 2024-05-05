function createSubjects(n) {
  // Array to store subjects
  let subjects = [];

  // Loop to create n subjects
  for (let i = 1; i <= n; i++) {
    // Generate unique name for each subject
    let subjectName = "Sub" + i;

    // Create empty array for the subject
    let subject = [];

    // Push the subject to the subjects array
    subjects.push({ name: subjectName, data: subject });
  }

  return subjects;
}

// Example usage:
let numberOfSubjects = 10; // You can take this input from the user
let subjects = createSubjects(numberOfSubjects);
console.log(subjects);
