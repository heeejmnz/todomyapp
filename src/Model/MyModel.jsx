import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function MyModel(props) {
  const { nodes, materials } = useGLTF('./Model/voxel-transformed.glb')

  const group = useRef()

  return (
    <group ref={group} {...props} dispose={null} position={[0, -2, 0]}>
      <group position={[0, -0.01, -0.01]} rotation={[-1.57, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_4.geometry} material={materials.palette} position={[3.69, 0, 0]} rotation={[Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Object_6.geometry} material={materials['Material.001']} position={[-3.4, 0, -2.95]} scale={[7.05, 1, 7.05]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./Model/voxel-transformed.glb')
