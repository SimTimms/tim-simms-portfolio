import * as THREE from "three";

interface FloorProps {
  textures: {
    roadNormal: THREE.Texture;
    roadARM: THREE.Texture;
  };
}
function Floor({ textures }: FloorProps) {
  const { roadNormal, roadARM } = textures;

  return (
    <mesh
      receiveShadow
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[50, 50, 1]}
      position={[0, 0, 0]}
    >
      <planeGeometry />
      <meshStandardMaterial
        normalMap={roadNormal}
        aoMap={roadARM}
        roughnessMap={roadARM}
        metalnessMap={roadARM}
        color={"#29353D"}
      />
    </mesh>
  );
}
export default Floor;
