import * as THREE from "three";

export type TexturesType = {
  hexNormal: THREE.Texture;
  timSimmsEmissive: THREE.Texture;
  roadNormal: THREE.Texture;
  roadARM: THREE.Texture;
  wallNormal: THREE.Texture;
  wallARM: THREE.Texture;
  officeDiff: THREE.Texture;
  officeEmissive: THREE.Texture;
  carAlpha: THREE.Texture;
  shopNormal: THREE.Texture;
};

export type ModelsType = {
  building: THREE.Object3D;
  lightBeam: THREE.Object3D;
  carAlpha: THREE.Object3D;
};
