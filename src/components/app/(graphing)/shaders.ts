// @ts-ignore
import cube_helix from "!!raw-loader!glslify-loader!./glsl/d3-color/d3-color.glsl";
// @ts-ignore
import cube_helix_rainbow from "!!raw-loader!glslify-loader!./glsl/d3-scale-chromatic/d3-scale-chromatic.glsl";

// @ts-ignore
import glsl_solid_wireframe from "!!raw-loader!glslify-loader!./glsl/glsl-solid-wireframe/glsl-solid-wireframe.glsl";

// @ts-ignore
import math from "!!raw-loader!glslify-loader!./glsl/math.glsl";
// @ts-ignore
import domain_coloring from "!!raw-loader!glslify-loader!./glsl/domain_coloring.glsl";
// @ts-ignore
import riemann_sphere from "!!raw-loader!glslify-loader!./glsl/riemann_sphere.glsl";


interface GLSLImportSettings {
    math?: boolean;
    domainColoring?: boolean;
    riemannSphere?: boolean;
}

/**
 * This function imports all shaders used with OpenGL for the domain
 * coloring. The imports are then returned as one string. The imports
 * include all mathematical functions (ported to OpenGL) and other
 * functionalities for the corresponding shaders.
 * @returns The fetched imports
 */
function loadImportsForGLSL(settings?: GLSLImportSettings): string {
    return `
        precision highp float;
        
        ${math}
        
        ${cube_helix}
        
        ${cube_helix_rainbow}
        
        ${glsl_solid_wireframe}
        
        ${settings?.domainColoring? domain_coloring : ''}
        
        ${settings?.riemannSphere? riemann_sphere : ''}
    `;
}

export const GLSL_FOR_DOMAIN_COLORING = loadImportsForGLSL({
    math: true,
    domainColoring: true
});

export const GLSL_FOR_RIEMANN_SPHERE = loadImportsForGLSL({
    math: true,
    domainColoring: true,
    riemannSphere: true
});