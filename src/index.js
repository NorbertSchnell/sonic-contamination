import '@babel/polyfill';
import { default as audio } from 'waves-audio';
import MobileDetect from 'mobile-detect';
import SelectorButtons from './utils/SelectorButtons';
import ToneSynth from './utils/ToneSynth';
import PulseSynth from './utils/PulseSynth';
import ClickSynth from './utils/ClickSynth';
import SpectrumAnalyser from './utils/SpectrumAnalyser';
import { setupOverlay, resumeAudioContext, setupAudioInput } from './utils/helpers';
import {ids, clusters} from './setup';

let os = null;
let runningOnMobile = true;

let selectorButtons = null;
let initializedAudioInput = false;
let welcomeOverlay = null;
let errorOverlay = null;
let currentIndex = -1;
let currentIdFreqs = null;
let frameCount = 0;

const audioContext = audio.audioContext;
let stream = null;
let idSynth = null;
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
      analyser = new SpectrumAnalyser(fftSize, ids, 0.2, onSpectrum);
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

function onStart(index) {
  if (index !== currentIndex) {
    onStop(currentIndex);

    frameCount = 0;

    const currentCluster = clusters[index];
    idSynth.start(currentCluster.id, 0.1);
    reSynth.start(0.4, 1, 0);
    currentIndex = index;
    currentIdFreqs = currentCluster.id;
  }
}

function onStop(index) {
  idSynth.stop();
  reSynth.stop();
  currentIndex = -1;
  currentIdFreqs = null;
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

    if (!currentIdFreqs || (freq !== currentIdFreqs[0] && freq !== currentIdFreqs[1] && freq !== currentIdFreqs[2]))
      ctx.strokeStyle = '#f00';
    else
      ctx.strokeStyle = '#0f0';

    const x = peak.bin;
    const y = analyserScale * (peak.level - analyserMin);

    ctx.beginPath();
    ctx.moveTo(x, canvas.height);
    ctx.lineTo(x, canvas.height * (1 - y));
    ctx.stroke();
  }
}

function onSpectrum(array, peaks) {
  if (!runningOnMobile) {
    displaySpectrum(array);
    displayPeaks(peaks);
  }

  if (frameCount > 4) {
    let power = 0;

    for (let peak of peaks) {
      const freq = peak.freq;

      if (!currentIdFreqs || (freq !== currentIdFreqs[0] && freq !== currentIdFreqs[1] && freq !== currentIdFreqs[2]))
        power += decibelToPower(peak.level);
    }

    const amp = Math.max(0, Math.min(0.4, 1000 * Math.sqrt(power)));
    reSynth.gain = amp;

    const period = Math.max(1, Math.min(4, 1000 * Math.sqrt(power)));
    reSynth.period = period;
  }

  frameCount++;
}

function main() {
  const ua = window.navigator.userAgent;
  const md = new MobileDetect(ua);

  os = md.os();
  runningOnMobile = (os === 'AndroidOS' || os === 'iOS');

  canvasContainer = document.getElementById('canvas-container');
  canvas = document.getElementById('spectrum-canvas');
  canvas.height = analyserMax - analyserMin;

  idSynth = new PulseSynth();
  reSynth = new ClickSynth();

  selectorButtons = new SelectorButtons('button-container', onStart, onStop);

  for (let i = 0; i < clusters.length; i++) {
    const s = clusters[i];
    const label = `${s.id[0]} ${s.id[1]} ${s.id[2]}`;
    selectorButtons.add(label);
  }

  selectorButtons.enable();

  welcomeOverlay = document.getElementById('welcome-overlay');
  errorOverlay = document.getElementById('error-overlay');
  setupOverlay('welcome', false, initAudioInput);
  setupOverlay('help');
  setupOverlay('info');
}

window.addEventListener('load', main);
