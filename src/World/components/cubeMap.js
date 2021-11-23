import { CubeTextureLoader, sRGBEncoding } from 'three';

const reflectionCube = new CubeTextureLoader()
      .setPath('assets/textures/cube/space/')
      .load([
        'space_rt.png',
        'space_lf.png',
        'space_up.png',
        'space_dn.png',
        'space_ft.png',
        'space_bk.png'
      ]);

// const reflectionCube = new CubeTextureLoader()
//       .setPath('assets/textures/cube/milky_way/')
//       .load([
//         'dark-s_px.jpg',
//         'dark-s_nx.jpg',
//         'dark-s_py.jpg',
//         'dark-s_ny.jpg',
//         'dark-s_pz.jpg',
//         'dark-s_nz.jpg'
//       ]);

reflectionCube.encoding = sRGBEncoding;

export { reflectionCube };
