import { WebGLRenderer, sRGBEncoding, ACESFilmicToneMapping } from 'three';

const createRenderer = _ => {
  const renderer = new WebGLRenderer({ 
    powerPreference: "high-performance",
    antialias: false,
    stencil: false,
    depth: false
  });

  renderer.physicallyCorrectLights = true;

  renderer.outputEncoding = sRGBEncoding;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;

  return renderer;
}

export { createRenderer };
