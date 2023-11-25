"use client"

import React, {useEffect, useMemo, useRef, useState} from 'react';
import { useGesture } from '@use-gesture/react';
import * as THREE from 'three';
import {Canvas} from '@react-three/fiber';
import {
    autoCalculateDomain,
    Interval,
    scaleInterval,
    useCombinedEditorInputIntoGLSL
} from "@/components/app/(graphing)/utils";
import {GLSL_FOR_DOMAIN_COLORING} from "@/components/app/(graphing)/shaders";
import MouseInfoPanel from "@/components/app/(graphing)/domain-coloring/MouseInfoPanel";


////////////////////////////////////////////////////////////////////////////////////////

const DEFAULT_INTERVAL: Interval = { min: -2, max: 2 };

const VERTEX_SHADER = `
    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

function createFragmentShader(code: string): string {
    return `
        ${GLSL_FOR_DOMAIN_COLORING}
        
        uniform float screenWidth;
        uniform float screenHeight;
        uniform vec2 domainX, domainY;

        ${ code }

        void main() {
            vec2 z = vec2(
                mix(domainX.x, domainX.y, gl_FragCoord.x / screenWidth),
                mix(domainY.x, domainY.y, gl_FragCoord.y / screenHeight)
            );

            gl_FragColor = domcol(plottedFunction(z));
        }
    `;
}

////////////////////////////////////////////////////////////////////////////////////////


/**
 * This component renders an OpenGL mesh using the Three library.
 * The component is a plane upon which is drawn the domain coloring
 * of a given complex function. For more information, refer to the
 * documentation under `DomainColoringOptions`.
 */
const DomainColoringGL: React.FC = () => {
    const code = useCombinedEditorInputIntoGLSL();
    const [requiresReload, setRequiresReload] = useState<boolean>(false);

    // force reload when code changes are detected
    useEffect(() => {
        setRequiresReload(true);
        setTimeout(() => {
            setRequiresReload(false);
        }, 200);
    }, [code]);

    ////////////////////////////////////////////////////////////////////////////////////////
    
    // Domain to display, both on the x- and y-axis.
    const [{min: minX, max: maxX}, setDomainX] = useState<Interval>(DEFAULT_INTERVAL);
    const [{min: minY, max: maxY}, setDomainY] = useState<Interval>(DEFAULT_INTERVAL);

    // screen size
    const [{ width, height }, setScreenSize] = useState<{width: number, height: number}>({width: 0, height: 0});

    /** Reference to the <div> wrapper */
    const containerRef = useRef<HTMLDivElement>(null);
    /** Reference to the shader material */
    const shaderRef = useRef<JSX.IntrinsicElements['shaderMaterial']>();

    ////////////////////////////////////////////////////////////////////////////////////////

    // Initial uniforms for the shader material.
    // Ignored after first render for interactivity purposes!
    // To access them later on, access them directly from the shader material.
    const uniforms = useMemo<THREE.ShaderMaterial['uniforms']>(() => ({
        screenWidth:  { value: width  },
        screenHeight: { value: height },
        domainX: { value: new THREE.Vector2(minX, maxX) },
        domainY: { value: new THREE.Vector2(minY, maxY) }
    }), [width, height, minX, maxX, minY, maxY]);
    
    const [infoPanelDomain, setInfoPanelDomain] = useState<{ x: Interval, y: Interval }>({ x: DEFAULT_INTERVAL, y: DEFAULT_INTERVAL });
    useEffect(() => {
        setInterval(() => {
            if (shaderRef.current?.uniforms) {
                let domX: THREE.Vector2 = shaderRef.current.uniforms['domainX'].value;
                let domY: THREE.Vector2  = shaderRef.current.uniforms['domainY'].value;
                setInfoPanelDomain({
                    x: { min: domX.x, max: domX.y },
                    y: { min: domY.x, max: domY.y }
                });
            }
        }, 200);
    }, []);

    /** Sets the shader material's uniforms */
    function setUniformDomain(domainX: Interval, domainY: Interval) {
        if (shaderRef.current?.uniforms) {
            let domX: THREE.Vector2 = shaderRef.current.uniforms['domainX'].value;
            let domY: THREE.Vector2  = shaderRef.current.uniforms['domainY'].value;
            domX.x = domainX.min;
            domX.y = domainX.max;
            domY.x = domainY.min;
            domY.y = domainY.max;
        }
    }

    ////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Calculates the viewport's dimensions in pixels.
     * On the server (=SSR), returns 0x0 dimensions.
     */
    function calculateScreenSize() {
        if (typeof window !== 'undefined') {
            return { width: window.innerWidth, height: window.innerHeight }
        }
        return { width: 0, height: 0 }
    }

    // update screen size + domain on every reload
    useEffect(() => {
        setScreenSize(calculateScreenSize());
        let {x: domainX, y: domainY} = autoCalculateDomain({width, height}, DEFAULT_INTERVAL, DEFAULT_INTERVAL);
        setDomainX(domainX);
        setDomainY(domainY);
    }, [requiresReload]);

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
                let fac = (wheelProps.event.deltaY > 0)? 1.075 : 0.925;
                let scaledX = scaleInterval(fac, {min: domX.x, max: domX.y});
                let scaledY = scaleInterval(fac, {min: domY.x, max: domY.y});
                setUniformDomain(scaledX, scaledY);
            }
        },
        onPinch: pinchProps => {
            if (shaderRef.current?.uniforms) {
                let domX = shaderRef.current.uniforms['domainX'].value;
                let domY = shaderRef.current.uniforms['domainY'].value;
                let [pinchDX, pinchDY] = pinchProps.delta;
                let fac = (pinchDX + pinchDY > 0)? 1.075 : 0.925;
                let scaledX = scaleInterval(fac, {min: domX.x, max: domX.y});
                let scaledY = scaleInterval(fac, {min: domY.x, max: domY.y});
                setUniformDomain(scaledX, scaledY);
            }
        }
    }, { target: containerRef });

    // if a reload is needed (which it is, every time a re-render is needed)
    // briefly return nothing. Unmounting the canvas and then remounting it
    // forces it to reload.
    // TODO Find a better method, which is unknown as for now!
    if (requiresReload) {
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
            <MouseInfoPanel screen={{ width, height }} domain={infoPanelDomain} />
        </>

    );
}

export default DomainColoringGL;