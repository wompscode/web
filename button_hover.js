// phoebe faith 2025
// button hover randomised rotation

const __elements = document.querySelectorAll(".webButton");

function buttonEnter(element) {
    console.log("entered: "+element.target.innerHTML)

    element.target.style.setProperty("transform", "scale("+(Math.random() * (1.35 - 1.15) + 1.15)+") rotate("+(Math.random() < 0.5 ? "" : "-")+(Math.floor(Math.random() * 6)+1)+"deg)", "important")
}

function buttonLeave(element) {
    element.target.style.transform = ""
}

for (var i = 0; i < __elements.length; i++) {
    console.log(__elements[i].title)
    __elements[i].addEventListener("mouseenter", buttonEnter);
    __elements[i].addEventListener("mouseleave", buttonLeave);
}