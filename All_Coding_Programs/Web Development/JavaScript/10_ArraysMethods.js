arr=[10,20,30,40,70,60,50]
console.log(` Original Array ${arr}`);
console.log(typeof arr.toString())
console.log("\nArray Join Method "+arr.join("-"))
console.log("\nArray pop Method "+arr.pop())
console.log("\nValue After Popping "+arr)
console.log("\nArray push Method Return Modified Size "+arr.push(50))
console.log("\nValue After Push "+arr)
console.log("\nArray Join Method "+arr.shift())
console.log("\nValue After Shift"+arr)
console.log("\nArray Unshift Method return size of modified array "+arr.unshift(10))
console.log("\nValue After Unshift Method "+arr)
delete arr[5];
console.log("\nValue After deleting element "+arr)
console.log("\nValue of arr[5] After deleting element "+arr[5])
console.log("\nArray Reverse Method "+arr.reverse())
// console.log(arr.join())