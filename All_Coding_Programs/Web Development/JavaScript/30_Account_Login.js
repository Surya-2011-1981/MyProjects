let otpInput=(otp)=>{
    if(otp==5678)
    {
        alert("Logged in SuccessFully........!");
        
    }
    else{
        alert("Invalid OTP........!");
    }

}
let passInput=(pass,otpInputCallback)=>{
    if(pass=1234)
    {
        alert("Password Matched.....!")
    }
    else{
        alert("Sorry Password doesn't Match");
    }
}
let IdInput=(id,passInputCallback)=>{
    if(id=="surya")
    {
        alert("Your Id Found Successfully");
    }
    else{
        alert("Sorry Your id doesn't found in database");
    }
}

let main=(n,IdInput)=>{
    IdInput(n);

}

main()