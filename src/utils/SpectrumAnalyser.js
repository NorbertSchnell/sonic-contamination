import { default as audio } from 'waves-audio';

const audioContext = audio.audioContext;

function powerToDecibel(val) {
  return 4.3429448190325175 * Math.log(val); // 10 * log10(val)
};

function decibelToPower(val) {
  return Math.exp(0.23025850929940458 * val); // pow(10, val / 10)
};

const freqTolerance = 4;
const levelThreshold = 3;
const lpB1 = 0.666;
const lpA = 0.333;

class SpectrumAnalyser {
  constructor(fftSize, freqs, period = 1, callback = null) {
    this.analyser = audioContext.createAnalyser(fftSize);
    this.analyser.smoothingTimeConstant = 0;

    const deltaFreq = audioContext.sampleRate / fftSize;
    this.deltaFreq = deltaFreq;

    const numBins = this.analyser.frequencyBinCount;
    this.array = new Float32Array(numBins);

    this.startBin = Math.max(2, Math.floor(freqs[0] / deltaFreq));
    this.endBin = Math.min(numBins - 2, Math.ceil(freqs[freqs.length - 1] / deltaFreq));

    this.freqs = freqs;
    this.peaks = [];

    for (let i = 0; i < freqs.length; i++) {
      this.peaks[i] = {
        bin: freqs[i] / deltaFreq,
        freq: freqs[i],
        level: -120,
      };
    }

    this.period = period;
    this.callback = callback;
    this.timeout = null;

    this.input = this.analyser;
    this.analyse = this.analyse.bind(this);
  }

  analyse() {
    const bins = this.array;
    const startBin = this.startBin;
    const endBin = this.endBin;
    const numBins = endBin - startBin;
    const freqs = this.freqs;
    const numFreqs = freqs.length;
    const deltaFreq = this.deltaFreq;
    const peaks = this.peaks;

    this.analyser.getFloatFrequencyData(bins);

    let totalPower = 0;

    for (let i = startBin; i < endBin; i++) {
      const level = bins[i];
      const power = decibelToPower(level);

      totalPower += power;
    }

    totalPower /= numBins;
    const groundLevel = powerToDecibel(totalPower);

    let j = 0;

    for (let i = startBin; i < endBin; i++) {
      const center = bins[i];
      const left = bins[i - 1];
      const right = bins[i + 1];

      const minLevel = groundLevel + levelThreshold;

      if (center > left && center > right && center > minLevel) {
        const a = 0.5 * (right + left) - center;
        const b = 0.5 * (right - left);
        const frac = -b / (2.0 * a);
        const peakLevel = (a * frac + b) * frac + center;
        const peakIndex = i + frac;
        const freq = peakIndex * deltaFreq;

        while (j < numFreqs && freq > freqs[j] && freq - freqs[j] > freqTolerance) {
          peaks[j].level *= lpB1;
          peaks[j].level += lpA * -120;
          j++;
        }

        if (j < numFreqs && Math.abs(freq - freqs[j]) <= freqTolerance) {
          peaks[j].level *= lpB1;
          peaks[j].level += lpA * peakLevel;
          j++;
        }
      }
    }

    while (j < numFreqs) {
      peaks[j].level *= lpB1;
      peaks[j].level += lpA * -120;
      j++;
    }    

    if (this.callback)
      this.callback(this.array, this.peaks);

    this.timeout = setTimeout(this.analyse, this.period * 1000);
  }

  start() {
    this.analyse();
  }

  stop() {
    if (this.timeout !== null) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  }
}

export default SpectrumAnalyser;
