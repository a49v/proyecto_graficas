import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const createControls = (camera, canvas) => {
  const controls = new OrbitControls(camera, canvas);

  controls.enableDamping = true;

  // We update the controls per animation frame for the
  // damping to take effect; therefore, we cannot use
  // damping if we render on demand.
  controls.tick = _ => controls.update();

  return controls
}

export { createControls };
