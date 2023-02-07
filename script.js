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

console.log();

document.getElementById('button-random-color').addEventListener('click', () => {
  const colorArray = [];
  for (let i = 0; i < 3; i += 1) {
    const pixelColor = document.getElementById(`color-palette-${i + 1}`);
    pixelColor.style.backgroundColor = generateColor();
    colorArray.push(pixelColor.style.backgroundColor);
  }
  localStorage.setItem('colorPalette', JSON.stringify(colorArray));
});

const historyColor = localStorage.getItem('colorPalette');
const historyColorParsed = JSON.parse(historyColor);
console.log(historyColorParsed);

function colorPaletteHistory() {
  for (let i = 0; i < 3; i += 1) {
    document.getElementById(`color-palette-${i + 1}`).style.backgroundColor = historyColorParsed[i];
  }
  return historyColor;
}

window.onload = () => {
  if (localStorage.getItem('colorPalette')) {
    colorPaletteHistory();
  }
};
