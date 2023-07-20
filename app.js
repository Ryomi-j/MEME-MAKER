const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.moveTo(50, 50) // 시작 좌표
ctx.lineTo(150, 50) // 마무리 좌표
ctx.lineTo(150, 150)
ctx.lineTo(50, 150)
ctx.lineTo(50, 50)

ctx.stroke()
ctx.fill()