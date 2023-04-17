import React from "react";
import {Canvas} from '@react-three/fiber';
import {GLSL_FOR_RIEMANN_SPHERE} from "../../../../data/shaders";
import * as THREE from "three";
import {Vector3, Color, Box3, Euler} from "three";
import {OrbitControls} from "@react-three/drei";
import RiemannSphereSettings from "../RiemannSphereSettings/RiemannSphereSettings";
import {OpenGLPlotAlgorithm} from "../../PlotContext";
import TextLookingAtCamera from "../../threeJsTools/TextLookingAtCamera";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";


////////////////////////////////////////////////////////////////////////////////////////

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
    
        ${GLSL_FOR_RIEMANN_SPHERE}

        ${ code }

        void main() {
            vec2 z = riemann_sphere(vertexCoord);
            
            gl_FragColor = domain_coloring(plottedFunction(z), colormode.x);
        }
    `;
}

////////////////////////////////////////////////////////////////////////////////////////

const HELPER_COLOR_LIGHT = new Color('rgb(110, 110, 110)');
const HELPER_COLOR_DARK = new Color('rgb(66,66,66)');

const BOUNDING_BOX_MIN = new Vector3(-3, -1.5, -3);
const BOUNDING_BOX_MAX = new Vector3(3, 1.5, 3);
const BOUNDING_BOX = new Box3(BOUNDING_BOX_MIN, BOUNDING_BOX_MAX);
const BOUNDING_BOX_SIZE = BOUNDING_BOX.getSize(new THREE.Vector3);
const BOUNDING_BOX_HALF_SIZE = new Vector3().copy(BOUNDING_BOX_SIZE).divideScalar(2);

const AXIS_ORIGIN = BOUNDING_BOX_MIN;
const AXIS_CYLINDER_RADIUS = 0.0125;

const AXIS_LABEL_SCALE = new Vector3(0.3, 0.3, 0.3);
const X_AXIS_LABEL_POSITION = new Vector3(BOUNDING_BOX_MAX.x + 0.3, BOUNDING_BOX_MIN.y, BOUNDING_BOX_MIN.z);
const Y_AXIS_LABEL_POSITION = new Vector3(BOUNDING_BOX_MIN.x, BOUNDING_BOX_MAX.y + 0.3, BOUNDING_BOX_MIN.z);
const Z_AXIS_LABEL_POSITION = new Vector3(BOUNDING_BOX_MIN.x, BOUNDING_BOX_MIN.y, BOUNDING_BOX_MAX.z + 0.3);

const X_AXIS_POSITION = new Vector3().copy(AXIS_ORIGIN).add(new Vector3(BOUNDING_BOX_HALF_SIZE.x, 0, 0));
const Y_AXIS_POSITION = new Vector3().copy(AXIS_ORIGIN).add(new Vector3(0, BOUNDING_BOX_HALF_SIZE.y, 0));
const Z_AXIS_POSITION = new Vector3().copy(AXIS_ORIGIN).add(new Vector3(0, 0, BOUNDING_BOX_HALF_SIZE.z));

const X_AXIS_COLOR = new Color('rgb(180, 0, 0)');
const Y_AXIS_COLOR = new Color('rgb(0, 0, 180)');
const Z_AXIS_COLOR = new Color('rgb(0, 180, 0)');

////////////////////////////////////////////////////////////////////////////////////////


const RiemannSphereGL: React.FC<OpenGLPlotAlgorithm> = ({ code, reload }) => {
    const { riemannSphere } = useSelector((state: RootState) => state.plotSettings);

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
        <>
            <div style={{ width: '100%', height: '100%', touchAction: 'none' }}>
                <Canvas
                    style={{ width: '100%', height: '100%', touchAction: 'none' }}
                    camera={{ fov: 75, position: [3, 2, 1]}}
                >

                    {/* Coordinate system axis */}
                    <group visible={riemannSphere.axis.visible}>

                        {/* origin sphere */}
                        <mesh position={AXIS_ORIGIN}>
                            <sphereGeometry args={[0.05, 20, 20]} />
                            <meshBasicMaterial />
                        </mesh>

                        {/* x-axis */}
                        <group>
                            {/* axis */}
                            <mesh position={X_AXIS_POSITION} rotation={new Euler(Math.PI/2, 0, Math.PI/2)}>
                                <cylinderGeometry args={[AXIS_CYLINDER_RADIUS, AXIS_CYLINDER_RADIUS, BOUNDING_BOX_SIZE.x, 20, 3]} />
                                <meshBasicMaterial color={X_AXIS_COLOR}/>
                            </mesh>
                            {/* label */}
                            <group visible={riemannSphere.axis.labels}>
                                <TextLookingAtCamera scale={AXIS_LABEL_SCALE} position={X_AXIS_LABEL_POSITION} color={X_AXIS_COLOR}>
                                    X
                                </TextLookingAtCamera>
                            </group>
                        </group>

                        {/* y-axis */}
                        <group>
                            {/* axis */}
                            <mesh position={Y_AXIS_POSITION} rotation={new Euler(0, 0, 0)}>
                                <cylinderGeometry args={[AXIS_CYLINDER_RADIUS, AXIS_CYLINDER_RADIUS, BOUNDING_BOX_SIZE.y, 20, 3]} />
                                <meshBasicMaterial color="rgb(0, 0, 180)"/>
                            </mesh>
                            {/* label */}
                            <group visible={riemannSphere.axis.labels}>
                                <TextLookingAtCamera scale={AXIS_LABEL_SCALE} position={Y_AXIS_LABEL_POSITION} color={Y_AXIS_COLOR}>
                                    Y
                                </TextLookingAtCamera>
                            </group>
                        </group>

                        {/* z-axis */}
                        <group>
                            {/* axis */}
                            <mesh position={Z_AXIS_POSITION} rotation={new Euler(Math.PI/2, 0, 0)}>
                                <cylinderGeometry args={[AXIS_CYLINDER_RADIUS, AXIS_CYLINDER_RADIUS, BOUNDING_BOX_SIZE.z, 20, 3]} />
                                <meshBasicMaterial color="rgb(0, 180, 0)"/>
                            </mesh>
                            {/* label */}
                            <group visible={riemannSphere.axis.labels}>
                                <TextLookingAtCamera scale={AXIS_LABEL_SCALE} position={Z_AXIS_LABEL_POSITION} color={Z_AXIS_COLOR}>
                                    Z
                                </TextLookingAtCamera>
                            </group>
                        </group>

                    </group>

                    <box3Helper args={[BOUNDING_BOX, HELPER_COLOR_LIGHT]} />

                    <gridHelper args={[BOUNDING_BOX_SIZE.x, 6, HELPER_COLOR_LIGHT, HELPER_COLOR_DARK]} position={[0, BOUNDING_BOX_MIN.y, 0]} />

                    <OrbitControls dampingFactor={0.075} />

                    {/* The Riemann Sphere */}
                    <mesh>
                        <sphereGeometry attach="geometry" args={[1, riemannSphere.sphere.subdivisions, riemannSphere.sphere.subdivisions]} />
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

            <RiemannSphereSettings />
        </>

    );
}


export default RiemannSphereGL;