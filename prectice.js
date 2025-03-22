// let head=document.getElementById("head")
// head.style.background="red"
// head.style.color="white"
// head.style.textAlign="center"

// let img=document.getElementById("img1")
// img.src="2.jpg"

// let para=document.getElementById("para")
// para.innerHTML="hello"

// let btn=document.getElementById("btn")
// btn.style.color="pink"



// let celement=document.createAttribute("h1")
// celement.textContent="hello"
// let bd=document.body
// bd.append(celement)


// let headh2=document.createAttribute('h2')
// headh2.textContent="welldone"
// bd.append(headh2)

//  bd.setAttribute('bgcolor','yellow')
//  celement.setAttribute('align','center')

let timer;
let isRunning=false;
let minutes=0;
let seconds=0;

const timeDisplay=document.getElementById("time");
const startstopButton=document.getElementById("startstop");
const resetButton=document.getElementById("reset");


function updateTimeDisplay(){
    const formattedMinutes=minutes<10?"0"+minutes:minutes;
    const formattedSeconds=seconds<10?"0"+seconds:seconds;
    timeDisplay.textContent=`${formattedMinutes}:${formattedSeconds}`;

}

startstopButton.addEventListener("click",function())