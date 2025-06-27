var element = document.querySelector("#logo");
var _element = document.querySelector("#explosion");
var clicked = 0;

element.addEventListener("click", function() {
    if(!element.classList.contains("bigger")){
        element.classList.add("bigger");
        clicked++;

        if(clicked === 5) {
            var img = new Image();
            img.classList.add("explosion");
            _element.appendChild(img);
            img.src = "images/explosion.gif";
            slide(img, y - 35, x - 25);
            setTimeout(()=> {
                img.remove();
                clicked = 0;
            }, 400);
        }
        setTimeout(() => {
            element.classList.remove("bigger");
        },125);
    }
})