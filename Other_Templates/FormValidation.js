let reset_btn=document.getElementById("Reset-Form");

// ********************  First Name Validation ************************
let first_Name=document.getElementById("First-Name");
let first_Name_Error=document.getElementById("First-Name-Small")
first_Name.oninput=()=>{
  let dynamic_Input=first_Name.value;
 for(i=0;i<dynamic_Input.length;i++)
  {
    if(((dynamic_Input[i].charCodeAt(0)<=90 && dynamic_Input[i].charCodeAt(0)>=65) || dynamic_Input[i].charCodeAt(0)==32) || ((dynamic_Input[i].charCodeAt(0)<=122 && dynamic_Input[i].charCodeAt(0)>=97) || dynamic_Input[i].charCodeAt(0)==32))
    {
      first_Name.classList.remove("Error-Input");
      first_Name_Error.innerText="";
    }
    else{
      
      first_Name.classList.add("Error-Input");
      first_Name_Error.innerText="Enter a valid Name";
      break;
    }
  }
  
}



// console.log("a".charCodeAt(0));


// *******************  Last Name Valiation *********************

let last_Name=document.getElementById("Last-Name");
let last_Name_Error=document.getElementById("Last-Name-Small");
last_Name.oninput=()=>{
  let dynamic_Input=last_Name.value;
 for(i=0;i<dynamic_Input.length;i++)
  {
    if(((dynamic_Input[i].charCodeAt(0)<=90 && dynamic_Input[i].charCodeAt(0)>=65) || dynamic_Input[i].charCodeAt(0)==32) || ((dynamic_Input[i].charCodeAt(0)<=122 && dynamic_Input[i].charCodeAt(0)>=97) || dynamic_Input[i].charCodeAt(0)==32))
    {
      last_Name.classList.remove("Error-Input");
      last_Name_Error.innerText="";
    }
    else{
      last_Name.classList.add("Error-Input");
      last_Name_Error.innerText="Name can Only be alphabets";
      break;
    }
  }
    
}



//   *******************  Contact Number Valiation *******************

let contact_Number=document.getElementById("Contact-Number");
let contact_Number_Error=document.getElementById("Mobile-Number-Small");

contact_Number.oninput=()=>{
  if((contact_Number.value).length==10)
  {
    contact_Number.classList.remove("Error-Input");
    contact_Number_Error.innerText="";
  }
  else{
    contact_Number.classList.add("Error-Input");
    contact_Number_Error.innerText="Please Enter 10 digit mobile number";
  }
}
//    *******************  Email-Validation   ***********************


let email_Id=document.getElementById("Email-Id");
let email_Error=document.getElementById("Email-Small")
email_Id.oninput=()=>{
  // let mail_Collection=["@gmail.com","@yahoo.com","@outlook.com","@gmx.com","@iCloud.com"];
  let dynamic_Input=email_Id.value;
  if(dynamic_Input.endsWith("@gmail.com") || dynamic_Input.endsWith("@yahoo.com") || dynamic_Input.endsWith("@outlook.com") || dynamic_Input.endsWith("@gmx.com") || dynamic_Input.endsWith("@iCloud.com"))
  {
    email_Id.classList.remove("Error-Input");
    email_Error.innerText="";
  }
  else{
    email_Id.classList.add("Error-Input");
    email_Error.innerText="Enter valid Email";
  }
}



//        ***********  Create-Password Validation ****************

let create_Password=document.getElementById("Create-Password");
let small_Tag_Value=document.querySelector(".small");
/*
let upper_Characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let lower_Characters = 'abcdefghijklmnopqrstuvwxyz'.split('');
let numerical_Characters = '0123456789'.split('');
let special_Characters = '!@#$%^&*()-_=+[]{}|;:\'",.<>/?'.split('');

          // To check UpperCase 
          let check_Uppercase=()=>{
            for(let i=0;i<create_Password.value.length;i++)
            {
              for(let j=0;j<upper_Characters.length;j++)
              {
                if(create_Password.value[i]==upper_Characters[j]);
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
          let check_Lowercase=()=>{
            for(let i=0;i<create_Password.value.length;i++)
            {
              for(let j=0;j<lower_Characters.length;j++)
              {
                if(create_Password.value[i]==lower_Characters[j]);
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
          let check_Numerical=()=>{
            for(let i=0;i<create_Password.value.length;i++)
            {
              for(let j=0;j<numerical_Characters.length;j++)
              {
                if(create_Password.value[i]==numerical_Characters[j]);
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
          
          let check_Special_Symbol=()=>{
            for(let i=0;i<create_Password.value.length;i++)
            {
              for(let j=0;j<special_Characters.length;j++)
              {
                if(create_Password.value[i]==special_Characters[j]);
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
*/
create_Password.oninput=()=>{
  
  if(create_Password.value.length>=8)
  {
    small_Tag_Value.innerText="A password must contain al-least one Uppercase, one Lowercase, one Numrical Value and a Special Symbol";
    create_Password.classList.remove("Error-Input");
    
 /*
 if(check_Uppercase()==true && check_Lowercase()==true && check_Numerical()==true && check_Special_Symbol()==true)
 {
   small_Tag_Value.innerText="";
   // console.log("Code Reached");
  }
  // console.log("Code Reached again");
}*/

}
else{
  create_Password.classList.add("Error-Input");
}
}

//            ******* Confirm Password Valiation ************
let confirm_Password=document.getElementById("Confirm-Password");
let confirm_Password_Error=document.getElementById("Confirm-Password-Small");
confirm_Password.oninput=()=>{
  if(confirm_Password.value!=create_Password.value)
  {
    confirm_Password.classList.add("Error-Input");
    confirm_Password_Error.innerText="Password Mis-match";
  }
  else{
    confirm_Password.classList.remove("Error-Input");
    confirm_Password_Error.innerText="";
  }
}






//               ****  Photo Validation Valiation *****
/*
let photo=document.getElementById("Photo");
let photo_Error=document.getElementById("Photo-Small");
photo.onchange=()=>{
  if(photo.value.endsWith("jpg") || photo.value.endsWith("png")  || photo.value.endsWith("jpeg")  || photo.value.endsWith("webp"))
  {
    photo.classList.remove("Error-Input");
    photo_Error.innerText="";
    let create_profile=document.createElement("img");
    create_profile.src="Boy_Pic.png";
    create_profile.style.display="inline-block";
    create_profile.style.height="100%";
    create_profile.style.width="100%";
    document.querySelector(".For-Profile").classList.remove("display-none");
    document.querySelector(".For-Profile").prepend(create_profile);
  }
  else
  {
    photo.classList.add("Error-Input");
    photo_Error.innerText="file type does not match";
  }
}
*/


photo=document.getElementById('Photo');
let photo_Error=document.getElementById("Photo-Small");
photo.addEventListener('change', function(event) {
  let input = event.target;
  let image = input.files[0];
  let create_profile=document.createElement("img");
  document.querySelector(".For-Profile").classList.remove("display-none");
  create_profile.style.display="inline-block";
  create_profile.style.height="100%";
  create_profile.style.width="100%";
  document.querySelector(".For-Profile").prepend(create_profile);
  if (image && (photo.value.endsWith("jpg") || photo.value.endsWith("png")  || photo.value.endsWith("jpeg")  || photo.value.endsWith("webp"))) 
  {
    let image_reader = new FileReader();
    image_reader.onload = function(e) {
      create_profile.src = e.target.result;
    };
    photo.classList.remove("Error-Input");
    photo_Error.innerText="";
    image_reader.readAsDataURL(image);
  } else {
    create_profile.src="Boy_Pic.png";
    photo.classList.add("Error-Input");
    photo_Error.innerText="file type does not match";
  }
});


// **************Password Visiblity*********

  let Hide_Password=document.getElementById("Hide-Password");
document.addEventListener("DOMContentLoaded", function() {
  // var passwordInput = document.getElementById("password");

  Hide_Password.addEventListener("click", function() {
    if (create_Password.type === "password") {
      create_Password.type = "text";
      confirm_Password.type="text";
      Hide_Password.src = "Pass_Show.jpeg"; 
      Hide_Password.title="Password Visible";

    } else {
      create_Password.type = "password";
      confirm_Password.type="password";
      Hide_Password.src = "Hide_Pass.png";
      Hide_Password.title="Password Hidden";
    }
  });
});



// *********************Submit Button Validation *********************
let submit_btn=document.getElementById("Submit-Form");
let form=document.querySelector("form");
submit_btn.onclick=(e)=>{
  e.preventDefault();
  for(let i=0;i<form.length;i++)
    {
      if(form[i].classList.contains("Error-Input") || form[i].value==undefined)
      {
        form[i].focus();
        alert("Please fill the all neccessary field correctly");
        break;
      }
      else 
      {
          if(i==(form.length-1))
          {
            form.submit();
            alert("Your form has been succesfully submitted...!")
          }
      }
    }
}


