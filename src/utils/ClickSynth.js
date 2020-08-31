import { default as audio } from 'waves-audio';
import { default as loaders } from 'waves-loaders';

const audioContext = audio.audioContext;
const fadeTime = 0.1;

class ClickSynth {
  constructor(output) {
    this.output = output;

    this._src = null;
    this._gain = null;

    this._amp = 0;
    this._period = 1;
    this._speed = 1;

    new loaders.AudioBufferLoader()
      .load('sounds/click.wav')
      .then((buffer) => {
        const time = audioContext.currentTime;

        const gain = audioContext.createGain();
        gain.connect(this.output);
        gain.gain.value = 0;

        const src = audioContext.createBufferSource();
        src.connect(gain);
        src.buffer = buffer;
        src.playbackRate.value = 1;
        src.start(time);
        src.loop = true;
        src.loopStart = 0;
        src.loopEnd = 1;

        this._src = src;
        this._gain = gain;
      });
  }

  set amp(value) {
    const time = audioContext.currentTime;
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
      src.loopEnd = value;
    }
  }

  set freq(value) {
    const src = this._src;

    if (src) {
      src.loopEnd = 1 / value;
    }
  }

  set speed(value) {
    const src = this._src;

    if (src) {
      src.playbackRate.value = value;
    }
  }

  stop() {
    const time = audioContext.currentTime;

    this._gain.value = 0;
    this._src.stop(time);

    this._src = null;
    this._gain = null;
  };
}

export default ClickSynth;
