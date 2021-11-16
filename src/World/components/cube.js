import {
  BoxBufferGeometry,
  MeshStandardMaterial,
  TextureLoader,
  Mesh
} from 'three';

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

  cube.tick = delta => {
    cube.rotation.x += Math.PI / 4 * delta;
    cube.rotation.y += Math.PI / 4 * delta;
    cube.rotation.z += Math.PI / 4 * delta;
  }

  return cube;
}

export { createCube };
