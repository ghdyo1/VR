let btn = document.querySelector("#buy");
let warn = document.querySelector(".warn-wrapper");

function buy(){
    warn.style.animationName = "card-reveal";
}

btn.addEventListener("click", buy);