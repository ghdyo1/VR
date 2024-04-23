let video1 = document.querySelector(".vid:first-child");
let video2 = document.querySelector(".vid:last-child");
let btn = document.querySelector("#btn");
let timerP = document.querySelector("#timerP");
let timerValue = 19;
let buy1 = document.querySelector("#buy1");
let buy2 = document.querySelector("#buy2");
let buy3 = document.querySelector("#buy3");
let warn = document.querySelector(".warn-wrapper")

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
function muhosransk(){
    warn.style.animationName = "card-reveal";
}

btn.addEventListener("click", trial);
buy1.addEventListener("click", muhosransk);
buy2.addEventListener("click", muhosransk);
buy3.addEventListener("click", muhosransk);