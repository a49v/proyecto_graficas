import {
  CircleBufferGeometry,
  MeshStandardMaterial,
  MeshPhysicalMaterial,
  MeshPhongMaterial,
  Mesh,
  DoubleSide
} from 'three'

import { createTexture } from './textures'
import { spinX, moveRadialOutwards } from '../systems/animations';

const { normalMap, clearcoatNormalMap } = createTexture();

// Geometry and Material
const geometry = new CircleBufferGeometry(
  0.1,
  50,
  0, 2 * Math.PI
);

// const material = new MeshPhysicalMaterial({
//   clearcoat: 1.0,
//   clearcoatRoughness: 0.1,
//   metalness: 0.9,
//   roughness: 0.5,
//   color: 0x0000ff,
//   normalMap: normalMap,
//   side: DoubleSide
// })

// Constructors
const createCircle = color => {
  const material = new MeshStandardMaterial({
    color: color,
    emissive: 'black',
    side: DoubleSide,
    metalness: 1.0
  })

  const circle = new Mesh(geometry, material);
  const moveTween = moveRadialOutwards(circle);

  circle.tick = delta => {
    spinX(circle, delta, 2);
    moveTween.update();
  }

  return circle;
}

export { createCircle };
