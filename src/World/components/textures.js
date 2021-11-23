import {
  TextureLoader,
  CanvasTexture,
  RepeatWrapping
} from 'three';

import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture'

const textureLoader = new TextureLoader();
const clearcoatNormalMap = textureLoader.load('assets/textures/Scratched_gold_01_1K_Normal.png');
const normalMap = new CanvasTexture( new FlakesTexture() );
normalMap.wrapS = RepeatWrapping;
normalMap.wrapT = RepeatWrapping;
normalMap.repeat.x = 10;
normalMap.repeat.y = 6;
normalMap.anisotropy = 16;


const createTexture = _ => ({ normalMap, clearcoatNormalMap });

export { createTexture };
