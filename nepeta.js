// phoebe faith 2025
// Technically this does more than just make nepeta follow your cursor, but it's primarily nepeta.
// You can't fight the Homestuck.

let nepeta = document.querySelector(".nepeta");
let style = document.querySelector("#style");
let homestuck = document.querySelector("#homestuck");
let nepetaToggler = document.querySelector("#nepetaToggler");
let nepeta_follow = false;
let homestuckToggle = false;

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
    if(switchoff === true) return;
    nepeta_follow = !nepeta_follow;
    slide(nepeta, y - 50, x - 35);
    nepeta.style.display = nepeta_follow ? "block" : "none"
}

function toggleHS() {
    if(switchoff === true) return;

    if(window.homestuckEasterEgg !== undefined) {
        clearTimeout(window.homestuckEasterEgg);
    }
    homestuckToggle = !homestuckToggle;
    homestuck.disabled = !homestuckToggle;
    element.src = homestuckToggle ? "/images/wompstuck.png" : "/logo.svg";
    tag.innerText = homestuckToggle ? "I WARNED YOU ABOUT THE STAIRS BRO!!!!" : possible_taglines[Math.floor(Math.random() * possible_taglines.length)];
}


window.onload = function() {
    if(nepetaToggler != null) {
        nepetaToggler.addEventListener("mouseover", function() {
            if(window.homestuckEasterEgg !== undefined) {
                clearTimeout(window.homestuckEasterEgg);
            }
            window.homestuckEasterEgg = setTimeout(toggleHS, 2000);
        })
        nepetaToggler.addEventListener("mouseleave", function() {
            if(window.homestuckEasterEgg !== undefined) {
                clearTimeout(window.homestuckEasterEgg);
            }
        })
    }

    document.body.addEventListener("mousemove", cursorData);
}

