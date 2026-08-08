/**
 * Synthesized Sci-Fi / Cyber Audio Feedback using Web Audio API
 * Zero external MP3 dependencies. Zero latency.
 */

let audioCtx = null;
let soundEnabled = true;

const getAudioContext = () => {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

export const toggleSound = (enabled) => {
  if (typeof enabled === 'boolean') {
    soundEnabled = enabled;
  } else {
    soundEnabled = !soundEnabled;
  }
  try {
    localStorage.setItem('kanika_sys_sound', soundEnabled ? '1' : '0');
  } catch (e) {}
  return soundEnabled;
};

export const isSoundEnabled = () => {
  try {
    const saved = localStorage.getItem('kanika_sys_sound');
    if (saved !== null) {
      soundEnabled = saved === '1';
    }
  } catch (e) {}
  return soundEnabled;
};

export const playSound = (type = 'click') => {
  if (!soundEnabled) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    switch (type) {
      case 'hover':
        osc.type = 'sine';
        osc.frequency.setValueAtTime(420, now);
        osc.frequency.exponentialRampToValueAtTime(840, now + 0.04);
        gain.gain.setValueAtTime(0.015, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc.start(now);
        osc.stop(now + 0.04);
        break;

      case 'click':
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600, now);
        osc.frequency.exponentialRampToValueAtTime(200, now + 0.06);
        gain.gain.setValueAtTime(0.04, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);
        osc.start(now);
        osc.stop(now + 0.06);
        break;

      case 'access':
        // Futuristic two-tone chime for preloader access granted
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.connect(gain2);
        gain2.connect(ctx.destination);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, now); // D5
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(880, now + 0.08); // A5
        gain2.gain.setValueAtTime(0.06, now + 0.08);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

        osc.start(now);
        osc.stop(now + 0.3);
        osc2.start(now + 0.08);
        osc2.stop(now + 0.4);
        break;

      case 'keypress':
        osc.type = 'square';
        osc.frequency.setValueAtTime(800 + Math.random() * 200, now);
        gain.gain.setValueAtTime(0.01, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.025);
        osc.start(now);
        osc.stop(now + 0.025);
        break;

      case 'modal':
        osc.type = 'sine';
        osc.frequency.setValueAtTime(300, now);
        osc.frequency.exponentialRampToValueAtTime(600, now + 0.12);
        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
        break;

      default:
        break;
    }
  } catch (e) {
    // Graceful fallback for environments with blocked audio
  }
};
