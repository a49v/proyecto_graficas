import { WebGLRenderer } from 'three';

const createRenderer = _ => {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.physicallyCorrectLights = true;
  renderer.toneMappingExposure = 1;

  return renderer;
}

export { createRenderer };
