import { useMemo, Suspense } from 'react';
import * as THREE from 'three';
import { Image, Text } from '@react-three/drei';
import { ASSETS } from '../constants';

const PILLAR_GAP = 30;

export function Pavement() {
  return (
    <group>
      {/* Road */}
      <mesh rotation-x={-Math.PI / 2} position={[0, -0.01, -500]} receiveShadow>
        <planeGeometry args={[10, 2000]} />
        <meshStandardMaterial color="#222" roughness={0.8} />
      </mesh>
      
      {/* Road Markings */}
      {Array.from({ length: 100 }).map((_, i) => (
        <mesh key={i} rotation-x={-Math.PI / 2} position={[0, 0, -i * 20]} receiveShadow>
          <planeGeometry args={[0.15, 5]} />
          <meshStandardMaterial color="#fff" transparent opacity={0.4} />
        </mesh>
      ))}

      {/* Sidewalk/Curb */}
      <mesh rotation-x={-Math.PI / 2} position={[7, 0.1, -500]} receiveShadow>
        <planeGeometry args={[4, 2000]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      <mesh rotation-x={-Math.PI / 2} position={[-7, 0.1, -500]} receiveShadow>
        <planeGeometry args={[4, 2000]} />
        <meshStandardMaterial color="#444" />
      </mesh>
    </group>
  );
}

export function Infrastructure() {
  return (
    <group>
      {/* Repeating Bridge Segments */}
      {Array.from({ length: 250 }).map((_, i) => (
        <group key={i} position={[0, 8, -i * 8]}>
          {/* Main Massive Top Beam (Transverse) */}
          <mesh position={[0, 0, 0]} castShadow receiveShadow>
            <boxGeometry args={[50, 4, 3]} />
            <meshStandardMaterial color="#7a818c" roughness={0.9} />
          </mesh>

          {/* Expansion Joint Detail */}
          <mesh position={[0, 2.05, 1.55]}>
             <boxGeometry args={[50.2, 0.1, 0.1]} />
             <meshStandardMaterial color="#111" />
          </mesh>

          {/* Longitudinal Beams (The heavy ribs going forward) */}
          {[ -15, -5, 5, 15 ].map(x => (
            <mesh key={x} position={[x, -1, 0]} castShadow receiveShadow>
              <boxGeometry args={[4, 2, 8.1]} />
              <meshStandardMaterial color="#6e757f" />
            </mesh>
          ))}

          {/* Bearing Blocks (between longitudinal and transverse) */}
          {[ -15, -5, 5, 15 ].map(x => (
            <mesh key={`b-${x}`} position={[x, -2, 0]}>
               <boxGeometry args={[4.2, 0.5, 3]} />
               <meshStandardMaterial color="#333" />
            </mesh>
          ))}

          {/* Cantilever Supports - angled outwards */}
          <mesh position={[-20, -1.5, 0]} rotation-z={0.3} castShadow>
             <boxGeometry args={[10, 2, 2.8]} />
             <meshStandardMaterial color="#666" />
          </mesh>
          <mesh position={[20, -1.5, 0]} rotation-z={-0.3} castShadow>
             <boxGeometry args={[10, 2, 2.8]} />
             <meshStandardMaterial color="#666" />
          </mesh>

          {/* Secondary smaller architectural detail ribs */}
          <mesh position={[0, -2, 0]} castShadow>
             <boxGeometry args={[48, 0.4, 2]} />
             <meshStandardMaterial color="#5a616a" />
          </mesh>

          {/* Lighting Fixture (Every 4 segments) */}
          {i % 4 === 0 && (
            <group position={[11, 0, 0]}>
               <mesh position={[0, 5, 0]}>
                  <cylinderGeometry args={[0.2, 0.2, 10]} />
                  <meshStandardMaterial color="#444" />
               </mesh>
               <mesh position={[0, 10, -1]} rotation-x={Math.PI / 2}>
                  <cylinderGeometry args={[0.1, 0.1, 3]} />
                  <meshStandardMaterial color="#444" />
               </mesh>
               <mesh position={[0, 10, -2.5]}>
                  <sphereGeometry args={[0.3, 16, 16]} />
                  <meshStandardMaterial color="#fff" emissive="#fff" emissiveIntensity={2} />
               </mesh>
            </group>
          )}
        </group>
      ))}

      {/* Ground Infrastructure Details */}
      <group position={[10.5, 0, -500]}>
        {/* Striped Barrier */}
        <mesh position={[0, 0.5, 0]} receiveShadow>
          <boxGeometry args={[1, 1, 1000]} />
          <meshStandardMaterial color="#666" />
        </mesh>
        {/* Zebra Stripes Logic */}
        {Array.from({ length: 250 }).map((_, i) => (
          <mesh key={i} position={[0, 1.01, i * 4 - 500]}>
             <planeGeometry args={[1.1, 1]} />
             <meshStandardMaterial color={i % 2 === 0 ? "#111" : "#fff"} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

const PILLAR_COLORS = ["#f9bebe", "#bee3f9", "#bef9e1", "#f9f2be"];

export function Pillar({ index, asset }: { index: number; asset: typeof ASSETS[0] }) {
  const z = -index * PILLAR_GAP - 15;
  const color = useMemo(() => PILLAR_COLORS[index % PILLAR_COLORS.length], [index]);
  
  return (
    <group position={[6, -2, z]}>
      {/* Main Pillar Body with subtle metallic-concrete texture simulation */}
      <mesh position={[0, 6, 0]} castShadow receiveShadow>
        <boxGeometry args={[5, 16, 2]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.4} 
          metalness={0.3}
          emissive={color}
          emissiveIntensity={0.05}
        />
      </mesh>
      
      {/* Structural Ribs / Panels */}
      {[0.5, 15.5].map((y) => (
        <mesh key={y} position={[0, y - 2, 0]}>
          <boxGeometry args={[5.2, 0.4, 2.2]} />
          <meshStandardMaterial color="#333" roughness={0.2} metalness={0.8} />
        </mesh>
      ))}

      {/* Vertical Recessed Neon Lights (Side Edges) */}
      {[2.4, -2.4].map((x) => (
         <mesh key={x} position={[x, 6, 1.01]}>
            <boxGeometry args={[0.05, 12, 0.05]} />
            <meshStandardMaterial color="#fff" emissive={color} emissiveIntensity={5} />
         </mesh>
      ))}
      
      {/* Vertical Drainage Pipe Detail */}
      <mesh position={[-2.6, 6, -0.8]}>
         <cylinderGeometry args={[0.15, 0.15, 16]} />
         <meshStandardMaterial color="#222" metalness={0.8} roughness={0.1} />
      </mesh>

      {/* Mural Display Unit (Landscape Poster Style) - Restored safe position */}
      <group position={[0, 4.5, 1.01]}>
         {/* Glowing Back-light Frame */}
         <mesh position={[0, 0, -0.05]}>
            <planeGeometry args={[4.8, 3.5]} />
            <meshStandardMaterial 
              color={color} 
              emissive={color} 
              emissiveIntensity={1.5} 
              transparent 
              opacity={0.3} 
            />
         </mesh>

         {/* Dark Display Glass */}
         <mesh position={[0, 0, -0.02]}>
            <planeGeometry args={[4.6, 3.3]} />
            <meshStandardMaterial color="#000" roughness={0} metalness={1} opacity={0.8} transparent />
         </mesh>

         <Suspense fallback={
           <Text
             position={[0, 0, 0.05]}
             fontSize={0.2}
             color="#fff"
             fillOpacity={0.3}
           >
             LOADING...
           </Text>
         }>
           {asset.imageUrl ? (
             <Image 
                url={asset.imageUrl} 
                transparent 
                scale={[4.5, 3.2]}
                zoom={1}
                position={[0, 0, 0.05]}
             />
           ) : (
             <Text
               position={[0, 0, 0.05]}
               fontSize={0.4}
               color="#fff"
               maxWidth={4}
               textAlign="center"
               font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGkyMZhrib2f-A.woff"
               anchorX="center"
               anchorY="middle"
             >
               {asset.title.toUpperCase()}
             </Text>
           )}
         </Suspense>

         {/* Neon Frame Border (Horizontal sides for landscape look) */}
         <mesh position={[0, 1.65, 0.01]}>
            <planeGeometry args={[4.5, 0.02]} />
            <meshStandardMaterial color="#fff" emissive={color} emissiveIntensity={3} />
         </mesh>
         <mesh position={[0, -1.65, 0.01]}>
            <planeGeometry args={[4.5, 0.02]} />
            <meshStandardMaterial color="#fff" emissive={color} emissiveIntensity={3} />
         </mesh>
      </group>
    </group>
  );
}
