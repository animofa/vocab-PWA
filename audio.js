// audio.js

import { showDashboard, getDueCardsForLesson } from "./app.js";

const synth = window.speechSynthesis;

let isAudioModeRunning = false;
let isPaused = false;

let audioQueue = [];
let currentAudioIndex = 0;

let audioModal = null;
let audioListContainer = null;

let skipToNext = false;

const FRONT_VOICE_NAME = "Anna";
const BACK_VOICE_NAME  = "Thomas";

function getVoiceByName(name) {
  const voices = synth.getVoices();
  return voices.find(v => v.name.includes(name) && v.localService);
}

function speakText(text, voice, rate = 1) {
  return new Promise(resolve => {
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.voice = voice;
    utterance.rate = rate;

    let finished = false;

    const done = () => {
      if (!finished) {
        finished = true;
        resolve();
      }
    };

    utterance.onend = done;
    utterance.onerror = done;

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
  pauseBtn.disabled = false;
  pauseBtn.textContent = "pause";

  pauseBtn.onclick = () => {
  isPaused = !isPaused;

  if (isPaused) {
    synth.pause();
    pauseBtn.textContent = "resume";
  } else {
    synth.resume();
    pauseBtn.textContent = "pause";
  }
};

  // Next button
  const nextBtn = document.createElement("button");
  nextBtn.id = "next-btn";
  nextBtn.disabled = false;
  nextBtn.textContent = "weiter";

  nextBtn.onclick = () => {
  if (currentAudioIndex < audioQueue.length - 1) {
    skipToNext = true;
    synth.cancel();   // immediately stop current speech
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

while (currentAudioIndex < audioQueue.length && isAudioModeRunning) {

  skipToNext = false;

  const card = audioQueue[currentAudioIndex];
  updateCurrentCard(card);

    // ✅ console log
    console.log(`Playing: ${card.front} → ${card.back}`);

// French ×3
for (let j = 0; j < 3; j++) {
  await waitWhilePaused();
  if (!isAudioModeRunning) break;

  await speakText(card.back, backVoice, 0.8);

  if (skipToNext) break;

  await pause(1200);

  if (skipToNext) break;
}

if (skipToNext) {
  currentAudioIndex++;
  continue;
}

await waitWhilePaused();
if (!isAudioModeRunning) break;

// German ×1
await speakText(card.front, frontVoice, 1);

if (skipToNext) {
  currentAudioIndex++;
  continue;
}

await pause(1200);

if (skipToNext) {
  currentAudioIndex++;
  continue;
}

// French ×1
await speakText(card.back, backVoice, 0.8);

if (skipToNext) {
  currentAudioIndex++;
  continue;
}

await pause(1800);

if (skipToNext) {
  currentAudioIndex++;
  continue;
}
  currentAudioIndex++;
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

async function startAudioMode(lesson) {
  if (isAudioModeRunning) {
    stopAudioMode();
    return;
  }

  audioQueue = await getDueCardsForLesson(lesson);

  if (!audioQueue.length) {
    console.log("No due vocabulary found for lesson:", lesson);
    return;
  }

  currentAudioIndex = 0;

  createAudioModal();
  updateCurrentCard(audioQueue[0]);

  runAudioQueue();
}

export { startAudioMode };
