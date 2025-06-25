// const now = new Date();
// const ist = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
// const dd = String(ist.getDate()).padStart(2, '0');
// // const mm = String(ist.getMonth() + 1).padStart(2, '0');
// // const yyyy = ist.getFullYear();
// // const today = `${dd}/${mm}/${yyyy}`;
// // console.log(now);
// console.log(typeof (now));
// console.log(typeof (dd));


const now = new Date();

// Default output (no toLocaleString)
console.log("Default (UTC or local server time):", now);

// Using toLocaleString() without timezone
console.log("toLocaleString() default:", now.toLocaleString());

// Using toLocaleString() with IST
console.log("toLocaleString() with IST:", now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
