import * as THREE from "three";

interface CityBlockProps {
  textures: {
    roadNormal: THREE.Texture;
    roadARM: THREE.Texture;
  };
}
function CityBlock({ textures }: CityBlockProps) {
  const { roadNormal, roadARM } = textures;
  const textureArr = [roadNormal.clone(), roadARM.clone()];

  textureArr.forEach((texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(3, 3);
    texture.rotation = Math.PI * 0.5;
  });

  return (
    <mesh receiveShadow scale={[5, 0.1, 5]} position={[0, 0.05, 0]}>
      <boxGeometry />
      <meshStandardMaterial
        normalMap={textureArr[0]}
        aoMap={textureArr[1]}
        roughnessMap={roadARM}
        metalnessMap={roadARM}
        color={"#29353D"}
      />
    </mesh>
  );
}
export default CityBlock;
