var Adjectives=
{
 name1:"Crazy",
 name2:"Amazing",
 name3:"Fire"
}
var Shop=
{
 shop1:"Engine",
 shop2:"Food",
 shop3:"Garments"
}
var last_word=
{
 last1:"Bros",
 last2:"Limited",
 last3:"Hub"
}
let ADJ=parseInt((Math.random()*10)%3);
// console.log(ADJ);
let SHOP=parseInt((Math.random()*10)%3);
// console.log(SHOP);
let LAST=parseInt((Math.random()*10)%3);
// console.log(LAST);

console.log("Your Company Name is : "+Adjectives[Object.keys(Adjectives)[ADJ]]+" "+Shop[Object.keys(Shop)[SHOP]]+" "+last_word[Object.keys(last_word)[LAST]]);

