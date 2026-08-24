// Pantalla de bienvenida
const welcomeScreen = document.getElementById("welcome-screen");
const enterBtn = document.getElementById("enter-btn");
const music = document.getElementById("bg-music");
const musicToggle = document.getElementById("music-toggle");

let isPlaying = false;

enterBtn.addEventListener("click", () => {
  welcomeScreen.style.display = "none";
  music.play().then(() => {
    isPlaying = true;
    musicToggle.textContent = "⏸ Pausar música";
  }).catch(() => {
    musicToggle.textContent = "🎵 Reproducir música";
  });
});

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    music.pause();
    musicToggle.textContent = "🎵 Música";
  } else {
    music.play();
    musicToggle.textContent = "⏸ Pausar música";
  }
  isPlaying = !isPlaying;
});

// Cuenta regresiva
const weddingDate = new Date("October 09, 2026 17:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    document.getElementById("countdown").innerHTML = "<h3>¡Hoy es nuestro gran día! 💍</h3>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// RSVP visual
const form = document.getElementById("rsvp-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  successMessage.style.display = "block";
  form.reset();
});

// Animación al hacer scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const visiblePoint = 100;

    if (elementTop < windowHeight - visiblePoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();