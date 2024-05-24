
//   *******************  Contact Number Valiation *******************

let contact_Number = document.getElementById("Contact-Number");
let contact_Number_Error = document.getElementById("Mobile-Number-Small");

contact_Number.oninput = () => {
  if ((contact_Number.value).length == 10) {
    contact_Number.classList.remove("Error-Input");
    contact_Number_Error.innerText = "";
  }
  else {
    contact_Number.classList.add("Error-Input");
    contact_Number_Error.innerText = "Please Enter 10 digit mobile number";
  }
}
//    *******************  Email-Validation   ***********************


let email_Id = document.getElementById("Email-Id");
let email_Error = document.getElementById("Email-Small")
email_Id.oninput = () => {
  console.log("Email");
  // let mail_Collection=["@gmail.com","@yahoo.com","@outlook.com","@gmx.com","@iCloud.com"];
  let dynamic_Input = email_Id.value;
  if (dynamic_Input.endsWith("@gmail.com") || dynamic_Input.endsWith("@yahoo.com") || dynamic_Input.endsWith("@outlook.com") || dynamic_Input.endsWith("@gmx.com") || dynamic_Input.endsWith("@iCloud.com")) {
    email_Id.classList.remove("Error-Input");
    email_Error.innerText = "";
  }
  else {
    email_Id.classList.add("Error-Input");
    email_Error.innerText = "Enter valid Email";
  }
}


// *******************  Passsword Validation **************


function validatePasswords() {
  const createPassword = document.getElementById('CP').value;
  const confirmPassword = document.getElementById('Confirm-Password').value;

  const createPasswordError = document.querySelector(".create-password-small");
  const confirmPasswordError = document.getElementById('confirm-Password-Small');

  const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // let createPasswordValid = true;
  // let confirmPasswordValid = true;

  if (!passwordCriteria.test(createPassword)) {
    createPasswordValid = false;
    createPasswordError.innerText = 'Password must have uppercase lowercase numbers and special character';
    document.getElementById('CP').classList.add('Error-Input');
  } else {
    createPasswordError.innerText = '';
    document.getElementById('CP').classList.remove('Error-Input');
    document.getElementById('CP').classList.add('success');
  }

  if (createPassword !== confirmPassword) {
    // confirmPasswordValid = false;
    confirmPasswordError.innerText = 'Passwords do not match.';
    document.getElementById('Confirm-Password').classList.add('Error-Input');
  } else {
    confirmPasswordError.innerText = '';
    document.getElementById('Confirm-Password').classList.remove('Error-Input');
  }
}

const createPassword = document.querySelector("#CP");
const confirmPassword = document.querySelector("#Confirm-Password");

createPassword.oninput = () => {
  validatePasswords();
}
confirmPassword.oninput = () => {
  validatePasswords();
}


// // **************Password Visiblity*********

let Hide_Password = document.querySelector(".Hide-Password");
document.addEventListener("DOMContentLoaded", function () {

  Hide_Password.addEventListener("click", function () {

    const create_Password = document.querySelector("#CP");
    const confirm_Password = document.querySelector("#Confirm-Password");

    if (create_Password.type === "password") {
      create_Password.type = "text";
      confirm_Password.type = "text";
      Hide_Password.classList.toggle("bxs-show");
      Hide_Password.classList.toggle("bxs-hide");

    } else {
      create_Password.type = "password";
      confirm_Password.type = "password";
      Hide_Password.classList.toggle("bxs-show");
      Hide_Password.classList.toggle("bxs-hide");
    }
  });
});



// *********************Submit Button Validation *********************
let submit_btn = document.querySelector(".btn");
var form = document.querySelector("form");
submit_btn.onclick = (e) => {
  e.preventDefault();
  for (let i = 0; i < form.length; i++) {
    if (form[i].classList.contains("Error-Input") || form[i].value == undefined) {
      form[i].focus();
      alert("Please fill the all neccessary field correctly");
      break;
    }
    else {
      if (i == (form.length - 1)) {
        form.submit();
        alert("Your form has been succesfully submitted...!")
      }
    }
  }
}










