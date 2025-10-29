import * as THREE from "three";
import {
  useGLTF,
  useAnimations,
  Html,
  OrbitControls,
  Environment,
} from "@react-three/drei";
import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function Model() {
  const group = useRef();
  const { scene, animations } = useGLTF("/model/tesseract.glb");
  const { actions } = useAnimations(animations, group);
  const pivot = new THREE.Object3D();

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.reset().fadeIn(8).play();
      });
    }
  }, [actions]);

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.metalness = 1;
      child.material.roughness = 0.2;
    }
  });

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += -0.005;
    }
  });

  scene.rotation.y += 0.1;
  scene.translateY(-0.4, -1, 0);

  return <primitive ref={group} object={scene} scale={2.5} />;
}

export default function DarkTesseract() {
  return (
    <Canvas
      className="canvas"
      camera={{ position: [1, 1, 1], fov: 40 }}
      gl={{
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding,
        antialias: true,
      }}
    >
      <ambientLight intensity={1} />
      <directionalLight
        castShadow
        position={[5, 5, 5]}
        intensity={1.2}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-5, 3, 5]} intensity={1} />

      <Suspense fallback={null}>
        <Model />
        <Environment preset="studio" />
      </Suspense>

      <OrbitControls enableZoom={false} enableRotate />
    </Canvas>
  );
}
