let contact = document.querySelector(".contact");
let name_input = document.querySelector(".name-input");
let create_Password = document.querySelector(".c-Password");
let confirm_Password = document.querySelector(".cf-Password");
let create_password_Visiblity = document.querySelector(".c-password-img");
let confirm_password_Visiblity = document.querySelector(".cf-password-img");
let email = document.querySelector(".email")
let passwords = document.querySelector(".password");
let submit_btn = document.querySelector(".submit-btn")
let reset_btn = document.querySelector(".reset-btn")
let form = document.querySelector("form");



name_input.oninput = (e) => {
  if (name_input.value === "") {
    name_input.classList.add("error");
  }
  else {
    name_input.classList.remove("error");
  }
}



contact.oninput = (e) => {
  // console.log(contact.value);
  if (contact.value.length != 10) {
    contact.classList.add("error");

  }
  else {
    contact.classList.remove("error");
  }
}

create_Password.oninput = (e) => {

  if (create_Password.value.length < 8) {
    create_Password.classList.add("error");

  }
  else {
    if (create_Password.value === confirm_Password.value) {
      create_Password.classList.remove("error");
      confirm_Password.classList.remove("error");
    }
    else {
      create_Password.classList.add("error");
      confirm_Password.classList.add("error");
    }
  }

}
confirm_Password.oninput = (e) => {
  // console.log(contact.value);

  if (create_Password.value != confirm_Password.value) {
    confirm_Password.classList.add("error");
    create_Password.classList.add("error");
  }
  else {
    create_Password.classList.remove("error");
    confirm_Password.classList.remove("error");
  }
}

email.oninput = (e) => {
  if (email.value.endsWith("@gmail.com")) {
    email.classList.remove("error");
  }
  else {
    email.classList.add("error");
  }
}


create_password_Visiblity.onclick = (e) => {
  console.log("Clicked");
  console.log();
  if (create_Password.type === "password") {
    console.log("password");
    create_Password.type = "text";
    // confirm_Password.type = "text";
    create_password_Visiblity.src = "hidepassword.svg";
    create_password_Visiblity.title = "Hide Password";
  } else {
    console.log("text");
    create_Password.type = "password";
    // confirm_Password.type = "password";
    create_password_Visiblity.src = "showpassword.svg";
    create_password_Visiblity.title = "Show Password";
  }
}

confirm_password_Visiblity.onclick = (e) => {
  console.log("Clicked");
  console.log();
  if (confirm_Password.type === "password") {
    console.log("password");
    // create_Password.type = "text";
    confirm_Password.type = "text";
    confirm_password_Visiblity.src = "hidepassword.svg";
    confirm_password_Visiblity.title = "Hide Password";
  } else {
    console.log("text");
    // create_Password.type = "password";
    confirm_Password.type = "password";
    confirm_password_Visiblity.src = "showpassword.svg";
    confirm_password_Visiblity.title = "Show Password";
  }
}



submit_btn.onclick = (e) => {
  e.preventDefault();
  if (name_input.classList.contains("error") || name_input.value === "") {
    alert("Please Fill the all fields correctly");
    name_input.classList.add("error");
  }
  else if (contact.classList.contains("error") || contact.value === "") {
    alert("Please Fill the all fields correctly");
    contact.classList.add("error");
  }
  else if (create_Password.classList.contains("error") || create_Password.value === "") {
    alert("Please Fill the all fields correctly");
    create_Password.classList.add("error")
  }
  else if (confirm_Password.classList.contains("error") || confirm_Password.value === "") {
    alert("Please Fill the all fields correctly");
    confirm_Password.classList.add("error")
  }
  else if (email.classList.contains("error") || email.value === "") {
    alert("Please Fill the all fields correctly");
    email.classList.add("error")
  }
  else {
    form.submit();
  }
}



reset_btn.onclick = async (e) => {
  e.preventDefault();
  let confirm_User = confirm("Are you sure to submit the form");
  console.log(confirm_User);
  if (confirm_User === true) {
    form.reset();
    alert("Form reset Successfully");
  }
}
