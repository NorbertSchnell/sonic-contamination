import { default as audio } from 'waves-audio';

const audioContext = audio.audioContext;

class QuadSynth {
  constructor() {
    this._oscs = null;
    this._mods = null;
    this._lfos = null;
    this._gain = null;
    this._amp = 1;
    this.fadeTime = 0.1;
  }

  set gain(value) {
    const gain = this._gain;

    if (gain) {
      const time = audioContext.currentTime;
      gain.gain.setValueAtTime(this._amp, time);
      gain.gain.linearRampToValueAtTime(value, time + this.fadeTime);
    }

    this._amp = value;
  }

  start(freqs, amp = this._amp) {
    if (this._oscs === null) {
      this.stop();

      const time = audioContext.currentTime;

      const gain = audioContext.createGain();
      gain.connect(audioContext.destination);
      gain.gain.value = 0;
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(amp, time + this.fadeTime);

      this._oscs = [];
      this._mods = [];
      this._lfos = [];

      for (let freq of freqs) {
        const mod = audioContext.createGain();
        mod.connect(gain);
        mod.gain.value = 0;

        const lfo = audioContext.createOscillator();
        lfo.connect(mod.gain);
        lfo.type = 'sine';
        lfo.frequency.value = 0.25 + 0.25 * Math.random();
        lfo.start(time);

        const osc = audioContext.createOscillator();
        osc.connect(mod);
        osc.type = 'sine';
        osc.frequency.value = freq;
        osc.start(time);

        this._mods.push(mod);
        this._lfos.push(lfo);
        this._oscs.push(osc);
      }

      this._gain = gain;
      this._amp = amp;
    }
  };

  stop() {
    if (this._oscs !== null) {
      const time = audioContext.currentTime;

      this._gain.gain.setValueAtTime(this._amp, time);
      this._gain.gain.linearRampToValueAtTime(0, time + this.fadeTime);

      for (let lfo of this._lfos)
        lfo.stop(time + this.fadeTime);

      for (let osc of this._oscs)
        osc.stop(time + this.fadeTime);

      this._mods = null;
      this._lfos = null;
      this._oscs = null;
      this._gain = null;
    }
  };
}

export default QuadSynth;
