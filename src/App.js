import {
  BoxBufferGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshPhongMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SphereGeometry,
  WebGLRenderer
} from 'three';

let camera, scene, renderer;
const objects = []

class App {

  init() {
    // Camera
    const fov = 40
    const aspect = window.innerWidth / window.innerHeight
    const near = 1
    const far = 1000
    camera = new PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(0, 50, 0)
    camera.up.set(0, 0, 1)
    camera.lookAt(0, 0, 0)

    scene = new Scene();


    // Sphere
    const radius = 1
    const widthSegments = 6
    const heightSegments = 6
    const sphereGeometry = new SphereGeometry(radius, widthSegments, heightSegments)

    const sunMaterial = new MeshPhongMaterial({ emissive: 0xFFFF00 })
    const sunMesh = new Mesh(sphereGeometry, sunMaterial)
    sunMesh.scale.set(5, 5, 5)

    objects.push(sunMesh)

    scene.add(sunMesh);

    // Light
    {
      const color = 0xFFFFFF
      const intensity = 3
      const light = new PointLight(color, intensity)

      scene.add(light)
    }

    renderer = new WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    window.addEventListener( 'resize', onWindowResize, false );

    animate();
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

  objects.forEach(o => o.rotation.y = time)
  renderer.render(scene, camera);
}

export default App;
