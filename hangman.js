////////////////////////////////////////////////////////////
// 🎯 HANGMAN MODE (EXPORTED FUNCTION)
////////////////////////////////////////////////////////////

let currentIndex = 0;
let cards = [];
let mistakes = 0;
const MAX_MISTAKES = 6;

let currentWord = "";
let guessedLetters = [];

// DOM
let container;
let wordDisplay;
let input;
let info;
let nextBtn;

// Dependencies (passed from app.js)
let getPromotedRound;
let saveCardRound;
let cardRound;

////////////////////////////////////////////////////////////
// 🚀 MAIN EXPORT
////////////////////////////////////////////////////////////

export function startHangmanGame({
  cards: inputCards,
  getPromotedRound: promoteFn,
  saveCardRound: saveFn,
  cardRound: roundStore
}) {
  // Assign dependencies
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
    console.error("Missing DOM elements for hangman");
    return;
  }

  container.innerHTML = "";
  options.innerHTML = "";

  wordDisplay = document.createElement("div");
  wordDisplay.className = "hangman-word";

  input = document.createElement("input");
  input.placeholder = "Type a letter...";
  input.maxLength = 1;

  info = document.createElement("div");
  info.className = "hangman-info";

  nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.style.display = "none";

  options.appendChild(wordDisplay);
  options.appendChild(input);
  options.appendChild(info);
  options.appendChild(nextBtn);

  input.addEventListener("keydown", handleInput);
  nextBtn.addEventListener("click", nextWord);
}

////////////////////////////////////////////////////////////
// 🔤 LOAD WORD
////////////////////////////////////////////////////////////

function loadWord() {
  if (currentIndex >= cards.length) {
    container.textContent = "Hangman session complete!";
    if (input) input.style.display = "none";
    return;
  }

  const card = cards[currentIndex];

  currentWord = (card.back || "").toLowerCase();
  guessedLetters = [];
  mistakes = 0;

  nextBtn.style.display = "none";
  input.disabled = false;
  input.value = "";

  renderWord();
  updateInfo();
}

////////////////////////////////////////////////////////////
// 🧩 RENDERING
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

function updateInfo() {
  info.textContent = `Mistakes: ${mistakes} / ${MAX_MISTAKES}`;
}

////////////////////////////////////////////////////////////
// ⌨ INPUT HANDLING
////////////////////////////////////////////////////////////

function handleInput(e) {
  if (e.key !== "Enter") return;

  const letter = input.value.toLowerCase().trim();
  input.value = "";

  if (!letter || !letter.match(/[a-zà-ÿ]/i)) return;
  if (guessedLetters.includes(letter)) return;

  guessedLetters.push(letter);

  if (!currentWord.includes(letter)) {
    mistakes++;
  }

  renderWord();
  updateInfo();
  checkGameState();
}

////////////////////////////////////////////////////////////
// 🧠 GAME STATE
////////////////////////////////////////////////////////////

function checkGameState() {
  const isWordComplete = currentWord
    .split("")
    .every(l => l === " " || guessedLetters.includes(l));

  const card = cards[currentIndex];

  if (isWordComplete) {
    handleSuccess(card);
  } else if (mistakes >= MAX_MISTAKES) {
    handleFail(card);
  }
}

////////////////////////////////////////////////////////////
// ✅ SUCCESS
////////////////////////////////////////////////////////////

function handleSuccess(card) {
  info.textContent = `✅ Correct! Word: ${card.back}`;
  input.disabled = true;
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
// ❌ FAIL
////////////////////////////////////////////////////////////

function handleFail(card) {
  info.textContent = `❌ Failed! Word was: ${card.back}`;
  input.disabled = true;
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
