const _ = require("lodash");

// const arr = [1, 2, 3, 4, '1', '2', 'hello', '1', 'name', true, 'true', '2', 1, 3, 4, 2];


// // Uniq method
// const unique = _.uniq(arr);
// console.log(unique);


// // Chunk Method
// const chunk = _.chunk(arr, 3);
// console.log(chunk);
// console.log(chunk[2]);


// Convert json to object and object to json
// json --> object
// object --> json

const jsonString = '{"name":"John", "age": 20, "city": "Koderma" }';
console.log(jsonString);
console.log(jsonString.name);
const jsonData = JSON.parse(jsonString);
console.log(jsonData);
console.log(jsonData.name);
