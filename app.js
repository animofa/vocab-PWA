import { loadVocabularyForLanguage } from "./language-manager.js";
import { startMemoryGame } from "./memory.js";
import { startHangmanGame } from "./hangman.js";
import { startAudioMode } from "./audio.js";

////////////////////////////////////////////////////////////
// APP CONFIGURATION
////////////////////////////////////////////////////////////

const CACHE_NAME = "vocab-pwa-v1";

const isFrenchMode = window.location.pathname.startsWith("/french");


////////////////////////////////////////////////////////////
// CACHE MANAGEMENT
////////////////////////////////////////////////////////////

async function checkAndUpdateCache() {
  const storedCacheName = localStorage.getItem("CACHE_NAME");

  if (storedCacheName === CACHE_NAME) {
    return;
  }

  if ("caches" in window) {
    try {
      const cacheNames = await caches.keys();

      await Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      );

      const cache = await caches.open(CACHE_NAME);

      await cache.addAll([
        "./manifest.json",
        "./icons/ios/180.png",
        "./icons/android/android-launchericon-192-192.png",
        "./icons/android/android-launchericon-512-512.png"
      ]);

    } catch (error) {
      console.error("Cache update failed:", error);
    }
  }

  localStorage.setItem("CACHE_NAME", CACHE_NAME);
}


////////////////////////////////////////////////////////////
// LANGUAGE MANAGEMENT
////////////////////////////////////////////////////////////

function getSavedLanguage() {
  return localStorage.getItem("selectedLanguage");
}


function saveLanguage(language) {
  localStorage.setItem("selectedLanguage", language);
}


let currentLanguage;


if (isFrenchMode) {

  // French version has fixed language
  currentLanguage = "french";

} else {

  currentLanguage = getSavedLanguage();

  if (!currentLanguage) {
    const menu = document.getElementById("menu-modal");
    if (menu) {
      menu.style.display = "flex";
    }
  }
}


let vocabulary = [];


async function initVocabulary() {

  const language = currentLanguage || "en";

  vocabulary = await loadVocabularyForLanguage(language);

  console.log(
    "Vocabulary loaded:",
    vocabulary.length,
    "cards"
  );
}



////////////////////////////////////////////////////////////
// LANGUAGE BUTTONS
////////////////////////////////////////////////////////////

function setupLanguageButtons() {

  document
    .querySelectorAll(".language-btn")
    .forEach(button => {

      button.addEventListener("click", () => {

        document
          .querySelectorAll(".language-btn")
          .forEach(btn =>
            btn.classList.remove("active")
          );


        button.classList.add("active");


        saveLanguage(
          button.getAttribute("data-language")
        );


        location.reload();

      });

    });


  if (currentLanguage) {

    const activeButton =
      document.querySelector(
        `.language-btn[data-language="${currentLanguage}"]`
      );


    if (activeButton) {
      activeButton.classList.add("active");
    }
  }
}



////////////////////////////////////////////////////////////
// SPACED REPETITION CONFIGURATION
////////////////////////////////////////////////////////////

const roundConfiguration = [

  {
    round: 0,
    type: "multiple choice",
    delay_days: 0
  },

  {
    round: 1,
    type: "hangman",
    delay_days: 0
  },

  {
    round: 2,
    type: "typing",
    delay_days: 1
  },

  {
    round: 3,
    type: "typing",
    delay_days: 3
  },

  {
    round: 4,
    type: "typing",
    delay_days: 7
  },

  {
    round: 5,
    type: "typing",
    delay_days: 14
  },

  {
    round: 6,
    type: "typing",
    delay_days: 30
  },

  {
    round: 7,
    type: "typing",
    delay_days: 90
  }

];



////////////////////////////////////////////////////////////
// GLOBAL STATE
////////////////////////////////////////////////////////////

let cards = [];

let currentCardIndex = 0;

let batchIndex = 0;

let batches = [];

const BATCH_SIZE = 25;

let currentLesson = null;


const cardToDotMap = {};



////////////////////////////////////////////////////////////
// DOM REFERENCES
////////////////////////////////////////////////////////////

const cardContainer =
  document.getElementById("card-container");

const optionsContainer =
  document.getElementById("options-container");

const nextBtn =
  document.getElementById("next-btn");

const progressBar =
  document.getElementById("progress-bar");



////////////////////////////////////////////////////////////
// STARTUP HELPERS
////////////////////////////////////////////////////////////

checkAndUpdateCache();

setupLanguageButtons();

////////////////////////////////////////////////////////////
// INDEXED DB STORAGE
////////////////////////////////////////////////////////////

let db = null;

let cardRound = {};



function openDatabase() {

  return new Promise((resolve, reject) => {

    const request =
      indexedDB.open("FlashcardsDB", 1);


    request.onupgradeneeded = event => {

      db = event.target.result;


      if (!db.objectStoreNames.contains("CardRounds")) {

        db.createObjectStore(
          "CardRounds",
          {
            keyPath: "back"
          }
        );

      }

    };


    request.onsuccess = event => {

      db = event.target.result;

      resolve();

    };


    request.onerror = () => {

      reject(
        new Error(
          "Failed to open IndexedDB"
        )
      );

    };


  });

}



function loadCardRound() {

  return new Promise((resolve, reject) => {


    if (!db) {

      resolve({});

      return;

    }


    const transaction =
      db.transaction(
        "CardRounds",
        "readonly"
      );


    const store =
      transaction.objectStore(
        "CardRounds"
      );


    const request =
      store.getAll();



    request.onsuccess = () => {


      const result = {};


      request.result.forEach(entry => {

        result[entry.back] = {

          round: entry.round,

          lastSeen: entry.lastSeen

        };

      });


      resolve(result);


    };


    request.onerror = () => {

      reject(
        new Error(
          "Failed loading card progress"
        )
      );

    };


  });

}



function saveCardRound(roundObject) {


  if (!db) {

    console.warn(
      "Database not ready"
    );

    return;

  }



  const transaction =
    db.transaction(
      "CardRounds",
      "readwrite"
    );


  const store =
    transaction.objectStore(
      "CardRounds"
    );



  Object.entries(roundObject)
    .forEach(([back, data]) => {


      store.put({

        back,

        round: data.round,

        lastSeen: data.lastSeen

      });


    });



  transaction.oncomplete = () => {

    console.log(
      "Progress saved"
    );

  };


  transaction.onerror = error => {

    console.error(
      "Saving progress failed",
      error
    );

  };


}




////////////////////////////////////////////////////////////
// CARD ROUND LOGIC
////////////////////////////////////////////////////////////


function getPromotedRound(
  currentRound,
  lastSeenDate
) {


  if (!lastSeenDate) {

    return currentRound;

  }


  const now = new Date();


  const elapsedDays =
    Math.floor(
      (
        now -
        new Date(lastSeenDate)
      )
      /
      (
        1000 *
        60 *
        60 *
        24
      )
    );



  let newRound = currentRound;



  for (
    let round = currentRound + 1;
    round <= roundConfiguration.length - 1;
    round++
  ) {


    const previous =
      roundConfiguration.find(
        cfg =>
          cfg.round === round - 1
      );


    if (
      previous &&
      previous.delay_days <= elapsedDays
    ) {

      newRound = round;

    } else {

      break;

    }

  }


  return newRound;

}





function isCardDue(card) {


  const config =
    roundConfiguration.find(
      cfg =>
        cfg.round === card.round
    );


  if (!config) {

    return true;

  }



  // New cards
  if (
    card.round === 0 ||
    card.round === 1
  ) {

    return true;

  }



  if (!card.lastSeen) {

    return true;

  }



  const lastSeen =
    new Date(card.lastSeen);


  const now =
    new Date();



  const sameDay =
    lastSeen.toDateString()
    === now.toDateString();



  // Already studied today
  if (
    card.round >= 2 &&
    sameDay
  ) {

    return false;

  }



  const nextDate =
    new Date(
      lastSeen.getTime()
      +
      config.delay_days *
      24 *
      60 *
      60 *
      1000
    );


  return now >= nextDate;

}




////////////////////////////////////////////////////////////
// CREATE CARDS WITH SAVED PROGRESS
////////////////////////////////////////////////////////////


function applySavedProgress(card) {


  const saved =
    cardRound[card.back]
    ||
    {};



  return {

    ...card,

    round:
      saved.round ?? 0,


    lastSeen:
      saved.lastSeen || null,


    status:
      null

  };

}




async function initializeCards() {


  let allCards =
    vocabulary.map(
      applySavedProgress
    );



  cards =
    shuffle(
      allCards.filter(
        isCardDue
      )
    );



  console.log(
    "Due cards:",
    cards.length
  );


}



////////////////////////////////////////////////////////////
// SHUFFLE HELPER
////////////////////////////////////////////////////////////


function shuffle(array) {

  return array
    .sort(
      () =>
        Math.random() - 0.5
    );

}



////////////////////////////////////////////////////////////
// INITIAL LOAD PIPELINE
////////////////////////////////////////////////////////////


async function initializeAppData() {


  await openDatabase();


  await initVocabulary();


  cardRound =
    await loadCardRound();



  await initializeCards();


}


////////////////////////////////////////////////////////////
// MULTIPLE CHOICE HELPERS
////////////////////////////////////////////////////////////

function getRandomOptions(correct, allOptions, count = 3) {


  const lessonOptions =
    allOptions.filter(
      option =>
        option.lesson === correct.lesson
    );


  const pool =
    lessonOptions.length >= count + 1
      ? lessonOptions
      : allOptions;



  const wrongAnswers =
    pool
      .filter(
        option =>
          option.back !== correct.back
      )
      .sort(
        () =>
          Math.random() - 0.5
      )
      .slice(
        0,
        count
      );



  return shuffle([
    ...wrongAnswers,
    correct
  ]);

}




////////////////////////////////////////////////////////////
// PROGRESS DOTS
////////////////////////////////////////////////////////////

function initProgressBar() {


  if (!progressBar) return;


  progressBar.innerHTML = "";


  Object.keys(cardToDotMap)
    .forEach(
      key =>
        delete cardToDotMap[key]
    );



  cards.forEach(
    (card, index) => {


      const dot =
        document.createElement(
          "div"
        );


      dot.classList.add(
        "progress-segment"
      );


      if (index === 0) {

        dot.classList.add(
          "active"
        );

      }



      dot.dataset.back =
        card.back;



      progressBar.appendChild(dot);


      cardToDotMap[card.back] =
        dot;


    }
  );


}



function updateActiveDot(card) {


  document
    .querySelectorAll(
      ".progress-segment"
    )
    .forEach(
      dot =>
        dot.classList.remove(
          "active"
        )
    );



  const dot =
    cardToDotMap[card.back];



  if (dot) {

    dot.classList.add(
      "active"
    );

  }

}



function updateDotColor(card) {


  const dot =
    cardToDotMap[card.back];


  if (!dot) return;



  dot.classList.remove(
    "correct",
    "incorrect",
    "multiple"
  );



  if (
    card.status === "typed-correct"
  ) {

    dot.classList.add(
      "correct"
    );


  } else if (
    card.status === "multiple-correct"
  ) {

    dot.classList.add(
      "multiple"
    );


  } else if (
    card.status === "incorrect"
  ) {

    dot.classList.add(
      "incorrect"
    );

  }

}




function reorderProgressBar() {


  if (!progressBar) return;



  cards.forEach(card => {


    const dot =
      cardToDotMap[card.back];


    if (dot) {

      progressBar.appendChild(dot);

    }

  });



}



////////////////////////////////////////////////////////////
// ANSWER NORMALIZATION
////////////////////////////////////////////////////////////


function normalizeLenient(text) {


  return text
    .normalize("NFD")
    .replace(
      /[\u0300-\u036f]/g,
      ""
    )
    .replace(
      /[’‘]/g,
      "'"
    )
    .replace(
      /["“”]/g,
      '"'
    )
    .toLowerCase()
    .trim();

}



function normalizeStrict(text) {


  return text
    .replace(
      /[’‘]/g,
      "'"
    )
    .replace(
      /["“”]/g,
      '"'
    )
    .toLowerCase()
    .trim();

}




function levenshtein(a, b) {


  const matrix =
    Array.from(
      {
        length:
          a.length + 1
      },
      () =>
        Array(
          b.length + 1
        )
        .fill(0)
    );



  for (
    let i = 0;
    i <= a.length;
    i++
  ) {

    matrix[i][0] = i;

  }



  for (
    let j = 0;
    j <= b.length;
    j++
  ) {

    matrix[0][j] = j;

  }



  for (
    let i = 1;
    i <= a.length;
    i++
  ) {


    for (
      let j = 1;
      j <= b.length;
      j++
    ) {


      if (
        a[i - 1] === b[j - 1]
      ) {

        matrix[i][j] =
          matrix[i - 1][j - 1];

      } else {

        matrix[i][j] =
          Math.min(
            matrix[i - 1][j] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j - 1] + 1
          );

      }

    }

  }


  return matrix[a.length][b.length];

}



////////////////////////////////////////////////////////////
// SAVE CARD RESULT
////////////////////////////////////////////////////////////

function updateCardProgress(card) {


  cardRound[card.back] = {

    round:
      card.round,


    lastSeen:
      card.lastSeen

  };


  saveCardRound(cardRound);

}




////////////////////////////////////////////////////////////
// RENDER CARD
////////////////////////////////////////////////////////////

function renderCard(card) {


  cardContainer.classList.remove(
    "hangman"
  );


  optionsContainer.classList.remove(
    "hangman"
  );



  cardContainer.textContent =
    card.front;


  optionsContainer.innerHTML =
    "";



  const config =
    roundConfiguration.find(
      cfg =>
        cfg.round === card.round
    );



  const isHangman =
    config?.type === "hangman";


  const isTyping =
    config?.type === "typing";




  if (isHangman) {


    startHangmanGame({

      cards: [card],

      getPromotedRound,

      saveCardRound,

      cardRound

    });



    nextBtn.style.display =
      "none";


    return;

  }




  if (!isTyping) {


    renderMultipleChoice(card);


  } else {


    renderTyping(card);

  }


}




////////////////////////////////////////////////////////////
// MULTIPLE CHOICE
////////////////////////////////////////////////////////////

function renderMultipleChoice(card) {


  optionsContainer.setAttribute(
    "round",
    "multiple-choice"
  );


  let mistake = false;



  const options =
    getRandomOptions(
      card,
      vocabulary
    );



  options.forEach(option => {


    const input =
      document.createElement(
        "input"
      );


    const label =
      document.createElement(
        "label"
      );



    input.type =
      "checkbox";


    label.textContent =
      option.back;



    input.onclick =
      () => {


        if (input.disabled)
          return;


        input.disabled =
          true;



        if (
          option.back === card.back
        ) {


          if (!mistake) {


            card.round = 1;


            card.lastSeen =
              new Date()
              .toISOString();


            card.status =
              "multiple-correct";


            updateCardProgress(card);


          } else {


            card.status =
              "incorrect";

          }



          updateDotColor(card);


          nextBtn.disabled =
            false;



        } else {


          mistake = true;


          card.status =
            "incorrect";


          updateDotColor(card);

        }


      };



    optionsContainer.append(
      input,
      label
    );


  });

}
////////////////////////////////////////////////////////////
// TYPING MODE
////////////////////////////////////////////////////////////

function renderTyping(card) {


  optionsContainer.setAttribute(
    "round",
    "typing"
  );



  if (
    typeof card.madeMistakeThisSession === "undefined"
  ) {

    card.madeMistakeThisSession = false;

  }



  const input =
    document.createElement(
      "input"
    );


  input.type =
    "text";


  input.placeholder =
    "Type the answer...";


  input.className =
    "typing-input";



  const checkButton =
    document.createElement(
      "button"
    );


  checkButton.textContent =
    "prüfen";


  checkButton.className =
    "check-btn";



  function checkAnswer() {


    const userAnswer =
      input.value;



    const correctAnswer =
      card.back;



    const strictUser =
      normalizeStrict(
        userAnswer
      );


    const strictCorrect =
      normalizeStrict(
        correctAnswer
      );



    const lenientUser =
      normalizeLenient(
        userAnswer
      );


    const lenientCorrect =
      normalizeLenient(
        correctAnswer
      );



    const strictDistance =
      levenshtein(
        strictUser,
        strictCorrect
      );



    const lenientDistance =
      levenshtein(
        lenientUser,
        lenientCorrect
      );



    const perfect =
      strictDistance === 0;



    const closeEnough =
      lenientDistance <= 2;



    const realMistake =
      lenientDistance > 2;



    const correct =
      perfect ||
      closeEnough;




    if (correct) {


      if (
        !card.madeMistakeThisSession &&
        realMistake
      ) {

        card.madeMistakeThisSession =
          true;

      }




      if (
        !card.madeMistakeThisSession
      ) {


        if (
          card.round === 1
        ) {


          card.round = 2;


        } else {


          card.round =
            getPromotedRound(
              card.round,
              card.lastSeen
            );


        }


      }




      card.lastSeen =
        new Date()
        .toISOString();



      card.status =
        "typed-correct";



      updateCardProgress(card);


      updateDotColor(card);



      checkButton.classList.add(
        "right"
      );


      if (!perfect) {


        const feedback =
          document.createElement(
            "div"
          );


        feedback.className =
          "feedback";


        feedback.textContent =
          `Close enough! Correct: ${card.back}`;


        optionsContainer.appendChild(
          feedback
        );

      }




    } else {


      card.status =
        "incorrect";


      card.madeMistakeThisSession =
        true;



      updateDotColor(card);



      checkButton.classList.add(
        "wrong"
      );



      const feedback =
        document.createElement(
          "div"
        );


      feedback.className =
        "feedback";


      feedback.textContent =
        `Correct answer: ${card.back}`;


      optionsContainer.appendChild(
        feedback
      );



      // Put card back later
      setTimeout(() => {


        const insertPosition =
          Math.min(
            currentCardIndex + 4,
            cards.length
          );


        cards.splice(
          insertPosition,
          0,
          card
        );


        reorderProgressBar();


      }, 300);



    }



    input.disabled =
      true;


    checkButton.disabled =
      true;


    nextBtn.disabled =
      false;



  }




  checkButton.onclick =
    checkAnswer;



  input.addEventListener(
    "keydown",
    event => {


      if (
        event.key === "Enter" &&
        !checkButton.disabled
      ) {

        checkAnswer();

      }

    }
  );



  optionsContainer.append(
    input,
    checkButton
  );



  input.focus();

}



////////////////////////////////////////////////////////////
// CARD NAVIGATION
////////////////////////////////////////////////////////////

function showNextCard() {


  if (
    currentCardIndex >= cards.length
  ) {


    cardContainer.textContent =
      "Session complete!";


    optionsContainer.innerHTML =
      "";


    nextBtn.style.display =
      "none";


    return;

  }




  const card =
    cards[currentCardIndex];



  renderCard(card);



  updateActiveDot(card);



  nextBtn.disabled =
    true;



  currentCardIndex++;


}



function loadBatch(index) {


  cards =
    batches[index] || [];


  currentCardIndex =
    0;



  initProgressBar();



  if (
    cards.length
  ) {


    nextBtn.style.display =
      "";


    showNextCard();



  } else {


    cardContainer.textContent =
      "No cards due!";


    optionsContainer.innerHTML =
      "";


    nextBtn.style.display =
      "none";


  }

}




if (nextBtn) {


  nextBtn.addEventListener(
    "click",
    showNextCard
  );

}




////////////////////////////////////////////////////////////
// HANGMAN RETURN EVENT
////////////////////////////////////////////////////////////

document.addEventListener(
  "hangmanFinished",
  () => {


    const previousCard =
      cards[currentCardIndex - 1];


    if (previousCard) {

      updateDotColor(
        previousCard
      );

    }



    nextBtn.style.display =
      "";


    showNextCard();


  }
);

////////////////////////////////////////////////////////////
// LESSON STUDY LOADING
////////////////////////////////////////////////////////////

export async function getDueCardsForLesson(lesson) {


  const savedProgress =
    await loadCardRound();



  return shuffle(

    vocabulary

      .filter(
        card =>
          card.lesson === lesson
      )

      .map(card => {


        const saved =
          savedProgress[card.back]
          ||
          {};



        return {

          ...card,

          round:
            saved.round ?? 0,


          lastSeen:
            saved.lastSeen || null,


          status:
            null

        };


      })


      .filter(isCardDue)

  );


}





async function loadVocabulary(lesson) {


  currentLesson =
    lesson;


  batchIndex =
    0;



  const dueCards =
    await getDueCardsForLesson(
      lesson
    );



  batches = [];



  for (
    let i = 0;
    i < dueCards.length;
    i += BATCH_SIZE
  ) {


    batches.push(
      dueCards.slice(
        i,
        i + BATCH_SIZE
      )
    );


  }



  loadBatch(
    batchIndex
  );


  showStudyMode();


}





////////////////////////////////////////////////////////////
// DASHBOARD PROGRESS
////////////////////////////////////////////////////////////


async function updateLessonProgressBars() {


  const progress =
    await loadCardRound();



  document
    .querySelectorAll(
      ".card[data-lesson]"
    )
    .forEach(cardElement => {


      const lesson =
        cardElement.dataset.lesson;



      const lessonCards =
        vocabulary.filter(
          card =>
            card.lesson === lesson
        );



      const total =
        lessonCards.length;



      for (
        let round = 1;
        round <= 7;
        round++
      ) {



        const completed =
          lessonCards.filter(card => {


            const saved =
              progress[card.back];



            return (
              saved &&
              saved.round >= round
            );


          })
          .length;



        const percent =
          total
            ? Math.round(
                completed / total * 100
              )
            : 0;




        const bar =
          cardElement.querySelector(
            `.progress-track[data-round="${round}"] .progress-fill`
          );



        if (bar) {

          bar.style.width =
            percent + "%";

        }


      }



    });


}





////////////////////////////////////////////////////////////
// SCREEN SWITCHING
////////////////////////////////////////////////////////////


async function showDashboard() {


  const dashboard =
    document.querySelector(
      ".dashboard"
    );


  const study =
    document.getElementById(
      "study-mode"
    );


  const audio =
    document.getElementById(
      "audio-mode"
    );



  if (dashboard)
    dashboard.style.display = "";



  if (study)
    study.style.display = "none";



  if (audio)
    audio.style.display = "none";



  updateLessonProgressBars();


}




async function showStudyMode() {


  const dashboard =
    document.querySelector(
      ".dashboard"
    );


  const study =
    document.getElementById(
      "study-mode"
    );



  if (dashboard)
    dashboard.style.display =
      "none";



  if (study)
    study.style.display =
      "";

}



function showAudioMode() {


  const dashboard =
    document.querySelector(
      ".dashboard"
    );


  const study =
    document.getElementById(
      "study-mode"
    );



  const audio =
    document.getElementById(
      "audio-mode"
    );



  if (dashboard)
    dashboard.style.display =
      "none";


  if (study)
    study.style.display =
      "none";


  if (audio)
    audio.style.display =
      "";


}





////////////////////////////////////////////////////////////
// CLOSE STUDY BUTTON
////////////////////////////////////////////////////////////

const closeStudy =
  document.getElementById(
    "close-study"
  );



if (closeStudy) {


  closeStudy.addEventListener(
    "click",
    () => {


      showDashboard();



      if (cardContainer)
        cardContainer.textContent =
          "";



      if (optionsContainer)
        optionsContainer.innerHTML =
          "";



      if (progressBar)
        progressBar.innerHTML =
          "";



      if (nextBtn)
        nextBtn.disabled =
          true;


    }
  );


}





////////////////////////////////////////////////////////////
// CLOSE AUDIO BUTTON
////////////////////////////////////////////////////////////

const closeAudio =
  document.getElementById(
    "close-audio"
  );



if (closeAudio) {


  closeAudio.addEventListener(
    "click",
    () => {


      showDashboard();



      const pause =
        document.getElementById(
          "pause-btn"
        );



      if (pause)
        pause.disabled =
          true;



      if (cardContainer)
        cardContainer.textContent =
          "";



      if (optionsContainer)
        optionsContainer.innerHTML =
          "";


    }
  );


}




////////////////////////////////////////////////////////////
// STUDY BUTTONS
////////////////////////////////////////////////////////////


document
  .querySelectorAll(
    ".study-btn"
  )
  .forEach(button => {


    button.addEventListener(
      "click",
      () => {


        const lesson =
          button.dataset.lesson;



        loadVocabulary(
          lesson
        );


      }
    );


  });





////////////////////////////////////////////////////////////
// AUDIO BUTTONS
////////////////////////////////////////////////////////////


document
  .querySelectorAll(
    ".audio-btn"
  )
  .forEach(button => {


    button.addEventListener(
      "click",
      () => {


        const lesson =
          button.dataset.lesson;



        showAudioMode();



        startAudioMode(
          lesson
        );


      }
    );


  });





////////////////////////////////////////////////////////////
// MEMORY BUTTONS
////////////////////////////////////////////////////////////


document
  .querySelectorAll(
    ".memory-btn"
  )
  .forEach(button => {


    button.addEventListener(
      "click",
      async () => {


        const lesson =
          button.dataset.lesson;



        const lessonCards =
          await getDueCardsForLesson(
            lesson
          );



        startMemoryGame(
          lessonCards
        );


      }
    );


  });
////////////////////////////////////////////////////////////
// LEVEL FILTERING
////////////////////////////////////////////////////////////

function showLessonsForLevel(level) {


  document
    .querySelectorAll(
      ".card[data-lesson]"
    )
    .forEach(card => {


      const lesson =
        card.dataset.lesson;


      let visible = false;



      switch(level) {


        case "A1.1":
          visible =
            /^A1\.[1-7]$/
            .test(lesson);
          break;


        case "A1.2":
          visible =
            /^A1\.(8|9|10|11|12|13|14)$/
            .test(lesson);
          break;


        case "A2.1":
          visible =
            /^A2\.[1-7]$/
            .test(lesson);
          break;


        case "A2.2":
          visible =
            /^A2\.(8|9|10|11|12|13|14)$/
            .test(lesson);
          break;


        case "B1.1":
          visible =
            /^B1\.[1-7]$/
            .test(lesson);
          break;


        case "B1.2":
          visible =
            /^B1\.(8|9|10|11|12|13|14)$/
            .test(lesson);
          break;


        case "B2.1":
          visible =
            /^B2\.[1-6]$/
            .test(lesson);
          break;


        case "B2.2":
          visible =
            /^B2\.(7|8|9|10|11|12)$/
            .test(lesson);
          break;


        case "fr":
          visible =
            lesson.startsWith("fr.");
          break;


      }



      card.style.display =
        visible ? "" : "none";


    });


}



function getSavedLevel() {

  return localStorage.getItem(
    "selectedLevel"
  );

}



function saveLevel(level) {

  localStorage.setItem(
    "selectedLevel",
    level
  );

}





////////////////////////////////////////////////////////////
// LEVEL MENU
////////////////////////////////////////////////////////////

function setupLevelMenu() {


  const saved =
    getSavedLevel();



  if (saved) {


    showLessonsForLevel(
      saved
    );


    document
      .querySelectorAll(
        ".level-btn"
      )
      .forEach(btn =>
        btn.classList.remove(
          "active"
        )
      );



    const active =
      document.querySelector(
        `.level-btn[data-level="${saved}"]`
      );


    if (active)
      active.classList.add(
        "active"
      );



  } else {


    const menu =
      document.getElementById(
        "menu-modal"
      );


    if (menu)
      menu.style.display =
        "flex";


  }





  document
    .querySelectorAll(
      ".level-btn"
    )
    .forEach(button => {


      button.addEventListener(
        "click",
        () => {


          let level =
            button.dataset.level;



          if (isFrenchMode) {

            level = "fr";

          }



          saveLevel(
            level
          );


          showLessonsForLevel(
            level
          );



          document
            .querySelectorAll(
              ".level-btn"
            )
            .forEach(btn =>
              btn.classList.remove(
                "active"
              )
            );



          button.classList.add(
            "active"
          );



          const menu =
            document.getElementById(
              "menu-modal"
            );


          if (menu)
            menu.style.display =
              "none";


        }
      );


    });


}




const menuButton =
  document.getElementById(
    "menu-btn"
  );


if (menuButton) {


  menuButton.addEventListener(
    "click",
    () => {


      const menu =
        document.getElementById(
          "menu-modal"
        );


      if (menu)
        menu.style.display =
          "flex";


    }
  );


}



const closeMenu =
  document.getElementById(
    "close-menu"
  );


if (closeMenu) {


  closeMenu.addEventListener(
    "click",
    () => {


      const menu =
        document.getElementById(
          "menu-modal"
        );


      if (menu)
        menu.style.display =
          "none";


    }
  );


}





////////////////////////////////////////////////////////////
// HANGMAN BUTTONS
////////////////////////////////////////////////////////////

document
  .querySelectorAll(
    ".hangman-btn"
  )
  .forEach(button => {


    button.addEventListener(
      "click",
      async () => {


        if (
          !Object.keys(cardRound)
            .length
        ) {

          alert(
            "Please wait, progress is still loading..."
          );

          return;

        }



        const lesson =
          button.dataset.lesson;



        const lessonCards =
          await getDueCardsForLesson(
            lesson
          );



        if (!lessonCards.length) {


          alert(
            "No due cards for Hangman!"
          );


          return;

        }



        startHangmanGame({

          cards:
            lessonCards,


          getPromotedRound,


          saveCardRound,


          cardRound

        });



        showStudyMode();



      }
    );


  });






////////////////////////////////////////////////////////////
// EXPORT PROGRESS
////////////////////////////////////////////////////////////

const exportButton =
  document.getElementById(
    "export-btn"
  );



if (exportButton) {


  exportButton.addEventListener(
    "click",
    async () => {


      const data =
        await loadCardRound();



      const blob =
        new Blob(
          [
            JSON.stringify(
              data,
              null,
              2
            )
          ],
          {
            type:
              "application/json"
          }
        );



      const url =
        URL.createObjectURL(
          blob
        );



      const link =
        document.createElement(
          "a"
        );


      link.href =
        url;


      link.download =
        "vocab-progress.json";


      link.click();



      URL.revokeObjectURL(
        url
      );


    }
  );


}






////////////////////////////////////////////////////////////
// IMPORT PROGRESS
////////////////////////////////////////////////////////////

const importButton =
  document.getElementById(
    "import-btn"
  );


const importInput =
  document.getElementById(
    "import-input"
  );



if (
  importButton &&
  importInput
) {


  importButton.addEventListener(
    "click",
    () => {

      importInput.click();

    }
  );



  importInput.addEventListener(
    "change",
    async event => {


      const file =
        event.target.files[0];


      if (!file)
        return;



      try {


        const text =
          await file.text();



        const imported =
          JSON.parse(
            text
          );



        await openDatabase();



        saveCardRound(
          imported
        );



        alert(
          "Fortschritt importiert!"
        );



        location.reload();



      } catch(error) {


        alert(
          "Import fehlgeschlagen."
        );


      }


    }
  );


}





////////////////////////////////////////////////////////////
// START APPLICATION
////////////////////////////////////////////////////////////

async function initApp() {


  await initializeAppData();



  setupLevelMenu();



  initProgressBar();



  showDashboard();



}



initApp();





////////////////////////////////////////////////////////////
// EXPORTS
////////////////////////////////////////////////////////////

export {
  getPromotedRound,
  saveCardRound,
  loadCardRound,
  showDashboard
};



export function getVocabularyForLesson(
  lesson
) {

  return vocabulary.filter(
    card =>
      card.lesson === lesson
  );

}
