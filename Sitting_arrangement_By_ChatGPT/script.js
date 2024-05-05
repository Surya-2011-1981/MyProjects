document.addEventListener("DOMContentLoaded", function () {
  const seatingContainer = document.getElementById("seating-container");

  function createSeatingArrangement(numStudents) {
    for (let i = 1; i <= numStudents; i++) {
      const seat = document.createElement("div");
      seat.className = "seat";
      seat.textContent = "Seat " + i;
      seatingContainer.appendChild(seat);
    }
  }

  const numStudents = 20; // Change this to the desired number of students
  createSeatingArrangement(numStudents);
});
