import { Canvas, useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Environment, ContactShadows, Float, Loader } from '@react-three/drei';
import { useState, useRef, useEffect, Suspense } from 'react';
import * as THREE from 'three';
import { Pavement, Infrastructure, Pillar } from './ThreeWorldItems';
import { ASSETS } from '../constants';

function CameraController({ targetZ }: { targetZ: number }) {
  const ref = useRef<THREE.PerspectiveCamera>(null);
  
  useFrame((state) => {
    if (ref.current) {
      // Smoothly interpolate camera position
      ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, targetZ, 0.05);
      
      // Ground level view like the reference image
      const bob = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      ref.current.position.y = 1.6 + bob;
      ref.current.position.x = 1.2; // Offset slightly to see pillars clearly on narrower road
      
      // Look slightly to the right and up
      ref.current.rotation.x = 0.05; 
      ref.current.rotation.y = -0.12; 
    }
  });

  return (
    <PerspectiveCamera
      makeDefault
      ref={ref}
      position={[2, 1.6, 15]}
      fov={65}
    />
  );
}

export function ThreeScene({ currentIndex, assets }: { currentIndex: number, assets: typeof ASSETS }) {
  // Target Z position based on current index
  const targetZ = -currentIndex * 30;

  return (
    <div className="w-full h-full bg-[#b0bdcc] absolute inset-0">
      <Canvas shadows gl={{ antialias: true, alpha: true }}>
        <color attach="background" args={['#b0bdcc']} />
        
        <CameraController targetZ={targetZ} />
        
        <ambientLight intensity={0.8} />
        <directionalLight 
           position={[20, 40, 20]} 
           intensity={1.5} 
           castShadow 
           shadow-mapSize={[2048, 2048]}
        />

        <fog attach="fog" args={['#b0bdcc', 30, 250]} />

        <Pavement />
        <Infrastructure />

        {assets.map((asset, index) => (
           <Pillar key={asset.id} index={index} asset={asset} />
        ))}

        <Suspense fallback={null}>
          <Environment preset="city" />
        </Suspense>

        <ContactShadows 
           position={[0, 0, 0]} 
           opacity={0.25} 
           scale={60} 
           blur={2.5} 
           far={10} 
           resolution={512} 
           color="#000000" 
        />
      </Canvas>
      <Loader />
    </div>
  );
}
