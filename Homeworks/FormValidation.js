let name=document.getElementById("name");
let phone_Number=document.getElementById("phone_Number");
let email=document.getElementById("email");
let password=document.getElementById("password");
let confirm_password=document.getElementById("confirm_Password");
let user_Name=document.getElementById("username");
let photo=document.getElementById("photo");
let reset=document.getElementById("reset_Button");
let submit=document.getElementById("submit_Button");
let form=document.getElementById("form");

document.getElementById("reset_Button").onclick=()=>{
  
}
document.getElementById("submit_Button").onclick=(e)=>{
  e.preventDefault();
  name_Validation(name.value,e);
}

// **********  Validation for Name ***********************

function name_Validation(name_Value,e)
{
  if(name_Value=="")
  {
    e.preventDefault();
    alert("Name can't be empty...");
  }
  else{
    phone_Number_Validation(phone_Number.value,e);
  }

}

// **********  Validation for Phone Number ***********************

function phone_Number_Validation(phone_Number_value,e)
{
  
  if( phone_Number_value.length!=10)
  {
    e.preventDefault();
    alert("Please check Your Phone Number");
  }
  else{
    email_Validation(email.value,e);
  }
}


// **********  Validation for Email ***********************

function email_Validation(email_id,e)
{
  if(email_id=="")
  {
    e.preventDefault();
    alert("Email Can't be empty...");
  }
  else if(!email_id.endsWith("@gmail.com"))
  {
    e.preventDefault();
    alert("Email is not correct")
  }
  else
  {
    user_Name_Validation(user_Name.value,e);
  }
}

// **********  Validation for Password  ***********************
function user_Name_Validation(user_Name_value,e)
{
  if(user_Name_value=="")
  {
    alert("User Name can't be Empty...");
  }
  else
  {
    password_Validation(password.value,e);
  }
}


// **********  Validation for Password  ***********************


function password_Validation(password_value,e)
{
  if(password_value.length<8)
  {
    e.preventDefault();
    alert("Your Password has less than 8 digits...");
  }
  else{
    password_Confirmation(confirm_password.value,e,password_value);
  }
}

// **********  Confirmation for Password  ***********************

function password_Confirmation(confirm_password,e,first_Entered_Password)
{
  if(confirm_password!=first_Entered_Password)
  {
    e.preventDefault();
    alert("Password Mis-Match");
  }
  else{
      photo_Validation(photo.value,e);
  }
}

// **********  Validation for Photo  ***********************

function photo_Validation(photo_value,e)
{
  if(photo_value.endsWith("jpg") || photo_value.endsWith("png")  || photo_value.endsWith("jpeg")  || photo_value.endsWith("webp"))
  {
    form.submit();
    alert("Your Form Has Been Successfully Submitted....!");
  }
  else
  {
    alert("The file is not image type...!");
  }
}