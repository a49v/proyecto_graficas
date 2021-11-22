import {
  SphereBufferGeometry,
  MeshStandardMaterial,
  Mesh,
  MathUtils,
  Vector3
} from 'three';

import { spinX, shrink, moveRadialOutwards } from '../systems/animations';

const createSphere = _ => {
  const radius = 0.1;
  const geometry = new SphereBufferGeometry(
    radius,
    10,
    10,
    0, 2 * Math.PI,
    0, 2 * Math.PI
  );

  const material = new MeshStandardMaterial({ color: 'purple', flatShading: true });
  const sphere = new Mesh(geometry, material);

  const shrinkTween = shrink(sphere);
  const moveTween = moveRadialOutwards(sphere);

  sphere.tick = delta => {
    spinX(sphere, delta, 1);
    // shrinkTween.update();
    moveTween.update();
  };

  return sphere;
}

export { createSphere };
