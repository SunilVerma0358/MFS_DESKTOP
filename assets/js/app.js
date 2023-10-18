// preloader
const preloader = document.getElementById("preloader")
setTimeout(() => {
    document.getElementById("preloder").classList.add("d-none");
    document.body.classList.remove("overflow-hidden")
}, 2000)
// back to top
function backtotop() {
    window.scroll(0, 0)
}
window.addEventListener("scroll", function () {
    let backtotop = document.getElementById("backtotop")
    if (window.scrollY > 500) {
        backtotop.style.display = "block"
    } else {
        backtotop.style.display = "none"
    }
})
// navbar
let view = document.querySelector(".view");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");

function navbar() {
    view.classList.toggle("end-0");
    span1.classList.toggle("crossLine1");
    span2.classList.toggle("crossLine2");
    span3.classList.toggle("d-none");
    document.querySelector("body").classList.toggle("overflow-hidden");
}

function navbar2() {
    view.classList.toggle("end-0");
    span1.classList.toggle("crossLine1");
    span2.classList.toggle("crossLine2");
    span3.classList.toggle("d-none");
    document.querySelector("body").classList.remove("overflow-hidden");
}