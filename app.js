const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

const colors = [
  '#55efc4',
  '#ffeaa7',
  '#74b9ff',
  '#a29bfe',
  '#d63031',
  '#00b894',
  '#00cec9',
  '#fdcb6e',
  '#6c5ce7',
  '#ff7675',
]
ctx.lineWidth = 2
const position = Math.floor(Math.random() * 800)

const mouseMove = (e) => {
  const color = colors[Math.trunc(Math.random() * colors.length)]

  ctx.beginPath()
  ctx.strokeStyle = color
  ctx.moveTo(position, position)
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
}

canvas.addEventListener("mousemove", mouseMove)