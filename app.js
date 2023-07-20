const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;
let isPainting = false;

const onMove = (e) => {
  if(isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    return
  }

  ctx.moveTo(e.offsetX, e.offsetY);
};

const startPainting = () => {
  isPainting = true;
};

const cancelPainting = () => {
  isPainting = false
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);

// document.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);