import { WebGLRenderer, sRGBEncoding, ACESFilmicToneMapping } from 'three';

const createRenderer = _ => {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.physicallyCorrectLights = true;

  renderer.outputEncoding = sRGBEncoding;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.75;

  return renderer;
}

export { createRenderer };
