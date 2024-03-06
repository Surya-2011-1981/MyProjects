
let main = document.querySelector(".main");


setInterval(() => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    main.style.backgroundColor= `rgb(${r},${g},${b})`;
}, 100);
//This will run after every 0.1 second
// use clearInterval(1) to remove this



/*
let a= setTimeout(() => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    main.style.backgroundColor= `rgb(${r},${g},${b})`;
}, 100);
*///This will execute only once 
// use clearTimeout(1) to remove this

