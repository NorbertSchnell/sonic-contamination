import { default as audio } from 'waves-audio';

const audioContext = audio.audioContext;

class AudioMaster {
  constructor() {
    const time = audioContext.currentTime;
    const node = audioContext.createGain();
    node.connect(audioContext.destination);
    node.gain.value = 0;
    node.gain.setValueAtTime(0, time);

    this.lastTime = time;
    this.lastValue = 0;
    this.fadeTarget = 0;
    this.fadeSlope = 0;

    this.node = node;
  }

  setGain(targetValue, fadeDuration = 0.1) {
    const time = audioContext.currentTime;

    if (fadeDuration > 0) {
      const interval = time - this.lastTime;
      const extraPolatedValue = this.lastValue + (interval * this.fadeSlope);
      let currentValue;

      if (this.fadeSlope >= 0)
        currentValue = Math.min(this.fadeTarget, extraPolatedValue);
      else
        currentValue = Math.max(this.fadeTarget, extraPolatedValue);

      const gainParam = this.node.gain;
      gainParam.cancelScheduledValues(time);
      gainParam.setValueAtTime(currentValue, time);
      gainParam.linearRampToValueAtTime(targetValue, time + fadeDuration);

      this.lastValue = currentValue;
      this.fadeTarget = targetValue;
      this.fadeSlope = (targetValue - currentValue) / fadeDuration;
    } else {
      gainParam.setValueAtTime(targetValue, time);
    }
  }
}

export default AudioMaster;
