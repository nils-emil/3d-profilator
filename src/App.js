import React from 'react'
import {Canvas} from '@react-three/fiber'
import Terrain from "./components/terrain";
import Camera from "./behaviour/camera";
import Character from "./behaviour/character";

export default function App() {
    return (
        <Canvas>
            <ambientLight intensity={0.5}/>
            <spotLight position={[10, 5, 10]} angle={0.15} penumbra={1}/>
            <pointLight position={[-10, -10, -10]}/>
            <Terrain/>
            <Character/>
            <Camera/>
        </Canvas>
    )
}
