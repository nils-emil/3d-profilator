import React, {useRef} from 'react'
import usePosition from "../logic/movement";
import { Suspense } from "react";
import Model from "./model";

function Character(props) {
    const ref = useRef()
    return (
        <mesh
            {...props}
            ref={usePosition(ref, (e) => {
                return e.current
            })}>
            <boxGeometry args={[0.0001,0.00001, 0.00001]}/>
            <Suspense ffallback={<h1>Loading profile...</h1>}>
                <Model path={'/animated4.glb'} scale={1}/>
            </Suspense>
        </mesh>
    )
}

export default Character