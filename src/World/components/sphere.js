import {
  SphereBufferGeometry,
  SphereGeometry,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Mesh,
  DoubleSide,
  MathUtils,
  Vector3
} from 'three';

import { reflectionCube } from './cubeMap'
import { colors } from './colors'
import { getRandomInt } from '../utils/functools';
import { moveRadialOutwards } from '../systems/animations';

const createSphere = (r) => {
  const geometry = new SphereBufferGeometry(
    r,
    50,
    50,
    0, 2 * Math.PI,
    0, 2 * Math.PI
  );

  const color = colors[getRandomInt(11)];
  const material = new MeshStandardMaterial({
    color: color.color,
    emissive: color.emissive,
    metalness: 1.0,
    roughness: 0.0,
    envMap: reflectionCube,
    envMapIntensity: 10
  });

  const sphere = new Mesh(geometry, material);

  const moveTween = moveRadialOutwards(sphere);
  sphere.tick = delta => moveTween.update();

  return sphere;
}

const createParticleLight = () => {
  const geometry = new SphereGeometry(0.05, 10, 10);
  const material = new MeshBasicMaterial({ color: 'white' });
  const particleLight = new Mesh(geometry, material);

  particleLight.tick = (delta, timer) => {
    particleLight.position.x = Math.sin(timer * 7) * 2;
    particleLight.position.y = Math.cos(timer * 5) * 3;
    particleLight.position.z = Math.cos(timer * 3) * 4;
  }

  return particleLight;
}

export { createSphere, createParticleLight };
