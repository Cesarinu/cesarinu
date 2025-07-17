const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
  if (dino.classList.contains("jump")) return;
  dino.classList.add("jump");
  setTimeout(() => {
    dino.classList.remove("jump");
  }, 800);
}

document.addEventListener("touchstart", jump); // compatível com iOS

setInterval(() => {
  const dinoTop = dino.getBoundingClientRect().top;
  const cactusLeft = cactus.getBoundingClientRect().left;

  if (cactusLeft < 100 && cactusLeft > 50 && dinoTop > window.innerHeight - 80) {
    alert("💥 Game Over!");
    cactus.style.animation = "none";
    cactus.style.display = "none";
  }
}, 10);