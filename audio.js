// audio.js

const synth = window.speechSynthesis;

let isAudioModeRunning = false;
let audioQueue = [];
let currentAudioIndex = 0;

// --- HARDCODED VOICE NAMES ---
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

async function runAudioQueue() {
  if (!audioQueue.length) return;

  isAudioModeRunning = true;

  const frontVoice = getVoiceByName(FRONT_VOICE_NAME);
  const backVoice  = getVoiceByName(BACK_VOICE_NAME);

  for (let i = 0; i < audioQueue.length; i++) {
    if (!isAudioModeRunning) break;

    const card = audioQueue[i];

    await speakText(card.front, frontVoice);
    await pause(800);

    await speakText(card.back, backVoice);
    await pause(1200);
  }

  isAudioModeRunning = false;
}

function stopAudioMode() {
  isAudioModeRunning = false;
  synth.cancel();
}

// 👇 PUBLIC FUNCTION to start audio mode
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

  runAudioQueue();
}

export { startAudioMode };
