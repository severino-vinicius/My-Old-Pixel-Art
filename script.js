// Iniciando o projeto Pixel art

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

window.onload = () => {
  if (localStorage.getItem('colorPalette')) {
    colorPaletteHistory();
  }
};
