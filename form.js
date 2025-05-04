

/*

var fname = document.getElementById('name').value;
var lastname = document.getElementById('lastname').value;
var mobile = document.getElementById('mobile').value;
var email = document.getElementById('email').value;
var pwd = document.getElementById('pwd').value;
var confirmpwd = document.getElementById('confirmpwd').value;




  var namecheck = /^[A-Za-z]{3,30}$/ ;
  var pwdcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#@%$!&])(?=.*[a-zA-Z]).{8,}$/ ;
 var mobile =  /(0|91)?[6-9][0-9]{9}/ ;
var email = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/ ;
 var passwprd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&])(?=.*[a-zA-Z]).{8,}$/;



 */



const submitbtn = document.getElementById('submitbtn');
const nameerror = document.getElementById('nameerror');
const emailerror = document.getElementById('emailerror');
const lastnameerror = document.getElementById('lastnameerror');
const mobileerror = document.getElementById('mobileerror');
const gendererror = document.getElementById('gendererror');

const message =document.getElementById('message');




// deploy data in google sheet 

let url= 'https://script.google.com/macros/s/AKfycbzGpfCOVqM8nDcBXAZn4cbP00dZcjJHj5zprjYoGoIEkZELJi8teR1ePFDJNfqUpUKU/exec';
let formdata=document.querySelector('#formdata');



 formdata.addEventListener("submit",(e)=>{
  e.preventDefault();

  if(validateName() && validatelastname() && validateMobile() && validateEmail() && validatepwd() && validateconfirmpwd() && validategender() && validatecheckbox() ){
   
 e.target.submitbtn.innerHTML="Submitting....";

let d=new FormData(formdata);
fetch(url,{
  method:"POST",
  body:d
}).then((res)=>res.text())
.then((finalRes)=>{
  e.target.submitbtn.innerHTML="submit";
  //showing status of data submit
 alert(finalRes);


})
   
// empty data cell input after deployment;
   
  
   
    document.getElementById('fname').value ="";
    document.getElementById('lastname').value ="";
    document.getElementById('mobile').value ="";
    document.getElementById('email').value ="";
    document.getElementById('pwd').value ="";
    document.getElementById('confirmpwd').value ="";

  }


});



















// //submit form data in google sheet

// let url= 'https://script.google.com/macros/s/AKfycbyG-WDz1ke_HQaIEvBq-0KyF8EJSQrLh8yL51IigjrBIMDKLUmxHpT11hsFN7maIQDG/exec';

// let formdata=document.querySelector('#formdata');



// formdata.addEventListener("submit",(e)=>{

//   e.target.submitbtn.innerHTML="Submitting....";

// let d=new FormData(formdata);
// fetch(url,{
//   method:"POST",
//   body:d
// }).then((res)=>res.text())
// .then((finalRes)=>{
//   e.target.submitbtn.innerHTML="submit";
//   //showing status of data submit
//  alert(finalRes);


// })
// e.preventDefault();


// })















// submitbtn.addEventListener('click', (e)=>{
//   e.preventDefault();

//   if(validateName() && validatelastname() && validateMobile() && validateEmail() && validatepwd() && validateconfirmpwd() && validategender() && validatecheckbox() ){
//     document.getElementById('fname').value ="";
//     document.getElementById('lastname').value ="";
//     document.getElementById('mobile').value ="";
//     document.getElementById('email').value ="";
//     document.getElementById('pwd').value ="";
//     document.getElementById('confirmpwd').value ="";

//   }


// });

//first name validation


function validateName(){

        let fname = document.getElementById('fname').value;
        let namecheck = /^[A-Za-z]{3,30}$/ ;

        if(fname.length == 0){
          nameerror.innerHTML = "Name is required";
          return false;
        }
       if(!namecheck.test(fname)){
        nameerror.innerHTML="Name id invalid";

       return false;
        
       }
       nameerror.innerHTML="";
       return true;

}


//last name validation

 function validatelastname(){
  
  let lastname = document.getElementById('lastname').value;
  let lastnamecheck = /^[A-Za-z]{3,30}$/ ;

  if(lastname.length ==0){
    lastnameerror.innerHTML = "lastname is required";
    return false;
  }
 if(!lastnamecheck.test(lastname)){
  lastnameerror.innerHTML="lastname is invalid";

 return false;
  
 }
lastnameerror.innerHTML="";
 return true;

}



// mobile number validation

function validateMobile(){
  
  let mobile = document.getElementById('mobile').value;
  let mobilecheck = /(0|91)?[6-9][0-9]{9}/ ;

  if(mobile.length ==0){
    mobileerror.innerHTML = "mobile number is required";
    return false;
  }
 if(!mobilecheck.test(mobile)){
  mobileerror.innerHTML="mobile number is invalid";

 return false;
  
 }
mobileerror.innerHTML="";
 return true;

}


// validate gender

function validategender(){
  let radio1 = document.getElementById('male');
  let radio2 = document.getElementById('female');

  if(radio1.checked){
   gendererror.innerHTML = "";
   return true;
}
else if(radio2.checked){
   gendererror.innerHTML = "";
   return true;
}

else{
 gendererror.innerHTML = " gender required";
 return false
}


}




// validate email address
 function validateEmail(){


  let email = document.getElementById('email').value;
  let emailcheck = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;

  if(email.length ==0){
    emailerror.innerHTML = "email is required";
    return false;
  }
 if(!emailcheck.test(email)){
  emailerror.innerHTML="email is invalid";

 return false;
  
 }
emailerror.innerHTML="";
 return true;


 }


 // validate password


 function validatepwd(){


  let pwd = document.getElementById('pwd').value;
  let pwdcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&])(?=.*[a-zA-Z]).{8,}$/;

  if(pwd.length == 0){
    pwderror.innerHTML = "pwd is required";
    return false;
  }
 if(!pwdcheck.test(pwd)){
  pwderror.innerHTML="pwd is invalid";

 return false;
  
 }
pwderror.innerHTML="";

 return true;






}


// confirm password 

function validateconfirmpwd(){

  let repwd = document.getElementById('pwd').value;
  let confirmpwd = document.getElementById('confirmpwd').value;
  let confirmpwdcheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&])(?=.*[a-zA-Z]).{8,}$/;

  if(confirmpwd.length == 0){
    confirmpwderror.innerHTML = "confirmpwd is required";
    return false;
  }
 if(repwd!=confirmpwd){
  confirmpwderror.innerHTML="Password not match";

 return false;
  
 }
confirmpwderror.innerHTML="";
 return true;

}

//validate checkbox
function validatecheckbox(){
 let checkbox = document.getElementById('check');

 if(!checkbox.checked){
  alert("Please agree term & condition");
  return false;
 }
else{

 return true;
}
}


