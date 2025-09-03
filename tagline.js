// phoebe faith 2025
// I didn't rewrite this one, it just has its own file now.

let timesLoaded = localStorage["timesLoaded"] || 0;
timesLoaded++;
localStorage["timesLoaded"] = timesLoaded;

const tag = document.querySelector('#tagline');
const possible_taglines = [
    "can be trusted with nuclear weaponry (probably)",
    "will preach final fantasy xiv to you",
    "5 years in a row as CIA's \"Best Gangstalker\"",
    "Remove objects from space",
    "I'm literally a fool, what's your excuse?",
    Math.random() < 0.9 ? "1 prawn tile please" : `${timesLoaded} prawn tile${timesLoaded === 1 ? "" : "s"} please`,
    "This message could not be decrypted.",
    "God couldve made me autistic in literally anything else",
    "I WARNED YOU ABOUT THE STAIRS BRO!!!!!",
    "You can't fight the Homestuck.",
    "uhhhhhhhhh yeaj",
    "Reticulating splines",
    "IF YOU'RE READING THIS, YOU'VE BEEN IN A COMA FOR ALMOST 20 YEARS NOW.",
    "I've come to make an announcement: Shadow the Hedgehog's a bitch ass motherfucker",
    timesLoaded >= 2 ? `you've been here ${timesLoaded} time${timesLoaded === 1 ? "" : "s"}! isn't that cool?` : "this is your first time here! welcome!"];

if(navigator.userAgent.indexOf("Firefox") > -1) {
    possible_taglines.push("I like Firefox too :)")
}

tag.innerText = possible_taglines[Math.floor(Math.random() * possible_taglines.length)];
tag.addEventListener('click', () => tag.innerText = possible_taglines[Math.floor(Math.random() * possible_taglines.length)]);