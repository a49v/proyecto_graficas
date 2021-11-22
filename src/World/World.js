// Components
import { createCamera } from './components/camera';
import { createScene } from './components/scene';
import { createSquare } from './components/square'
import { createSphere } from './components/sphere'
import { createLights } from './components/lights'

// Systems
import { createRenderer } from './systems/renderer';
import { createControls } from './systems/controls';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';


let scene;
let camera;
let controls;
let renderer;
let loop;


class World {
  constructor(container) {
    scene = createScene();
    camera = createCamera(container);
    renderer = createRenderer();
    controls = createControls(camera, renderer.domElement);
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);


    // This is for on demand rendering
    controls.addEventListener('change', () => this.render())

    const { mainLight, ambientLight } = createLights();
    scene.add(mainLight, ambientLight);

    // Objects that will be animated
    loop.updateables.push(controls)

    // Some event listeners
    container.addEventListener('click', event => this.spawnObject(), false)

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

  spawnObject() {
    const sphere = createSphere();
    scene.add(sphere);
    loop.updateables.push(sphere);
  }
}

export { World }
