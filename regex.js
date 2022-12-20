function validation() {
     let username = document.getElementById('username').value;
     let email = document.getElementById('email').value;
     let blood_group = document.getElementById('blood_group').value;
     let phone_number = document.getElementById('phone_number').value;
     

     let usernamecheck = /^[a-zA-Z0-9]{3,30}$/;
     let emailcheck =  /^[a-zA-Z0-9_.]{3,20}@[A-Za-z]{3,}[.]{1}[A-Za-z]{3,8}$/
     let phonecheck = /^[789][0-9]{9}$/
     let bloodcheck = /^[aboABO]{1,}[+-]$/

     if (usernamecheck.test(username)){
        document.getElementById('usererror').innerHTML = "" ;
     }else{
        document.getElementById('usererror').innerHTML ="**User Name Is Invaild" ;
        return false;
     }
     
     if (emailcheck.test(email)){
        document.getElementById('emailerror').innerHTML = "" ;
     }else{
        document.getElementById('emailerror').innerHTML ="**Email Is Invaild" ;
        return false;
     }
     
     if (bloodcheck.test(blood_group)){
        document.getElementById('blooderror').innerHTML = "" ;
     }else{
        document.getElementById('blooderror').innerHTML ="**blood group Is Invaild" ;
        return false;
     }

     if (phonecheck.test(phone_number)){
        document.getElementById('phoneerror').innerHTML = "" ;
     }else{
        document.getElementById("phoneerror").innerHTML ="**Phone Number Is Invaild" ;
        return false;
     }


     
}