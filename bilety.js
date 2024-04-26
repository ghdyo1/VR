let btn = document.querySelector("#buy");
let view = document.querySelector("#view");
let ticket = document.querySelector(".card img")
let warn = document.querySelector(".warn-wrapper");

function buy(){
    warn.style.animationName = "card-reveal";
}
function ticketView(){
    ticket.style.animationName = "card-reveal";
    view.style.display = "none";
    btn.style.display = "block";
}

btn.addEventListener("click", buy);
view.addEventListener("click", ticketView);