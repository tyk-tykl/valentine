// Переключение экранов
function nextScreen(number) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById("screen" + number).classList.add("active");
}

// Бегающая кнопка "Нет"
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

function moveButton() {
    noBtn.style.position = "fixed";
    noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
    noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
}

// Карусель фото
const images = [];
for (let i = 1; i <= 9; i++) {
    images.push(`img/photo${i}.jpg`);
}

let current = 0;

setInterval(() => {
    current++;
    if (current >= images.length) current = 0;

    const img = document.getElementById("carouselImage");
    img.style.opacity = 0;

    setTimeout(() => {
        img.src = images[current];
        img.style.opacity = 1;
    }, 300);

}, 2000);

// Летающие сердечки
function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animation = "float 6s linear";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 400);
