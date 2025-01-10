import { useEffect, useState } from "react";
import "./app.css";
import * as THREE from "three";
import loadTextures from "./utils/loadTextures";
import loadModels from "./utils/loadModels";
import { TexturesType, ModelsType } from "./types";
import { Building, Cube, Floor, Car, CityBlock, Shop } from "./models";
import { useThree } from "@react-three/fiber";
import { Stats, OrbitControls } from "@react-three/drei";

function Scene() {
  const { camera } = useThree();
  // Controls

  const textures: TexturesType = loadTextures();
  const models: ModelsType = loadModels();
  const brandColor = "#ff00ee";
  const raycaster = new THREE.Raycaster();
  const [mouse, setMouse] = useState<THREE.Vector2>(new THREE.Vector2());

  useEffect(() => {
    window.addEventListener("resize", () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
    });
    window.addEventListener("mousemove", (event) => {
      mouse.x = (event.clientX / sizes.width) * 2 - 1;
      mouse.y = -(event.clientY / sizes.height) * 2 + 1;
      setMouse(mouse);
    });
  }, []);

  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  return (
    <>
      <OrbitControls />
      <Stats />
      <Cube
        textures={{
          hexNormal: textures.hexNormal,
          timSimmsEmissive: textures.timSimmsEmissive,
        }}
        brandColor={brandColor}
        raycaster={raycaster}
        mouse={mouse}
        camera={camera}
      />
      <Car primitiveModel={models.lightBeam} carAlpha={textures.carAlpha} />
      <Floor
        textures={{
          roadNormal: textures.roadNormal,
          roadARM: textures.roadARM,
        }}
      />
      <CityBlock
        textures={{
          roadNormal: textures.roadNormal,
          roadARM: textures.roadARM,
        }}
      />
      <Shop
        textures={{
          normal: textures.shopNormal,
          arm: textures.wallARM,
          diff: textures.officeDiff,
          emissive: textures.officeEmissive,
        }}
      />
      <Building
        textures={{
          wallNormal: textures.wallNormal,
          wallARM: textures.wallARM,
          officeDiff: textures.officeDiff,
          officeEmissive: textures.officeEmissive,
        }}
        primitiveModel={models.building}
      />
    </>
  );
}
export default Scene;
