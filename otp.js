function generateOTP() {
    let otp = Math.floor(100000 + Math.random() * 999999);
    console.log(" OTP is : " + otp);
}

generateOTP();