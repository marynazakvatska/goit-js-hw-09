

let timeIntervalId = null;
const DELAY = 1000;

const startBtn = document.querySelector('button[data-start]');
console.log(startBtn.dataset); 

const stopBtn = document.querySelector('button[data-stop]');
console.log(stopBtn.dataset); 

/* const bodyEl = document.querySelector("body") */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

startBtn.addEventListener('click', function onClick(e) {
      e.currentTarget.disabled = true;
    stopBtn.disabled = false
   timeIntervalId = setInterval(function () {
       document.body.style.backgroundColor = getRandomHexColor();
       
    }, DELAY)
  
} )

stopBtn.addEventListener('click', function onClickStop(e) {
    clearInterval(timeIntervalId) 
    e.currentTarget.disabled = true;
    startBtn.disabled = false
} )

