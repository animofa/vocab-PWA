// audio.js

const synth = window.speechSynthesis;

let isAudioModeRunning = false;
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

////////////////////////////////////////////////////////////
// 🧱 CREATE MODAL DYNAMICALLY
////////////////////////////////////////////////////////////

function createAudioModal() {
  // Remove old one if exists
  if (audioModal) {
    audioModal.remove();
  }

  audioModal = document.createElement("div");
  audioModal.className = "audio-modal";

  const content = document.createElement("div");
  content.className = "audio-content";

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✖";
  closeBtn.className = "close-audio";

  const title = document.createElement("h2");
  title.textContent = "Audio Mode";

  audioListContainer = document.createElement("div");
  audioListContainer.className = "audio-list";

  closeBtn.onclick = stopAudioMode;

  content.appendChild(closeBtn);
  content.appendChild(title);
  content.appendChild(audioListContainer);
  audioModal.appendChild(content);

  document.body.appendChild(audioModal);
}

////////////////////////////////////////////////////////////
// 📋 RENDER LIST
////////////////////////////////////////////////////////////

function renderAudioList() {
  audioListContainer.innerHTML = "";

  audioQueue.forEach((card, index) => {
    const item = document.createElement("div");
    item.className = "audio-item";
    item.textContent = `${card.front} → ${card.back}`;

    if (index === currentAudioIndex) {
      item.classList.add("active");
    }

    audioListContainer.appendChild(item);
  });
}

function updateActiveAudioItem() {
  document.querySelectorAll(".audio-item").forEach((el, index) => {
    el.classList.toggle("active", index === currentAudioIndex);
  });
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
    updateActiveAudioItem();

    const card = audioQueue[i];

    // ✅ console log
    console.log(`Playing: ${card.front} → ${card.back}`);

    await speakText(card.front, frontVoice);
    await pause(800);

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
  renderAudioList();

  runAudioQueue();
}

export { startAudioMode };
