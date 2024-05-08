// *****************************Type 1************************

// let str = "SurajSingh";
// let strLength = str.length;

// let cpy = [];
// j = 0;

// for (i = strLength; i >= 0; i--) {
//   cpy[i] = str[j];
//   j++;
// }

// console.log(cpy.join(''));


// *****************************Type 2************************

let str = "SurajSingh";
let strLength = str.length;

let cpy = [];


for (i = strLength; i >= 0; i--) {
  cpy.push(str[i]);
}

console.log(cpy.join(''));
// console.log(cpy);