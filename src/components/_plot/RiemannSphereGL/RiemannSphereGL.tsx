import React from "react";
import {Canvas} from '@react-three/fiber';
import {loadDomainColoringImports} from "../../../data/shaders";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";


////////////////////////////////////////////////////////////////////////////////////////

const DOMAIN_COLORING_IMPORTS = loadDomainColoringImports();

function createVertexShader(): string {
    return `
        varying vec3 vertexCoord;
        
        void main() {
            vertexCoord = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;
}

function createFragmentShader(code: string): string {
    return `
        varying vec3 vertexCoord;
    
        ${DOMAIN_COLORING_IMPORTS}

        ${ code }

        void main() {
            vec2 z = riemann_sphere(vertexCoord);
            
            gl_FragColor = domcol(plottedFunction(z), colormode.x);
        }
    `;
}

////////////////////////////////////////////////////////////////////////////////////////


/**
 * This interface represents all options for domain coloring.
 */
export interface RiemannSphereGLProps {
    /** The GLSL code that contains the function to plot. This function
     * has to be called `plottedFunction`, which accepts a `vec2` as an
     * argument and returns a `vec2` as an output.
     */
    code: string;
    /** Whether to force a reload onto the canvas. When set to `true`,
     * the canvas will not load, but will show a loading screen instead.
     */
    reload: boolean;
}


const RiemannSphereGL: React.FC<RiemannSphereGLProps> = ({ code, reload }) => {

    const boundingBox = new THREE.Box3(
        new THREE.Vector3(-3, -1.5, -3),
        new THREE.Vector3(3, 1.5, 3)
    );

    // if a reload is needed (which it is, every time a re-render is needed)
    // briefly return nothing. Unmounting the canvas and then remounting it
    // forces it to reload.
    // TODO Find a better method, which is unknown as for now!
    if (reload) {
        return (
            <></>
        );
    }

    return (
        <div style={{ width: '100%', height: '100%', touchAction: 'none' }}>
            <Canvas
                style={{ width: '100%', height: '100%', touchAction: 'none' }}
                camera={{ fov: 75, position: [3, 2, 1]}}
            >

                <box3Helper args={[boundingBox, new THREE.Color('rgb(110, 110, 110)')]} />
                <OrbitControls dampingFactor={0.075} />

                <mesh
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]}
                    scale={[1, 1, 1]}
                >
                    <sphereGeometry attach="geometry" args={[1, 1000, 1000]} />
                    <shaderMaterial
                        attach="material"
                        needsUpdate={true}
                        uniformsNeedUpdate={true}
                        vertexShader={ createVertexShader() }
                        fragmentShader={ createFragmentShader(code) }
                        side={THREE.DoubleSide}
                    />
                </mesh>

            </Canvas>
        </div>
    );
}


export default RiemannSphereGL;