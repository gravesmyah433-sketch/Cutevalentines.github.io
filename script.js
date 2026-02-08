let clickCount = 0;

const trickButton = document.getElementById("trickButton");
const questionSlide = document.getElementById("questionSlide");
const celebrateSlide = document.getElementById("celebrateSlide");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const song = document.getElementById("song");

const texts = [
  "Click here 😇",
  "Almost 😏",
  "Try again 😂",
  "You’re so close",
  "OK for real this time 👀"
];

// TRICK BUTTON
trickButton.addEventListener("click", () => {
  clickCount++;

  if (clickCount < 5) {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 80);

    trickButton.style.left = `${x}px`;
    trickButton.style.top = `${y}px`;
    trickButton.innerText = texts[clickCount];
  } else {
    trickButton.innerText = "🎁 Open me";
    trickButton.style.left = "50%";
    trickButton.style.top = "50%";
    trickButton.style.transform = "translate(-50%, -50%)";
    trickButton.style.background = "#cdb4db";

    trickButton.onclick = () => {
      trickButton.classList.add("hidden");
      questionSlide.classList.remove("hidden");
    };
  }
});

// CELEBRATION
function celebrate() {
  questionSlide.classList.add("hidden");
  celebrateSlide.classList.remove("hidden");

  song.play();

  confetti({
    particleCount: 300,
    spread: 100,
    origin: { y: 0.6 }
  });
}

yesBtn.addEventListener("click", celebrate);

// NO → YES 😈
noBtn.addEventListener("click", () => {
  noBtn.innerText = "Yes 💖";
  noBtn.style.background = "#ff4d6d";
  noBtn.onclick = celebrate;
});
