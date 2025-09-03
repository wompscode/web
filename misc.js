// phoebe faith 2025
// holds some misc content
//

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
    offAudio.volume = 0.1;
    offAudio.play();
}
function playBalatro() {
    // sfx by Localthunk
    // I love your game so much, it's my lecturers fault for getting me into it. You're like a virtual crack dealer.
    balatroAudio.src = sfxBalatro[Math.floor(Math.random() * sfxBalatro.length)];
    balatroAudio.volume = 0.1;
    balatroAudio.play();
}

function parry() {
    // sfx by Hakita (/New Blood ULTRAKILL Team)
    // i thought this was funny, and i am 1000% right
    let parryGif = document.querySelector("#parry");
    setTimeout(()=>{
        pry.volume = 0.1;
        let pryGif = new Image();
        pry.play().then(() => {
            pryGif.src = `images/parry.gif?${Date.now()}`; // it unfortunately will redownload it every time, but it'll restart properly each time. i don't know how else to do it. sorry slow internet people
            pryGif.style = "pointer-events: none; width: 100%; height: 100%;"
            parryGif.appendChild(pryGif);
            document.querySelector("#parry").style.setProperty("display", "initial");
        });
        pry.onended = function () {
            document.querySelector("#parry").style.setProperty("display", "none");
            parryGif.innerHTML = "";
        }
    },100);
}

function whatupson() {
    // sfx by SLZ
    whatup.volume = 0.1;
    whatup.play();
}

function copyHotlink() {
    navigator.clipboard.writeText("<a title=\"womp.gay: the coolest website to ever grace the internet\" href=\"https://womp.gay\"><img alt=\"womp.gay\" src=\"https://womp.gay/buttons/me.png\"></a>\n");
}

let switchoff = false;

function off() {
    switchoff = !switchoff;

    let switchfx = new Audio("/offsfx/switch2.ogg");
    switchfx.volume = 0.1;
    switchfx.play();
    switchfx.onplay = function () {
        if(switchoff){
            if(window.offTimeout !== undefined) {
                clearTimeout(window.offTimeout);
            }
            document.body.className = "off disableTransitions";
            document.querySelector(".shown").innerHTML = `The switch is now <span class="shown" onclick="off()">OFF</span>.`;
            if(nepeta_follow === true) {
                toggleNepeta();
            }
        } else {
            if(window.offTimeout !== undefined) {
                clearTimeout(window.offTimeout);
            }
            document.body.className = "disableTransitions";
            document.querySelector(".shown").innerHTML = `The switch is <span class="shown" onclick="off()">ON</span>.`;
            window.offTimeout = setTimeout(()=>{
                document.body.className = "";
            }, 750)
        }
    }
}