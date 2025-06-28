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
            img.classList.add("explosion");
            _element.appendChild(img);
            img.src = "https://womp.gay/images/explosion.gif";
            slide(img, y - 35, x - 25);
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