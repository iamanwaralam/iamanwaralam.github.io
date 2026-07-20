/// <reference types="vite/client" />

interface Window {
  /** Safari-prefixed AudioContext (used by src/utils/sound.ts). */
  webkitAudioContext?: typeof AudioContext;
}
