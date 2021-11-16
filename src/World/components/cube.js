import {
  BoxBufferGeometry,
  MeshStandardMaterial,
  TextureLoader,
  Mesh
} from 'three';

const createMaterial = _ => {
  const textureLoader = new TextureLoader();
  const texture = textureLoader.load('/assets/textures/uv-test-bw.png');

  const material = new MeshStandardMaterial({ map: texture });
  return material
}

const createCube = _ => {
  const geometry = new BoxBufferGeometry();
  const material = createMaterial()
  const cube = new Mesh(geometry, material);

  cube.rotation.set(0.5, 0, 0);

  cube.tick = delta => {
    cube.rotation.x += Math.PI / 4 * delta;
    cube.rotation.y += Math.PI / 4 * delta;
    cube.rotation.z += Math.PI / 4 * delta;
  }

  return cube;
}

export { createCube };
