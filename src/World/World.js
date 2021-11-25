// Components
import { createCamera } from './components/camera';
import { createScene } from './components/scene';
import { createSquare } from './components/square';
import { createCircle } from './components/circle';
import { createLights } from './components/lights';
import { createSphere, createParticleLight } from './components/sphere';

// Systems
import { createRenderer } from './systems/renderer';
import { createControls } from './systems/controls';
import { synthControls } from './systems/synthControls';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/Loop';

// Utils
import { getRandomInt } from './utils/functools';

// Post Processing
import { BloomEffect, EffectComposer, EffectPass, RenderPass} from "postprocessing";



let scene;
let camera;
let controls;
let synth;
let renderer;
let loop;


class World {
  constructor(container) {
    scene = createScene();
    camera = createCamera(container);
    renderer = createRenderer();
    controls = createControls(camera, renderer.domElement);
    synth = synthControls(container);

    // Postprocessing

    // To add post-processing effects to the image, the render must go through multiple renders known as 'passes'
    // To this effect, we leave the composer in charge of rendering, so that it organizes the passes.
    const composer = new EffectComposer(renderer);
    // First, the regular render.
    composer.addPass(new RenderPass(scene, camera));
    // After that, and based on the previous render, we add a Bloom effect to the render.
    composer.addPass(new EffectPass(camera, (new BloomEffect())));

    requestAnimationFrame(function render() {

      requestAnimationFrame(render);
      composer.render();

    });

    loop = new Loop(camera, scene, renderer, composer);
    container.append(renderer.domElement);

    // This is for on demand rendering
    controls.addEventListener('change', () => this.render())

    const { mainLight, ambientLight, pointLight } = createLights();
    const particleLight = createParticleLight();
    particleLight.add(pointLight)

    scene.add(mainLight, ambientLight, particleLight);

    // Objects that will be animated
    loop.updateables.push(controls, particleLight);

    // Some event listeners
    window.addEventListener('keydown', event => this.spawnObject())

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
    let fig;
    switch (getRandomInt(3)) {
      case 0:
        fig = createSphere(0.5);
        break;
      case 1:
        fig = createSquare()
        break;
      case 2:
        fig = createCircle()
        break;
    }

    scene.add(fig);
    loop.updateables.push(fig);
  }
}

export { World }
