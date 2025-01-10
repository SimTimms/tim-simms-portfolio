import { useRef } from "react";
import * as THREE from "three";

interface CarProps {
  primitiveModel: THREE.Object3D | null;
  carAlpha: THREE.Texture;
}

function Car({ primitiveModel, carAlpha }: CarProps) {
  const meshRef = useRef<THREE.Group>(null);
  const meshRefColor = useRef<THREE.MeshStandardMaterial>(null);
  if (!primitiveModel) return null;
  return (
    <group ref={meshRef} position={[2, 0.8, 2]} scale={0.1}>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color={"#ff5c00"} ref={meshRefColor} />
      </mesh>
      <mesh scale={[0.9, 1.1, 0.9]} castShadow>
        <boxGeometry />
        <meshStandardMaterial color={"#29353D"} />
      </mesh>
      <mesh scale={[0.9, 0.9, 1.1]} castShadow>
        <boxGeometry />
        <meshStandardMaterial color={"#29353D"} />
      </mesh>
      <mesh scale={[1.1, 0.9, 0.9]} castShadow>
        <boxGeometry />
        <meshStandardMaterial color={"#29353D"} />
      </mesh>
    </group>
  );
}
export default Car;
