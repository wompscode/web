// phoebe faith 2025
// handles logo explosion and bounce

let element = document.querySelector("#logo");
let _element = document.querySelector("#explosion");

let mg = new Image();
mg.src = "https://womp.gay/images/explosion.gif";
mg.style.display = "none";
document.body.append(mg);
let clicked = 0;
let lock = false;
element.addEventListener("click", function() {
    if(!element.classList.contains("bigger")){
        element.classList.add("bigger");
        clicked++;

        if(clicked === 5 && lock === false) {
            lock = true;
            let img = new Image();
            img.classList.add("explosion");
            _element.appendChild(img);
            slide(img, y - 35, x - 25);
            img.src = mg.src;
            setTimeout(()=> {
                img.remove();
                clicked = 0;
                lock = false;
            }, 400);
        }
        setTimeout(() => {
            element.classList.remove("bigger");
        },125);
    }
})