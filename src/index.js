import "./styles.css";

const buttonClick = document.querySelector(".clickMe");

buttonClick.addEventListener("click", (_event) => {
  document.body.style.backgroundColor = getColorCode();
});

function getColorCode() {
  return (
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")"
  );
}
