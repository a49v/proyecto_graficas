import { Clock } from 'three';

const clock = new Clock();

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updateables = [];
  }

  start() {
    this.renderer.setAnimationLoop(_ => {
      this.tick();
      this.renderer.render(this.scene, this.camera);
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
