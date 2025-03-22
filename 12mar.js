let arr=[1,2,3,4,5,6,7]
// arr.push("second")
// arr.push("first")
// console.log(arr);

// arr.unshift("first","second")
// console.log(arr)


// arr.pop()
// console.log(arr)

// arr.shift()
//  console.log(arr)

// let part=arr.slice(1,7)
// console.log(part)

let part=arr.slice(1,6)
 console.log(part)
for(let part of arr){
    if(part%2==0){
        console.log("even")
    }

    else{
        console.log("odd")
    }
}

