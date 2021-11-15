import { PerspectiveCamera } from 'three';

const createCamera = _ => {
  const camera = new PerspectiveCamera(
    35,  // fov
    1,   // aspect (dummy value, for now)
    0.1, // near
    100  // far
  );

  camera.position.set(0, 0, 10);

  return camera;
}

export { createCamera }
