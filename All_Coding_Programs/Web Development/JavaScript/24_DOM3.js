// .prepend() method 
let afterbodystart=document.createElement("h1");
afterbodystart.innerHTML="This is Insertion by .prepend() method";
document.body.prepend(afterbodystart);

// .append() method
let beforebodyend=document.createElement("h1");
beforebodyend.innerHTML="This is Insertion by .append() method";
document.body.append(beforebodyend);

// .before() Method
let beforechildclass=document.createElement("mark");
beforechildclass.innerHTML="This is Insertion By .before() method";
document.querySelector(".child").before(beforechildclass);

// .after() body Class
let afterchildclass=document.createElement("mark");
afterchildclass.innerHTML="<br/>This is insertion by .after() method";
document.querySelector(".child").after(afterchildclass);


// .replaceWith() method
let replacing=document.createElement("i");
replacing.innerHTML="<br/>This is replaced by .replaceWith() method";
document.getElementsByTagName("p")[0].replaceWith(replacing);