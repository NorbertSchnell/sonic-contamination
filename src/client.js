import '@babel/polyfill';
import { default as audio } from 'waves-audio';
import MobileDetect from 'mobile-detect';
import AudioMaster from './utils/AudioMaster';
import ToneSynth from './utils/ToneSynth';
import PulseSynth from './utils/PulseSynth';
import ClusterSynth from './utils/ClusterSynth';
import SpectrumAnalyser from './utils/SpectrumAnalyser';
import Overlay from './utils/Overlay';
import { getStatus, setStatus } from './utils/control';
import { resumeAudioContext, setupAudioInput } from './utils/helpers';
import { refFreqs } from './setup';

const audioContext = audio.audioContext;

const statusUpdatePeriod = 2;
const numRefTones = 3;
const refSynthAmp = 0.05;
const reSynthAmp = 0.5;
const analysisFramePeriod = 0.2;
const offTime = 1;
const minFreqTime = 33;
const maxFreqTime = 44;
const fadeTime = 0.5;
const numRefFreqs = refFreqs.length;
const refFreqIndices = new Map();
const refFreqIntensity = [];
const sensitivity = 3000;

let contaminationGrade = 0;
let freeRefFreqs = [...refFreqs];
let currentRefFreqs = [];
let nextChangeTime = Infinity;

let os = null;
let runningOnMobile = true;
let control = null;
let status = null;
let idleCountDown = Infinity;

let initializedAudioInput = false;
let beforeOverlay = null;
let welcomeOverlay = null;
let endOverlay = null;
let infoOverlay = null;
let errorOverlay = null;
let inFadingFreq = null;
let outFadingFreq = null;
let changeTime = 0;

const analyserMin = -120;
const analyserMax = 12;
const analyserScale = 1 / (analyserMax - analyserMin);
let audioMaster = null;
let stream = null;
let refSynths = new Map();
let reSynth = null;
let analyser = null;

let animationEnabled = false;
let animationCount = 0;
let canvasContainer = null;
let canvas = null;

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

function initAudio() {
  Promise.all([resumeAudioContext(), setupAudioInput()])
    .then(([undefined, stream]) => {
      startSynth();
      startAnimation();
      startAnalysis()

      const mediaStreamSource = audioContext.createMediaStreamSource(stream);
      mediaStreamSource.connect(analyser.input);

      welcomeOverlay.close();

      //setTimeout(() => setLocalStatus('server-error'), 4000); // error test
    })
    .catch((err) => {
      setLocalStatus('audio-error');
    });
}

function startSynth() {
  for (let i = 0; i < numRefTones; i++) {
    const index = Math.floor(freeRefFreqs.length * Math.random());
    const [freq] = freeRefFreqs.splice(index, 1);
    currentRefFreqs.push(freq);

    const synth = new PulseSynth(freq, refSynthAmp, audioMaster.node);
    refSynths.set(freq, synth);

    refFreqIndices.set(freq, i);
    refFreqIntensity.push(0);
  }

  const f11 = 3000 + 6000 * Math.random();
  const f12 = f11 + 100 * Math.random();
  const f21 = 3000 + 6000 * Math.random();
  const f22 = f21 + 100 * Math.random();
  const cluster = [f11, f12, f21, f22]
  reSynth = new ClusterSynth(cluster, audioMaster.node);

  const time = audioContext.currentTime;
  const changeInterval = minFreqTime + (maxFreqTime - minFreqTime) * Math.random();;
  nextChangeTime = time + changeInterval;
}

function stopSynth() {
  for (let [freq, synth] of refSynths)
    synth.stop();

  if (reSynth)
    reSynth.stop();
}

function startAnalysis() {
  analyser = new SpectrumAnalyser(fftSize, refFreqs, analysisFramePeriod, onAnalysisFrame);
  analyser.start();
}

function stopAnalysis() {
  if (analyser)
    analyser.stop();
}

function changeFrequency() {
  const oldIndex = Math.floor(currentRefFreqs.length * Math.random());
  const [oldFreq] = currentRefFreqs.splice(oldIndex, 1);

  const newIndex = Math.floor(freeRefFreqs.length * Math.random());
  const [newFreq] = freeRefFreqs.splice(newIndex, 1);

  currentRefFreqs.push(newFreq);

  const oldSynth = refSynths.get(oldFreq);
  oldSynth.stop();

  const newSynth = new PulseSynth(newFreq, refSynthAmp, audioMaster.node);
  refSynths.set(newFreq, newSynth);

  changeTime = audioContext.currentTime;

  const changeInterval = minFreqTime + (maxFreqTime - minFreqTime) * Math.random();
  nextChangeTime = changeTime + changeInterval;

  inFadingFreq = newFreq;
  outFadingFreq = oldFreq;
}

function forgetFrequency() {
  refSynths.delete(outFadingFreq);
  freeRefFreqs.push(outFadingFreq);
  inFadingFreq = null;
  outFadingFreq = null;
}

function startAnimation() {
  animationEnabled = true;
  animationCount = 0;
  requestAnimationFrame(drawAnimation);
}

function stopAnimation() {
  animationEnabled = false;
}

function drawAnimation() {
  if (animationEnabled) {
    if (animationCount % 4 === 0) {
      const time = audioContext.currentTime;
      const ctx = canvas.getContext('2d');
      const size = canvas.width;
      const l = size / 2;

      ctx.clearRect(0, 0, size, size);

      const maxOpacity = 0.5;
      const goodColor = '#fff';
      const badColor = '#15f4ee';
      //const badColor = '#ffa500';
      const ringGap = 0.03 * l;
      const centerRadius = 0.3 * l;
      const innerRingRadius = centerRadius + ringGap;
      const maxRingRadius = 0.74 * l;
      const maxRingThinkness = maxRingRadius - innerRingRadius;
      let startAngle = 0;
      let deltaAngle = 2 * Math.PI / numRefFreqs;
      let innerRingGapAngle = Math.asin(ringGap / innerRingRadius);
      let outerRingGapAngle, outerRingRadius;

      ctx.fillStyle = '#fff';
      ctx.globalAlpha = 0.1;

      ctx.beginPath();
      ctx.arc(l, l, centerRadius - ringGap, 0, 2 * Math.PI, false);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = badColor;
      ctx.globalAlpha = maxOpacity * contaminationGrade;

      ctx.beginPath();
      ctx.arc(l, l, centerRadius - ringGap, 0, 2 * Math.PI, false);
      ctx.closePath();
      ctx.fill();

      for (let i = 0; i < numRefFreqs; i++) {
        const endAngle = startAngle + deltaAngle;
        const freq = refFreqs[i];
        const fade = Math.min(1, (time - changeTime) / fadeTime);
        let ring = 0;

        if (freq == inFadingFreq) {
          ctx.fillStyle = goodColor;
          ctx.globalAlpha = maxOpacity * fade;
          outerRingRadius = innerRingRadius + maxRingThinkness * fade;
        } else if (freq == outFadingFreq) {
          ctx.fillStyle = goodColor;
          ctx.globalAlpha = maxOpacity * (1 - fade);
          outerRingRadius = innerRingRadius + maxRingThinkness * (1 - fade);
        } else if (currentRefFreqs.indexOf(freq) >= 0) {
          ctx.fillStyle = goodColor;
          ctx.globalAlpha = maxOpacity;
          outerRingRadius = innerRingRadius + maxRingThinkness;
        } else {
          const intensity = refFreqIntensity[i];
          ctx.fillStyle = badColor;
          ctx.globalAlpha = maxOpacity * intensity;
          outerRingRadius = innerRingRadius + maxRingThinkness * intensity;
        }

        outerRingGapAngle = Math.asin(ringGap / outerRingRadius);

        ctx.beginPath();
        ctx.arc(l, l, outerRingRadius, startAngle + outerRingGapAngle, endAngle - outerRingGapAngle, false);
        ctx.arc(l, l, innerRingRadius, endAngle - innerRingGapAngle, startAngle + innerRingGapAngle, true);
        ctx.closePath();
        ctx.fill();

        startAngle = endAngle;
        endAngle = startAngle + deltaAngle;
      }

      animationCount = 0;
    }

    animationCount++;
    requestAnimationFrame(drawAnimation);
  }
}

function onAnalysisFrame(array, peaks) {
  const time = audioContext.currentTime;

  if (outFadingFreq !== null && time - changeTime >= offTime)
    forgetFrequency();

  if (time >= nextChangeTime)
    changeFrequency();

  let maxIntensity = 0;

  for (let i = 0; i < peaks.length; i++) {
    const peak = peaks[i];
    const freq = peak.freq;
    const peakPower = decibelToPower(peak.level);
    const peakIntensity = Math.min(1, sensitivity * Math.sqrt(peakPower));

    if (currentRefFreqs.indexOf(freq) < 0 && freq !== outFadingFreq)
      maxIntensity = Math.max(maxIntensity, peakIntensity);

    refFreqIntensity[i] = peakIntensity;
  }

  contaminationGrade = maxIntensity;
  reSynth.amp = reSynthAmp * maxIntensity;
}

function onResize() {
  const contRect = canvasContainer.getBoundingClientRect();
  const width = contRect.width;
  const height = contRect.height;
  const size = Math.min(width, height);

  canvas.width = size;
  canvas.height = size;
  canvas.style.top = `${(height - size) / 2}px`;
  canvas.style.left = `${(width - size) / 2}px`;
}

function setLocalStatus(status) {
  switch (status) {
    case 'before':
      beforeOverlay.open();
      endOverlay.close();
      audioMaster.setGain(0, 1);
      break;

    case 'running':
      beforeOverlay.close();
      endOverlay.close();
      audioMaster.setGain(1, 1);
      break;

    case 'end':
      beforeOverlay.close();
      endOverlay.open();
      audioMaster.setGain(0, 10);
      break;

    case 'server-error':
      errorOverlay.open('Autsch, es besteht keine Verbindung zum Server.');
      //audioMaster.setGain(0, 1);
      stopAnimation();
      stopAnalysis();
      stopSynth();
      break;

    case 'audio-error':
      errorOverlay.open('Autsch, die Anwendung kann nicht auf Mikrofon und Audioresourcen zugreifen.');
      break;

      // default:
      //   console.error('unknown local status:', status);
  }
}

async function updateStatus() {
  getStatus()
    .then((newStatus) => {
      if (status === 'end') {
        idleCountDown--;

        if (idleCountDown <= 0)
          location.reload(); // shut everything down
      }

      if (newStatus !== status) {
        setLocalStatus(newStatus);

        if (status === 'running' && newStatus == 'end')
          idleCountDown = 10;

        status = newStatus;
        console.log(`status = ${status}`);
      }

      setTimeout(updateStatus, 1000 * statusUpdatePeriod);
    })
    .catch((err) => {
      setLocalStatus('server-error');
      idleCountDown = 5;
    });
}

function main() {
  const ua = window.navigator.userAgent;
  const md = new MobileDetect(ua);

  os = md.os();
  runningOnMobile = (os === 'AndroidOS' || os === 'iOS');

  canvasContainer = document.getElementById('canvas-container');
  canvas = document.getElementById('canvas');

  onResize();
  window.addEventListener('resize', onResize);

  welcomeOverlay = new Overlay('welcome-overlay', true, initAudio);
  infoOverlay = new Overlay('info-overlay', true);
  beforeOverlay = new Overlay('before-overlay', false);
  endOverlay = new Overlay('end-overlay', false);
  errorOverlay = new Overlay('error-overlay', false);

  const infoButton = document.getElementById('info-button');
  infoButton.addEventListener('click', () => infoOverlay.open());

  audioMaster = new AudioMaster();

  updateStatus();
}

window.addEventListener('load', main);
