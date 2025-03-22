let vl=0

function inc(){
    let head=document.getElementById("head")
    vl++
    head.innerHTML=vl
}


function dec(){
    if(vl!=0){
        let head=document.getElementById("head")
        vl--
        head.innerHTML=vl
        }
        else{
            alert("stop")
        }
}

function sari1(){
    let img=document.getElementById("img1")
    img.src="2.jpg"
}

function sari2(){
    let img=document.getElementById("img1")
    img.src="3.jpg"
}

function sari3(){
    let img=document.getElementById("img1")
    img.src="4.jpg"
}

function sari4(){
    let img=document.getElementById("img1")
    img.src="5.jpg"
}

function sari5(){
    let img=document.getElementById("img1")
    img.src="12.jpg"
}