import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Box, Torus } from '@react-three/drei';

export const Scene3D = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x += delta * 0.5;
      sphereRef.current.rotation.y += delta * 0.2;
    }
    if (boxRef.current) {
      boxRef.current.rotation.x -= delta * 0.2;
      boxRef.current.rotation.y -= delta * 0.4;
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += delta * 0.3;
      torusRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Sphere ref={sphereRef} args={[1, 32, 32]} position={[-4, 0, 0]}>
        <meshStandardMaterial color="#00fff5" wireframe />
      </Sphere>
      <Box ref={boxRef} args={[1.5, 1.5, 1.5]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ff00f5" wireframe />
      </Box>
      <Torus ref={torusRef} args={[1, 0.4, 16, 100]} position={[4, 0, 0]}>
        <meshStandardMaterial color="#f5ff00" wireframe />
      </Torus>
    </>
  );
};

