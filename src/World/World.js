// Components
import { createCamera } from './components/camera';
import { createScene } from './components/scene';
import { createCube } from './components/cube'
import { createLights } from './components/lights'

// Systems
import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';

let scene;
let camera;
let renderer;

class World {
  constructor(container) {
    scene = createScene();
    camera = createCamera();
    renderer = createRenderer();
    container.append(renderer.domElement);

    const cube = createCube();
    const light = createLights();
    scene.add(cube, light);
  }

  render() { renderer.render(scene, camera) }
}

export { World }
