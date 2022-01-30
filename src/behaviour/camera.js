import {useFrame, useThree} from "@react-three/fiber";
import React, {useRef, useState} from 'react'
import {PerspectiveCamera} from "@react-three/drei";
import useEventListener from '@use-it/event-listener'
import Character from "./character";


function Camera(props) {
    const [currentKeys, setCurrentKeys] = useState([]);
    const [direction, setDirection] = useState([]);
    const [velocity, setVelocity] = useState([]);
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
        if (currentKeys.length > 0 && velocity < 0.1) {
            setVelocity(Number(velocity) + 0.001)
        }

    });

    function handler({key}) {
        let pressedKeys = [...currentKeys];
        if (currentKeys.indexOf(key) < 0) {
            pressedKeys.push(key);
            setCurrentKeys(pressedKeys)
        }
        if (currentKeys.length > 2) {
            setCurrentKeys([])
            return;
        }
        if (containsAll(["ArrowUp", "ArrowLeft"])) {

        } else if (containsAll(["ArrowUp", "ArrowRight"])) {

        }
        else if (containsAll(["ArrowRight"])) {

        }
        else if (containsAll(["ArrowRight", "ArrowUp"])) {

        }
        else if (containsAll(["ArrowLeft", "ArrowDown"])) {

        }
        else if (containsAll(["ArrowLeft", "ArrowUp"])) {

        }
        else if (containsAll(["ArrowDown", "ArrowLeft"])) {

        }
        else if (containsAll(["ArrowDown", "ArrowRight"])) {

        }

    }

    function containsAll(list) {
        const filteredArray = array1.filter(value => array2.includes(value));
        return filteredArray.length === list.length;
    }

    function clear({key}) {
        setCurrentKeys(currentKeys.filter(e => e !== key))
    }

    useEventListener('keydown', handler);
    useEventListener('keyup', clear);

    return (
        <PerspectiveCamera manual {...props} onUpdate={(c) => c.updateProjectionMatrix()}>
            <mesh/>
            <Character/>
        </PerspectiveCamera>
    )
}

export default Camera