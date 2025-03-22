function validate(){
    let name=document.querySelector("#name").value
    let age=document.querySelector("#age").value
    let email=document.querySelector("#email").value
    let pass=document.querySelector("#pass").value
    let contact=document.querySelector("#contact").value

     if(name==""){
        alert("pleass inputn your name")
        // let error=document.querySelector("#errorname")
        // error.innerHTML="enter"
        document.querySelector("#name").focus()
        return false
     }
     else if(email==""){
        alert("please fill email")
        document.querySelector("#email").focus()
        return false
     }
     else if(!(email.include('@'))){
        alert('plese valid email')
        document.querySelector("#email").focus()
        return false
     }
     else if(age==""){
        alert("please fill age")
        document.querySelector("#age").focus()
        return false
     }
   else if(isNaN(age)){
    alert|("please enter num")
    document.querySelector("#age").focus()
    return false
   }
 else if(pass==""){
    alert("please fill pass")
    document.querySelector("#pass")
    return false
 }
 else if(!(pass.match(/[!@#$%^&*]/))){
    alert("plese special ")
    document.querySelector("#pass").focus()
    return false
 }
 else if(contact==""){
    alert("plese fill no")
    document.querySelector("#contact").focus()
    return false
 }
 else if(isNaN(contact)){
    alert("plese fill no")
    document.querySelector("#contact").focus()
    return false
 }
else if(contact.length>10 || contact.length<10){
    alert("plese fill no")
    document.querySelector("#contact").focus()
    return false
}

}