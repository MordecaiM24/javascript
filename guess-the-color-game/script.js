const targetColorEl = document.getElementById("target-color");
const colors = document.getElementsByClassName("color");


function colorGenerator() {
  return Math.floor(Math.random()*255);
}

function randomColor() {
  return [colorGenerator(), colorGenerator(), colorGenerator()];
}


let targetColor = randomColor();
let correctBlock = Math.floor(Math.random()*3);

for(let i = 0; i < 3; i++) {
  let tempRandom = randomColor();
  colors[i].styles.backgroundColor = `rgb(${tempRandom[0]}, ${tempRandom[1]}, ${tempRandom[2]})`
}

colors[correctBlock].style.backgroundColor = `rgb(${targetColor[0]}, ${targetColor[1]}, ${targetColor[2]})`


targetColorEl.textContent = `RGB(${targetColor[0]}, ${targetColor[1]}, ${targetColor[2]})`;

