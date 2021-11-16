// Components
import { createCamera } from './components/camera';
import { createScene } from './components/scene';
import { createCube } from './components/cube'
import { createLights } from './components/lights'

// Systems
import { createRenderer } from './systems/renderer';
import { createControls } from './systems/controls';
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

    const controls = createControls(camera, renderer.domElement);

    // This is for on demand rendering
    controls.addEventListener('change', () => this.render())

    const cube = createCube();
    const light = createLights();
    scene.add(cube, light);
    // loop.updateables.push(cube);
    loop.updateables.push(controls)

    const resizer = new Resizer(container, camera, renderer);
  }

  // This method renders a single frame. This has the obvious pro
  // that it is more lightweight than having an animation loop. There are,
  // however, some caveats:
  //
  // 1. We need to manually re-render on resizing
  // 2. The texture loader takes some time to load the texture, so the initial
  //    render will most likely produce objects with a transparent material.
  //    A hotfix is to produce a second frame or check if we can use Promises
  render() { renderer.render(scene, camera) }

  start() { loop.start() }

  stop() { loop.stop() }
}

export { World }
