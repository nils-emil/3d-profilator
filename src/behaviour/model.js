import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three'
import {useFrame, useLoader} from "@react-three/fiber";

const Model = props => {
    console.log(props.path)
    const model = useLoader(
        GLTFLoader,
        props.path
    )

    let mixer
    if (model.animations.length) {
        mixer = new THREE.AnimationMixer(model.scene);
        if (!window.play) {
            mixer.setTime(0)
        }
        model.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            if (window.play) {
                action.play();
            }
        });
    }

    useFrame((state, delta) => {
        mixer?.update(delta)
    })
    // *************************

    model.scene.traverse(child => {
        if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
            child.material.side = THREE.FrontSide
        }
    })

    return (
        <primitive
            object={model.scene}
            timeScale={20}
            scale={props.scale}
        />
    )
}

export default Model;