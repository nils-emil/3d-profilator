import React, {useRef} from 'react'
import usePosition from "../logic/movement";

function Character(props) {
    const ref = useRef()

    return (
        <mesh
            {...props}
            ref={usePosition(ref, (e) => {
                return e.current
            })}>
            <boxGeometry args={[2, 1, 1]}/>
            <meshStandardMaterial color={'hotpink'}/>
        </mesh>
    )
}

export default Character