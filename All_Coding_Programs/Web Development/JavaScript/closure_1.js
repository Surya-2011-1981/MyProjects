


message = "This is Hello";
function hello() {
  let message = "Good Morning";
  console.log(message);
  let c = function hello2() {
    console.log("My msg " + message);
  }
  return c;
}

let c = hello();
// console.log(c);
c();






























































// var msg = "Hello";
// const hello = () => {
//   let msg = "hello_world";
//   var hii = () => {
//     let msg = "Welcome";
//     console.log(msg);
//     return "123";
//   }
//   console.log(hii());
//   return "abc";
// }
// // console.log(hii());
// console.log(hello());