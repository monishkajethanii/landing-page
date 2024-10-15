import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Model() {
  const { scene } = useGLTF('/model/scene.gltf'); // Load a 3D model from public folder
  return <primitive object={scene} scale={1.5} />;
}

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="hero-section h-screen flex items-center justify-center relative">
      <motion.div
        className="hero-text absolute text-center z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Welcome to GDSC DJ Sanghvi</h1>
        <p className="mt-4 text-xl">Empowering developers to grow and build innovative solutions.</p>
        <div className="cta mt-6">
          <a href="#join" className="btnPrimary mr-4">Join Now</a>
          <a href="#learnMore" className="btnSecondary">Learn More</a>
        </div>
      </motion.div>

      {/* 3D Canvas for Model */}
      <motion.div
        className="hero-3d-model w-full h-full"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <Canvas className="w-full h-full">
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls enableZoom={false} />
          <Model />
        </Canvas>
      </motion.div>
    </div>
  );
}