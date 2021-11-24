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
import { colors } from './colors';
import { reflectionCube } from './cubeMap'
import { getRandomInt } from '../utils/functools';

const { normalMap, clearcoatNormalMap } = createTexture();

// Geometry and Material
const geometry = new CircleBufferGeometry(
  0.5,
  50,
  0, 2 * Math.PI
);

// Constructors
const createCircle = _ => {
  const color = colors[getRandomInt(11)];
  const material = new MeshStandardMaterial({
    color: color.color,
    emissive: color.emissive,
    metalness: 1.0,
    roughness: 0.0,
    envMap: reflectionCube,
    envMapIntensity: 10,
    side: DoubleSide
  });

  const circle = new Mesh(geometry, material);
  const moveTween = moveRadialOutwards(circle);

  circle.tick = delta => {
    spinX(circle, delta, 4);
    moveTween.update();
  }

  return circle;
}

export { createCircle };
