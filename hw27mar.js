function form(){
    let username=document.querySelector("#username").value
    let password=document.querySelector("#password").value

    let ob={
        name:username,
        pass:password
    }

    localStorage.setItem("userdata",JSON.stringify(ob))
    console.log(ob)
}