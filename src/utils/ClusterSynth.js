import { default as audio } from 'waves-audio';

const audioContext = audio.audioContext;
const fadeTime = 0.1;

class ClusterSynth {
  constructor(freqs, output) {
    this._oscs = null;
    this._gain = null;
    this._amp = 0;

    const time = audioContext.currentTime;

    const gain = audioContext.createGain();
    gain.connect(output);
    gain.gain.value = 0;
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(this._amp, time + fadeTime);

    this._oscs = [];

    for (let freq of freqs) {
      const osc = audioContext.createOscillator();
      osc.connect(gain);
      osc.type = 'sine';
      osc.frequency.value = freq;
      osc.start(time);

      this._oscs.push(osc);
      this._gain = gain;
    }
  }

  set amp(value) {
    const gain = this._gain;

    if (gain) {
      const time = audioContext.currentTime;
      gain.gain.setValueAtTime(this._amp, time);
      gain.gain.linearRampToValueAtTime(value, time + fadeTime);
    }

    this._amp = value;
  }

  stop() {
    if (this._oscs !== null) {
      const time = audioContext.currentTime;

      this._gain.gain.setValueAtTime(this._amp, time);
      this._gain.gain.linearRampToValueAtTime(0, time + fadeTime);

      for (let osc of this._oscs)
        osc.stop(time + fadeTime);

      this._oscs = null;
      this._gain = null;
    }
  };
}

export default ClusterSynth;
