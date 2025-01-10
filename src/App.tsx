import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./app.css";
import * as THREE from "three";

import Scene from "./Scene";

function App() {
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
      <Canvas className="canvas" camera={{ position: [3, 3, 3] }} shadows>
        <color attach="background" args={["#29353D"]} />
        <ambientLight intensity={1.2} />
        <directionalLight
          color="#fff"
          position={[-3, 4, 5]}
          castShadow
          intensity={1}
        />
        <Scene />
        <OrbitControls />
      </Canvas>
    </>
  );
}
export default App;
