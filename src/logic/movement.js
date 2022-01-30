import {useFrame} from "@react-three/fiber";
import React, {useRef, useState,} from 'react'
import useEventListener from "@use-it/event-listener";
import * as THREE from "three";


function usePosition(source, apply) {
    const [currentKeys, setCurrentKeys] = useState([]);
    const [velocity, setVelocity] = useState(0.25);
    const bind = useRef()
    useFrame(() => {
        let object = apply(bind);
        if (currentKeys.indexOf('ArrowUp') >= 0) {
            object.position.set(object.position.x, object.position.y, object.position.z - velocity)
            const quaternion = new THREE.Quaternion();
            quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0);
            object.quaternion.slerp(quaternion, 0.1);
        }
        if (currentKeys.indexOf('ArrowDown') >= 0) {
            object.position.set(object.position.x, object.position.y, object.position.z + velocity)
            const quaternion = new THREE.Quaternion();
            quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI);
            object.quaternion.slerp(quaternion, 0.1);
        }
        if (currentKeys.indexOf('ArrowLeft') >= 0) {
            object.position.set(object.position.x - velocity, object.position.y, object.position.z)
            const quaternion = new THREE.Quaternion();
            quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
            object.quaternion.slerp(quaternion, 0.1);
        }
        if (currentKeys.indexOf('ArrowRight') >= 0) {
            object.position.set(object.position.x + velocity, object.position.y, object.position.z)
            const quaternion = new THREE.Quaternion();
            quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), -Math.PI / 2);
            object.quaternion.slerp(quaternion, 0.1);
        }

    })


    function handler({key}) {
        if (currentKeys.indexOf(key) < 0) {
            let newArra = [...currentKeys];
            newArra.push(key);
            setCurrentKeys(newArra)
        }
    }

    function clear({key}) {
        setCurrentKeys(currentKeys.filter(e => e !== key))
    }

    useEventListener('keydown', handler);
    useEventListener('keyup', clear);

    return bind
}

export default usePosition;