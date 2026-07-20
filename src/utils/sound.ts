/**
 * Tiny Web Audio synth for UI sounds — no audio files to ship or license.
 * The AudioContext is created lazily on first use (browsers block audio
 * until a user gesture, which every call site here already is: a click).
 */
let ctx: AudioContext | null = null;

function getContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const Ctor = window.AudioContext ?? window.webkitAudioContext;
  if (!Ctor) return null;
  if (!ctx) ctx = new Ctor();
  if (ctx.state === 'suspended') void ctx.resume();
  return ctx;
}

interface ToneOptions {
  frequency: number;
  duration?: number;
  type?: OscillatorType;
  volume?: number;
}

function playTone({ frequency, duration = 0.06, type = 'sine', volume = 0.05 }: ToneOptions) {
  const audio = getContext();
  if (!audio) return;
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  gain.gain.setValueAtTime(volume, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + duration);
  osc.connect(gain).connect(audio.destination);
  osc.start();
  osc.stop(audio.currentTime + duration);
}

/** Soft, short click — command palette selections, toggles. */
export function playClick() {
  playTone({ frequency: 780, duration: 0.05, type: 'sine', volume: 0.045 });
}

/** Slightly brighter blip — opening the command palette. */
export function playOpen() {
  playTone({ frequency: 620, duration: 0.07, type: 'triangle', volume: 0.05 });
  setTimeout(() => playTone({ frequency: 900, duration: 0.06, type: 'triangle', volume: 0.04 }), 40);
}

/** Descending tick — closing / dismissing. */
export function playClose() {
  playTone({ frequency: 500, duration: 0.05, type: 'sine', volume: 0.04 });
}
