// Iniciando o projeto Pixel art

document.getElementById('color-palette-black').style.backgroundColor = 'rgb(0,0,0)';
document.getElementById('color-palette-1').style.backgroundColor = 'rgb(0, 255, 255)';
document.getElementById('color-palette-2').style.backgroundColor = 'rgb(255, 255, 0)';
document.getElementById('color-palette-3').style.backgroundColor = 'rgb(0, 0, 255)';

// Requisito 4 foi realizado através da ajuda do video https://www.youtube.com/watch?v=E5qWEY1GVQ0
function generateColor() {
  const chars = '01234567ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return color;
}

document.getElementById('button-random-color').addEventListener('click', () => {
  const colorArray = [];
  for (let i = 0; i < 3; i += 1) {
    const pixelColor = document.getElementById(`color-palette-${i + 1}`);
    pixelColor.style.backgroundColor = generateColor();
    colorArray.push(pixelColor.style.backgroundColor);
    console.log(colorArray);
  }
  localStorage.setItem('colorPalette', JSON.stringify(colorArray));
});

const historyColor = localStorage.getItem('colorPalette');
const historyColorParsed = JSON.parse(historyColor);
// console.log(historyColorParsed);

function colorPaletteHistory() {
  for (let i = 0; i < 3; i += 1) {
    document.getElementById(`color-palette-${i + 1}`).style.backgroundColor = historyColorParsed[i];
  }
  return historyColor;
}

function createPixelBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixelL';
    pixelBoard.appendChild(createPixel);
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const createPixel2 = document.createElement('div');
      createPixel2.className = 'pixel';
      createPixel.appendChild(createPixel2);
    }
  }
}
createPixelBoard();

function selectedBlackPixel() {
  const selectedBlack = document.querySelector('.color');
  selectedBlack.classList.add('selected');
}

const selectClassColor = document.querySelectorAll('.color');
// eslint-disable-next-line no-restricted-syntax
for (const selectedColor of selectClassColor) {
  selectedColor.addEventListener('click', (event) => {
    const selectedPixel = document.querySelector('.selected');
    if (selectedPixel !== null) {
      selectedPixel.classList.remove('selected');
    }
    event.target.classList.add('selected');
  });
}

const pixelBoardResc = document.getElementsByClassName('pixel');
function selectedPixelBoard() {
// eslint-disable-next-line no-restricted-syntax
  for (const pixelSelector of pixelBoardResc) {
    pixelSelector.addEventListener('click', (event) => {
      const selectedPixel = document.querySelector('.selected');
      // console.log(selectedPixel.style.backgroundColor);
      event.target.style.backgroundColor = selectedPixel.style.backgroundColor;
    });
  }
}
selectedPixelBoard();

document.getElementById('clear-board').addEventListener('click', () => {
  for (let index = 0; index < pixelBoardResc.length; index += 1) {
    pixelBoardResc[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
});

function pixelBoardRescHistory() {
  const arrayOfPixelBoardColor = [];
  for (let index = 0; index < pixelBoardResc.length; index += 1) {
    pixelBoardResc.addEventListener('click', (event) => {
      arrayOfPixelBoardColor.push('teste');
      console.log(arrayOfPixelBoardColor);
    });
    console.log(arrayOfPixelBoardColor);
  }
}
pixelBoardRescHistory();

window.onload = () => {
  if (localStorage.getItem('colorPalette')) {
    colorPaletteHistory();
  }

  selectedBlackPixel();
  selectedPixelBoard();
};
