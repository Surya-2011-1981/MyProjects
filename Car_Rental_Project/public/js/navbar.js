let list = document.querySelector("navbar-ul");
let icon = document.querySelector(".icons");
let show_menu = document.querySelector(".show-menu");
let hide_menu = document.querySelector(".hide-menu");
icon.onclick = (e) => {
  // alert("hello")
  list.classList.toggle("active");
  show_menu.classList.toggle("display-none");
  hide_menu.classList.toggle("display-none");
}