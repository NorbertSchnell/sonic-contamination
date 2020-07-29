import '@babel/polyfill';
import { default as audio } from 'waves-audio';
import MobileDetect from 'mobile-detect';
import SelectorButtons from './utils/SelectorButtons';
import ToneSynth from './utils/ToneSynth';
import LoopSynth from './utils/LoopSynth';
import SpectrumAnalyser from './utils/SpectrumAnalyser';
import { setupOverlay, resumeAudioContext, setupAudioInput } from './utils/helpers';

let selectorButtons = null;
let initializedAudioInput = false;
let errorOverlay = null;
let currentIndex = -1;

const audioContext = audio.audioContext;
let stream = null;
let emitSynth = null;
let reSynths = [];
let loopSynth = null;
let analyser = null;
const analyserMin = -120;
const analyserMax = 12;
const analyserScale = 1 / (analyserMax - analyserMin);

let canvasContainer = null;
let canvas = null;
let renderer = null;

const fftSize = 2048;

const emitTones = [
  16801,
  17200,
  17600,
  18000,
  18400,
  18800,
  19200,
  19600,
  20000,
  20400,
  20800,
  21200,
];

const emitTonesLevelCorr = [
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
];

const reTones = [
  281,
  348,
  430,
  531,
  657,
  812,
  1003,
  1240,
  1533,
  1894,
  2342,
  2894,
];

const loops = ['noise'];

function linearToDecibel(val) {
  return 8.685889638065035 * Math.log(val); // 20 * log10(val)
};

function decibelToLinear(val) {
  return Math.exp(0.11512925464970229 * val); // pow(10, val / 20)
};

function initAudioInput() {
  Promise.all([resumeAudioContext(), setupAudioInput()])
    .then(([undefined, stream]) => {
      analyser = new SpectrumAnalyser(fftSize, emitTones, 0.2, updateSpectrum);
      analyser.start();

      for (let i = 0; i < reTones.length; i++)
        reSynths[i].start(reTones[i], 0);

      const mediaStreamSource = audioContext.createMediaStreamSource(stream);
      mediaStreamSource.connect(analyser.input);
    })
    .catch((err) => {
      emitSynth.stop();
      selectorButtons.deselect();

      errorOverlay.innerHTML = `Oops, ${err}.`;
      errorOverlay.classList.add('open');
    });
}

function onStart(index) {
  if (!initializedAudioInput) {
    initializedAudioInput = true;
    initAudioInput(index);
  }

  if (index < emitTones.length) {
    if (currentIndex >= emitTones.length)
      loopSynth.stop();

    const freq = emitTones[index];
    const amp = decibelToLinear(emitTonesLevelCorr[index]);
    emitSynth.start(freq, amp);
  } else {
    if (currentIndex < emitTones.length)
      emitSynth.stop();

    const loop = loops[index - emitTones.length];
    loopSynth.start(loop);
  }

  currentIndex = index;
}

function onStop(index) {
  if (currentIndex < emitTones.length)
    emitSynth.stop();
  else
    loopSynth.stop();

  currentIndex = -1;
}

function onResize() {
  const contRect = canvasContainer.getBoundingClientRect();
}

function displaySpectrum(array) {
  const ctx = canvas.getContext('2d');
  const width = array.length;
  const height = canvas.height;

  canvas.width = width;

  ctx.strokeStyle = '#fff';
  ctx.lineWidth = 1;
  ctx.globalAlpha = 1;

  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < width; i++) {
    const y = analyserScale * (array[i] - analyserMin);

    ctx.beginPath();
    ctx.moveTo(i, canvas.height);
    ctx.lineTo(i, canvas.height * (1 - y));
    ctx.stroke();
  }
}

function displayPeaks(peaks) {
  const ctx = canvas.getContext('2d');

  ctx.strokeStyle = '#000';
  ctx.lineWidth = 1;
  ctx.globalAlpha = 1;

  for (let i = 0; i < peaks.length; i++) {
    if (i !== currentIndex) {
      const peak = peaks[i];
      const x = peak.bin;
      const y = analyserScale * (peak.level - analyserMin);

      ctx.beginPath();
      ctx.moveTo(x, canvas.height);
      ctx.lineTo(x, canvas.height * (1 - y));
      ctx.stroke();
    }
  }
}

function updateSpectrum(array, peaks) {
  displaySpectrum(array);
  displayPeaks(peaks);

  for (let i = 0; i < reTones.length; i++) {
    if (i !== currentIndex)
      reSynths[i].gain = decibelToLinear(peaks[i].level);
  }
}

function main() {
  // const ua = window.navigator.userAgent;
  // const md = new MobileDetect(ua);

  // this.os = (function() {
  //   const os = md.os();

  //   if (os === 'AndroidOS')
  //     return 'android';
  //   else if (os === 'iOS')
  //     return 'ios';
  //   else
  //     return 'other';
  // })();

  canvasContainer = document.getElementById('canvas-container');
  canvas = document.getElementById('spectrum-canvas');
  canvas.height = analyserMax - analyserMin;

  emitSynth = new ToneSynth();

  for (let i = 0; i < reTones.length; i++)
    reSynths[i] = new ToneSynth();

  loopSynth = new LoopSynth();

  selectorButtons = new SelectorButtons('button-container', onStart, onStop);

  for (let i = 0; i < emitTones.length; i++) {
    const label = emitTones[i].toString();
    selectorButtons.add(label);
  }

  for (let i = 0; i < loops.length; i++) {
    const index = emitTones.length + i;
    const label = loops[i];
    loopSynth.addSound(label, `sounds/${label}.wav`, () => selectorButtons.enable(index));
    selectorButtons.add(label);
  }

  selectorButtons.enable();

  window.addEventListener('resize', onResize);

  errorOverlay = document.getElementById('error-overlay');
  setupOverlay('help');
  setupOverlay('info');
}

window.addEventListener('load', main);
