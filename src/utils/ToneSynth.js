import { default as audio } from 'waves-audio';

const audioContext = audio.audioContext;

class ToneSynth {
  constructor() {
    this._oscs = null;
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

      for (let freq of freqs) {
        const osc = audioContext.createOscillator();
        osc.connect(gain);
        osc.type = 'sine';
        osc.frequency.value = freq;
        osc.start(time);

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

      for (let osc of this._oscs)
        osc.stop(time + this.fadeTime);

      this._oscs = null;
      this._gain = null;
    }
  };
}

export default ToneSynth;
