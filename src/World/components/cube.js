import {
  BoxBufferGeometry,
  MeshStandardMaterial,
  TextureLoader,
  Mesh
} from 'three';

import TWEEN from '@tweenjs/tween.js'

const createMaterial = _ => {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load('/assets/textures/stonewall-albedo.png');

  const material = new MeshStandardMaterial({ map: texture, color: 'gray' });
  return material
}

const createCube = _ => {
  const geometry = new BoxBufferGeometry(2, 2, 2);
  const material = createMaterial()
  const cube = new Mesh(geometry, material);

  let position = { x: 0, y: 0 };
  let target = { x: 10, y: 10 };
  let tween = new TWEEN.Tween(position).to(target, 10000);

  tween.start();
  tween.onUpdate(_ => {
    cube.position.x = position.x,
    cube.position.y = position.y
  })

  cube.tick = delta => {
    // cube.rotation.x += Math.PI / 4 * delta;
    // cube.rotation.y += Math.PI / 4 * delta;
    // cube.rotation.z += Math.PI / 4 * delta;
    tween.update();
  }

  return cube;
}

export { createCube };
