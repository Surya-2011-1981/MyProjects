let list = document.querySelector(".navbar-ul");
console.log(list);
let icon = document.querySelector(".icons");
console.log(icon);
let show_menu = document.querySelector(".show-menu");
console.log(show_menu);
let hide_menu = document.querySelector(".hide-menu");
console.log(hide_menu);
icon.onclick = (e) => {
  // alert("hello")
  list.classList.toggle("active");
  show_menu.classList.toggle("display-none");
  hide_menu.classList.toggle("display-none");
}