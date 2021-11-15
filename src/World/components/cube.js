import { BoxBufferGeometry, MeshStandardMaterial, Mesh } from 'three';

const createCube = _ => {
  const geometry = new BoxBufferGeometry();
  const material = new MeshStandardMaterial({ color: 'white' });
  const cube = new Mesh(geometry, material);

  return cube;
}

export { createCube };
