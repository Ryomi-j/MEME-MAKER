const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(210 - 40, 200 - 30, 15, 100);
ctx.fillRect(350 - 40, 200 - 30, 15, 100);
ctx.fillRect(260 - 40, 200 - 30, 60, 200);

ctx.arc(250, 100, 50, 0, 2*Math.PI)
ctx.fill()

ctx.beginPath()
ctx.fillStyle = 'white'
ctx.arc(270, 90, 8, Math.PI, 2 * Math.PI)
ctx.arc(230, 90, 8, Math.PI, 2 * Math.PI)
ctx.moveTo(250, 120)
ctx.arc(250, 120, 8, 0, Math.PI)
ctx.fill()
