// phoebe faith 2025
// handles logo explosion and bounce

let element = document.querySelector("#logo");
let _element = document.querySelector("#explosion");

let clicked = 0;
let lock = false;
element.addEventListener("click", function() {
    if(!element.classList.contains("bigger")){
        element.classList.add("bigger");
        clicked++;

        if(clicked === 5 && lock === false) {
            lock = true;
            let img = new Image();
            if(x!==0&&y!==0) {
                img.classList.add("explosion");
                _element.appendChild(img);

                slide(img, y - 35, x - 25);
                img.src = `https://womp.gay/images/explosion.gif?${Date.now()}`;
            }
            setTimeout(()=> {
                img.remove();
                clicked = 0;
                lock = false;
            }, 450);
        }
        setTimeout(() => {
            element.classList.remove("bigger");
        },125);
    }
})

let img = new Image();
img.classList.add("explosion");
_element.appendChild(img);
img.style.setProperty("display", "none", "important");
img.src = `https://womp.gay/images/explosion.gif?${Date.now()}`;