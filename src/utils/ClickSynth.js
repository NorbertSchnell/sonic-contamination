import { default as audio } from 'waves-audio';
import { default as loaders } from 'waves-loaders';

const audioContext = audio.audioContext;
const fadeTime = 0.1;

class ClickSynth {
  constructor() {
    this.buffer = null;

    this._src = null;
    this._gain = null;

    this._amp = 1;
    this._period = 1;
    this._speed = 1;

    this.load();
  }

  load() {
    new loaders.AudioBufferLoader()
      .load('sounds/click-6000.wav')
      .then((buffer) => this.buffer = buffer);
  }

  set gain(value) {
    const gain = this._gain;

    if (gain) {
      const time = audioContext.currentTime;
      gain.gain.setValueAtTime(this._amp, time);
      gain.gain.linearRampToValueAtTime(value, time + fadeTime);
    }

    this._amp = value;
  }

  set period(value) {
    const src = this._src;

    if (src) {
      src.playbackRate.value = value;
    }
  }

  set speed(value) {
    const src = this._src;

    if (src) {
      src.playbackRate.value = value;
    }
  }

  start(period = this._period, speed = this._speed, amp = this._amp) {
    if (this._src === null) {
      const time = audioContext.currentTime;

      const gain = audioContext.createGain();
      gain.connect(audioContext.destination);
      gain.gain.value = 0;
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(amp, time + fadeTime);

      const src = audioContext.createBufferSource();
      src.connect(gain);
      src.buffer = this.buffer;
      src.playbackRate.value = speed;
      src.loop = true;
      src.loopStart = 0;
      src.loopEnd = period;
      src.start(time);

      this._src = src;
      this._gain = gain;
    }
  };

  stop() {
    if (this._src !== null) {
      const time = audioContext.currentTime;

      this._gain.gain.setValueAtTime(this._amp, time);
      this._gain.gain.linearRampToValueAtTime(0, time + fadeTime);
      this._src.stop(time + fadeTime);

      this._src = null;
      this._gain = null;
    }
  };
}

export default ClickSynth;
