// innerHTML --> property/Attribute
// document.getElementsByTagName("title")[0].innerHTML="Important DOM Methods and Properties in JavaScript";
//  console.log(document.getElementsByTagName("p")[0].innerHTML);
// console.log(document.body.firstElementChild.firstElementChild.firstElementChild.innerHTML)
// console.log(document.getElementById("para2").innerHTML);


// console.dir()--> method
// console.dir(document.body)


// OuterHTML property/Attribute --> It will show the targetted element as well as the descendents(वंशज/बच्चे) also
// console.log(document.getElementById("box1").outerHTML)


// text content --> property/Attribute
//  let n = document.getElementsByClassName("main")[0].textContent;
//  let n = document.body.firstElementChild.lastElementChild.lastElementChild.textContent;
//  console.log(n)


// hidden --> property/Attribute --> add the hidden attribute to the .main class tag
// document.querySelector(".main").hidden=true;


// hasAttribute() method --> check that the attribute is available or not
// console.log(document.querySelector(".main").hasAttribute("class"));


// getAttribute() method --> get the avlue of given attribute
// console.log(document.querySelector("#box1").getAttribute("id"));


// setAttribute() and removeAttribute() method --> set attribute and value to a tag
// document.querySelector(".main").setAttribute("name","THIS IS THE MAIN DIV");
// document.querySelector(".main").setAttribute("name","THIS IS THE MAIN DIV");
// document.querySelector(".main").removeAttribute("name");


// innerText prperty --> print only text inside the tag
// console.log(document.querySelector("#para2").innerText);


let heading=document.createElement("h1");
heading.innerHTML="Hey......! I am Paragraph First, inserted by <mark><i>Surya</i></mark>";
heading.setAttribute("name","inserted");
document.querySelector(".main").append(heading);



