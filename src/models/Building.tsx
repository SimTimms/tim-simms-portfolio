import * as THREE from "three";

interface AppProps {
  textures: {
    wallNormal: THREE.Texture;
    wallARM: THREE.Texture;
  };
}

function Building({ textures }: AppProps) {
  const { wallNormal, wallARM } = textures;

  return (
    <mesh scale={[3, 10, 3]} castShadow receiveShadow>
      <boxGeometry />
      <meshStandardMaterial
        normalMap={wallNormal}
        aoMap={wallARM}
        roughnessMap={wallARM}
        metalnessMap={wallARM}
        metalness={0}
        roughness={0.5}
        color={"#29353D"}
      />
    </mesh>
  );
}
export default Building;
