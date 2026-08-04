// audio.js

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

  audioModal = document.createElement("div");
  audioModal.className = "audio-modal";

  const content = document.createElement("div");
  content.className = "audio-content";

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✖";
  closeBtn.className = "close-audio";
  closeBtn.onclick = stopAudioMode;

  const title = document.createElement("h2");
  title.textContent = "Audio Mode";

  audioListContainer = document.createElement("div");
  audioListContainer.className = "audio-list";

  const controls = document.createElement("div");
  controls.className = "audio-controls";

  const pauseBtn = document.createElement("button");
  pauseBtn.id = "pause-audio";
  pauseBtn.textContent = "⏸ Pause";

  pauseBtn.onclick = () => {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused
      ? "▶ Resume"
      : "⏸ Pause";
  };

  controls.appendChild(pauseBtn);

  content.appendChild(closeBtn);
  content.appendChild(title);
  content.appendChild(audioListContainer);
  content.appendChild(controls);

  audioModal.appendChild(content);

  document.body.appendChild(audioModal);
}

////////////////////////////////////////////////////////////
// 📋 RENDER LIST
////////////////////////////////////////////////////////////

function updateCurrentCard(card) {

  audioListContainer.innerHTML = `
    <div class="audio-current-word">
      🇫🇷 ${card.back}
    </div>

    <div class="audio-current-translation">
      🇩🇪 ${card.front}
    </div>

    <div class="audio-progress">
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
updateCurrentCard(audioQueue[0]);

runAudioQueue();
}

export { startAudioMode };
