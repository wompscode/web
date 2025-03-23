// for index.html
function ffxiv_onme() {
    document.querySelector("#ffxiv").innerHTML = "Have you heard of the critically acclaimed MMORPG Final Fantasy XIV with an expanded free trial which you can play through the entirety of A Realm Reborn and the award winning Heavensward expansion and also award winning Stormblood expansion up to level 70 for FREE with no restrictions on playtime? Sign up, and enjoy Eorzea today!  <a href='https://secure.square-enix.com/account/app/svc/ffxivregister'> https: //secure.square-enix.com/account/app/svc/ffxivregister</a>";
}

function ffxiv_onml() {
    document.querySelector("#ffxiv").innerText = "Final Fantasy XIV (Materia DC, Sophia)";
}

// across all pages
const tag = document.querySelector('#tag');
const possible_taglines = ["can be trusted with nuclear weaponry (probably)", "will preach final fantasy xiv to you", "5 years in a row as CIA's \"Best Gangstalker\"", "Remove objects from space", "I'm literally a fool, what's your excuse?", "1 prawn tile please", "This message could not be decrypted.", "God couldve made me autistic in literally anything else"];
tag.innerText = possible_taglines[Math.floor(Math.random() * possible_taglines.length)];
tag.addEventListener('click', () => tag.innerText = possible_taglines[Math.floor(Math.random() * possible_taglines.length)]);