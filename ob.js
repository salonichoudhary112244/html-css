
// object + function + arrey
let ob= {
    name:"saloni",
    contact:1234,
    obfun:function () {
        alert("working")
    },
    car:["BMWE","AUDI","SIFT"],
  }
  
  ob.obfun()
  console.log(ob.car[1]);

// object merge
let ob1={
    name:"saloni",age:20,contact:123321,
}
let ob2={
    city:"bpl",state:"mp",
}
let ob3={
    ...ob1,...ob2
}
console.log(ob3);

// and

let ob4={
    name:"saloni",age:20,contact:123321,
}
let ob5={
    city:"bpl",state:"mp",...ob4,
}
console.log(ob5);

// element add

let ob6={
    name:"saloni",age:20,contact:123321,
}
let ob7={
    city:"bpl",state:"mp",...ob6,
}
ob7.email="saloni@gmail"
console.log(ob7);

// update 

let ob8={
    name:"saloni",age:20,contact:123321,
}
let ob9={
    city:"bpl",state:"mp",...ob8,
}
ob9.city="indor"
console.log(ob9);


// delete

let ob10={
    name:"saloni",age:20,contact:123321,
}
let ob11={
    city:"bpl",state:"mp",...ob10,
}
delete ob11.state
console.log(ob11);

// for in loop

let person={
    name:"saloni",
    city:"indor",
    contact:123,
}

for(let k in person){
    console.log(k);
}

// ley ki value print
let person1={
    name:"saloni",
    city:"indor",
    contact:123,
}

for(let k in person1){
    console.log(person1[k]);
}


// object.keys
let person2={
    name:"saloni",
    city:"indor",
    contact:123,
}
let k=Object.keys(person2)

console.log(k[0]);

// value

let person3={
    name:"saloni",
    city:"indor",
    contact:123,
}
let k1=Object.values(person3)

console.log(k1[0]);
