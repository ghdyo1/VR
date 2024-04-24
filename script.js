let video1 = document.querySelector(".vid:first-child");
let video2 = document.querySelector(".vid:last-child");
let btn = document.querySelector("#btn");
let timerP = document.querySelector("#timerP");
let timerValue = 19;
let buy1 = document.querySelector("#buy1");
let buy2 = document.querySelector("#buy2");
let buy3 = document.querySelector("#buy3");
let warn = document.querySelector(".warn-wrapper")
let view1 = document.querySelector("#view1");
let view2 = document.querySelector("#view2");
let view3 = document.querySelector("#view3");
let vr2 = document.querySelector(".vr2");
let vr3 = document.querySelector(".vr3");
let vrpro = document.querySelector(".vrpro");
let rickrolls = document.querySelector(".vr img");

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
function viewFunc1(){
    view1.style.display = "none";
    buy1.style.display = "inline-block";
    vr2.style.animationName = "card-reveal";
    rickrolls.style.animationName = "rickroll";
}
function viewFunc2(){
    view2.style.display = "none";
    buy2.style.display = "inline-block";
    vr3.style.animationName = "card-reveal";
}
function viewFunc3(){
    view3.style.display = "none";
    buy3.style.display = "inline-block";
    vrpro.style.animationName = "card-reveal";
}

btn.addEventListener("click", trial);
buy1.addEventListener("click", muhosransk);
buy2.addEventListener("click", muhosransk);
buy3.addEventListener("click", muhosransk);
view1.addEventListener("click", viewFunc1);
view2.addEventListener("click", viewFunc2);
view3.addEventListener("click", viewFunc3);