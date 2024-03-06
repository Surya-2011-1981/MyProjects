let url = 'https://cat-fact.herokuapp.com/facts';
let para=document.querySelector("p");
let facts = async () => {
    let ran=Math.floor(Math.random()*5);
    console.log("Getting your response....")
    let response = await fetch(url);
    console.log(response);
    console.log(response.status);
    let data = await response.json();
    console.log(data);
    console.log(data[ran]);
    para.innerText=data[ran].text;
}
let button = document.querySelector("button");
button.addEventListener("click",facts);





     
