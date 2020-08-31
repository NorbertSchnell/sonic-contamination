import { default as audio } from 'waves-audio';

const audioContext = audio.audioContext;
const fadeTime = 0.5;

class PulseSynth {
  constructor(freq, amp, output) {
    const time = audioContext.currentTime;

    const gain = audioContext.createGain();
    gain.connect(output);
    gain.gain.value = 0;
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(amp, time + fadeTime);

    const mod = audioContext.createGain();
    mod.connect(gain);
    mod.gain.value = 0;

    const lfo = audioContext.createOscillator();
    lfo.connect(mod.gain);
    lfo.type = 'sine';
    lfo.frequency.value = 0.125 + 0.125 * Math.random();
    lfo.start(time);

    const osc = audioContext.createOscillator();
    osc.connect(mod);
    osc.type = 'sine';
    osc.frequency.value = freq;
    osc.start(time);

    this.mod = mod;
    this.lfo = lfo;
    this.osc = osc;
    this.gain = gain;

    this.freq = freq;
    this.amp = amp;
  }

  stop() {
    const time = audioContext.currentTime;

    this.gain.gain.setValueAtTime(this.amp, time);
    this.gain.gain.linearRampToValueAtTime(0, time + fadeTime);

    this.lfo.stop(time + fadeTime);
    this.osc.stop(time + fadeTime);
  }
}

export default PulseSynth;
