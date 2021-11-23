import {
  DirectionalLight,
  AmbientLight,
  HemisphereLight,
  PointLight
} from 'three';

const createLights = _ => {
  const mainLight = new DirectionalLight('white', 6);
  // const ambientLight = new AmbientLight('white', 5); // Usually, set this lower than direct light
  const ambientLight = new HemisphereLight(
    'white', // Bright sky color
    'darkslategray', // Dim ground color
    3 // intensity
  )
  const pointLight = new PointLight(0xffffff, 8, 800);

  mainLight.position.set(0, 0, 10);

  return { mainLight, ambientLight, pointLight };
}

export { createLights };
