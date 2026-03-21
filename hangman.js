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
  console.log("🚀 startHangmanGame called");
  console.log("inputCards:", inputCards);

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

  wordDisplay = document.createElement("div");
  wordDisplay.className = "hangman-word";

  lettersEl = document.createElement("div");
  lettersEl.className = "hangman-letters";

  info = document.createElement("div");
  info.className = "hangman-info";

  nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.style.display = "none";

  options.appendChild(wordDisplay);
  options.appendChild(lettersEl);
  options.appendChild(info);
  options.appendChild(nextBtn);

  nextBtn.addEventListener("click", nextWord);
  renderLetters();
}

////////////////////////////////////////////////////////////
// 🔤 RENDERING LETTERS
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
    container.textContent = "Hangman session complete!";
    if (lettersEl) lettersEl.style.display = "none";
    return;
  }

  const card = cards[currentIndex];

  currentWord = (card.back || "").toLowerCase();
  guessedLetters = [];
  lives = MAX_LIVES;

  nextBtn.style.display = "none";
  renderLetters();
  renderWord();
  updateInfo();
}

////////////////////////////////////////////////////////////
// 🧠 RENDERING WORD
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
// ⏳ UPDATE INFO (LIVES)
////////////////////////////////////////////////////////////

function updateInfo() {
  info.textContent = `Lives: ${lives}`;
}

////////////////////////////////////////////////////////////
// ⌨ HANDLE GUESS (CLICK EVENT)
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
// 🧠 CHECK GAME STATE
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
// ✅ SUCCESS (WORD COMPLETED)
////////////////////////////////////////////////////////////

function handleSuccess(card) {
  info.textContent = `✅ Correct! Word: ${card.back}`;
  nextBtn.style.display = "block";

  card.round = getPromotedRound(card.round, card.lastSeen);
  card.lastSeen = new Date().toISOString();

  cardRound[card.back] = {
    round: card.round,
    lastSeen: card.lastSeen
  };

  saveCardRound(cardRound);
}

////////////////////////////////////////////////////////////
// ❌ FAIL (OUT OF LIVES)
////////////////////////////////////////////////////////////

function handleFail(card) {
  info.textContent = `❌ Failed! Word was: ${card.back}`;
  nextBtn.style.display = "block";

  setTimeout(() => {
    const insertAt = Math.min(currentIndex + 2, cards.length);
    cards.splice(insertAt, 0, card);
  }, 300);
}

////////////////////////////////////////////////////////////
// ➡ NEXT WORD
////////////////////////////////////////////////////////////

function nextWord() {
  currentIndex++;
  loadWord();
}
