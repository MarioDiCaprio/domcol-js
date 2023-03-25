import React, {useEffect, useMemo, useRef, useState} from 'react';
import { useGesture } from '@use-gesture/react';
import { loadDomainColoringImports } from '../../../data/shaders';
import * as THREE from 'three';
import {Canvas} from '@react-three/fiber';
import PlotInfoPanel from "../PlotInfoPanel/PlotInfoPanel";
import {autoCalculateDomain, Interval, Point2D, scaleInterval} from "../utils";
import {ShaderMaterial} from "three";


////////////////////////////////////////////////////////////////////////////////////////

const DOMAIN_COLORING_IMPORTS = loadDomainColoringImports();

const VERTEX_SHADER = `
    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

function createFragmentShader(code: string): string {
    return `
        ${DOMAIN_COLORING_IMPORTS}
        
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
    `;
}

////////////////////////////////////////////////////////////////////////////////////////


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
    reload: boolean;
}


/**
 * This component renders an OpenGL mesh using the Three library.
 * The component is a plane upon which is drawn the domain coloring
 * of a given complex function. For more information, refer to the
 * documentation under `DomainColoringOptions`.
 */
const DomcolGL: React.FC<DomColGLProps> = ({ code, reload }) => {
    // Domain to display, both on the x- and y-axis.
    const [[minX, maxX], setDomainX] = useState<Interval>([0, 0]);
    const [[minY, maxY], setDomainY] = useState<Interval>([0, 0]);

    // screen size
    const [[width, height], setScreenSize] = useState<Point2D>([0, 0]);

    /** Reference to the <div> wrapper */
    const containerRef = useRef<HTMLDivElement>(null);
    /** Reference to the shader material */
    const shaderRef = useRef<JSX.IntrinsicElements['shaderMaterial']>();

    ////////////////////////////////////////////////////////////////////////////////////////

    const uniforms = useMemo<ShaderMaterial['uniforms']>(() => ({
        screenWidth:  { value: width  },
        screenHeight: { value: height },
        domainX: { value: new THREE.Vector2(minX, maxX) },
        domainY: { value: new THREE.Vector2(minY, maxY) }
    }), [width, height, minX, maxX, minY, maxY]);

    const [[uniformsDomainX, uniformsDomainY], setUniformsDomain] = useState<[Interval, Interval]>([[minX, maxX], [minY, maxY]]);

    useEffect(() => {
        setInterval(() => {
            if (shaderRef.current?.uniforms) {
                let domX: THREE.Vector2 = shaderRef.current.uniforms['domainX'].value;
                let domY: THREE.Vector2  = shaderRef.current.uniforms['domainY'].value;
                setUniformsDomain([
                    [domX.x, domX.y], [domY.x, domY.y]
                ]);
            }
        }, 200);
    }, []);

    /** Sets the shader material's uniforms */
    function setUniformDomain(domainX: Interval, domainY: Interval) {
        if (shaderRef.current?.uniforms) {
            let domX: THREE.Vector2 = shaderRef.current.uniforms['domainX'].value;
            let domY: THREE.Vector2  = shaderRef.current.uniforms['domainY'].value;
            domX.x = domainX[0];
            domX.y = domainX[1]
            domY.x = domainY[0];
            domY.y = domainY[1];
        }
    }

    ////////////////////////////////////////////////////////////////////////////////////////

    function calculateScreenSize(): Point2D {
        return [
            window.innerWidth ?? 0,
            window.innerHeight ?? 0
        ];
    }

    // update screen size + domain on every reload
    useEffect(() => {
        setScreenSize(calculateScreenSize());
        let [domainX, domainY] = autoCalculateDomain([width, height], [-2, 2], [-2, 2]);
        setDomainX(domainX);
        setDomainY(domainY);
    }, [reload]);

    ////////////////////////////////////////////////////////////////////////////////////////

    // Gesture events to do things such as moving and zooming
    useGesture({
        /** Drags the plane around and 'moves' the domain of the plot */
        onDrag: dragProps => {
            if (shaderRef.current?.uniforms) {
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
            if (shaderRef.current?.uniforms) {
                let domX = shaderRef.current.uniforms['domainX'].value;
                let domY = shaderRef.current.uniforms['domainY'].value;
                let fac = (wheelProps.event.deltaY > 0)? 1.15 : 0.85;
                let scaledX = scaleInterval(fac, [domX.x, domX.y]);
                let scaledY = scaleInterval(fac, [domY.x, domY.y]);
                setUniformDomain(scaledX, scaledY);
            }
        },
        onPinch: pinchProps => {
            if (shaderRef.current?.uniforms) {
                let domX = shaderRef.current.uniforms['domainX'].value;
                let domY = shaderRef.current.uniforms['domainY'].value;
                let [pinchDX, pinchDY] = pinchProps.delta;
                let fac = (pinchDX + pinchDY > 0)? 1.15 : 0.85;
                let scaledX = scaleInterval(fac, [domX.x, domX.y]);
                let scaledY = scaleInterval(fac, [domY.x, domY.y]);
                setUniformDomain(scaledX, scaledY);
            }
        }
    }, { target: containerRef });

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
            <div style={{ width: '100%', height: '100%', touchAction: 'none' }} ref={containerRef}>
                <Canvas style={{ width: '100%', height: '100%', touchAction: 'none' }}>
                    <mesh
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        scale={[1, 1, 1]}
                    >
                        <planeGeometry attach="geometry" args={[100, 100]} />
                        <shaderMaterial
                            ref={shaderRef as any}
                            attach="material"
                            needsUpdate={true}
                            uniformsNeedUpdate={true}
                            uniforms={uniforms}
                            vertexShader={VERTEX_SHADER}
                            fragmentShader={ createFragmentShader(code) }
                            side={THREE.DoubleSide}
                        />
                    </mesh>
                </Canvas>
            </div>


            <PlotInfoPanel
                screenWidth={width}
                screenHeight={height}
                domainX={uniformsDomainX}
                domainY={uniformsDomainY}
            />
        </>

    );
}

export default DomcolGL;