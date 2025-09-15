// Reveal surprise message
document.getElementById("revealBtn").addEventListener("click", () => {
  document.getElementById("surprise").classList.remove("hidden");
});

// Floating hearts animation
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function Heart(x, y, size, speed) {
  this.x = x;
  this.y = y;
  this.size = size;
  this.speed = speed;
}

function drawHeart(x, y, size) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x, y - size / 2, x - size, y - size / 2, x - size, y);
  ctx.bezierCurveTo(x - size, y + size, x, y + size * 1.5, x, y + size * 2);
  ctx.bezierCurveTo(x, y + size * 1.5, x + size, y + size, x + size, y);
  ctx.bezierCurveTo(x + size, y - size / 2, x, y - size / 2, x, y);
  ctx.fillStyle = "rgba(255,0,100,0.7)";
  ctx.fill();
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((h, i) => {
    drawHeart(h.x, h.y, h.size);
    h.y -= h.speed;
    if (h.y + h.size * 2 < 0) hearts.splice(i, 1);
  });
  requestAnimationFrame(animate);
}

setInterval(() => {
  let x = Math.random() * canvas.width;
  let size = Math.random() * 15 + 10;
  let speed = Math.random() * 2 + 1;
  hearts.push(new Heart(x, canvas.height, size, speed));
}, 300);

animate();
