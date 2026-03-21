////////////////////////////////////////////////////////////
// 🎯 HANGMAN MODE (PURE GAME MODULE)
////////////////////////////////////////////////////////////

// --- Game state ---
let currentIndex = 0;
let cards = [];
let lives = 6;
const MAX_LIVES = 6;

let currentWord = "";
let guessedLetters = [];

// --- DOM ---
let container;
let wordDisplay;
let lettersEl;
let hintEl;
let info;
let nextBtn;

// --- Dependencies (from app.js) ---
let getPromotedRound;
let saveCardRound;
let cardRound;

////////////////////////////////////////////////////////////
// 🚀 MAIN EXPORT (ONLY ENTRY POINT)
////////////////////////////////////////////////////////////

export function startHangmanGame({
  cards: inputCards,
  getPromotedRound: promoteFn,
  saveCardRound: saveFn,
  cardRound: roundStore
}) {
  cards = [...inputCards];
  currentIndex = 0;

  getPromotedRound = promoteFn;
  saveCardRound = saveFn;
  cardRound = roundStore;

  setupUI();
  loadWord();
}

////////////////////////////////////////////////////////////
// 🎮 UI SETUP
////////////////////////////////////////////////////////////

function setupUI() {
  container = document.getElementById("card-container");
  const options = document.getElementById("options-container");

  if (!container || !options) {
    console.error("❌ Missing DOM elements for hangman");
    return;
  }

  container.innerHTML = "";
  options.innerHTML = "";

  hintEl = document.createElement("div");
  hintEl.className = "hangman-hint";

  wordDisplay = document.createElement("div");
  wordDisplay.className = "hangman-word";

  lettersEl = document.createElement("div");
  lettersEl.className = "hangman-letters";

  info = document.createElement("div");
  info.className = "hangman-info";

  nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.style.display = "none";

  options.appendChild(hintEl);
  options.appendChild(wordDisplay);
  options.appendChild(lettersEl);
  options.appendChild(info);
  options.appendChild(nextBtn);

  nextBtn.addEventListener("click", nextWord);

  // Optional keyboard support
  document.addEventListener("keydown", handleKeyPress);
}

////////////////////////////////////////////////////////////
// 🔤 RENDER LETTER BUTTONS
////////////////////////////////////////////////////////////

function renderLetters() {
  lettersEl.innerHTML = "";

  "abcdefghijklmnopqrstuvwxyz".split("").forEach(letter => {
    const btn = document.createElement("div");
    btn.className = "letter";
    btn.textContent = letter;

    btn.onclick = () => handleGuess(letter, btn);

    lettersEl.appendChild(btn);
  });
}

////////////////////////////////////////////////////////////
// 🧩 LOAD WORD
////////////////////////////////////////////////////////////

function loadWord() {
  if (currentIndex >= cards.length) {
    container.textContent = "🎉 Hangman session complete!";
    if (lettersEl) lettersEl.style.display = "none";
    return;
  }

  const card = cards[currentIndex];

  currentWord = (card.back || "").toLowerCase();
  guessedLetters = [];
  lives = MAX_LIVES;

  // 💡 HINT (QUESTION SIDE)
  hintEl.textContent = card.front
    ? `Hint: ${card.front}`
    : "Guess the word!";

  nextBtn.style.display = "none";

  renderLetters();
  renderWord();
  updateInfo();
}

////////////////////////////////////////////////////////////
// 🧠 RENDER WORD
////////////////////////////////////////////////////////////

function renderWord() {
  const display = currentWord
    .split("")
    .map(letter => {
      if (letter === " ") return " ";
      return guessedLetters.includes(letter) ? letter : "_";
    })
    .join(" ");

  wordDisplay.textContent = display;
}

////////////////////////////////////////////////////////////
// ℹ️ UPDATE INFO
////////////////////////////////////////////////////////////

function updateInfo() {
  info.textContent = `Lives: ${lives}`;
}

////////////////////////////////////////////////////////////
// 🎯 HANDLE GUESS
////////////////////////////////////////////////////////////

function handleGuess(letter, btn) {
  if (guessedLetters.includes(letter) || lives <= 0) return;

  guessedLetters.push(letter);

  if (currentWord.includes(letter)) {
    btn.classList.add("correct");
  } else {
    btn.classList.add("wrong");
    lives--;
  }

  btn.classList.add("used");

  renderWord();
  updateInfo();
  checkGameState();
}

////////////////////////////////////////////////////////////
// ⌨️ KEYBOARD SUPPORT
////////////////////////////////////////////////////////////

function handleKeyPress(e) {
  const letter = e.key.toLowerCase();

  document.querySelectorAll(".letter").forEach(btn => {
    if (btn.textContent === letter) {
      btn.click();
    }
  });
}

////////////////////////////////////////////////////////////
// 🧠 GAME STATE CHECK
////////////////////////////////////////////////////////////

function checkGameState() {
  const isWordComplete = currentWord
    .split("")
    .every(l => l === " " || guessedLetters.includes(l));

  const card = cards[currentIndex];

  if (isWordComplete) {
    handleSuccess(card);
  } else if (lives <= 0) {
    handleFail(card);
  }
}

////////////////////////////////////////////////////////////
// ✅ SUCCESS
////////////////////////////////////////////////////////////

function handleSuccess(card) {
  info.textContent = `✅ Correct! Word: ${card.back}`;
  nextBtn.style.display = "block";

  disableLetters();

  // 🧠 spaced repetition logic
  card.round = getPromotedRound(card.round, card.lastSeen);
  card.lastSeen = new Date().toISOString();

  cardRound[card.back] = {
    round: card.round,
    lastSeen: card.lastSeen
  };

  saveCardRound(cardRound);
}

////////////////////////////////////////////////////////////
// ❌ FAIL
////////////////////////////////////////////////////////////

function handleFail(card) {
  info.textContent = `❌ Failed! Word was: ${card.back}`;
  nextBtn.style.display = "block";

  disableLetters();

  // reinsert card later
  setTimeout(() => {
    const insertAt = Math.min(currentIndex + 2, cards.length);
    cards.splice(insertAt, 0, card);
  }, 300);
}

////////////////////////////////////////////////////////////
// 🔒 DISABLE LETTERS AFTER ROUND
////////////////////////////////////////////////////////////

function disableLetters() {
  document.querySelectorAll(".letter").forEach(btn => {
    btn.style.pointerEvents = "none";
  });
}

////////////////////////////////////////////////////////////
// ➡ NEXT WORD
////////////////////////////////////////////////////////////

function nextWord() {
  currentIndex++;
  loadWord();
}
