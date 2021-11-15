import { DirectionalLight } from 'three';

const createLights = _ => {
  const light = new DirectionalLight('white', 8);

  light.position.set(0, 0, 10);

  return light;
}

export { createLights };
