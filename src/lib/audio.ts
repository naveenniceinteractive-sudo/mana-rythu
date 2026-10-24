/**
 * Synthesizes organic morning farm ambience using pure Web Audio API.
 * No external mp3 files required! Safe, lightweight, and responsive.
 */

class FarmAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private windNode: AudioNode | null = null;
  private birdTimer: NodeJS.Timeout | null = null;
  private masterGain: GainNode | null = null;

  private initContext() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    this.isPlaying = true;
    this.startWindAmbience();
    this.scheduleBirdChirps();
  }

  public stop() {
    this.isPlaying = false;
    if (this.birdTimer) {
      clearInterval(this.birdTimer);
      this.birdTimer = null;
    }
    if (this.windNode && this.ctx) {
      try {
        (this.windNode as AudioBufferSourceNode).stop?.();
      } catch {
        // ignore
      }
      this.windNode = null;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private startWindAmbience() {
    if (!this.ctx || !this.masterGain) return;

    // Pink/Brown noise generator for gentle countryside breeze
    const bufferSize = this.ctx.sampleRate * 2;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      data[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = data[i];
      data[i] *= 3.5;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    noise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(320, this.ctx.currentTime);

    const windGain = this.ctx.createGain();
    windGain.gain.setValueAtTime(0.08, this.ctx.currentTime);

    noise.connect(filter);
    filter.connect(windGain);
    windGain.connect(this.masterGain);

    noise.start();
    this.windNode = noise;
  }

  private playBirdChirp() {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const chirpGain = this.ctx.createGain();

    // Natural Indian songbird frequency sweep (2.8 kHz -> 4.5 kHz -> 3.2 kHz)
    const baseFreq = 2600 + Math.random() * 600;
    osc.type = "sine";
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.5, now + 0.08);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.1, now + 0.18);

    chirpGain.gain.setValueAtTime(0.001, now);
    chirpGain.gain.exponentialRampToValueAtTime(0.06, now + 0.04);
    chirpGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

    osc.connect(chirpGain);
    chirpGain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  private scheduleBirdChirps() {
    const trigger = () => {
      if (!this.isPlaying) return;
      this.playBirdChirp();
      // Double chirp occasionally
      if (Math.random() > 0.4) {
        setTimeout(() => this.playBirdChirp(), 120 + Math.random() * 80);
      }
    };

    trigger();
    this.birdTimer = setInterval(() => {
      if (Math.random() > 0.3) {
        trigger();
      }
    }, 2800);
  }
}

export const farmAudio = new FarmAudioEngine();
