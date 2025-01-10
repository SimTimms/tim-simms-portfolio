import * as THREE from "three";

interface AppProps {
  textures: {
    wallNormal: THREE.Texture;
    wallARM: THREE.Texture;
    officeDiff: THREE.Texture;
    officeEmissive: THREE.Texture;
  };
  primitiveModel: THREE.Object3D | null;
}

function Building({ textures, primitiveModel }: AppProps) {
  const { wallNormal, wallARM, officeDiff, officeEmissive } = textures;
  wallNormal.wrapS = THREE.RepeatWrapping;
  wallNormal.wrapT = THREE.RepeatWrapping;
  wallNormal.repeat.set(10, 10);
  wallNormal.rotation = Math.PI * 0.5;
  wallARM.wrapS = THREE.RepeatWrapping;
  wallARM.wrapT = THREE.RepeatWrapping;
  wallARM.repeat.set(10, 10);
  wallARM.rotation = Math.PI * 0.5;
  officeEmissive.wrapS = THREE.RepeatWrapping;
  officeEmissive.wrapT = THREE.RepeatWrapping;
  officeEmissive.repeat.set(3, 10);
  officeDiff.wrapS = THREE.RepeatWrapping;
  officeDiff.wrapT = THREE.RepeatWrapping;
  officeDiff.repeat.set(3, 10);

  if (!primitiveModel) return null;
  return (
    <group
      scale={[1, 1, 1]}
      position={[-4, 2, 0]}
      rotation={[0, -Math.PI * 0.25, 0]}
    >
      <mesh
        geometry={(primitiveModel.children[0] as THREE.Mesh).geometry}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          normalMap={wallNormal}
          aoMap={wallARM}
          roughnessMap={wallARM}
          metalnessMap={wallARM}
          color={"#29353D"}
        />
      </mesh>
      <mesh
        geometry={new THREE.BoxGeometry(1.8, 3.8, 1.8)}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial
          emissive={"#ff55ff"}
          transparent={true}
          emissiveMap={officeEmissive}
          emissiveIntensity={14}
          map={officeDiff}
        />
      </mesh>
    </group>
  );
}
export default Building;
