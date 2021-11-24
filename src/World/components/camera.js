import {
  AudioListener, Audio, AudioLoader,
  PerspectiveCamera, OrthographicCamera,
  Vector3
} from 'three';

import { iota } from '../utils/functools';

const tracks = [
  'assets/audio/c-maj.mp3',
  'assets/audio/ab-maj.mp3',
  'assets/audio/c-min.mp3'
];

const createCamera = container => {
  // create an AudioListener and add it to the camera
  const listener = new AudioListener();

  // create a global audio source
  const bgTracks = iota(tracks.length).map(_ => new Audio(listener));

  // load a sound and set it as the Audio object's buffer
  const audioLoader = new AudioLoader();
  bgTracks.forEach((sound, i) => {
    audioLoader.load(tracks[i], buffer => {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.4);
      sound.play();
    })
  })

  const camera = new PerspectiveCamera(
    35,  // fov
    container.clientWidth / container.clientHeight,
    0.1, // near
    100  // far
  );

  camera.position.set(0, 0, 30);
  camera.add(listener);
  camera.tracks = bgTracks;

  return camera;
}

export { createCamera }
