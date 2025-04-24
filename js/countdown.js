const countdownDate = new Date("April 28, 2025 00:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const gap = countdownDate - now;

  if (gap <= 0) {
    if (gap <= 0) {
      document.querySelector('.container').style.display = 'none';
      const welcomeScreen = document.querySelector('.welcome');
      welcomeScreen.style.display = 'flex';
      setTimeout(() => {
        welcomeScreen.classList.add('visible');
      }, 100); // slight delay ensures display change happens first
      return;
    }
    
  }

  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  document.getElementById('days').innerText = String(Math.floor(gap / day)).padStart(2, '0');
  document.getElementById('hours').innerText = String(Math.floor((gap % day) / hour)).padStart(2, '0');
  document.getElementById('minutes').innerText = String(Math.floor((gap % hour) / minute)).padStart(2, '0');
  document.getElementById('seconds').innerText = String(Math.floor((gap % minute) / second)).padStart(2, '0');
};

setInterval(updateCountdown, 1000);

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = `${Math.random() * 100}vw`;
  petal.style.animationDuration = `${5 + Math.random() * 5}s`;
  petal.style.opacity = Math.random();

  document.querySelector('.petals').appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 10000);
}

window.onload = () => {
  const music = document.getElementById("bg-music");
  music.volume = 0.2;
};

window.addEventListener('click', () => {
  const music = document.getElementById("bg-music");
  if (music) {
    music.play();
    music.volume = 0.2;
  }
});

setInterval(createPetal, 500);

// Redirect button
function goToGarden() {
  window.location.href = "garden.html"; // upcoming page!
}
