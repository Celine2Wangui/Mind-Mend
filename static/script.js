document.addEventListener("DOMContentLoaded", () => {
  // Theme toggle
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      toggle.textContent = document.documentElement.classList.contains("dark") ? "🌙" : "🌞";
    });
  }

  // Pomodoro timer
  const timerDisplay = document.getElementById("timer");
  const startBtn = document.getElementById("start");
  const pauseBtn = document.getElementById("pause");
  const resetBtn = document.getElementById("reset");

  let timer;
  let timeLeft = 25 * 60;
  let running = false;

  function updateTimer() {
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    if (timerDisplay) timerDisplay.textContent = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  }

  function startTimer() {
    if (!running) {
      running = true;
      timer = setInterval(() => {
        if (timeLeft > 0) {
          timeLeft--;
          updateTimer();
        } else {
          clearInterval(timer);
          running = false;
          alert("⏰ Time’s up! Take a break 💗");
          timeLeft = 25*60;
          updateTimer();
        }
      }, 1000);
    }
  }

  function pauseTimer() {
    clearInterval(timer);
    running = false;
  }

  function resetTimer() {
    clearInterval(timer);
    running = false;
    timeLeft = 25 * 60;
    updateTimer();
  }

  if (startBtn) startBtn.addEventListener("click", startTimer);
  if (pauseBtn) pauseBtn.addEventListener("click", pauseTimer);
  if (resetBtn) resetBtn.addEventListener("click", resetTimer);

  updateTimer();

  // Mood tracker
  const moodBtns = document.querySelectorAll(".mood-btn");
  const moodMsg = document.getElementById("mood-message");
  const moods = {
    "😊": "You’re glowing today! 🌞",
    "😔": "It’s okay to feel low 💙",
    "😤": "Take a deep breath 💪",
    "😌": "Peaceful vibes 🕊️",
    "😴": "Rest is productive too 😴"
  };
  moodBtns.forEach(btn => btn.addEventListener("click", () => {
    if (moodMsg) {
      moodMsg.textContent = moods[btn.textContent] || "";
      moodMsg.classList.remove("opacity-0");
    }
  }));

  // Affirmations
  const affirmBtn = document.getElementById("new-affirmation");
  const affirmText = document.getElementById("affirmation-text");
  const affirmations = [
    "You are doing better than you think 🌷",
    "You are enough, right now ✨",
    "Resting isn’t lazy — it’s healing 🌿",
    "Small steps still move you forward 🌙",
    "Your peace matters more than their approval 🌸",
    "Even slow growth is growth 🌼",
    "You are safe, loved, and growing 💞"
  ];
  if (affirmBtn) {
    affirmBtn.addEventListener("click", () => {
      const r = Math.floor(Math.random()*affirmations.length);
      if (affirmText) affirmText.textContent = affirmations[r];
    });
  }
});
