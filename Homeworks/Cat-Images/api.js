let url = 'https://cat-fact.herokuapp.com/facts';
let get_fact=document.querySelector("button");
let image_list=[
  "Cat-01.jpeg" , "Cat-02.jpeg","Cat-03.webp","Cat-04.webp","Cat-05.jpg"
];
let parent_box=document.querySelector("ul");
get_fact.onclick=(e)=>{
// e.preventDefault();
// parent_box.classList.remove("display-none");
// console.log("hello");
(async function ()  {
  let dynamic_box=document.createElement("li");
  let img=document.createElement("img");
  let dynamic_msg=document.createElement("h1");
  let fact_box=document.createElement("i");
  let random_number=Math.floor(Math.random()*5);
  // console.log("Getting your response....")
  let response = await fetch(url);
  // console.log(response);
  let data = await response.json();
  // console.log(data);
  console.log(data[random_number].text);
  // console.log(data[0].text);
  parent_box.append(dynamic_box);
  dynamic_box.append(img);
  img.after(dynamic_msg);
  dynamic_msg.innerText="Do you Know..?";
  dynamic_msg.after(fact_box);
  img.src=image_list[random_number];
  fact_box.innerText=data[random_number].text;
  // dynamic_box.classList.add("")
})();

}