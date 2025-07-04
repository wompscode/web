// phoebe faith 2025
// button hover randomised rotation

const __elements = document.querySelectorAll(".webButton");

function buttonEnter(element) {
    element.target.style.setProperty("transform", "scale("+(Math.random() * (1.35 - 1.15) + 1.15)+") rotate("+(Math.random() < 0.5 ? "" : "-")+(Math.floor(Math.random() * 6)+1)+"deg)", "important")
}

function buttonLeave(element) {
    element.target.style.transform = ""
}

for (let i = 0; i < __elements.length; i++) {
    __elements[i].onclick = function(event) {
        if(event.target.parentNode.nodeName !== "A") return;
        if(!event.target.parentElement.href) return;
        if (event.ctrlKey || event.shiftKey || event.metaKey || (event.button && event.button === 1)){
            return true; // if user middle click/opens in new tab it should not wait or force location
        }
        // otherwise, let animation finish and then go to location :)
        setTimeout(()=>{
            // this shouldn't ever fail, but it totally could. that'd really suck.
            // either way, if something here fails your browser should just ignore it and go Okay well, use the anchor tag then
            window.location.href = event.target.parentElement.href;
        }, 385)
        return false;
    }
    __elements[i].addEventListener("mouseenter", buttonEnter);
    __elements[i].addEventListener("mouseleave", buttonLeave);

    __elements[i].addEventListener("click", function(event) {
        if(event.target.style.transform === ""){
            event.target.style.setProperty("transform", "scale("+(Math.random() * (1.2 - 1.02) + 1.02)+") rotate("+(Math.random() < 0.5 ? "" : "-")+(Math.floor(Math.random() * 6)+1)+"deg)", "important")
            setTimeout(() => {
                event.target.style.transform = ""
            },175);
        }
    })
}