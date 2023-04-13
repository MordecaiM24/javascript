const targetColorEl = document.getElementById("target-color");
const colors = document.getElementsByClassName("color");
const gameTitle = document.getElementById("game-title");

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
  colors[i].style.backgroundColor = `rgb(${tempRandom[0]}, ${tempRandom[1]}, ${tempRandom[2]})`;
}


colors[correctBlock].setAttribute('id', 'correct-block');
const correctBlockEl = document.getElementById('correct-block');
correctBlockEl.classList.remove("color");
const wrongColors = document.getElementsByClassName('color');
correctBlockEl.style.backgroundColor = `rgb(${targetColor[0]}, ${targetColor[1]}, ${targetColor[2]})`;

targetColorEl.textContent = `RGB(${targetColor[0]}, ${targetColor[1]}, ${targetColor[2]})`;
console.log(targetColorEl);


correctBlockEl.addEventListener('click', function (event) {
  gameTitle.style.backgroundColor = `rgb(${targetColor[0]}, ${targetColor[1]}, ${targetColor[2]})`;
  gameTitle.style.transition = "background-color 500ms";
  correctBlockEl.textContent = "Correct color";
  wrongColors[0].style.backgroundColor = "rgb(35, 35, 35)";
  wrongColors[0].style.backgroundColor = "rgb(35, 35, 35)";
})



for (let i = 0; i < 2; i++) {
  wrongColors[i].addEventListener('click', (event) => {
    wrongColors[i].remove();
  });
}

