const bloomStart = new Date("April 28, 2025");
const today = new Date();
const dayDiff = Math.floor((today - bloomStart) / (1000 * 60 * 60 * 24));
const totalDays = 21;

const notes = [
  "Day 1: The moment you texted me first on Discord, I never could’ve imagined where that little message would take us. From a casual chat to the deepest love I've ever known, it all began with you reaching out. Thank you for making that first move. 💖",
  "Day 2: Remember that Valentine’s Day? I thought you were on a date, and I made a big mess of it... but it turned out to be the most perfect moment ever, with you telling me you loved me for the first time. I’ll never forget our first I love you on that call. 🌙",
  "Day 3: That first call after everything got awkward? It was the start of something so beautiful. I’ll never forget how your voice made everything feel right again, and how we talked for hours, like we’d known each other forever. 💌",
  "Day 4: I remember when I was at my lowest, going through breakdowns, and you stayed on call with me, never letting go. You listened, you understood, and you helped me heal. You’ve always been my safe place.🌸",
  "Day 5: We could talk for hours—whether it's deep thoughts or silly nonsense, every conversation with you is a gift. Your words always make me feel safe, loved, and at peace.💕",
  "Day 6: There are moments I wish I could teleport—just to crash into your arms and feel your heartbeat against mine. Your hug is my favorite place on earth, even if it’s just in my dreams for now.💤",
  "Day 7: Whether it’s a dinner date through video call or watching movies together from afar, it doesn’t matter where we are, as long as we’re sharing these moments. Our distance is just a number; our love is everything.🥺",
  "Day 8: You came into my life when I needed you the most, and you healed my broken heart. Your care and kindness are more than I ever could’ve hoped for. You are my healing, my peace.💫",
  "Day 9: I still remember your voice when you said 'I love you' for the first time. It wasn't just words. It was like something inside me knew—this is my person. Forever♾️",
  "Day 10: You’ve seen parts of me no one else has. My flaws, my fears, my vulnerability, and you’ve loved me all the same. There’s nothing I hide from you, because you accept me for who I am.🤍",
  "Day 11: You make sure I’m okay, even when I’m not asking. Your care for me, the little things you do, have made me feel loved in ways I never imagined. You’re my personal angel.💮",
  "Day 12: When you surprised me by coming to Jaipur, I was beyond happy. Those three days were full of adventure, laughter, and pure joy. And when we hugged for the first time, it felt like time stopped.🌟",
  "Day 13: The day I was supposed to leave for uni, but instead, I chose to spend those precious last hours with you. Those moments will always be with me—our last hug, our first kiss, everything.💫",
  "Day 14: You’re not just my boyfriend—you’re my best friend. You make me feel safe, you listen to my every word, and you’ve been my partner through everything. I’m so lucky to have you.❤️",
  "Day 15: I love your smile—it’s contagious and lights up the whole room. Every time you smile at me, I feel like I’m home. It’s one of the most beautiful things in the world to me.🫧",
  "Day 16: Some of my favorite moments are the quiet ones—when we don’t need words, just being in each other’s presence is enough. It’s in these moments I realize how deeply I love you.💞",
  "Day 17: We laugh so hard together that I forget the world outside even exists. You turn my darkest days into warm evenings filled with joy, just with that laugh I love so much.🧿",
  "Day 18: I dream of a future where we grow old together, laugh at our inside jokes, and are always there for each other, no matter what life throws at us. I can't wait for the day I call you my forever.🤍",
  "Day 19: There’s something so intimate about falling asleep on call with you, hearing your breaths slow, knowing you're safe—even if miles away. I’ve never needed much in life, just your voice at night.♾️",
  "Day 20: There’s no one like you. You’ve shown me what true love is, and I’m so grateful every day that I get to call you mine. You’re my heart, my soul, my everything.💮",
  "Day 21: Happy Birthday, my love ❤️ Here blooms my forever for you.🌸"
];

function createFlower(index) {
  const flower = document.createElement("div");
  flower.className = "flower";
  const innerText = document.createElement("div");
  innerText.className = "flower-text";

  if (index <= dayDiff) {
    flower.classList.add("bloomed");
    innerText.innerHTML = `🌸<br>${index + 1}`;
    flower.addEventListener("click", () => {
      document.getElementById("note-text").innerText = notes[index];
      document.getElementById("note-popup").style.display = "flex";
    });
  } else {
    flower.classList.add("locked");
    innerText.innerHTML = `🔒`;
  }

  flower.appendChild(innerText);
  return flower;
}

function closeNote() {
  document.getElementById("note-popup").style.display = "none";
}

window.onload = () => {
  const grid = document.getElementById("garden-grid");
  for (let i = 0; i < totalDays; i++) {
    grid.appendChild(createFlower(i));
  }

  // Show "Go to Final Surprise" button after May 18
  const finalSurpriseDate = new Date("2025-05-18");
  const currentDate = new Date();
  if (currentDate >= finalSurpriseDate) {
    const buttonContainer = document.getElementById("final-surprise-button-container");
    buttonContainer.style.display = "block";
  }

  const music = document.getElementById("bg2-music");
  music.volume = 0.2;

  window.addEventListener("click", () => {
    music.play();
    music.volume = 0.2;
  });
};

function createPetal() {
  const petal = document.createElement("div");
  petal.classList.add("petal");
  petal.style.left = `${Math.random() * 100}vw`;
  petal.style.animationDuration = `${5 + Math.random() * 5}s`;
  petal.style.opacity = Math.random();
  petal.style.fontSize = Math.random() * 10 + 10 + "px";
  document.querySelector(".petals").appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 5000);
}

setInterval(createPetal, 300);