import React, {ReactNode, useRef} from "react";
import {Text} from "@react-three/drei";
import {ColorRepresentation, Mesh, Vector3} from "three";
import {useFrame} from "@react-three/fiber";


interface TextLookingAtCamera {
    color?: ColorRepresentation;
    position?: Vector3;
    scale?: Vector3;
    children?: ReactNode;
}

const TextLookingAtCamera: React.FC<TextLookingAtCamera> = ({ color, position, scale, children }) => {
    const ref = useRef<Mesh>();
    useFrame(({ camera }) => {
        ref.current?.lookAt(camera.position);
    });

    return (
        <Text
            ref={ref}
            color={color}
            position={position}
            scale={scale}
            getObjectsByProperty={undefined}
            getVertexPosition={undefined}
        >{ children }</Text>
    );
}

export default TextLookingAtCamera;