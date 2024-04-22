let video1 = document.querySelector("video:first-child");
let video2 = document.querySelector("video:last-child");
let btn = document.querySelector("#btn");
let timerP = document.querySelector("#timerP");
let timerValue = 19;

function end(){
    video1.pause();
    video2.pause();
    video1.style.filter = "brightness(0)";
    video2.style.filter = "brightness(0)";
}
function tick(){
    timerP.innerHTML = "Таймер: " + timerValue;
    if(timerValue <= 0){
        end();
        clearInterval(timer);
    }
    timerValue = timerValue - 1;
}
function trial(){
    video1.play();
    video2.play();
    btn.style.display = "none";
    let timer = setInterval(tick, 1000);
}

btn.addEventListener("click", trial);