import {
  PlaneGeometry,
  MeshStandardMaterial,
  Mesh,
  DoubleSide
} from 'three';

import { colors } from './colors';
import { reflectionCube } from './cubeMap'
import { getRandomInt } from '../utils/functools';
import { spinX, moveRadialOutwards } from '../systems/animations';

const geometry = new PlaneGeometry(0.3, 0.3);

const createSquare = _ => {
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

  const square = new Mesh(geometry, material);

  const moveTween = moveRadialOutwards(square);

  square.tick = delta => {
    spinX(square, delta, 4);
    moveTween.update();
  }

  return square;
}

export { createSquare };
