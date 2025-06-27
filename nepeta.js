var nepeta = document.querySelector(".nepeta")
var nepeta_follow = false;

var x = 0;
var y = 0;


function slide(_, top, left) {
    if(top) _.style.top = top+"px";
    if(left) _.style.left = left+"px";
}

function cursorData(event) {
    x = event.pageX;
    y = event.pageY;
    if(nepeta_follow === true) slide(nepeta, y - 50, x - 35);
}

function toggleNepeta() {
    nepeta_follow = !nepeta_follow;
    nepeta.style.display = nepeta_follow ? "block" : "none"
}