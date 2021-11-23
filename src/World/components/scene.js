import { Color, Scene, CubeTextureLoader, sRGBEncoding } from 'three';
import { reflectionCube } from './cubeMap'

const createScene = bg => {
  const scene = new Scene();
  scene.background = reflectionCube || new Color('black');

  return scene;
}

export { createScene }
