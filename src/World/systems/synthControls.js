import * as Tone from 'tone';

const keyMap = {
  'KeyA': "C4",
  'KeyS': "D4",
  'KeyD': "E4",
  'KeyF': "F4",
  'KeyG': "G4",
  'KeyH': "A4",
  'KeyJ': "B4",
  'KeyK': "C5"
};

const synthControls = container => {
  const synth = new Tone.Synth().toDestination();

  window.addEventListener('keydown', e => {
    synth.triggerAttackRelease(keyMap[e.code], "8n");
  });

  return synth;
};

export { synthControls };
