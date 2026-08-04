// audio.js

import { showDashboard } from "./app.js";

const synth = window.speechSynthesis;

let isAudioModeRunning = false;
let isPaused = false;

let audioQueue = [];
let currentAudioIndex = 0;

let audioModal = null;
let audioListContainer = null;

const FRONT_VOICE_NAME = "Anna";
const BACK_VOICE_NAME  = "Thomas";

function getVoiceByName(name) {
  const voices = synth.getVoices();
  return voices.find(v => v.name.includes(name) && v.localService);
}

function speakText(text, voice) {
  return new Promise(resolve => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.onend = resolve;
    synth.speak(utterance);
  });
}

function pause(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function waitWhilePaused() {
  while (isPaused && isAudioModeRunning) {
    await pause(100);
  }
}

////////////////////////////////////////////////////////////
// 🧱 CREATE MODAL DYNAMICALLY
////////////////////////////////////////////////////////////

function createAudioModal() {

  if (audioModal) {
    audioModal.remove();
  }

  const app = document.querySelector(".app");

  if (!app) {
    console.error("No element with class 'app' found.");
    return;
  }

  // Outer audio mode wrapper
  audioModal = document.createElement("div");
  audioModal.id = "audio-mode";
  audioModal.style.display = "block";
  audioModal.style.position = "relative";

  // Card
  const card = document.createElement("div");
  card.className = "card";
  card.id = "questions";

  // Close button
  const closeBtn = document.createElement("button");
  closeBtn.id = "close-audio";
  closeBtn.innerHTML = "&times;";
  closeBtn.style.position = "absolute";
  closeBtn.style.top = "10px";
  closeBtn.style.right = "10px";
  closeBtn.style.fontSize = "1.5rem";
  closeBtn.style.background = "none";
  closeBtn.style.border = "none";
  closeBtn.style.cursor = "pointer";
  closeBtn.style.zIndex = "1";
  closeBtn.style.color = "black";
  closeBtn.onclick = stopAudioMode;

  // Question area
  audioListContainer = document.createElement("div");
  audioListContainer.className = "question";
  audioListContainer.id = "card-container";

  // Answers area (keeps same structure as study mode)
  const answers = document.createElement("div");
  answers.className = "answers";
  answers.id = "options-container";
  answers.setAttribute("round", "");

  // Pause button
  const pauseBtn = document.createElement("button");
  pauseBtn.id = "pause-btn";
  pauseBtn.disabled = true;
  pauseBtn.textContent = "pause";

  pauseBtn.onclick = () => {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? "resume" : "pause";
  };

  // Next button
  const nextBtn = document.createElement("button");
  nextBtn.id = "next-btn";
  nextBtn.disabled = true;
  nextBtn.textContent = "weiter";

  nextBtn.onclick = () => {
  if (currentAudioIndex < audioQueue.length - 1) {
    currentAudioIndex++;
    updateCurrentCard(audioQueue[currentAudioIndex]);
  } else {
    stopAudioMode();
  }
};

  // Build DOM
  card.appendChild(closeBtn);
  card.appendChild(audioListContainer);
  card.appendChild(answers);
  card.appendChild(pauseBtn);
  card.appendChild(nextBtn);

  audioModal.appendChild(card);

  // Insert into app
  app.appendChild(audioModal);
}

////////////////////////////////////////////////////////////
// 📋 RENDER LIST
////////////////////////////////////////////////////////////

function updateCurrentCard(card) {
  audioListContainer.textContent =
    `🇫🇷 ${card.back}`;

  audioListContainer.innerHTML += `
    <div class="answers">
      🇩🇪 ${card.front}
    </div>
    <div>
      ${currentAudioIndex + 1} / ${audioQueue.length}
    </div>
  `;
}

////////////////////////////////////////////////////////////
// 🔊 AUDIO LOOP
////////////////////////////////////////////////////////////

async function runAudioQueue() {
  if (!audioQueue.length) return;

  isAudioModeRunning = true;

  const frontVoice = getVoiceByName(FRONT_VOICE_NAME);
  const backVoice  = getVoiceByName(BACK_VOICE_NAME);

  for (let i = 0; i < audioQueue.length; i++) {
    if (!isAudioModeRunning) break;

    currentAudioIndex = i;

    const card = audioQueue[i];

    updateCurrentCard(card);

    // ✅ console log
    console.log(`Playing: ${card.front} → ${card.back}`);

// French ×3
for (let j = 0; j < 3; j++) {
  await waitWhilePaused();
  if (!isAudioModeRunning) break;

  await speakText(card.back, backVoice);
  await pause(700);
}

await waitWhilePaused();
if (!isAudioModeRunning) break;

// German ×1
await speakText(card.front, frontVoice);
await pause(900);

await waitWhilePaused();
if (!isAudioModeRunning) break;

// French ×1
await speakText(card.back, backVoice);
await pause(1200);
  }

  stopAudioMode(); // auto-close when finished
}

function stopAudioMode() {
  isAudioModeRunning = false;
  synth.cancel();

  if (audioModal) {
    audioModal.remove();
    audioModal = null;
  }

  showDashboard();
}


////////////////////////////////////////////////////////////
// 🚀 START
////////////////////////////////////////////////////////////

function startAudioMode(lesson, vocabulary) {
  // toggle behavior
  if (isAudioModeRunning) {
    stopAudioMode();
    return;
  }

  const lessonCards = vocabulary.filter(card => card.lesson === lesson);

  if (!lessonCards.length) {
    console.log("No vocabulary found for lesson:", lesson);
    return;
  }

  audioQueue = lessonCards;
  currentAudioIndex = 0;

createAudioModal();
updateCurrentCard(audioQueue[0]);

runAudioQueue();
}

export { startAudioMode };
