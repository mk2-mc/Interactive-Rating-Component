const form = document.querySelector(".rating-form");
const result = document.querySelector(".result");
const ratingContainer = document.querySelector(".rating-container");
const thankContainer = document.querySelector(".thank-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  result.innerHTML = form.rating.value;
  ratingContainer.classList.add("hidden");
  thankContainer.classList.remove("hidden");
});