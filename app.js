const saveBtn = document.getElementById("save");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const modeBtn = document.getElementById("mode-btn");
const destroyBtn = document.getElementById("destroy-btn");
const eraseBtn = document.getElementById("erase-btn");
const colorOptions = Array.from(
  document.getElementsByClassName("color-option")
);
const color = document.getElementById("color");
const lineWidth = document.getElementById("lineWidth");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
ctx.lineWidth = lineWidth.value;
let isPainting = false;
let isFilling = false;

const onMove = (e) => {
  if (isPainting) {
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    return;
  }
  ctx.moveTo(e.offsetX, e.offsetY);
};

const startPainting = () => {
  isPainting = true;
};

const cancelPainting = () => {
  isPainting = false;
  ctx.beginPath();
};

const onLineWidthChange = (e) => {
  ctx.lineWidth = e.target.value;
};

const onColorChange = (e) => {
  ctx.strokeStyle = e.target.value;
  ctx.fillStyle = e.target.value;
};

const onColorClick = (e) => {
  const colorValue = e.target.dataset.color;

  ctx.strokeStyle = colorValue;
  ctx.fillStyle = colorValue;

  color.value = colorValue;

  if (isFilling) ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};

const onModeClick = () => {
  if (isFilling) {
    isFilling = false;
    modeBtn.innerText = "Fill";
  } else {
    isFilling = true;
    modeBtn.innerText = "Draw";
  }
};

const onDestroyClick = () => {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};

const onEraseClick = () => {
  ctx.strokeStyle = "white";
  isFilling = false;
  modeBtn.innerText = "Fill";
};

const onFileChange = (e) => {
  const file = e.target.files[0];
  const url = URL.createObjectURL(file);
  const image = new Image(); //img tag 생성
  image.src = url; // src 속성 정의
  image.onload = function () {
    // 이미지가 로드 되면 canvas에 그림 그리기
    ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    fileInput.value = null;
  };
};

const onDoubleClick = (e) => {
  const text = textInput.value;
  if (text === "") return;

  ctx.save(); // ctx의 현재 상태, 생상, 스타일 등 모든 것을 저장
  ctx.lineWidth = 1;
  ctx.font = "68px serif";
  ctx.strokeText(text, e.offsetX, e.offsetY);
  ctx.restore(); // 이전 ctx 상태로 복구
};

const onSaveClick = () => {
  const url = canvas.toDataURL(); // canvas의 그림을 url로 변환
  const a = document.createElement("a");
  a.href = url;
  a.download = "제목없음.png"; // "제목없음.png"로 파일 저장
  a.click(); // 파일 다운로드
};

canvas.addEventListener("dblclick", onDoubleClick);
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);

canvas.addEventListener("mouseup", cancelPainting);
canvas.addEventListener("mouseleave", cancelPainting);

lineWidth.addEventListener("change", onLineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach((color) => color.addEventListener("click", onColorClick));

modeBtn.addEventListener("click", onModeClick);
destroyBtn.addEventListener("click", onDestroyClick);
eraseBtn.addEventListener("click", onEraseClick);
fileInput.addEventListener("change", onFileChange);
saveBtn.addEventListener("click", onSaveClick);