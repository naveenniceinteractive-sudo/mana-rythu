// Mana Rythu - Ambient Farm Soundscape Generator (Web Audio API)

class FarmAudioSystem {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.masterGain = null;
    this.intervalId = null;
  }

  init() {
    if (this.ctx) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    this.ctx = new AudioContextClass();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  playMorningChirp() {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sine";
    const startFreq = 2200 + Math.random() * 800;
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(startFreq + 600, now + 0.08);
    osc.frequency.exponentialRampToValueAtTime(startFreq - 200, now + 0.18);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.08, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  playBreeze() {
    if (!this.ctx || !this.isPlaying) return;
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(320, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.025, this.ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    whiteNoise.start();
    this.breezeSource = whiteNoise;
  }

  toggle() {
    this.init();
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    this.isPlaying = !this.isPlaying;
    const btn = document.getElementById("ambient-audio-btn");

    if (this.isPlaying) {
      this.playBreeze();
      this.intervalId = setInterval(() => {
        if (Math.random() > 0.4) {
          this.playMorningChirp();
        }
      }, 2500);

      if (btn) {
        btn.innerHTML = `<span>🔊</span> <span class="audio-label">Farm Sounds ON</span>`;
        btn.classList.add("active");
      }
    } else {
      clearInterval(this.intervalId);
      if (this.breezeSource) {
        try {
          this.breezeSource.stop();
        } catch (e) {}
      }
      if (btn) {
        btn.innerHTML = `<span>🔇</span> <span class="audio-label">Farm Sounds</span>`;
        btn.classList.remove("active");
      }
    }
    return this.isPlaying;
  }
}

window.manaAudio = new FarmAudioSystem();

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("ambient-audio-btn");
  if (btn) {
    btn.addEventListener("click", () => window.manaAudio.toggle());
  }
});
