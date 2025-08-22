// login button functionality
document.getElementById('loginButton').addEventListener('click',function (e) {
    const mobileNumber=12345;
    const pinNumber=1234;
    const mobileNumberValue=document.getElementById('mobile-number').value;
    const mobileNumberConverted=parseInt(mobileNumberValue);
    const pinNumberValue=document.getElementById('pin-number').value;
    const pinNumberConverted=parseInt(pinNumberValue);

    if(mobileNumber==mobileNumberConverted && pinNumber==pinNumberConverted) {
        window.location.href='./home.html';
    }
    else{
        alert("Invalid Credentials");
    }

}); 