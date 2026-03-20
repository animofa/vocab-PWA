////////////////////////////////////////////////////////////
// 🎯 HANGMAN MODE (NO VISUAL HANGMAN)
////////////////////////////////////////////////////////////

let currentIndex = 0;
let cards = [];
let mistakes = 0;
const MAX_MISTAKES = 6;

let currentWord = "";
let guessedLetters = [];

let container;
let wordDisplay;
let input;
let info;
let nextBtn;

export function startHangmanGame({ cards: inputCards, getPromotedRound, saveCardRound, cardRound }) {
  cards = [...inputCards];
  currentIndex = 0;

  setupUI();
  loadWord();

  function setupUI() {
    container = document.getElementById("card-container");
    const options = document.getElementById("options-container");

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

  function loadWord() {
    if (currentIndex >= cards.length) {
      container.textContent = "Hangman session complete!";
      input.style.display = "none";
      return;
    }

    const card = cards[currentIndex];

    currentWord = card.back.toLowerCase();
    guessedLetters = [];
    mistakes = 0;

    nextBtn.style.display = "none";
    input.disabled = false;
    input.value = "";

    renderWord();
    updateInfo();
  }

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

  function handleInput(e) {
    if (e.key !== "Enter") return;

    const letter = input.value.toLowerCase();
    input.value = "";

    if (!letter.match(/[a-zà-ÿ]/i)) return;

    if (guessedLetters.includes(letter)) return;

    guessedLetters.push(letter);

    if (!currentWord.includes(letter)) {
      mistakes++;
    }

    renderWord();
    updateInfo();

    checkGameState();
  }

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

  function handleSuccess(card) {
    info.textContent = `✅ Correct! Word: ${card.back}`;
    input.disabled = true;
    nextBtn.style.display = "block";

    // ✅ SAME LOGIC AS TYPING (no mistake → promote)
    card.round = getPromotedRound(card.round, card.lastSeen);
    card.lastSeen = new Date().toISOString();

    cardRound[card.back] = {
      round: card.round,
      lastSeen: card.lastSeen
    };

    saveCardRound(cardRound);
  }

  function handleFail(card) {
    info.textContent = `❌ Failed! Word was: ${card.back}`;
    input.disabled = true;
    nextBtn.style.display = "block";

    // ❌ Reinsert later like incorrect answers
    setTimeout(() => {
      const insertAt = Math.min(currentIndex + 2, cards.length);
      cards.splice(insertAt, 0, card);
    }, 300);
  }

  function nextWord() {
    currentIndex++;
    loadWord();
  }
}
