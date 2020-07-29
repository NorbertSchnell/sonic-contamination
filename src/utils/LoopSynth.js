import { default as audio } from 'waves-audio';
import { default as loaders } from 'waves-loaders';

const audioContext = audio.audioContext;
const fadeTime = 0.1;
const maxGain = 0.2;

class LoopSynth {
  constructor() {
    this.buffers = new Map();

    this.id = null;
    this.src = null;
    this.gain = null;

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

  start(id) {
    if (id !== this.id) {
      this.stop();

      const time = audioContext.currentTime;

      const gain = audioContext.createGain();
      gain.connect(audioContext.destination);
      gain.gain.value = 0;
      gain.gain.setValueAtTime(0, time);
      gain.gain.linearRampToValueAtTime(maxGain, time + fadeTime);

      const src = audioContext.createBufferSource();
      src.connect(gain);
      src.buffer = this.buffers.get(id);
      src.start(time);
      src.loop = true;

      this.src = src;
      this.gain = gain;
      this.id = id;
    }
  };

  stop() {
    if (this.src !== null) {
      const time = audioContext.currentTime;

      this.gain.gain.setValueAtTime(maxGain, time);
      this.gain.gain.linearRampToValueAtTime(0, time + fadeTime);
      this.src.stop(time + fadeTime);

      this.src = null;
      this.gain = null;
      this.id = null;
    }
  };
}

export default LoopSynth;
