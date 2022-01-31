import {useFrame, useThree} from "@react-three/fiber";
import React, {useState} from 'react'
import {PerspectiveCamera} from "@react-three/drei";
import useEventListener from '@use-it/event-listener'
import Character from "./character";


function Camera(props) {
    const [currentKeys, setCurrentKeys] = useState([]);
    const [velocity, setVelocity] = useState(0.25);

    useThree(({camera}) => {
        camera.rotation.set(-0.5, 0, 0);
        camera.position.set(camera.position.x, 3, camera.position.z)

    });

    useFrame((camera) => {
        if (currentKeys.indexOf('ArrowUp') >= 0) {
            camera.camera.position.set(camera.camera.position.x, camera.camera.position.y, camera.camera.position.z - velocity)
        }
        if (currentKeys.indexOf('ArrowDown') >= 0) {
            camera.camera.position.set(camera.camera.position.x, camera.camera.position.y, camera.camera.position.z + velocity)
        }
        if (currentKeys.indexOf('ArrowLeft') >= 0) {
            camera.camera.position.set(camera.camera.position.x - velocity, camera.camera.position.y, camera.camera.position.z)
        }
        if (currentKeys.indexOf('ArrowRight') >= 0) {
            camera.camera.position.set(camera.camera.position.x + velocity, camera.camera.position.y, camera.camera.position.z)
        }
    });

    function handler({ key }) {
        window.play = true;
        if (currentKeys.indexOf(key) < 0) {
            let newArray = [...currentKeys];
            newArray.push(key);
            setCurrentKeys(newArray)
        }
    }

    function clear({key}) {
        let filter = currentKeys.filter(e => e !== key);
        window.play = filter.length !== 0;
        console.log(window.play)

        setCurrentKeys(filter)
    }

    useEventListener('keydown', handler);
    useEventListener('keyup', clear);

    return (
        <PerspectiveCamera manual {...props} onUpdate={(c) => c.updateProjectionMatrix()}>
            <mesh/>
        </PerspectiveCamera>
    )
}

export default Camera