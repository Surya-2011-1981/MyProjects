const submitForm = document.querySelector(".submit-button");
const mainContainer = document.querySelector(".main");
const confirmationContainer = document.querySelector(".confirmation");
const form = document.querySelector("#dailyTasksForm");
const confirmTrue = document.querySelector(".confrm-true");
const confirmFalse = document.querySelector(".cnfrm-false");
submitForm.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.add("back-drop-50");
    mainContainer.classList.add("blur-10");
    confirmationContainer.classList.add("active");

    confirmTrue.onclick = () => {
        document.body.classList.remove("back-drop-50");
        mainContainer.classList.remove("blur-10");
        confirmationContainer.classList.remove("active");
        console.log("Form Submitted Successfully");
        form.submit();
    }
    confirmFalse.onclick = () => {
        document.body.classList.remove("back-drop-50");
        mainContainer.classList.remove("blur-10");
        confirmationContainer.classList.remove("active");
        console.log("Form Not Submitted...");
    }
});