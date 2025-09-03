// phoebe faith 2025
// handles logo bounce

let element = document.querySelector("#logo");
element.addEventListener("click", function() {
    if(!element.classList.contains("bigger")){
        element.classList.add("bigger");
        setTimeout(() => {
            element.classList.remove("bigger");
        },125);
    }
})
