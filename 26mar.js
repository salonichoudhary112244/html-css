localStorage.setItem("username","saloni")
localStorage.setItem("age",20)
localStorage.setItem("contact",12345)

let name=localStorage.getItem("username")
console.log(name);


localStorage.removeItem("username")


localStorage.clear()


let ob={
    name:"saloni",contact:123321,age:20,
}
localStorage.setItem("userdata",JSON.stringify(ob))

let user=localStorage.getItem("userdata")
console.log(user)

let user1=(JSON.parse(localStorage.getItem("userdata")))
// console.log(user1)

console.log(user1.name);
