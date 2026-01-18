import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial } from '@react-three/drei';
import * as THREE from 'three';

const CrystalScene: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const lightRef = useRef<THREE.PointLight>(null);

    useFrame((state) => {
        if (meshRef.current) {
            const { mouse } = state;
            // Smooth rotation based on mouse position
            // Mouse x and y are normalized between -1 and 1
            const targetRotationX = mouse.y * 0.5;
            const targetRotationY = mouse.x * 0.5 + state.clock.getElapsedTime() * 0.1; // Add slow auto rotation

            // Lerp for smooth transition
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.1);
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.1);
        }

        if (lightRef.current) {
            // Move light slightly opposite to mouse to create dynamic shadows
            lightRef.current.position.x = -state.mouse.x * 3;
            lightRef.current.position.y = -state.mouse.y * 3;
        }
    });

    return (
        <>
            <color attach="background" args={['#0a0a0c']} />

            {/* Lights */}
            <ambientLight intensity={0.5} />
            <pointLight ref={lightRef} position={[2, 2, 2]} intensity={2} color="#d8b4fe" distance={10} />
            <pointLight position={[-3, -3, -2]} intensity={1} color="#9a0df2" />

            {/* The Crystal */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <mesh ref={meshRef} scale={1.8}>
                    <icosahedronGeometry args={[1, 0]} />
                    {/* 
            MeshPhysicalMaterial can emulate glass/crystal.
            Transmission allows seeing through.
            Roughness adds texture.
            Thickness adds refraction depth.
          */}
                    <meshPhysicalMaterial
                        roughness={0.15}
                        transmission={0.9}
                        thickness={2.5}
                        ior={1.5}
                        color="#2a0a38"
                        emissive="#4a0e72"
                        emissiveIntensity={0.2}
                        metalness={0.1}
                        clearcoat={1}
                        clearcoatRoughness={0.1}
                    />
                </mesh>
            </Float>

            {/* Floating particles/debris for depth */}
            {Array.from({ length: 20 }).map((_, i) => (
                <Float key={i} speed={1 + Math.random()} rotationIntensity={2} floatIntensity={1} position={[
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 5
                ]}>
                    <mesh scale={0.05 + Math.random() * 0.05}>
                        <octahedronGeometry />
                        <meshStandardMaterial color={Math.random() > 0.5 ? "#9a0df2" : "#ffffff"} emissive="#9a0df2" emissiveIntensity={2} />
                    </mesh>
                </Float>
            ))}
        </>
    );
};

export default CrystalScene;