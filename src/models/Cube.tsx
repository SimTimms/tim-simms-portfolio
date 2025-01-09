import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import { SpotLightHelper } from "three";

interface CubeProps {
  textures: {
    hexNormal: THREE.Texture;
    timSimmsEmissive: THREE.Texture;
  };
  brandColor: string;
  raycaster: THREE.Raycaster;
  mouse: THREE.Vector2;
  camera: THREE.Camera;
}
function Cube({ textures, brandColor, raycaster, mouse, camera }: CubeProps) {
  const { hexNormal, timSimmsEmissive } = textures;

  const meshRef = useRef<THREE.Group>(null);
  const meshRefColor = useRef<THREE.MeshStandardMaterial>(null);
  const emissiveRef = useRef<THREE.MeshStandardMaterial>(null);
  const spotlightRefColor = useRef<any>(null);
  const rotationSpeed = 0.01;

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * rotationSpeed;
      meshRef.current.rotation.y += delta * rotationSpeed;
    }
    raycaster.setFromCamera(mouse, camera);

    if (
      meshRef.current &&
      meshRefColor.current &&
      spotlightRefColor.current &&
      emissiveRef.current
    ) {
      const intersects = raycaster.intersectObject(meshRef.current);
      meshRefColor.current.color.set("#29353D");
      spotlightRefColor.current.intensity = 0;
      emissiveRef.current.emissiveIntensity = 0;
      for (const intersect of intersects) {
        meshRefColor.current.color.set(brandColor);
        spotlightRefColor.current.intensity = 3;
        emissiveRef.current.emissiveIntensity = 1;
      }
    }
  });

  return (
    <group>
      <spotLight
        color={brandColor}
        position={[0, 1.1, 0]}
        intensity={150}
        angle={Math.PI / 1.5}
        penumbra={1}
        ref={spotlightRefColor}
      />
      <group ref={meshRef} position={[0, 0.8, 0]}>
        <mesh castShadow>
          <boxGeometry />
          <meshStandardMaterial color={"#ff5c00"} ref={meshRefColor} />
        </mesh>
        <mesh scale={[0.9, 1.1, 0.9]} castShadow>
          <boxGeometry />
          <meshStandardMaterial color={"#29353D"} normalMap={hexNormal} />
        </mesh>
        <mesh scale={[0.9, 0.9, 1.1]} castShadow>
          <boxGeometry />
          <meshStandardMaterial
            attach="material-0"
            color={"#29353D"}
            normalMap={hexNormal}
          />
          <meshStandardMaterial
            attach="material-1"
            color={"#29353D"}
            normalMap={hexNormal}
          />
          <meshStandardMaterial
            attach="material-2"
            color={"#29353D"}
            normalMap={hexNormal}
          />
          <meshStandardMaterial
            attach="material-3"
            color={"#29353D"}
            normalMap={hexNormal}
          />
          <meshStandardMaterial
            attach="material-4"
            color={"#29353D"}
            normalMap={hexNormal}
          />
          <meshStandardMaterial
            attach="material-5"
            color={"#29353D"}
            normalMap={hexNormal}
            emissiveMap={timSimmsEmissive}
            emissiveIntensity={0}
            emissive={new THREE.Color(brandColor)}
            ref={emissiveRef}
          />
        </mesh>
        <mesh scale={[1.1, 0.9, 0.9]} castShadow>
          <boxGeometry />
          <meshStandardMaterial color={"#29353D"} normalMap={hexNormal} />
        </mesh>
      </group>
    </group>
  );
}
export default Cube;
