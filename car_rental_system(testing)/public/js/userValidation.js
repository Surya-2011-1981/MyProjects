
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



//        ***********  Create-Password Validation ****************

/*

let upper_Characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let lower_Characters = 'abcdefghijklmnopqrstuvwxyz'.split('');
let numerical_Characters = '0123456789'.split('');
let special_Characters = '!@#$%^&*()-_=+[]{}|;:\'",.<>/?'.split('');

// To check UpperCase 
let check_Uppercase = () => {
  for (let i = 0; i < create_Password.value.length; i++) {
    for (let j = 0; j < upper_Characters.length; j++) {
      if (create_Password.value[i] == upper_Characters[j]);
      {
        return true;
      }
      // elseif(create_Password.value[create_Password.value.length-1]!=upper_Characters[upper_Characters.length-1])
      // {
      //   return false;
      // }
    }
  }
}
// To check LowerCase
let check_Lowercase = () => {
  for (let i = 0; i < create_Password.value.length; i++) {
    for (let j = 0; j < lower_Characters.length; j++) {
      if (create_Password.value[i] == lower_Characters[j]);
      {
        return true;
      }
      // if(create_Password.value[create_Password.value.length-1]!=lower_Characters[lower_Characters.length-1])
      // {
      //   return false;
      // }
    }
  }
}

// To Check Numerical Value
let check_Numerical = () => {
  for (let i = 0; i < create_Password.value.length; i++) {
    for (let j = 0; j < numerical_Characters.length; j++) {
      if (create_Password.value[i] == numerical_Characters[j]);
      {
        return true;
      }
      // if(create_Password.value[create_Password.value.length-1]!=numerical_Characters[numerical__Characters.length-1])
      // {
      //   return false;
      // }
    }
  }
}

// Check Special Symbol 

let check_Special_Symbol = () => {
  for (let i = 0; i < create_Password.value.length; i++) {
    for (let j = 0; j < special_Characters.length; j++) {
      if (create_Password.value[i] == special_Characters[j]);
      {
        return true;
      }
      // if(create_Password.value[create_Password.value.length-1]!=special_Characters[special_Characters.length-1])
      // {
      //   return false;
      // }
    }
  }
}

let create_Password = document.getElementById("CP");
console.log(create_Password);
let small_Tag_Value = document.querySelector(".small");
create_Password.oninput = () => {

  if (create_Password.value.length >= 8) {
    small_Tag_Value.innerText = "A password must contain al-least one Uppercase, one Lowercase, one Numrical Value and a Special Symbol";
    create_Password.classList.remove("Error-Input");


    if (check_Uppercase() == true && check_Lowercase() == true && check_Numerical() == true && check_Special_Symbol() == true) {
      small_Tag_Value.innerText = "";
      // console.log("Code Reached");
    }
    // console.log("Code Reached again");
  }

}
  else {
  create_Password.classList.add("Error-Input");
}
}

//            ******* Confirm Password Valiation ************
let confirm_Password = document.getElementById("Confirm-Password");
let confirm_Password_Error = document.getElementById("Confirm-Password-Small");
confirm_Password.oninput = () => {
  if (confirm_Password.value != create_Password.value) {
    confirm_Password.classList.add("Error-Input");
    confirm_Password_Error.innerText = "Password Mis-match";
  }
  else {
    confirm_Password.classList.remove("Error-Input");
    confirm_Password_Error.innerText = "";
  }
}


*/

function validatePasswords() {
  const createPassword = document.getElementById('CP').value;
  const confirmPassword = document.getElementById('Confirm-Password').value;

  const createPasswordError = document.querySelector(".create-password-small");
  const confirmPasswordError = document.getElementById('confirm-Password-Small');

  const passwordCriteria = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  let createPasswordValid = true;
  let confirmPasswordValid = true;

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
    confirmPasswordValid = false;
    confirmPasswordError.innerText = 'Passwords do not match.';
    document.getElementById('Confirm-Password').classList.add('Error-Input');
  } else {
    confirmPasswordError.innerText = '';
    document.getElementById('Confirm-Password').classList.remove('Error-Input');
    if (createPasswordValid) {
      document.getElementById('Confirm-Password').classList.add('success');
    }
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

// let Hide_Password = document.getElementById("Hide-Password");
// document.addEventListener("DOMContentLoaded", function () {
//   // var passwordInput = document.getElementById("password");

//   Hide_Password.addEventListener("click", function () {
//     if (create_Password.type === "password") {
//       create_Password.type = "text";
//       confirm_Password.type = "text";
//       Hide_Password.src = "Pass_Show.jpeg";
//       Hide_Password.title = "Password Visible";

//     } else {
//       create_Password.type = "password";
//       confirm_Password.type = "password";
//       Hide_Password.src = "Hide_Pass.png";
//       Hide_Password.title = "Password Hidden";
//     }
//   });
// });



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










