import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import * as THREE from 'three';

const SolanaField = (props: any) => {
  const ref = useRef<any>();
  const positions = new Float32Array(2000 * 3);
  const colors = new Float32Array(2000 * 3);
  
  // Generate positions in a Solana logo-inspired shape
  for (let i = 0; i < positions.length; i += 3) {
    const angle = (i / positions.length) * Math.PI * 2;
    const radius = 2 + Math.sin(angle * 3) * 0.3;
    
    positions[i] = Math.cos(angle) * radius;
    positions[i + 1] = Math.sin(angle) * radius;
    positions[i + 2] = (Math.random() - 0.5) * 0.5;
    
    // Solana purple to green gradient colors
    const t = i / positions.length;
    colors[i] = 0.6 + 0.4 * Math.cos(t * Math.PI);     // R (purple to green)
    colors[i + 1] = 0.2 + 0.8 * t;                     // G (increasing for green)
    colors[i + 2] = 0.8 - 0.6 * t;                     // B (decreasing for green)
  }

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * 0.1;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          vertexColors
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const SolanaSymbol = () => {
  const groupRef = useRef<THREE.Group>(null);
  const meshes = useRef<THREE.Mesh[]>([]);

  React.useEffect(() => {
    if (groupRef.current) {
      // Create three parallel bars (Solana logo style)
      for (let i = 0; i < 3; i++) {
        const mesh = new THREE.Mesh(
          new THREE.BoxGeometry(0.8, 0.15, 0.1),
          new THREE.MeshBasicMaterial({
            color: new THREE.Color(i === 0 ? '#9945FF' : i === 1 ? '#7C3AFA' : '#14F195'),
            wireframe: true,
          })
        );
        mesh.position.y = (i - 1) * 0.3;
        mesh.rotation.z = -Math.PI / 6; // Solana logo angle
        groupRef.current.add(mesh);
        meshes.current.push(mesh);
      }
    }
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.2;
      meshes.current.forEach((mesh, i) => {
        mesh.scale.x = 1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.1;
      });
    }
  });

  return <group ref={groupRef} />;
};

export const Hero = () => {
  return (
    <section className="h-screen w-full relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 4], fov: 60 }}
          gl={{ antialias: true }}
        >
          <color attach="background" args={['#0c0d15']} />
          <SolanaField />
          <SolanaSymbol />
        </Canvas>
      </div>
      
      <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-b from-transparent via-[#0c0d15]/50 to-[#0c0d15]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="solana-gradient">Gelson</span>, Développeur Web & Python Junior Autodidacte
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            De l'automatisation intelligente, au développement Web – Passionné de nouvelles technologies, je construis des solutions Web et logicielles sur mesure.
          </motion.p>
          
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-full hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9945FF] transform hover:scale-105 transition-all duration-300 solana-glow"
          >
            Découvrez mes innovations
            <ArrowRight className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};
