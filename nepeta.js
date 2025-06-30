// phoebe faith 2025
// Technically this does more than just make nepeta follow your cursor, but it's primarily nepeta.
// You can't fight the Homestuck.

let nepeta = document.querySelector(".nepeta");
let style = document.querySelector("#style");
let homestuck = document.querySelector("#homestuck");
let nepetaToggler = document.querySelector("#nepetaToggler");
let nepeta_follow = false;

let styleToggle = false;
let styleToggleValue = 0;
let styleToggler = false;
let x = 0;
let y = 0;

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
    slide(nepeta, y - 50, x - 35);
    nepeta.style.display = nepeta_follow ? "block" : "none"
}
window.onload = function() {
    nepetaToggler.addEventListener("mouseover", function() {
        styleToggler = true;
    })
    nepetaToggler.addEventListener("mouseleave", function() {
        styleToggler = false;
    })

    setInterval(() => {
        if(styleToggler) {
            if(styleToggleValue === 2) {
                styleToggle = !styleToggle;
                homestuck.disabled = !styleToggle;
                element.src = styleToggle ? "/images/wompstuck.png" : "/logo.svg";
                tag.innerText = styleToggle ? "I WARNED YOU ABOUT THE STAIRS BRO!!!!" : possible_taglines[Math.floor(Math.random() * possible_taglines.length)];
            }
            styleToggleValue++;
        } else {
            styleToggleValue = 0;
        }
    }, 500);
}

