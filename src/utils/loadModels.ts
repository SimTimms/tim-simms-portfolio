import { ModelsType } from "../types";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

function loadModels(): ModelsType {
  const building = useLoader(GLTFLoader, "./models/building.glb");
  const lightBeam = useLoader(GLTFLoader, "./models/lightBeam.glb");
  return {
    building: building.scene,
    lightBeam: lightBeam.scene,
  };
}

export default loadModels;
