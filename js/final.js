document.addEventListener("DOMContentLoaded", () => {
    const envelope = document.getElementById("envelope");
    const letter = document.getElementById("letter-container");
    const photoSection = document.getElementById("photo-section");
  
    envelope.addEventListener("click", () => {
      envelope.style.display = "none";
      letter.classList.add("show");
      setTimeout(() => {
        photoSection.classList.add("show");
      }, 2000); // Delay for graceful transition
    });
  
    // Floating petals
    function createPetal() {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.innerText = "🌸";
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.fontSize = 16 + Math.random() * 10 + "px";
      document.body.appendChild(petal);
  
      setTimeout(() => petal.remove(), 8000);
    }
  
    setInterval(createPetal, 500);
  });
  