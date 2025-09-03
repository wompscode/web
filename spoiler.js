// phoebe faith 2025
// display toggles

function toggle(element) {
    let el = document.querySelector(element);
    if(el.style.display === "none") {
        el.style.display = "revert";
    } else {
        el.style.display = "none";
    }
}