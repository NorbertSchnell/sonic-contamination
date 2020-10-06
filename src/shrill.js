import '@babel/polyfill';
import { default as audio } from 'waves-audio';
import ClusterSynth from './utils/ClusterSynth';
import Overlay from './utils/Overlay';
import { resumeAudioContext } from './utils/helpers';

const audioContext = audio.audioContext;
let welcomeOverlay = null;
let errorOverlay = null;

function initAudio() {
  resumeAudioContext()
    .then(() => {
      const f11 = 3000 + 6000 * Math.random();
      const f12 = f11 + 100 * Math.random();
      const f21 = 3000 + 6000 * Math.random();
      const f22 = f21 + 100 * Math.random();
      const cluster = [f11, f12, f21, f22]
      const reSynth = new ClusterSynth(cluster, audioContext.destination);
      reSynth.amp = 0.2;

      welcomeOverlay.close();
    })
    .catch((err) => {
      errorOverlay.open('Autsch, die Anwendung kann nicht auf Audioresourcen zugreifen.');
    });
}

function main() {
  welcomeOverlay = new Overlay('welcome-overlay', true, initAudio);
  errorOverlay = new Overlay('error-overlay', false);
}

window.addEventListener('load', main);
