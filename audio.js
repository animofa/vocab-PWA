// audio.js

const synth = window.speechSynthesis;

let isAudioModeRunning = false;
let isPaused = false;

let audioQueue = [];
let currentAudioIndex = 0;

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



////////////////////////////////////////////////////////////
// 📋 RENDER LIST
////////////////////////////////////////////////////////////

function updateCurrentCard(card) {

  document.getElementById("audio-current-word").textContent =
    `🇫🇷 ${card.back}`;

  document.getElementById("audio-current-translation").textContent =
    `🇩🇪 ${card.front}`;

  document.getElementById("audio-progress").textContent =
    `${currentAudioIndex + 1} / ${audioQueue.length}`;
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
