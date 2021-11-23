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

import { getRandomInt } from '../utils/functools';
import { spinX, shrink, moveRadialOutwards } from '../systems/animations';

const createSphere = (r) => {
  const geometry = new SphereBufferGeometry(
    r,
    50,
    50,
    0, 2 * Math.PI,
    0, 2 * Math.PI
  );

  const material = new MeshStandardMaterial({
    color: ['red', 'green', 'blue'][getRandomInt(3)],
    emissive: 0x222222,
    metalness: 0.4,
    roughness: 0.2,
  });

  const sphere = new Mesh(geometry, material);

  const shrinkTween = shrink(sphere);
  const moveTween = moveRadialOutwards(sphere);

  sphere.tick = delta => {
    spinX(sphere, delta, 1);
    moveTween.update();
    // shrinkTween.update();
  };

  return sphere;
}

const createParticleLight = () => {
  const geometry = new SphereGeometry(0.05, 8, 8);
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
