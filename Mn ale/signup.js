

var user_records=new Array();
document.getElementById("btn").addEventListener("click",()=>{

       
user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]

var Fname = document.getElementById("Fname").value;
var Lname = document.getElementById("Lname").value;
var password = document.getElementById("password").value;
var password1 = document.getElementById("password1").value;
var gender = document.getElementById("gender").value;
var email = document.getElementById("email").value;
var phoneNo = document.getElementById("phoneNo").value;
var address = document.getElementById("address").value;
var postalcode = document.getElementById("postalcode").value;
var check = document.getElementById("check").checked;
var pat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

if(Fname == ""){
    alert("can't live empty first name")
}
else if(Lname == ""){
    alert("can't live empty last name")
}
else if(password == ""){
    alert("can't live empty password")
}
else if(password1 == ""){
    alert("you must confirm your password")
}
else if(postalcode == ""){
    alert("can't live empty postalcode")
}
else if(gender == ""){
    alert("you must enter your gender")
}
else if(pat.test(email) == false){
    alert("Not a valid email")
}
else if(phoneNo == ""){
    alert("can't live empty phone number")
}
else if(address == ""){
    alert("can't live empty first address")
}
else if(password != password1){
    alert("password do not much")
}
else if(check != true){
    alert("please agree to terms")
}
else {
    
if(user_records.some((v)=>{return v.email==email}))
{
  alert("The email is already used");
}
else
{
  user_records.push({
  "Fname":Fname,
  "Lname":Lname,
  "gender":gender,
  "phoneNo":phoneNo,
  "address":address,
  "check":check,
  "postalcode":postalcode,
  "email":email,
  "password":password
})
localStorage.setItem("users",JSON.stringify(user_records));
}
}
})
