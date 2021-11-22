import TWEEN from '@tweenjs/tween.js';
import { MathUtils, Vector3 } from 'three';

const spherePoint = (r, phi, theta) => new Vector3(
  r * Math.sin(phi) * Math.cos(theta),
  r * Math.sin(phi) * Math.sin(theta),
  r * Math.cos(phi)
)

const spinX = (obj, delta, rate) => obj.rotation.x += rate * delta;
const spinY = (obj, delta, rate) => obj.rotation.y += rate * delta;
const spinZ = (obj, delta, rate) => obj.rotation.z += rate * delta;

const shrink = obj => {
  const scale = { x: 1, y: 1, z: 1 };
  const target = { x: 0, y: 0, z: 0 };
  const tween = new TWEEN.Tween(scale).to(target, 10000);

  tween.onUpdate(_ => {
    obj.scale.x = scale.x
    obj.scale.y = scale.y
    obj.scale.z = scale.z
  });

  tween.start();

  return tween;
}


const moveTo = (obj, vec) => {
  const position = obj.position
  const tween = new TWEEN.Tween(position).to(vec, 10000);

  tween.onUpdate(_ => obj.position = position);
  tween.start();

  return tween;
}

const moveRadialOutwards = obj =>
      moveTo(obj, spherePoint(
        10,
        MathUtils.seededRandom() * 2 * Math.PI,
        MathUtils.seededRandom() * 2 * Math.PI
      ));

export {
  spinX,
  spinY,
  spinZ,

  shrink,
  moveRadialOutwards,
}
