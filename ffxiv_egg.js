// phoebe faith 2025
// Finds all elements with the class .ffxiv and adds mouseenter/mouseleave events to replace them with the Greatest Copypasta Ever

const elements = document.querySelectorAll(".ffxiv");

function enter(element) {
    if(switchoff === true) return;

    element.target.innerHTML = "Have you heard of the critically acclaimed MMORPG Final Fantasy XIV with an expanded free trial which you can play through the entirety of A Realm Reborn and the award winning Heavensward expansion and also award winning Stormblood expansion up to level 70 for FREE with no restrictions on playtime? Sign up, and enjoy Eorzea today!";
    element.target.classList.add("active");
}

function exit(element) {
    if(switchoff === true) return;

    element.target.innerHTML = "Final Fantasy XIV Online";
    element.target.classList.remove("active");

}

for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = "Final Fantasy XIV Online";
    elements[i].addEventListener("mouseenter", enter);
    elements[i].addEventListener("mouseleave", exit);
}