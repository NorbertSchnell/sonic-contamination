import '@babel/polyfill';
import { default as audio } from 'waves-audio';
import MobileDetect from 'mobile-detect';
import ToneSynth from './utils/ToneSynth';
import ClusterSynth from './utils/ClusterSynth';
import SpectrumAnalyser from './utils/SpectrumAnalyser';
import { setupOverlay, resumeAudioContext, setupAudioInput } from './utils/helpers';
import { idFreqs } from './setup';

let os = null;
let runningOnMobile = true;

let initializedAudioInput = false;
let welcomeOverlay = null;
let errorOverlay = null;
let output = null;
let freeIdFreqs = [...idFreqs];
let currentIdFreqs = [];
let fadingFreq = null;
let frameCount = 0;

const audioContext = audio.audioContext;
let stream = null;
let idSynths = new Map();
let reSynth = null;
let analyser = null;
const analyserMin = -120;
const analyserMax = 12;
const analyserScale = 1 / (analyserMax - analyserMin);

let canvasContainer = null;
let canvas = null;
let renderer = null;

const fftSize = 2048;

function linearToDecibel(val) {
  return 8.685889638065035 * Math.log(val); // 20 * log10(val)
};

function decibelToLinear(val) {
  return Math.exp(0.11512925464970229 * val); // pow(10, val / 20)
};

function powerToDecibel(val) {
  return 4.3429448190325175 * Math.log(val); // 10 * log10(val)
};

function decibelToPower(val) {
  return Math.exp(0.23025850929940458 * val); // pow(10, val / 10)
};

function initAudioInput() {
  Promise.all([resumeAudioContext(), setupAudioInput()])
    .then(([undefined, stream]) => {
      initSynth();

      analyser = new SpectrumAnalyser(fftSize, idFreqs, 0.2, onAnalysisFrame);
      analyser.start();

      const mediaStreamSource = audioContext.createMediaStreamSource(stream);
      mediaStreamSource.connect(analyser.input);

      welcomeOverlay.classList.remove('open');
    })
    .catch((err) => {
      errorOverlay.innerHTML = `Oops, ${err} (${err.stack}).`;
      errorOverlay.classList.add('open');
    });
}

function initSynth() {
  output = audioContext.destination;

  for (let i = 0; i < 3; i++) {
    const index = Math.floor(freeIdFreqs.length * Math.random());
    const [freq] = freeIdFreqs.splice(index, 1);
    currentIdFreqs.push(freq);

    const synth = new ToneSynth(freq, 0.1, output);
    idSynths.set(freq, synth);
  }

  const f11 = 3000 + 6000 * Math.random();
  const f12 = f11 + 100 * Math.random();
  const f21 = 3000 + 6000 * Math.random();
  const f22 = f21 + 100 * Math.random();
  const cluster = [f11, f12, f21, f22]
  reSynth = new ClusterSynth(cluster, audioContext.destination);
  frameCount = 0;
}

function changeFrequency() {
  const oldIndex = Math.floor(currentIdFreqs.length * Math.random());
  const [oldFreq] = currentIdFreqs.splice(oldIndex, 1);

  const newIndex = Math.floor(freeIdFreqs.length * Math.random());
  const [newFreq] = freeIdFreqs.splice(newIndex, 1);

  currentIdFreqs.push(newFreq);

  const oldSynth = idSynths.get(oldFreq);
  oldSynth.stop();

  const newSynth = new ToneSynth(newFreq, 0.1, output);
  idSynths.set(newFreq, newSynth);

  fadingFreq = oldFreq;
  frameCount = 0;
}

function forgetFrequency() {
  idSynths.delete(fadingFreq);
  freeIdFreqs.push(fadingFreq);
  fadingFreq = null;
}

function onAnalysisFrame(array, peaks) {
  if (!runningOnMobile) {
    displaySpectrum(array);
    displayPeaks(peaks);
  }

  if (frameCount > 4) {
    if (fadingFreq !== null)
      forgetFrequency();

    if (Math.random() < 0.05)
      changeFrequency();
  }

  let power = 0;

  for (let peak of peaks) {
    const freq = peak.freq;

    if (currentIdFreqs.indexOf(freq) < 0 && freq !== fadingFreq)
      power += decibelToPower(peak.level);
  }

  const p = 1000 * Math.sqrt(power);
  reSynth.amp = Math.max(0, Math.min(0.3, p));

  frameCount++;
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

  ctx.lineWidth = 1;
  ctx.globalAlpha = 1;

  for (let peak of peaks) {
    const freq = peak.freq;

    if (freq === fadingFreq)
      ctx.strokeStyle = '#00f';
    else if (currentIdFreqs.indexOf(freq) >= 0)
      ctx.strokeStyle = '#0f0';
    else
      ctx.strokeStyle = '#f00';

    const x = peak.bin;
    const y = analyserScale * (peak.level - analyserMin);

    ctx.beginPath();
    ctx.moveTo(x, canvas.height);
    ctx.lineTo(x, canvas.height * (1 - y));
    ctx.stroke();
  }
}

function main() {
  const ua = window.navigator.userAgent;
  const md = new MobileDetect(ua);

  os = md.os();
  runningOnMobile = (os === 'AndroidOS' || os === 'iOS');

  canvasContainer = document.getElementById('canvas-container');
  canvas = document.getElementById('spectrum-canvas');
  canvas.height = analyserMax - analyserMin;

  welcomeOverlay = document.getElementById('welcome-overlay');
  errorOverlay = document.getElementById('error-overlay');
  setupOverlay('welcome', false, initAudioInput);
  setupOverlay('help');
  setupOverlay('info');
}

window.addEventListener('load', main);
