import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'


const SphereCanvas = () => {
  return (
  
      <Canvas camera={{ fov:25, position: [5, 5, 5] }}>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <Sphere args={[1, 100, 200]} scale={3.4}>
          <MeshDistortMaterial 
            color="#3d1c56" 
            attach="material" 
            distort={0.5} 
            speed={2}    
          />
        </Sphere>
      </Canvas>
   
  )
}

export default SphereCanvas

