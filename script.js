const color = document.querySelector(".color-area");
const btn = document.querySelector(".change-btn");

function getRandomColor() {
  const hexNums = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexNums[Math.floor(Math.random() * 16)];
  }

  return color;
}

btn.addEventListener("click", () => {
  const randclr = getRandomColor();
  color.style.backgroundColor = randclr;
});
