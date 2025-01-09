import { TextureLoader } from "three";
import * as THREE from "three";
import { TexturesType } from "./types";

function loadTextures(): TexturesType {
  const textureLoader = new TextureLoader();
  const roadNormal = textureLoader.load("./textures/road/road_nor_1k.jpg");
  roadNormal.wrapS = THREE.RepeatWrapping;
  roadNormal.wrapT = THREE.RepeatWrapping;
  roadNormal.repeat.set(3, 3);
  const roadARM = textureLoader.load("./textures/road/road_arm_1k.jpg");
  roadARM.wrapS = THREE.RepeatWrapping;
  roadARM.wrapT = THREE.RepeatWrapping;
  roadARM.repeat.set(3, 3);
  const hexNormal = textureLoader.load("./textures/cube/hex-normal.jpg");
  const timSimmsEmissive = textureLoader.load(
    "./textures/cube/tim-simms-emissive.png"
  );
  const wallNormal = textureLoader.load(
    "./textures/wall/mossy_brick_nor_gl_1k.jpg"
  );
  wallNormal.wrapS = THREE.RepeatWrapping;
  wallNormal.wrapT = THREE.RepeatWrapping;
  wallNormal.repeat.set(3, 6);
  const wallARM = textureLoader.load("./textures/wall/mossy_brick_arm_1k.jpg");
  wallARM.wrapS = THREE.RepeatWrapping;
  wallARM.wrapT = THREE.RepeatWrapping;
  wallARM.repeat.set(3, 6);

  return {
    hexNormal,
    timSimmsEmissive,
    roadNormal,
    roadARM,
    wallNormal,
    wallARM,
  };
}

export default loadTextures;
