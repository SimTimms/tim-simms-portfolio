import { useEffect, useState } from "react";
import "./app.css";
import * as THREE from "three";
import loadTextures from "./textures";
import { TexturesType } from "./types";
import { Building, Cube, Floor } from "./models";
import { useThree } from "@react-three/fiber";

function Scene() {
  const textures: TexturesType = loadTextures();
  const brandColor = "#ff00ee";
  const raycaster = new THREE.Raycaster();
  const [mouse, setMouse] = useState<THREE.Vector2>(new THREE.Vector2());
  const { camera } = useThree();

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
      <Floor
        textures={{
          roadNormal: textures.roadNormal,
          roadARM: textures.roadARM,
        }}
      />
      <group position={[3, 4, 0]}>
        <Building
          textures={{
            wallNormal: textures.wallNormal,
            wallARM: textures.wallARM,
          }}
        />
      </group>
      <group position={[3, 4, -5]}>
        <Building
          textures={{
            wallNormal: textures.wallNormal,
            wallARM: textures.wallARM,
          }}
        />
      </group>
    </>
  );
}
export default Scene;
