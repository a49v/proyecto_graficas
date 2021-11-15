import {
  BoxBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three';

import { PlaneGeometry } from 'three';

let camera, scene, renderer;

class App {

  init() {
    // Camera
    const fov = 70
    const aspect = window.innerWidth / window.innerHeight
    const near = 2
    const far = 2000
    camera = new PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 50
    camera.position.x = 0
    camera.position.y = 50

    camera.lookAt(0,0,0)

    scene = new Scene();

    const boxGeometry = new BoxBufferGeometry(10, 10, 10)
    const boxMaterial = new MeshBasicMaterial({ color: 0xFFFFFF })
    const boxMesh = new Mesh(boxGeometry, boxMaterial)

    scene.add(boxMesh)

    renderer = new WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize, false );

    renderer.render(scene, camera)
    // animate();
  }
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate(time) {
  time *= 0.001
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

export default App;
