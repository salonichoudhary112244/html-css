// let fetchData=()=>{
//     let url='http://localhost:3000/whatsapp'
//     let res=fetch(url)
//     console.log(res);

// }

// fetchData()=async()=>{
//     let url='http://localhost:3000/whatsapp'

//     let res=await fetch(url)

//     console.log(res);

// }
// fetchData()


let fetchData=async()=>{
    let url='http://localhost:3000/whatsapp'
    let res =await fetch(url,{method:"GET"})
    let data =await res.json()
    console.log(data);

    let show =document.getElementById('datashow')
    data.map((e)=>{
        show.innerHTML+=`
        <tr>
        <td>${e.name}</td>
        <td>${e.age}</td>
        <td>${e.adharn0}</td>
        <td>${e.checkin}</td>
        <td>${e.checkout}</td>
        <td>${e.person}</td>
        <td>${e.price}</td>
        </tr>
        `
    })
}
fetchData()
