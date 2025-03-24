let ar = [
    {
        name:"saloni",
        attendence:98 ,
        productivity:"special",
    },
    {
        name:"ritika",
        attendence:97,
        productivity:"study",
    },
    {
        name:"vaishnavi",
        attendence:96 ,
        productivity:"coding",
    }
]
console.log(ar[1]);

ar.shift(
{
    name:"meera",
    attendence:93 ,
    productivity:"singing",
}
)
ar.unshift(
    {
        name:"meera",
        attendence:93 ,
        productivity:"singing",
    }
)
ar.push(
    {
      name:"meera",
    attendence:93 ,
    productivity:"singing",
    }
)
ar.pop(
    {
        name:"meera",
        attendence:93 ,
        productivity:"singing",
    }
)
// let newob = {
//          name:"sheju",
//         attendence:95 ,
//         productivity:"dancing",
// },
// ar.push(newob);

// console.log(ar);

let arname=ar.map((e)=>{return e.name})
console.log(arname);


let f1=ar.filter((e)=>{return e.attendence>93})
console.log(f1);