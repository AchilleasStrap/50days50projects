const textelement = document.getElementById("text");
const speedelement = document.getElementById("speed");
const text = "We love programming!";
let idx = 1;
let speed = 300 / speedelement.value;

writeText();

function writeText() {
  textelement.innerText = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, speed);
}

speedelement.addEventListener("input", (e) => (speed = 300 / e.target.value));
