import { PerspectiveCamera, OrthographicCamera, Vector3 } from 'three';

const createCamera = container => {
  const camera = new PerspectiveCamera(
    35,  // fov
    container.clientWidth / container.clientHeight,
    0.1, // near
    100  // far
  );

  camera.position.set(0, 0, 10);

  return camera;
}

export { createCamera }
