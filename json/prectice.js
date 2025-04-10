// let fetchData=()=>{
//     let url='http://localhost:3000/whatsapp'
//     let res=fetch(url)
//     console.log(res);
// }
// fetchData()





// let fetchData=async()=>{
    //    let url='http://localhost:3000/whatsapp'
    //    let res= await fetch(url)
    //    console.log(res);
// }
// fetchData()




let fetchData=async()=>{
    let url='http://localhost:3000/whatsapp'

    let res= await fetch(url,{method:"GET"})

    let data=await res.json()


    console.log(data);

    let show=document.getElementById('datashow')
    data.map((e)=>{
        show.innerHTML+=`
        
          <tr>
          <td>${e.name}</td>
            <td>${e.age}</td>
              <td>${e.adharno}</td>
                <td>${e.checkin}</td>
                  <td>${e.chechout}</td>
                    <td>${e.mobileno}</td>
                      <td>${e.country}</td>
                        <td>${e.person}</td>
                          <td>${e.price*e.person}</td>
                            <td onclick="del('${e.id}')">Delete</td>
                               <td onclick="Formfill('${e.id}')">update</td>
          </tr>
        `
    })
}



let del=(id)=>{

    let url=`http://localhost:3000/whatsapp/${id}`

    fetch(url,{method:"DELETE"} )
}

    
let book=()=>{
    let inpname=document.getElementById('name').Value
    let inpage=document.getElementById('age').Value
    let inpaadharno=document.getElementById('aadharno').Value
    let inpcheckin=document.getElementById('checkin').Value
    let inpcheckout=document.getElementById('checkout').Value
    let inpmobileno=document.getElementById('mobileno').Value
    let inpcountry=document.getElementById('country').Value
    let inpperson=document.getElementById('person').Value

    let url="http://localhost:3000/whatsapp"

    fetch(url,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(
            {
                "name":inpname,
                "age":inpage,
                "aadharno":inpaadharno,
                "checkin":inpcheckin,
                "checkout":inpcheckout,
                "mobileno":inpmobileno,
                "country":inpcountry,
                "peson":inpperson,
                "price":500
            }
        )
    })

    location.href="prectice.html"
    return false

}



let FormFill=async(id)=>{
    let url=`http://localhost:3000/whatsapp/${id}`
    let res= await fetch(url,{method:"GET"})
    let data=await res.json()
    console.log(data);


    let FormData=document.getElementById("data2")
    FormData.innerHTML=`
    
        Enter name: <input type="text" id="upname" value="${data.name}><br><br>
        Enter age: <input type="number" id="upage" value="${data.age}><br><br>
        Enter aadharno: <input type="text" id="upaadharno" value="${data.aadharno}><br><br>
        Enter checkin: <input type="date" id="upcheckin" value="${data.checkin}><br><br>
        Enter checkout: <input type="date" id="upcheckout" value="${data.checkout}><br><br>
        Enter mobileno: <input type="text" id="upmobileno" value="${data.mobileno}><br><br>
        choose country:
        <select id="upcountry" value="${data.country}>
            <option value="india">india</option>
            <option value="india">china</option>
            <option value="india">usa</option>
            <option value="india">nepal</option>
            <option value="india">canada</option>
        </select><br><br>
        Enter person:<input type="text" id="upperson" value="${data.person}><br><br>
        <input type="submit" value="update now" onclick="return FinalUpdate ('${data.id}')">

    `
}



let FinalUpdate=(id)=>{
    let inpname=document.getElementById('upname').Value
    let inpage=document.getElementById('upage').Value
    let inpaadharno=document.getElementById('upadhar').Value
    let inpcheckout=document.getElementById('upcheckin').Value
    let inpmobileno=document.getElementById('upmobile').Value
    let inpcountry=document.getElementById('upcountry').Value
    let inpperson=document.getElementById('upperson').Value
    
    let url=`http://localhost:3000/whatsapp/${id}`

    fetch(url,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(
            {
                "name":inpname,
                "age":inpage,
                "aadharno":inpaadharno,
                "checkin":inpcheckin,
                "checkout":inpcheckout,
                "mobileno":inpmobileno,
                "country":inpcountry,
                "person":inpperson,
                "price":500
            }
        )
    })

    location.href="prectice.html"
    return false
}