import { TextureLoader } from "three";
import * as THREE from "three";
import { TexturesType } from "../types";

function loadTextures(): TexturesType {
  const textureLoader = new TextureLoader();

  //Shop
  const shopNormal = textureLoader.load("./textures/shop/shop-normal.jpg");
  //Car
  const carAlpha = textureLoader.load("./textures/car/car-alpha.png");
  //Office
  const officeDiff = textureLoader.load("./textures/windows/office.jpg");
  officeDiff.colorSpace = THREE.SRGBColorSpace;
  const officeEmissive = textureLoader.load(
    "./textures/windows/office-emissive.png"
  );
  //Cube textures
  const hexNormal = textureLoader.load("./textures/cube/hex-normal.jpg");
  const timSimmsEmissive = textureLoader.load(
    "./textures/cube/tim-simms-emissive.png"
  );

  //Road textures
  const roadNormal = textureLoader.load("./textures/road/road_nor_1k.jpg");
  roadNormal.wrapS = THREE.RepeatWrapping;
  roadNormal.wrapT = THREE.RepeatWrapping;
  roadNormal.repeat.set(30, 30);
  const roadARM = textureLoader.load("./textures/road/road_arm_1k.jpg");
  roadARM.wrapS = THREE.RepeatWrapping;
  roadARM.wrapT = THREE.RepeatWrapping;
  roadARM.repeat.set(30, 30);

  //Wall textures
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
    officeDiff,
    officeEmissive,
    carAlpha,
    shopNormal,
  };
}

export default loadTextures;
