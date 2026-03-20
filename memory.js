import { getPromotedRound, saveCardRound, loadCardRound } from "./app.js";
let cardRound = {};
// memory.js

let currentCards = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matches = 0;

////////////////////////////////////////////////////////////
// 🚀 ENTRY POINT (called from app.js)
////////////////////////////////////////////////////////////

export async function startMemoryGame(vocabulary) {
  if (!vocabulary || !vocabulary.length) {
    console.log("No vocabulary provided to memory game");
    return;
  }

  injectMemoryHTML();
  cardRound = await loadCardRound();

  currentCards = createMemoryCards(vocabulary);

  resetGameState();
  renderMemoryGame();
}

////////////////////////////////////////////////////////////
// 🧱 HTML INJECTION
////////////////////////////////////////////////////////////

function injectMemoryHTML() {
  let container = document.getElementById("memory-mode");

  if (!container) {
    container = document.createElement("div");
    container.id = "memory-mode";

    container.innerHTML = `
      <div class="memory-wrapper">
        <div class="memory-header">
          <button id="close-memory">✕</button>
          <div class="memory-stats">
            <span id="memory-moves">Moves: 0</span>
          </div>
        </div>

        <div id="memory-grid" class="memory-grid"></div>

        <div id="memory-win" class="memory-win" style="display:none;">
          🎉 Done! <br>
          <button id="restart-memory">Play again</button>
        </div>
      </div>
    `;

    document.body.appendChild(container);
  }

  container.style.display = "block";

  // Hide dashboard if exists
  const dashboard = document.querySelector('.dashboard');
  if (dashboard) dashboard.style.display = 'none';

  // Close button
  document.getElementById("close-memory").onclick = () => {
    container.style.display = "none";
    if (dashboard) dashboard.style.display = '';
  };

  // Restart button
  document.getElementById("restart-memory").onclick = () => {
    startMemoryGameFromCurrent();
  };
}

////////////////////////////////////////////////////////////
// 🔁 RESTART
////////////////////////////////////////////////////////////

function startMemoryGameFromCurrent() {
  currentCards = shuffle(currentCards);
  resetGameState();
  renderMemoryGame();
}

////////////////////////////////////////////////////////////
// 🧠 CREATE MEMORY CARDS
////////////////////////////////////////////////////////////

function createMemoryCards(vocab) {
  const MAX_WORDS = 8;

  const shuffled = shuffle([...vocab]);
  const limited = shuffled.slice(0, Math.min(MAX_WORDS, shuffled.length));

  let cards = [];

  limited.forEach(card => {
    cards.push(
      { text: card.front, pairId: card.back, original: card },
      { text: card.back, pairId: card.back, original: card }
    );
  });

  return shuffle(cards);
}

////////////////////////////////////////////////////////////
// 🎲 SHUFFLE
////////////////////////////////////////////////////////////

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

////////////////////////////////////////////////////////////
// 🔄 RESET STATE
////////////////////////////////////////////////////////////

function resetGameState() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
  moves = 0;
  matches = 0;

  updateMoves();
  hideWinMessage();
}

////////////////////////////////////////////////////////////
// 🎮 RENDER GAME
////////////////////////////////////////////////////////////

function renderMemoryGame() {
  const grid = document.getElementById("memory-grid");
  grid.innerHTML = "";

  currentCards.forEach(card => {
    const el = document.createElement("div");
    el.className = "memory-card";
    el.textContent = "?";

    el.dataset.text = card.text;
    el.dataset.pairId = card.pairId;

    el.addEventListener("click", () => onCardClick(el));

    grid.appendChild(el);
  });
}

////////////////////////////////////////////////////////////
// 🖱️ CLICK HANDLER
////////////////////////////////////////////////////////////

function onCardClick(cardEl) {
  if (lockBoard || cardEl.classList.contains("revealed")) return;

  revealCard(cardEl);

  if (!firstCard) {
    firstCard = cardEl;
    return;
  }

  secondCard = cardEl;
  lockBoard = true;

  moves++;
  updateMoves();

  checkMatch();
}

////////////////////////////////////////////////////////////
// 🔍 CHECK MATCH
////////////////////////////////////////////////////////////

function checkMatch() {
  const isMatch =
    firstCard.dataset.pairId === secondCard.dataset.pairId;

  if (isMatch) {

    // 🎯 UPDATE SPACED REPETITION
    const card = firstCard.original; // same as secondCard.original

    updateCardProgress(card);

    matches++;
    resetTurn();

    if (matches === currentCards.length / 2) {
      showWinMessage();
    }

  } else {
    setTimeout(() => {
      hideCard(firstCard);
      hideCard(secondCard);
      resetTurn();
    }, 800);
  }
}

////////////////////////////////////////////////////////////
// 🃏 CARD STATE
////////////////////////////////////////////////////////////

function revealCard(cardEl) {
  cardEl.textContent = cardEl.dataset.text;
  cardEl.classList.add("revealed");
}

function hideCard(cardEl) {
  cardEl.textContent = "?";
  cardEl.classList.remove("revealed");
}

function resetTurn() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}


function updateCardProgress(card) {
  const saved = cardRound[card.back] || {};

  const currentRound = saved.round ?? card.round ?? 0;
  const lastSeen = saved.lastSeen || card.lastSeen || new Date().toISOString();

  let newRound;

  if (currentRound === 0) {
    newRound = 1;
  } else {
    newRound = getPromotedRound(currentRound, lastSeen);
  }

  const now = new Date().toISOString();

  cardRound[card.back] = {
    round: newRound,
    lastSeen: now
  };

  saveCardRound(cardRound);

  console.log(`Memory promoted: ${card.back} → Round ${newRound}`);
}

////////////////////////////////////////////////////////////
// 📊 UI UPDATES
////////////////////////////////////////////////////////////

function updateMoves() {
  const el = document.getElementById("memory-moves");
  if (el) el.textContent = `Moves: ${moves}`;
}

function showWinMessage() {
  const winEl = document.getElementById("memory-win");
  if (winEl) winEl.style.display = "block";
}

function hideWinMessage() {
  const winEl = document.getElementById("memory-win");
  if (winEl) winEl.style.display = "none";
}
