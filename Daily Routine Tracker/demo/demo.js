// const now = new Date();
// const ist = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
// const dd = String(ist.getDate()).padStart(2, '0');
// // const mm = String(ist.getMonth() + 1).padStart(2, '0');
// // const yyyy = ist.getFullYear();
// // const today = `${dd}/${mm}/${yyyy}`;
// // console.log(now);
// console.log(typeof (now));
// console.log(typeof (dd));


// const now = new Date();

// // Default output (no toLocaleString)
// console.log("Default (UTC or local server time):", now);

// // Using toLocaleString() without timezone
// console.log("toLocaleString() default:", now.toLocaleString());

// // Using toLocaleString() with IST
// console.log("toLocaleString() with IST:", now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));


let a = { a: 1, b: 2 };
let b1 = { c: 3, d: 4 };
let c = { ...a, ...b1 };
console.log(c);


delete c.a;
console.log(c);

let { b, ...newOb } = c;
console.log(newOb);