const submitForm = document.querySelector(".submit-button");
const mainContainer = document.querySelector(".main");
const confirmationContainer = document.querySelector(".confirmation");
const form = document.querySelector("form");
const dsa1 = document.querySelector("#dsa1");
submitForm.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(dsa1.checked);
    document.body.classList.add("back-drop-50");
    mainContainer.classList.add("blur-10");
    confirmationContainer.classList.add("active");
});
const confirmTrue = document.querySelector(".confrm-true");
const confirmFalse = document.querySelector(".cnfrm-false");
console.log(confirmTrue);
confirmTrue.onclick = (e) => {
    console.log("hello");
    e.preventDefault();
    document.body.classList.remove("back-drop-50");
    mainContainer.classList.remove("blur-10");
    confirmationContainer.classList.remove("active");
}
confirmFalse.onclick = (e) => {
    console.log("hello");
    e.preventDefault();
    document.body.classList.remove("back-drop-50");
    mainContainer.classList.remove("blur-10");
    confirmationContainer.classList.remove("active");
}