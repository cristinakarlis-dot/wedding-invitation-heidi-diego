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

const weddingDate = new Date("October 09, 2026 18:00:00").getTime();

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

const form = document.getElementById("rsvp-form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const guests = document.getElementById("guests").value;
  const attendance = document.getElementById("attendance").value;
  const message = document.getElementById("message").value.trim();

  const phoneNumber = "528992580239";

  let guestsText = "";
  switch (guests) {
    case "0":
      guestsText = "Solo asistiré yo";
      break;
    case "1":
      guestsText = "Iré con 1 acompañante";
      break;
    case "2":
      guestsText = "Iré con 2 acompañantes";
      break;
    case "3":
      guestsText = "Iré con 3 acompañantes";
      break;
    default:
      guestsText = guests;
  }

  const whatsappMessage =
    `Hola Heidi y Diego, quiero responder a su invitación de boda.\n\n` +
    `Nombre: ${name}\n` +
    `Confirmación: ${attendance}\n` +
    `Acompañantes: ${guestsText}\n` +
    `Mensaje: ${message ? message : "Sin mensaje"}\n\n` +
    `Con cariño.`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");
});

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