import { loadVocabularyForLanguage } from './language-manager.js';

const CACHE_NAME = 'vocab-pwa-v1'; // Must match the CACHE_NAME in service-worker.js

async function checkAndUpdateCache() {
  const storedCacheName = localStorage.getItem('CACHE_NAME');
  if (storedCacheName !== CACHE_NAME) {
    // Delete all caches except the new one
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );
      // Open new cache and add files
      const cache = await caches.open(CACHE_NAME);
      await cache.addAll([
        './manifest.json',
        './icons/ios/180.png',
        './icons/android/android-launchericon-192-192.png',
        './icons/android/android-launchericon-512-512.png'
      ]);
    }
    localStorage.setItem('CACHE_NAME', CACHE_NAME);
    // Optionally reload to use new files
    window.location.reload();
  }
}

// Run this check on page load
checkAndUpdateCache();

function getSavedLanguage() {
  return localStorage.getItem('selectedLanguage');
}
function saveLanguage(lang) {
  localStorage.setItem('selectedLanguage', lang);
}

// Get current language or default to 'en'
let currentLanguage = getSavedLanguage() || null;
if (!currentLanguage) {
  document.getElementById('menu-modal').style.display = 'flex';
}
let vocabulary = vocabularies[currentLanguage || 'en'];

// Add event listeners to language buttons
document.querySelectorAll('.language-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.language-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    saveLanguage(this.getAttribute('data-language'));
    location.reload(); // reload to apply new language
  });
});

// Highlight selected language on load
if (currentLanguage) {
  const btn = document.querySelector(`.language-btn[data-language="${currentLanguage}"]`);
  if (btn) btn.classList.add('active');
}

const roundConfiguration = [
  { round: 0, type: "multiple choice", delay_days: 0 }, // ← prep round
  { round: 1, type: "typing", delay_days: 0 },
  { round: 2, type: "typing", delay_days: 1 },
  { round: 3, type: "typing", delay_days: 3 },
  { round: 4, type: "typing", delay_days: 7 },
  { round: 5, type: "typing", delay_days: 14 },
  { round: 6, type: "typing", delay_days: 30 },
  { round: 7, type: "typing", delay_days: 90 }
];


// Add status and round flags

let currentCardIndex = 0;
const cardToDotMap = {};

const cardContainer = document.getElementById("card-container");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const progressBar = document.getElementById("progress-bar");

let batchIndex = 0;
let batches = [];
const BATCH_SIZE = 25;



function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function getRandomOptions(correct, allOptions, count = 3) {
  // Filter for current lesson
  const lessonOptions = allOptions.filter(opt => opt.lesson === correct.lesson);
  let pool = lessonOptions.length >= (count + 1) ? lessonOptions : allOptions;

  const others = pool
    .filter(opt => opt.back !== correct.back)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);

  return shuffle([...others, correct]);
}

function initProgressBar() {
  progressBar.innerHTML = "";
  cards.forEach((card, index) => {
    const dot = document.createElement("div");
    dot.classList.add("progress-segment");
    if (index === 0) dot.classList.add("active");
    dot.setAttribute("data-back", card.back);
    progressBar.appendChild(dot);
    cardToDotMap[card.back] = dot;
  });
}


function updateActiveDot(card) {
  document.querySelectorAll(".progress-segment").forEach(dot => {
    dot.classList.remove("active");
  });

  const dot = cardToDotMap[card.back];
  if (dot) {
    dot.classList.add("active");
  }
}



function reorderProgressBar() {
  cards.forEach(card => {
    const dot = cardToDotMap[card.back];
    if (dot) {
      progressBar.appendChild(dot);
    }
  });

  // ✅ Update active dot based on currently visible card
  if (cards[currentCardIndex]) {
    updateActiveDot(cards[currentCardIndex]);
  }
}

function getPromotedRound(currentRound, lastSeenDate) {
  const now = new Date();
  const daysElapsed = Math.floor((now - new Date(lastSeenDate)) / (1000 * 60 * 60 * 24));

  let newRound = currentRound;

  for (let i = currentRound + 1; i <= roundConfiguration.length; i++) {
    const previousCfg = roundConfiguration.find(r => r.round === i - 1);
    if (previousCfg && previousCfg.delay_days <= daysElapsed) {
      newRound = i;
    } else {
      break;
    }
  }

  return newRound;
}

function updateDotColor(card) {
  const dot = cardToDotMap[card.back];
  if (!dot) return;

  dot.classList.remove("correct", "incorrect", "multiple");

  if (card.status === "typed-correct") {
    dot.classList.add("correct"); // green = typed correct
  } else if (card.status === "multiple-correct") {
    dot.classList.add("multiple"); // yellow = multiple choice correct
  } else if (card.status === "incorrect") {
    dot.classList.add("incorrect"); // red = incorrect
  }
}

function renderCard(card) {
  cardContainer.textContent = card.front;
  optionsContainer.innerHTML = "";
  

 const roundCfg = roundConfiguration.find(cfg => cfg.round === card.round);
const isTypingRound = roundCfg && roundCfg.type === "typing";


  if (!isTypingRound) {
  // MULTIPLE CHOICE ROUND
  const options = getRandomOptions(card, vocabulary);
  optionsContainer.setAttribute('round', 'multiple-choice');
  
  let hasMadeMistake = false;

  options.forEach(option => {
    const input = document.createElement("input");
    const label = document.createElement("label");

    const id = `cb-${Math.random()}`;
    input.type = "checkbox";
    input.id = id;
    label.htmlFor = id;
    label.textContent = option.back;

    input.onclick = () => {
  const isCorrect = option.back === card.back;

  if (input.disabled) return; // prevent any further clicks on this option

  input.disabled = true; // disable only this one after click

if (isCorrect) {
  if (!hasMadeMistake) {
    card.status = "multiple-correct";

    if (card.round < roundConfiguration.length) {
      card.round = 1;
    }

    card.lastSeen = new Date().toISOString();

    cardRound[card.back] = {
      round: card.round,
      lastSeen: card.lastSeen
    };
    saveCardRound(cardRound);

    setTimeout(() => {
      cards.push(card); // reinsert at end
      reorderProgressBar();
    }, 300);
  } else {
    // ❌ User clicked correct after a wrong — do not update round or save
    card.status = "incorrect";
    setTimeout(() => {
      const insertAt = Math.min(currentCardIndex + 4, cards.length);
      cards.splice(insertAt, 0, card);
      reorderProgressBar();
    }, 300);
  }

  updateDotColor(card);
  input.classList.add("right");
  nextBtn.disabled = false;
} else {
  hasMadeMistake = true;
  card.status = "incorrect";
  updateDotColor(card);
  input.classList.add("wrong");
}

};


    optionsContainer.append(input, label);
  });
}
 else {
// TYPING ROUND
  if (typeof card.madeMistakeThisSession === "undefined") {
    card.madeMistakeThisSession = false;
  }
const input = document.createElement("input");
optionsContainer.setAttribute('round', 'typing');
input.type = "text";
input.placeholder = "Type the answer...";
input.className = "typing-input";

const checkBtn = document.createElement("button");
checkBtn.textContent = "prüfen";
checkBtn.className = "check-btn";
    
function normalizeInputLenient(str) {
  // for counting real mistakes (ignore accents)
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove accents
    .replace(/[’‘]/g, "'")
    .replace(/["“”]/g, '"')
    .toLowerCase()
    .trim();
}

function normalizeInputStrict(str) {
  // for feedback & display — keep accents
  return str
    .replace(/[’‘]/g, "'")
    .replace(/["“”]/g, '"')
    .toLowerCase()
    .trim();
}

function levenshtein(a, b) {
  const matrix = Array.from({ length: a.length + 1 }, (_, i) =>
    Array.from({ length: b.length + 1 }, (_, j) =>
      i === 0 ? j : j === 0 ? i : 0
    )
  );

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = 1 + Math.min(
          matrix[i - 1][j],     // deletion
          matrix[i][j - 1],     // insertion
          matrix[i - 1][j - 1]  // substitution
        );
      }
    }
  }

  return matrix[a.length][b.length];
}

function normalizeQuotes(str) {
  return str
    .replace(/[’‘]/g, "'")
    .replace(/["“”]/g, '"')
    .toLowerCase()
    .trim();
}

function checkAnswer() {
  const userAnswer = input.value;
  const correctAnswer = card.back;

const normalizedUserLenient = normalizeInputLenient(userAnswer);
  const normalizedCorrectLenient = normalizeInputLenient(correctAnswer);

  const normalizedUserStrict = normalizeInputStrict(userAnswer);
  const normalizedCorrectStrict = normalizeInputStrict(correctAnswer);

  const distanceLenient = levenshtein(normalizedUserLenient, normalizedCorrectLenient);
  const distanceStrict = levenshtein(normalizedUserStrict, normalizedCorrectStrict);

  const isPerfect = distanceStrict === 0;
  const isCloseEnough = distanceLenient <= 2;

  const isRealMistake = distanceLenient > 2; // ← ignores accent issues


  const isCorrect = isPerfect || isCloseEnough;

  if (isCorrect) {
    if (!card.madeMistakeThisSession && isRealMistake) {
      card.madeMistakeThisSession = true; // only count real spelling/word errors
    }

    if (!card.madeMistakeThisSession) {
      if (card.round==1) {
        card.round = Math.min(card.round + 1, roundConfiguration.length);
        console.log("update round 295");
        
      } 
      else {
        card.round = getPromotedRound(card.round, card.lastSeen);
        console.log("update round 299");
      }
    }



    card.lastSeen = new Date().toISOString();

    cardRound[card.back] = {
      round: card.round,
      lastSeen: card.lastSeen
    };
    saveCardRound(cardRound);

    card.status = "typed-correct";
    checkBtn.classList.add("right");
    checkBtn.classList.add("checked");
    updateDotColor(card);

    if (!isPerfect) {
      const feedback = document.createElement("div");
      feedback.className = "feedback";
      feedback.textContent = `Close enough! Correct: ${card.back}`;
      optionsContainer.appendChild(feedback);
    }

  } else {
    card.status = "incorrect";
    card.madeMistakeThisSession = true;

    checkBtn.classList.add("wrong");
    checkBtn.classList.add("checked");
    updateDotColor(card);

    const feedback = document.createElement("div");
    feedback.className = "feedback";
    feedback.textContent = `Correct answer: ${card.back}`;
    optionsContainer.appendChild(feedback);

    setTimeout(() => {
      cards.splice(currentCardIndex + 4, 0, card);
      reorderProgressBar();
    }, 300);
  }

  input.disabled = true;
  checkBtn.disabled = true;
  nextBtn.disabled = false;
}


checkBtn.onclick = checkAnswer;

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !checkBtn.disabled) {
    checkAnswer();
  }
});

optionsContainer.appendChild(input);
optionsContainer.appendChild(checkBtn);
input.focus();

  }
}

function loadBatch(index) {
  cards = batches[index] || [];
  currentCardIndex = 0;
  Object.keys(cardToDotMap).forEach(key => delete cardToDotMap[key]);
  initProgressBar();
  if (cards.length > 0) {
    showNextCard();
    nextBtn.style.display = "";
  } else {
    cardContainer.textContent = "No cards due!";
    optionsContainer.innerHTML = "";
    nextBtn.style.display = "none";
  }
}

function showNextCard() {
  if (currentCardIndex >= cards.length) {
         // Batch complete
    cardContainer.textContent = batchIndex === batches.length - 1
      ? "Session complete!"
      : "You have completed the first batch.";
    optionsContainer.innerHTML = "";
    
    // Show continue button if more batches remain
    if (batchIndex < batches.length - 1) {
      let continueBtn = document.createElement("button");
      continueBtn.textContent = "Continue";
      continueBtn.className = "continue-btn";
      continueBtn.onclick = function() {
        batchIndex++;
        loadBatch(batchIndex);
        nextBtn.style.display = "";
      };
      optionsContainer.appendChild(continueBtn);
      nextBtn.style.display = "none";
    } else {
      nextBtn.style.display = "none";
    }
    return;
  }
  const currentCard = cards[currentCardIndex];
  console.log("Rendering card:", currentCard);
  renderCard(currentCard);
  updateActiveDot(currentCard);
  reorderProgressBar();
  nextBtn.disabled = true;
  currentCardIndex++;
}

nextBtn.addEventListener("click", showNextCard);




//////////////////////////////////// save card round to local storage ///////////////
let db;

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("FlashcardsDB", 1);

    request.onupgradeneeded = function (event) {
      db = event.target.result;
      if (!db.objectStoreNames.contains("CardRounds")) {
        db.createObjectStore("CardRounds", { keyPath: "back" });
      }
    };

    request.onsuccess = function (event) {
      db = event.target.result;
      resolve();
    };

    request.onerror = function () {
      reject("Failed to open IndexedDB");
    };
  });
}



function loadCardRound() {
  return new Promise((resolve, reject) => {
    if (!db) return resolve({});

    const tx = db.transaction("CardRounds", "readonly");
    const store = tx.objectStore("CardRounds");
    const request = store.getAll();

    request.onsuccess = function () {
      const result = {};
      request.result.forEach(entry => {
        result[entry.back] = {
          round: entry.round,
          lastSeen: entry.lastSeen
        };
      });
      console.log("474 return load", result);
      resolve(result);
    };

    request.onerror = function () {
      reject("Failed to load cardRound from IndexedDB");
    };
  });
}


function saveCardRound(roundObj) {
  if (!db) return;

  const tx = db.transaction("CardRounds", "readwrite");
  const store = tx.objectStore("CardRounds");

  for (const [back, data] of Object.entries(roundObj)) {
    store.put({ back, ...data });
  }

  tx.oncomplete = () => {
    console.log("Saved cardRound to IndexedDB");
  };

  tx.onerror = () => {
    console.error("Failed to save cardRound to IndexedDB");
  };
}


function isCardDue(card) {
  const roundCfg = roundConfiguration.find(r => r.round === card.round);
  if (!roundCfg) return true;

  // Round 0 & 1 cards are always due
  if (card.round === 0 || card.round === 1) return true;

  if (!card.lastSeen) return true; // If the card has never been answered, it's due

  const lastSeenDate = new Date(card.lastSeen);
  const now = new Date();
  const isSameDay = lastSeenDate.toDateString() === now.toDateString();

  // For round 2 or beyond, check if the card was answered today
  if (card.round >= 2 && isSameDay) {
    return false; // It shouldn't be due if it was answered today
  }

  const nextDueDate = new Date(lastSeenDate.getTime() + roundCfg.delay_days * 24 * 60 * 60 * 1000);
  return now >= nextDueDate;
}




let cardRound = {};

openDatabase().then(() => {
  return loadCardRound();
}).then((loaded) => {
  cardRound = loaded;

  // ⬇️ Now proceed to map cards and initialize your app
  let allCards = vocabulary.map(card => {
    const saved = cardRound[card.back] || {};
    return {
      ...card,
      round: saved.round ?? 0,
      lastSeen: saved.lastSeen || null,
      status: null
    };
  });

  // Filter & shuffle
  cards = shuffle(allCards.filter(isCardDue));

  loadBatch(batchIndex);
  showDashboard();
});


let allCards = vocabulary.map(card => {
  const saved = cardRound[card.back] || {};
  return {
    ...card,
    round: saved.round ?? 0,
    lastSeen: saved.lastSeen || null,
    status: null
  };
});

// ✅ Only keep cards that are due
//let cards = shuffle(allCards.filter(isCardDue));
let cards = shuffle(allCards.filter(card => {
  const due = isCardDue(card);
  if (!due) {
    console.log(`Skipping not-due card: ${card.back} | Round ${card.round} | Last seen ${card.lastSeen}`);
  }
  return due;
}));

async function loadVocabulary(lesson) {
  currentLesson = lesson;
  batchIndex = 0;
  const cardRound = await loadCardRound();

  let allCards = vocabulary
    .filter(card => card.lesson === lesson)
    .map(card => {
      const saved = cardRound[card.back] || {};
      return {
        ...card,
        round: saved.round ?? 0,
        lastSeen: saved.lastSeen || null,
        status: null
      };
    });

  let dueCards = shuffle(allCards.filter(card => {
    const due = isCardDue(card);
    if (!due) {
      console.log(`Skipping not-due card: ${card.back} | Round ${card.round} | Last seen ${card.lastSeen}`);
    }
    return due;
  }));

  console.log("Vocabulary loaded and shuffled:", dueCards);

  batches = [];
  for (let i = 0; i < dueCards.length; i += BATCH_SIZE) {
    batches.push(dueCards.slice(i, i + BATCH_SIZE));
  }

  loadBatch(batchIndex);

  showStudyMode();

  // Check if study mode is visible
  console.log("Study mode display:", document.getElementById('study-mode').style.display);
  // Check if cards are present
  console.log("Cards in batch:", batches[batchIndex]);
}

// Attach event listeners to study buttons
document.querySelectorAll('.study-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const lesson = this.getAttribute('data-lesson');
    loadVocabulary(lesson);
  });
});

async function updateLessonProgressBars() {
  // Get card round info from localStorage
  const cardRound = await loadCardRound();

  // For each lesson card
  document.querySelectorAll('.card[data-lesson]').forEach(cardEl => {
    const lesson = cardEl.getAttribute('data-lesson');
    // All vocab for this lesson
    const lessonVocab = vocabulary.filter(v => v.lesson === lesson);
    const total = lessonVocab.length;

    // For each round 1-7
    for (let round = 1; round <= 7; round++) {
      // Count how many words are at this round or higher
      const completed = lessonVocab.filter(v => {
        const saved = cardRound[v.back];
        return saved && (saved.round ?? 0) >= round;
      }).length;
      const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

      // Find the progress bar for this round
      const track = cardEl.querySelector(`.progress-track[data-round="${round}"] .progress-fill`);
      if (track) {
        track.style.width = percent + "%";
      }
    }
  });
}

async function showDashboard() {
  document.querySelector('.dashboard').style.display = '';
  document.getElementById('study-mode').style.display = 'none';
  await updateLessonProgressBars();
}

async function showStudyMode() {
  document.querySelector('.dashboard').style.display = 'none';
  document.getElementById('study-mode').style.display = '';
}

// Close study mode and return to dashboard
document.getElementById('close-study').addEventListener('click', function() {
  showDashboard();
  // Optionally clear study mode UI
  document.getElementById('card-container').textContent = '';
  document.getElementById('options-container').innerHTML = '';
  document.getElementById('progress-bar').innerHTML = '';
  document.getElementById('next-btn').disabled = true;
});

// On page load, show dashboard and hide study mode
showDashboard();

let currentLesson; 

// Export progress
document.getElementById('export-btn').addEventListener('click', async () => {
  const cardRound = await loadCardRound();
  const dataStr = JSON.stringify(cardRound, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'vocab-progress.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

// Show file picker for import
document.getElementById('import-btn').addEventListener('click', () => {
  document.getElementById('import-input').click();
});

// Import progress
document.getElementById('import-input').addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const text = await file.text();
  try {
    const imported = JSON.parse(text);
    await openDatabase();
    saveCardRound(imported);
    alert('Fortschritt importiert! Die Seite wird нова загружена.');
    location.reload();
  } catch (e) {
    alert('Fehler beim Importieren der файла.');
  }
});

// Filter lessons by level
function showLessonsForLevel(level) {
  document.querySelectorAll('.card[data-lesson]').forEach(card => {
    const lesson = card.getAttribute('data-lesson');
    let show = false;
    if (level === 'A1.1') {
      show = /^A1\.[1-7]$/.test(lesson);
    } else if (level === 'A1.2') {
      show = /^A1\.(8|9|10|11|12|13|14)$/.test(lesson);
    } else if (level === 'A2.1') {
      show = /^A2\.[1-7]$/.test(lesson);
    } else if (level === 'A2.2') {
      show = /^A2\.(8|9|10|11|12|13|14)$/.test(lesson);
    } else if (level === 'B1.1') {
      show = /^B1\.[1-7]$/.test(lesson);
    }
    card.style.display = show ? '' : 'none';
  });
}

// Helper to get/set last selected level
function getSavedLevel() {
  return localStorage.getItem('selectedLevel');
}
function saveLevel(level) {
  localStorage.setItem('selectedLevel', level);
}

// Show lessons for saved or default level
let initialLevel = getSavedLevel() || null;
if (initialLevel) {
  showLessonsForLevel(initialLevel);
  document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
  const btn = document.querySelector(`.level-btn[data-level="${initialLevel}"]`);
  if (btn) btn.classList.add('active');
} else {
  // No saved level: open menu for user to choose
  document.getElementById('menu-modal').style.display = 'flex';
}

// Add event listeners to level buttons
document.querySelectorAll('.level-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove .active from all buttons
    document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('active'));
    // Add .active to the clicked button
    this.classList.add('active');
    showLessonsForLevel(this.getAttribute('data-level'));
    saveLevel(this.getAttribute('data-level'));
    // Close menu after selection
    document.getElementById('menu-modal').style.display = 'none';
  });
});

document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('menu-modal').style.display = 'flex';
});
document.getElementById('close-menu').addEventListener('click', () => {
  document.getElementById('menu-modal').style.display = 'none';
});
