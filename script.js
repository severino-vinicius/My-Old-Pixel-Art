// Iniciando o projeto Pixel art

function generateColor() {
  const chars = '01234567ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return color;
}

document.getElementById('button-random-color').addEventListener('click', () => {
  for (let i = 0; i < 3; i += 1) {
    const pixelColor = document.getElementById(`color-palette-${i + 1}`);
    pixelColor.style.backgroundColor = generateColor();
  }
});
