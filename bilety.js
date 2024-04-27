let btn = document.querySelector("#buy");
let btn2 = document.querySelector("#buy2");
let view = document.querySelector("#view");
let view2 = document.querySelector("#view2");
let ticket = document.querySelector("#ticketID")
let bubli = document.querySelector("#bubliID")
let warn = document.querySelector(".warn-wrapper");

function buy(){
    warn.style.animationName = "card-reveal";
    ticket.animationName = "card-reveal";
}
function buy2(){
    warn.style.animationName = "card-reveal";
    bubli.animationName = "card-reveal";
}
function ticketView(){
    ticket.style.animationName = "card-reveal";
    view.style.display = "none";
    btn.style.display = "block";
}
function bubliView(){
    bubli.style.animationName = "card-reveal";
    view2.style.display = "none";
    btn2.style.display = "block";
}

btn.addEventListener("click", buy);
btn2.addEventListener("click", buy2);
view.addEventListener("click", ticketView);
view2.addEventListener("click", bubliView);