var user_records=new Array();

user_records = JSON.parse(localStorage.getItem("users"));

// console.log(user_records[0].Fname);

// alert(email)

console.log(user_records[1].email);

document.getElementById("submit").addEventListener("click",(event)=>{
    
    if(!user())
    {
            event.preventDefault();
   }
})
function user(){
    for(let i = 0; i<user_records.length; i++) {
        if( document.getElementById("Lemail").value == user_records[i].email && document.getElementById("Lpassword").value == user_records[i].password){
         {
            return true;
         }
        }
        
     return false
}
}