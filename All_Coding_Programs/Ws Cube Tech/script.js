let username_input=(username,callback)=>{
    console.log("Your UserName is ",username);
    callback();
}

let password=(pass)=>{
console.log("Password is ",pass);
}

let login=(callback)=>{
callback();
}

login(()=>{
    username_input("surya",()=>{
        password(12345);
    })
})
