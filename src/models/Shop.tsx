import * as THREE from "three";

interface AppProps {
  textures: {
    normal?: THREE.Texture;
    arm?: THREE.Texture;
    diff?: THREE.Texture;
    emissive?: THREE.Texture;
  };
}

function Shop({ textures }: AppProps) {
  const { normal, arm, diff, emissive } = textures;

  return (
    <mesh receiveShadow scale={[1, 1, 1]} position={[2, 0.6, 0]}>
      <boxGeometry />
      <meshStandardMaterial
        normalMap={normal || null}
        aoMap={arm || null}
        roughnessMap={arm || null}
        metalnessMap={arm || null}
        map={diff || null}
        emissive={emissive ? "#ff55ff" : undefined}
        emissiveMap={emissive || null}
        emissiveIntensity={emissive ? 14 : undefined}
        color={"#fff"}
      />
    </mesh>
  );
}
export default Shop;
