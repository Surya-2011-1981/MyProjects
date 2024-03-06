let main = document.querySelector(".main");
let para = document.querySelector(".para");
let para2 = document.querySelector(".para2");
let span = document.querySelector(".span");
let btn = document.querySelector("button");
let text = document.querySelector(".text");
let number = document.querySelector(".number");
btn.addEventListener("click", () => {
    btn.style.backgroundColor = "yellow";
})
btn.addEventListener("mouseover", () => {
    btn.style.width = "250px";
})
btn.addEventListener("mouseout", () => {
    btn.style.width = "150px";
})
btn.addEventListener("dblclick", () => {
    btn.style.boxShadow = "5px 5px 10px red, inset 5px 5px 10px red";
})
btn.addEventListener("contextmenu", () => {
    btn.style.backgroundColor = "pink";
})
btn.addEventListener("dblclick", () => {
    btn.style.boxShadow = "5px 5px 10px red, inset 5px 5px 10px red";
})

para2.addEventListener("mousedown", () => {
    para2.style.backgroundColor = "yellow";
    para2.style.display = "inline";
})
// para2.addEventListener("mouseenter",()=>{
//         alert("waha se hato");
//      })
// para2.addEventListener("mouseleave", () => {
//     alert("Youth icon");
// })

// main.addEventListener("online", () => {
//     alert("Ambani mere lad*e pe");
// })
                // Might Not Work online and offline events

// main.addEventListener("offline", () => {
//     alert("Recharge Kara Bhaw*e");
// })

para.addEventListener("wheel",()=>{
    para.style.backgroundColor="maroon";
 })

//  text.addEventListener("keypress",()=>{
//     alert("  fr se dabaya ");
//  })
// text.addEventListener("keydown",()=>{
//     alert("button q dabaya be law*e");
//  })
//  text.addEventListener("keyup",()=>{
//     alert("Nhi sun rha kya be");
//  })

number.addEventListener("invalid",()=>{   //might not work 
    alert("Andha h kya lau*e");
 })







