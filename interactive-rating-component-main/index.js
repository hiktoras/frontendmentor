const rateAgain = document.getElementById("rate-again")
const ratings = document.querySelectorAll(".btn")
const actualRating = document.getElementById("rating")
const ratingBox = document.querySelector(".rating-box")
const thanksContainer = document.querySelector(".thank-you")
const form = document.querySelector(".rating-form");
let clicked = false

ratings.forEach(rating => {
    let value = rating.getAttribute('value');
    rating.addEventListener('click', function () {
        actualRating.innerHTML = value;
        console.log(value)
        clicked = true;
    });
});


form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (clicked) {
        ratingBox.classList.remove("block")
        ratingBox.classList.add("hidden")
        thanksContainer.classList.remove("hidden")
    }
});

rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    ratingBox.classList.remove("hidden")
    clicked = false;
    actualRating.innerHTML = "1";
});