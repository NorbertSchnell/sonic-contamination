import { default as audio } from 'waves-audio';

const audioContext = audio.audioContext;

class ToneSynth {
  constructor() {
    this._osc = null;
    this._gain = null;

    this._freq = 0;
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

  set freq(value) {
    const osc = this._osc;

    if (osc) {
      const time = audioContext.currentTime;
      osc.frequency.setValueAtTime(this._freq, time);
      osc.frequency.linearRampToValueAtTime(value, time + this.fadeTime);
    }

    this._freq = value;
  }

  start(freq, amp = this._amp) {
    if (freq !== this._freq) {
      this.stop();

      const time = audioContext.currentTime;

      const gain = audioContext.createGain();
      gain.connect(audioContext.destination);
      gain.gain.value = 0;
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(amp, time + this.fadeTime);

      const osc = audioContext.createOscillator();
      osc.connect(gain);
      osc.type = 'sine';
      osc.frequency.value = freq;
      osc.start(time);

      this._osc = osc;
      this._gain = gain;
      this._freq = freq;
      this._amp = amp;
    }
  };

  stop() {
    if (this._osc !== null) {
      const time = audioContext.currentTime;

      this._gain.gain.setValueAtTime(this._amp, time);
      this._gain.gain.linearRampToValueAtTime(0, time + this.fadeTime);
      this._osc.stop(time + this.fadeTime);

      this._osc = null;
      this._gain = null;
      this._freq = 0;
    }
  };
}

export default ToneSynth;
