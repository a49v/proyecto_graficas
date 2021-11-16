import { BoxBufferGeometry, MeshStandardMaterial, Mesh } from 'three';

const createCube = _ => {
  const geometry = new BoxBufferGeometry();
  const material = new MeshStandardMaterial({ color: 'white' });
  const cube = new Mesh(geometry, material);


  cube.tick = delta => {
    cube.rotation.x += Math.PI / 4 * delta;
    cube.rotation.y += Math.PI / 4 * delta;
    cube.rotation.z += Math.PI / 4 * delta;
  }

  return cube;
}

export { createCube };
