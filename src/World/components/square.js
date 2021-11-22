import {
  PlaneGeometry,
  MeshStandardMaterial,
  Mesh
} from 'three';

const geometry = new PlaneGeometry(1, 1);
const material = new MeshStandardMaterial({ color: 'gray' });

const createSquare = _ => {
  const square = new Mesh(geometry, material);

  square.tick = delta => {
    square.rotation.x += Math.PI / 4 * delta;
    square.rotation.y += Math.PI / 4 * delta;
    square.rotation.z += Math.PI / 4 * delta;

    square.position.x += delta * 0.1;
    square.position.y += delta * 0.1;
    square.position.z += delta * 0.1;
  }

  return square;
}

export { createSquare };
