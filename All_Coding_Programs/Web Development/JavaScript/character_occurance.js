var count = {};
for (var i = 97; i <= 122; i++) {
  count[String.fromCharCode(i)] = 0;
}
var keyValue = Object.keys(count);


let str = "eyufgfnvbnvjkjbhfsw";


for (i = 0; i < str.length; i++) {
  for (j = 0; j < keyValue.length; j++) {
    if (str[i] == keyValue[j]) {
      count[keyValue[j]]++;
      break;
    }
  }
}


console.log("Occurence of characters are ");
for (j = 0; j < keyValue.length; j++) {
  if (count[keyValue[j]] > 0) {
    console.log(`Character ${keyValue[j]} is : ${count[keyValue[j]]}`);
  }
}
