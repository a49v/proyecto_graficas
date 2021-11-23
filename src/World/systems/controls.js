import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as Tone from 'tone';

//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
// synth.triggerAttackRelease("C4", "8n");

const createControls = (camera, canvas) => {
  const controls = new OrbitControls(camera, canvas);

  controls.enableDamping = true;

  // We update the controls per animation frame for the
  // damping to take effect; therefore, we cannot use
  // damping if we render on demand.
  controls.tick = _ => controls.update();

  canvas.addEventListener('keydown', _ => {
    console.log('keydown')
    synth.triggerAttackRelease("C4", "8n")
  })

  return controls
}

export { createControls };
