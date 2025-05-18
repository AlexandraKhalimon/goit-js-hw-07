const colorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
const bodyColor = document.querySelector("body")

colorBtn.addEventListener("click", (event) => {
  bodyColor.style.backgroundColor = getRandomHexColor();

  colorName.textContent = bodyColor.style.backgroundColor;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
