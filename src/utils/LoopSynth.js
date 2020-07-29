import { default as audio } from 'waves-audio';
import { default as loaders } from 'waves-loaders';

const audioContext = audio.audioContext;
const fadeTime = 0.1;

class LoopSynth {
  constructor() {
    this.buffers = new Map();

    this._id = null;
    this._src = null;
    this._gain = null;
    this._amp = 1;

    // audio i/o
    this.input = null;
    this.output = this.level;
  }

  addSound(id, fileName, callback = null) {
    this.buffers.set(id, null);

    new loaders.AudioBufferLoader()
      .load(fileName)
      .then((audioBuffer) => {
        this.buffers.set(id, audioBuffer);

        if (callback)
          callback();
      });
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

  start(id, amp = this._amp) {
    if (id !== this._id) {
      this.stop();

      const time = audioContext.currentTime;

      const gain = audioContext.createGain();
      gain.connect(audioContext.destination);
      gain.gain.value = 0;
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(amp, time + fadeTime);

      const src = audioContext.createBufferSource();
      src.connect(gain);
      src.buffer = this.buffers.get(id);
      src.start(time);
      src.loop = true;

      this._src = src;
      this._gain = gain;
      this._id = id;
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
      this._id = null;
    }
  };
}

export default LoopSynth;
