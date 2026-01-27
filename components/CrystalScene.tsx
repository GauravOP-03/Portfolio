import React, {useMemo, useRef} from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const CrystalScene: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const lightRef = useRef<THREE.PointLight>(null);

    const particles = useMemo(
        () =>
            Array.from({ length: 20 }).map(() => ({
                position: [
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 10,
                    (Math.random() - 0.5) * 5,
                ] as [number, number, number],
                scale: 0.05 + Math.random() * 0.05,
                speed: 1 + Math.random(),
                color: Math.random() > 0.5 ? "#9a0df2" : "#ffffff",
            })),
        []
    );


    const { viewport } = useThree();
    const isMobile = viewport.width < 5; // simple mobile heuristic

    useFrame((state) => {
        if (meshRef.current) {
            const { mouse } = state;

            const targetRotationX = mouse.y * 0.5;
            const targetRotationY =
                mouse.x * 0.5 + state.clock.getElapsedTime() * 0.1;

            meshRef.current.rotation.x = THREE.MathUtils.lerp(
                meshRef.current.rotation.x,
                targetRotationX,
                isMobile ? 0.05 : 0.1
            );
            meshRef.current.rotation.y = THREE.MathUtils.lerp(
                meshRef.current.rotation.y,
                targetRotationY,
                isMobile ? 0.05 : 0.1
            );
        }

        // Move light ONLY on desktop
        if (lightRef.current && !isMobile) {
            lightRef.current.position.x = -state.mouse.x * 3;
            lightRef.current.position.y = -state.mouse.y * 3;
        }
    });

    return (
        <>
            <color attach="background" args={['#0a0a0c']} />

            {/* Lights */}
            <ambientLight intensity={0.5} />
            <pointLight
                ref={lightRef}
                position={[2, 2, 2]}
                intensity={isMobile ? 1.2 : 2}
                color="#d8b4fe"
                distance={10}
            />
            {!isMobile && (
                <pointLight position={[-3, -3, -2]} intensity={1} color="#9a0df2" />
            )}

            {/* Crystal */}
            <Float
                speed={isMobile ? 1 : 2}
                rotationIntensity={0.5}
                floatIntensity={0.5}
            >
                <mesh ref={meshRef} scale={isMobile ? 1.4 : 1.8}>
                    <icosahedronGeometry args={[1, 0]} />
                    <meshPhysicalMaterial
                        roughness={0.15}
                        transmission={isMobile ? 0 : 0.9}
                        thickness={isMobile ? 0 : 2.5}
                        ior={1.5}
                        color="#2a0a38"
                        emissive="#4a0e72"
                        emissiveIntensity={0.2}
                        metalness={isMobile ? 0.9 : 0.1}
                        clearcoat={isMobile ? 0 : 1}
                        clearcoatRoughness={0.1}
                    />
                </mesh>
            </Float>

            {/* Particles only on desktop */}
            {!isMobile &&
                particles.map((p, i) =>(
                    <Float
                        key={i}
                        speed={p.speed}
                        rotationIntensity={2}
                        floatIntensity={1}
                        position={p.position}
                    >
                        <mesh scale={p.scale}>
                            <octahedronGeometry />
                            <meshStandardMaterial
                                color={p.color}
                                emissive="#9a0df2"
                                emissiveIntensity={2}
                            />
                        </mesh>
                    </Float>
                ))
            }
        </>
    );
};

export default CrystalScene;
