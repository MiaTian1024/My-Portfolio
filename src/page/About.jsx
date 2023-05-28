import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, RenderTexture } from '@react-three/drei';

const About = () => {
  return (
    <div className='w-full h-full'>
      <Canvas>
       <OrbitControls enableZoom={false} />
       <ambientLight intensity={1} />
       <directionalLight position={[2,2,2]} />
         <mesh>
           <boxGeometry args={[2,2,2]} />
           <meshStandardMaterial>
            <RenderTexture attach="map">
              <PerspectiveCamera 
                makeDefaule
                positon={[0,0,2]}
              />
              <color attach="background" args={["pink"]} />
              
            </RenderTexture>
           </meshStandardMaterial>
         </mesh>
      </Canvas>
      
    </div>
  );
}

export default About;
