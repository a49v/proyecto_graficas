import { Clock } from 'three';

const clock = new Clock();

class Loop {
  constructor(camera, scene, renderer, composer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updateables = [];
    this.composer = composer
  }

  start() {
    this.renderer.setAnimationLoop(_ => {
      this.tick();
      this.composer.render(this.scene, this.camera);
      //this.renderer.render(this.scene, this.camera);
    })
  }

  stop() { this.renderer.setAnimationLoop(null) }

  tick() {
    const delta = clock.getDelta();
    const timer = Date.now() * 0.00025;

    for (const obj of this.updateables) {
      obj.tick(delta, timer);
    }
  }
}

export { Loop };
