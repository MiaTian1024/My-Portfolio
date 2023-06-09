import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, useTexture, OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

import heroImage from '../assets/hero.png'


export const SphereModel = () => {

  return (
  
      <mesh>
        <Sphere args={[1, 100, 200]} scale={1} color="#cb017c">
        <MeshDistortMaterial 
          color="#cb017c" 
          attach="material" 
          distort={1.8} 
          speed={2}    
        />
         {/* <Decal 
          position={[0,0,0]}
          rotation={[0,0,0]}
          scale={2.5}
          map={useTexture(heroImage)}
        /> */}
        </Sphere>
      </mesh>
      
  
  )
}


const SphereCanvas = () => {

  return (
  
      <Canvas 
        shadows
        camera={{ fov:25, near:0.1, far:200, position: [8, 3, 5] }}
        gl={{ preserveDrawingBuffer:true }}
      >
        <Suspense fallback={null}>
        <OrbitControls 
          enableZoom={false} 
          autoRotate
          maxPolarAngle={Math.PI /2 }
          minPolarAngle={Math.PI /2 }
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} />
        <SphereModel />
        </Suspense>
      </Canvas>
   
  )
}

export default SphereCanvas

