import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';

const StarBackground = (props: any) => {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
    // Make the animation react to mouse movement
    if (state.mouse && ref.current) {
      ref.current.rotation.x += state.mouse.y * 0.001;
      ref.current.rotation.y += state.mouse.x * 0.001;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#00ffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Hero: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarBackground />
      </Canvas>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        textAlign: 'center',
        padding: '20px'
      }}>
        <h1 style={{ fontSize: '3em' }}>Sacha Trouvé</h1>
        <p style={{ fontSize: '1.2em' }}>Étudiant en 2ème année de BUT Informatique</p>
        <p style={{ fontSize: '0.8em', maxWidth: '600px', marginTop: '20px' }}>
          Passionné par la résolution de problèmes et la création d'applications performantes et élégantes. 
          Je suis spécialisé dans le développement logiciel et je suis toujours à la recherche de nouveaux défis à relever. 
          Ce portfolio présente quelques-uns des projets sur lesquels j'ai travaillé.
        </p>
      </div>
    </div>
  );
};

export default Hero;
