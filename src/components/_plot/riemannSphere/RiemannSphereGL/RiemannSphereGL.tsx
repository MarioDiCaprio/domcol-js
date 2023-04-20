import React from "react";
import {Canvas} from '@react-three/fiber';
import {GLSL_FOR_DOMAIN_COLORING, GLSL_FOR_RIEMANN_SPHERE} from "../../../../data/shaders";
import * as THREE from "three";
import {Vector3, Color, Box3, Euler, Vector2} from "three";
import {OrbitControls} from "@react-three/drei";
import RiemannSphereSettings from "../RiemannSphereSettings/RiemannSphereSettings";
import {OpenGLPlotAlgorithm} from "../../PlotContext";
import TextLookingAtCamera from "../../threeJsTools/TextLookingAtCamera";
import {useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {transformInterval} from "../../utils";


////////////////////////////////////////////////////////////////////////////////////////

function sphereVertexShader(): string {
    return `
        varying vec3 vertexCoord;
        
        void main() {
            vertexCoord = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;
}

function sphereFragmentShader(code: string): string {
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

function domcolVertexShader() {
    return `
        varying vec3 vertexCoord;
        
        void main() {
            vertexCoord = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;
}
function domcolFragmentShader(code: string, opacity: number): string {
    return `
        ${GLSL_FOR_DOMAIN_COLORING}
        
        varying vec3 vertexCoord;
        
        uniform vec2 planeXRange, planeYRange;
        uniform vec2 domainX, domainY;

        ${ code }
        
        float transformInterval(float value, vec2 from, vec2 to) {
            return (to.y - to.x) / (from.y - from.x) * (value - from.x) + to.x;
        }

        void main() {
            vec2 z = vec2(
                transformInterval(vertexCoord.x, planeXRange, domainX),
                transformInterval(vertexCoord.y, planeYRange, domainY)
            );

            gl_FragColor = domain_coloring(plottedFunction(z), colormode.x);
            gl_FragColor.a = ${Number.isInteger(opacity)? opacity + '.' : opacity};
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
const AXIS_NUMBERS_SCALE = new Vector3(0.2, 0.2, 0.2);

const X_AXIS_LABEL_POSITION = new Vector3(BOUNDING_BOX_MAX.x + 0.3, BOUNDING_BOX_MIN.y, BOUNDING_BOX_MIN.z);
const Z_AXIS_LABEL_POSITION = new Vector3(BOUNDING_BOX_MIN.x, BOUNDING_BOX_MIN.y, BOUNDING_BOX_MAX.z + 0.3);

const X_AXIS_POSITION = new Vector3().copy(AXIS_ORIGIN).add(new Vector3(BOUNDING_BOX_HALF_SIZE.x, 0, 0));
const Z_AXIS_POSITION = new Vector3().copy(AXIS_ORIGIN).add(new Vector3(0, 0, BOUNDING_BOX_HALF_SIZE.z));

////////////////////////////////////////////////////////////////////////////////////////


const RiemannSphereGL: React.FC<OpenGLPlotAlgorithm> = ({ code, reload }) => {
    const { riemannSphere } = useSelector((state: RootState) => state.plotSettings);

    const xAxisNumbers: Array<JSX.Element> = [];
    const yAxisNumbers: Array<JSX.Element> = [];

    for (let i=0; i<=5; i++) {
        let dx = BOUNDING_BOX_SIZE.x / 5;
        let num = transformInterval(i*dx, [0, BOUNDING_BOX_SIZE.x], riemannSphere.domainColoring.domainX);
        num = Math.round(num * 100) / 100;
        xAxisNumbers.push(
            <TextLookingAtCamera key={i} scale={AXIS_NUMBERS_SCALE} position={new Vector3(i*dx + BOUNDING_BOX_MIN.x, BOUNDING_BOX_MIN.y, BOUNDING_BOX_MIN.z - 0.5)}>
                { num }
            </TextLookingAtCamera>
        );
    }

    for (let i=0; i<=5; i++) {
        let dz = BOUNDING_BOX_SIZE.z / 5;
        let num = transformInterval(i*dz, [0, BOUNDING_BOX_SIZE.z], riemannSphere.domainColoring.domainY);
        num = Math.round(num * 100) / 100;
        yAxisNumbers.push(
            <TextLookingAtCamera key={i} scale={AXIS_NUMBERS_SCALE} position={new Vector3(BOUNDING_BOX_MIN.x - 0.5, BOUNDING_BOX_MIN.y, i*dz + BOUNDING_BOX_MIN.z)}>
                { num }
            </TextLookingAtCamera>
        );
    }

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
                    <group visible={riemannSphere.domainColoring.visible && riemannSphere.domainColoring.axes}>

                        {/* origin sphere */}
                        <mesh position={AXIS_ORIGIN}>
                            <sphereGeometry args={[0.05, 20, 20]} />
                            <meshBasicMaterial />
                        </mesh>

                        {/* x-axis */}
                        <group visible={riemannSphere.domainColoring.axes}>
                            <mesh position={X_AXIS_POSITION} rotation={new Euler(Math.PI/2, 0, Math.PI/2)}>
                                <cylinderGeometry args={[AXIS_CYLINDER_RADIUS, AXIS_CYLINDER_RADIUS, BOUNDING_BOX_SIZE.x, 20, 3]} />
                                <meshBasicMaterial />
                            </mesh>
                            <TextLookingAtCamera scale={AXIS_LABEL_SCALE} position={X_AXIS_LABEL_POSITION}>
                                Re
                            </TextLookingAtCamera>
                            <group>
                                { xAxisNumbers }
                            </group>
                        </group>

                        {/* z-axis */}
                        <group visible={riemannSphere.domainColoring.axes}>
                            <mesh position={Z_AXIS_POSITION} rotation={new Euler(Math.PI/2, 0, 0)}>
                                <cylinderGeometry args={[AXIS_CYLINDER_RADIUS, AXIS_CYLINDER_RADIUS, BOUNDING_BOX_SIZE.x, 20, 3]} />
                                <meshBasicMaterial />
                            </mesh>
                            <TextLookingAtCamera scale={AXIS_LABEL_SCALE} position={Z_AXIS_LABEL_POSITION}>
                                Im
                            </TextLookingAtCamera>
                            <group>
                                { yAxisNumbers }
                            </group>
                        </group>

                    </group>

                    <box3Helper args={[BOUNDING_BOX, HELPER_COLOR_LIGHT]} />

                    <OrbitControls dampingFactor={0.075} />

                    {/* The Riemann Sphere */}
                    <mesh>
                        <sphereGeometry attach="geometry" args={[1, riemannSphere.sphere.subdivisions, riemannSphere.sphere.subdivisions]} />
                        <shaderMaterial
                            attach="material"
                            needsUpdate={true}
                            vertexShader={ sphereVertexShader() }
                            fragmentShader={ sphereFragmentShader(code) }
                            side={THREE.DoubleSide}
                        />
                    </mesh>

                    {/* Auxiliary Domain Coloring */}
                    <mesh visible={riemannSphere.domainColoring.visible} rotation={[Math.PI/2, 0, 0]} position={[0, BOUNDING_BOX_MIN.y, 0]}>
                        <planeGeometry attach="geometry" args={[BOUNDING_BOX_SIZE.x, BOUNDING_BOX_SIZE.z, riemannSphere.sphere.subdivisions, riemannSphere.sphere.subdivisions]} />
                        <shaderMaterial
                            attach="material"
                            needsUpdate={true}
                            uniformsNeedUpdate={true}
                            vertexShader={ domcolVertexShader() }
                            fragmentShader={ domcolFragmentShader(code, riemannSphere.domainColoring.opacity) }
                            uniforms={{
                                planeXRange:  { value: new Vector2(BOUNDING_BOX_MIN.x, BOUNDING_BOX_MAX.x) },
                                planeYRange:  { value: new Vector2(BOUNDING_BOX_MIN.z, BOUNDING_BOX_MAX.z) },
                                domainX: { value: new Vector2(riemannSphere.domainColoring.domainX[0], riemannSphere.domainColoring.domainX[1]) },
                                domainY: { value: new Vector2(riemannSphere.domainColoring.domainY[0], riemannSphere.domainColoring.domainY[1]) }
                            }}
                            transparent={true}
                            side={THREE.DoubleSide}
                        />
                    </mesh>

                    <gridHelper visible={!riemannSphere.domainColoring.visible} args={[BOUNDING_BOX_SIZE.x, 6, HELPER_COLOR_LIGHT, HELPER_COLOR_DARK]} position={[0, BOUNDING_BOX_MIN.y, 0]} />

                </Canvas>
            </div>

            <RiemannSphereSettings />
        </>

    );
}


export default RiemannSphereGL;