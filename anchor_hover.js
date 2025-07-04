// phoebe faith 2025
// anchor hover randomised rotation

const anchorElements = document.querySelectorAll("a");

function anchorEnter(element) {
    element.target.style.setProperty("transform", "scale("+(Math.random() * (1.05 - 1.08) + 1.08)+") rotate("+(Math.random() < 0.5 ? "" : "-")+(Math.floor(Math.random() * 3)+1)+"deg)", "important")
}

for (let i = 0; i < anchorElements.length; i++) {
    anchorElements[i].addEventListener("mouseenter", anchorEnter);
    anchorElements[i].addEventListener("mouseleave", buttonLeave);
}