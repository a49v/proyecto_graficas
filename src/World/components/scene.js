import { Color, Scene } from 'three';

const createScene = _ => {
  const scene = new Scene();
  scene.background = new Color('black');

  return scene;
}

export { createScene }
