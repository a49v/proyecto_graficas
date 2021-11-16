// Components
import { createCamera } from './components/camera';
import { createScene } from './components/scene';
import { createCube } from './components/cube'
import { createLights } from './components/lights'

// Systems
import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';

let scene;
let camera;
let renderer;
let loop;

class World {
  constructor(container) {
    scene = createScene();
    camera = createCamera();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const cube = createCube();
    const light = createLights();
    scene.add(cube, light);
    loop.updateables.push(cube);

    const resizer = new Resizer(container, camera, renderer);
  }

  render() { renderer.render(scene, camera) }

  start() { loop.start() }

  stop() { loop.stop() }
}

export { World }
