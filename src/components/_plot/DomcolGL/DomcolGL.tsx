import React, { useRef } from 'react';
import { useGesture } from '@use-gesture/react';
import { loadDomainColoringImports } from '../../../data/shaders';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';


/**
 * This interface represents all options for domain coloring.
 */
export interface DomColGLProps {
    /** The GLSL code that contains the function to plot. This function
     * has to be called `plottedFunction`, which accepts a `vec2` as an
     * argument and returns a `vec2` as an output.
     */
    code: string;
    /** Whether to force a reload onto the canvas. When set to `true`,
     * the canvas will not load, but will show a loading screen instead.
     */
    reload?: boolean;
    /** The width of the mesh */
    width?: number;
    /** The height of the mesh */
    height?: number;
    /** The domain to display */
    domain?: {
        /** The x-domain (the real numbers) */
        x: {
            /** The minimum x-value */
            min: number,
            /** The maximum x-value */
            max: number
        },
        /** The y-domain (the imaginary numbers) */
        y: {
            /** The minimum y-value */
            min: number,
            /** The maximum y-value */
            max: number
        }
    };
}

/**
 * This component renders an OpenGL mesh using the Three library.
 * The component is a plane upon which is drawn the domain coloring
 * of a given complex function. For more information, refer to the
 * documentation under `DomainColoringOptions`.
 * @param param0 The settings for this domain coloring mesh
 * @returns The mesh
 * @see DomColGLProps
 */
const DomcolGL: React.FC<DomColGLProps> = ({
                                               code,
                                               reload = false,
                                               width = 600,
                                               height = 600,
                                               domain = {
                                                   x: { min: -2, max: 2 },
                                                   y: { min: -2, max: 2 }
                                               }
                                           }) => {

    // imports to prepend to the fragment shader
    const domcolImports = loadDomainColoringImports();
    const ref = useRef(null);
    // reference to the shader material
    const shaderRef = useRef<JSX.IntrinsicElements['shaderMaterial']>();

    // Gesture events to do things such as moving and zooming  */
    useGesture({
        /** Drags the plane around and 'moves' the domain of the plot */
        onDrag: dragProps => {
            if (shaderRef.current !== undefined && shaderRef.current.uniforms !== undefined) {
                let [x, y] = dragProps.delta;
                let domX = shaderRef.current.uniforms['domainX'].value;
                let domY = shaderRef.current.uniforms['domainY'].value;
                let offsetX = x / width * (domX.y - domX.x);
                let offsetY = y / height * (domY.y - domY.x);
                domX.x -= offsetX;
                // noinspection JSSuspiciousNameCombination
                domX.y -= offsetX;
                // noinspection JSSuspiciousNameCombination
                domY.x += offsetY;
                domY.y += offsetY;
            }
        },
        /** Zooms the plot */
        onWheel: wheelProps => {
            if (shaderRef.current === undefined || shaderRef.current.uniforms === undefined) {
                return;
            }
            let domX = shaderRef.current.uniforms['domainX'].value;
            let domY = shaderRef.current.uniforms['domainY'].value;
            let deltaX = domX.y - domX.x;
            let deltaY = domY.y - domY.x;
            let fac = 0.0015 * wheelProps.event.deltaY * (deltaX + deltaY) / 2;
            domX.x -= fac;
            domX.y += fac;
            domY.x -= fac;
            domY.y += fac;
        },
        onPinch: pinchProps => {
            if (shaderRef.current === undefined || shaderRef.current.uniforms === undefined) {
                return;
            }
            let domX = shaderRef.current.uniforms['domainX'].value;
            let domY = shaderRef.current.uniforms['domainY'].value;
            let deltaX = domX.y - domX.x;
            let deltaY = domY.y - domY.x;
            let [pinchDX, pinchDY] = pinchProps.delta;
            let fac = 0.01 * -(pinchDX + pinchDY) * (deltaX + deltaY) / 2;
            domX.x -= fac;
            domX.y += fac;
            domY.x -= fac;
            domY.y += fac;
        }
    }, { target: ref });

    // if imports not yet loaded: return loading screen
    if (domcolImports === undefined || reload) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-grow text-primary" style={{ marginTop: 350, width: 100, height: 100 }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    // if loading imports fails: return error screen
    if (domcolImports === null) {
        return (
            <div className="d-flex justify-content-center text-danger" style={{ marginTop: 350 }}>
                <h1>Error loading shaders</h1>
            </div>
        );
    }

    const vertexShader =
        `
        void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
        `;

    const fragmentShader =
        `
        ${domcolImports}
        
        uniform float screenWidth;
        uniform float screenHeight;
        uniform vec2 domainX, domainY;

        ${ code }

        void main() {
            vec2 z = vec2(
                mix(domainX.x, domainX.y, gl_FragCoord.x / screenWidth),
                mix(domainY.x, domainY.y, gl_FragCoord.y / screenHeight)
            );

            gl_FragColor = domcol(plottedFunction(z), colormode.x);
        }
        `
    ;

    return (
        <div ref={ref} style={{ width: '100%', height: '100%', touchAction: 'none' }} data-test="canvas">
            <Canvas style={{ width: '100%', height: '100%' }}>
                {/* @ts-ignore */}
                <mesh
                    position={[0, 0, 0]}
                    rotation={[0, 0, 0]} scale={[1, 1, 1]}
                >
                    <planeBufferGeometry attach="geometry" args={[100, 100]} />
                    <shaderMaterial
                        ref={shaderRef as any}
                        attach="material"
                        needsUpdate={true}
                        uniforms={{
                            screenWidth:  { value: width  },
                            screenHeight: { value: height },
                            domainX: { value: new THREE.Vector2(domain.x.min, domain.x.max) },
                            domainY: { value: new THREE.Vector2(domain.y.min, domain.y.max) }
                        }}
                        vertexShader={ vertexShader }
                        fragmentShader={ fragmentShader }
                        side={THREE.DoubleSide}
                    />
                </mesh>
            </Canvas>
        </div>
    );
}

export default DomcolGL;