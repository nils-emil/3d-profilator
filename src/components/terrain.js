import {useFrame} from "@react-three/fiber";
import React, {useRef} from 'react'

const GROUND_HEIGHT = -10; // A Constant to store the ground height of the game.

// A Ground plane that moves relative to the player. The player stays at 0,0
function Terrain() {
    const terrain = useRef();

    useFrame(() => {
    });
    return (
        <mesh
            visible
            position={[0, GROUND_HEIGHT, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            ref={terrain}>
            <planeBufferGeometry attach="geometry" args={[5000, 5000, 128, 128]} />
            <meshStandardMaterial
                attach="material"
                color="white"
                roughness={1}
                metalness={0}
                wireframe
            />
        </mesh>
    );
}

export default Terrain