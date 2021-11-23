import {
  AudioListener, Audio, AudioLoader,
  PerspectiveCamera, OrthographicCamera,
  Vector3
} from 'three';

// create an AudioListener and add it to the camera
const listener = new AudioListener();

// create a global audio source
const sound = new Audio(listener);

// load a sound and set it as the Audio object's buffer
const audioLoader = new AudioLoader();
audioLoader.load( 'assets/audio/bg-music.mp3', buffer => {
  sound.setBuffer(buffer);
  sound.setLoop(true);
  sound.setVolume(0.4);
  sound.play();
});


const createCamera = container => {
  const camera = new PerspectiveCamera(
    35,  // fov
    container.clientWidth / container.clientHeight,
    0.1, // near
    100  // far
  );

  camera.position.set(0, 0, 10);
  // camera.add(listener);

  return camera;
}

export { createCamera }
