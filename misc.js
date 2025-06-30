// phoebe faith 2025
// holds some misc content

const sfxOFF = ["/offsfx/strike02.ogg","/offsfx/switch2.ogg","/offsfx/Global.ogg","/offsfx/idle.ogg"];
const sfxBalatro = ["/balatrosfx/multhit2.ogg","/balatrosfx/polychrome1.ogg","/balatrosfx/voice3.ogg", "/balatrosfx/win.ogg"];
let offAudio = new Audio(sfxOFF[Math.floor(Math.random() * sfxOFF.length)]);
let balatroAudio = new Audio(sfxBalatro[Math.floor(Math.random() * sfxBalatro.length)]);
let pry = new Audio("/ultrasfx/parry.ogg");
let whatup = new Audio("/bonesfx/brett_greetings0.wav");
function playOFF() {
    // sfx by Mortis Ghost and Alias Conrad Coldwood.
    // I love your game guys please dont kill meeee
    offAudio.src = sfxOFF[Math.floor(Math.random() * sfxOFF.length)];
    offAudio.play();
}

function playBalatro() {
    // sfx by Localthunk
    // I love your game so much, it's my lecturers fault for getting me into it. You're like a virtual crack dealer.
    balatroAudio.src = sfxBalatro[Math.floor(Math.random() * sfxBalatro.length)];
    balatroAudio.play();
}

function parry() {
    // sfx by Hakita (/New Blood ULTRAKILL Team)
    pry.play();
}

function whatupson() {
    // sfx by SLZ
    whatup.play();
}