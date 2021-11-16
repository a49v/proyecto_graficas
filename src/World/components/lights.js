import {
  DirectionalLight,
  AmbientLight,
  HemisphereLight
} from 'three';

const createLights = _ => {
  const mainLight = new DirectionalLight('white', 6);
  // const ambientLight = new AmbientLight('white', 5); // Usually, set this lower than direct light
  const ambientLight = new HemisphereLight(
    'white', // Bright sky color
    'darkslategray', // Dim ground color
    3 // intensity
  )

  mainLight.position.set(0, 0, 10);

  return { mainLight, ambientLight };
}

export { createLights };
