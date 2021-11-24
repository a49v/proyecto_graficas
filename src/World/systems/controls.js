import { Vector3 } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const cameraPoints = {
  left:   new Vector3(30, 0, 0),
  right:  new Vector3(-30, 0, 0),
  back:   new Vector3(0, 0, -30),
  front:  new Vector3(0, 0, 30),
  top:    new Vector3(0, -30, 0),
  bottom: new Vector3(0, 30, 0),
};

const createControls = (camera, canvas) => {
  const controls = new OrbitControls(camera, canvas);

  controls.enableDamping = true;

  // We update the controls per animation frame for the
  // damping to take effect; therefore, we cannot use
  // damping if we render on demand.
  controls.tick = _ => controls.update();


  // TODO For some reason, using position.set() produces an exception due to
  // the AudioListener (???)
  controls.look = direction => {
    camera.position.x = cameraPoints[direction].x;
    camera.position.y = cameraPoints[direction].y;
    camera.position.z = cameraPoints[direction].z;
  }
  controls.lookLeft = _ => controls.look('left');
  controls.lookRight = _ => controls.look('right');

  controls.lookBack = _ => controls.look('back');

  controls.lookUp = _ => controls.look('top');
  controls.lookDown = _ => controls.look('bottom');

  window.addEventListener('keydown', e => {
    switch (e.code) {
      case "ArrowLeft" :
        controls.lookLeft();
        camera.tracks.forEach(t => t.pause());
        camera.tracks[2].play()
        break;
      case "ArrowRight":
        controls.lookBack();
        camera.tracks.forEach(t => t.pause());
        camera.tracks[1].play()
        break;
      case "ArrowUp"   :
        controls.lookUp();
        camera.tracks.forEach(t => t.pause());
        camera.tracks[0].play()
        break;
      case "ArrowDown" :
        controls.lookDown();
        camera.tracks.forEach(t => t.pause());
        camera.tracks[0].play()
        break;
      default: break;
    }
  })

  return controls
}

export { createControls };
