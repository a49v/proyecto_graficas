import {
  DirectionalLight,
  AmbientLight,
  HemisphereLight
} from 'three';

const createLights = _ => {
  const mainLight = new DirectionalLight('white', 8);
  const ambientLight = new AmbientLight('white', 5); // Usually, set this lower than direct light

  mainLight.position.set(0, 0, 10);

  return { mainLight, ambientLight };
}

export { createLights };
