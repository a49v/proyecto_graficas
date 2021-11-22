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
  const geometry = new BoxBufferGeometry(1, 1, 1);
  const material = createMaterial()
  const cube = new Mesh(geometry, material);

  let scale = { x: 1, y: 1, z: 1 }
  let target = { x: 0, y: 0, z: 0 }
  let tween = new TWEEN.Tween(scale).to(target, 10000);

  tween.onUpdate(_ => {
    cube.scale.x = scale.x
    cube.scale.y = scale.y
    cube.scale.z = scale.z
  })

  tween.start()

  cube.tick = delta => {
    cube.rotation.x += Math.PI / 4 * delta;
    cube.rotation.y += Math.PI / 4 * delta;
    cube.rotation.z += Math.PI / 4 * delta;
    tween.update()
  }

  return cube;
}

export { createCube };
