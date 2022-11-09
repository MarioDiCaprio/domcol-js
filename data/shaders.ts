// @ts-ignore
import domaincoloring from "!!raw-loader!glslify-loader!./glsl/domaincoloring.glsl";



/**
 * This function imports all shaders used with OpenGL for the domain
 * coloring. The imports are then returned as one string. The imports
 * include all mathematical functions (ported to OpenGL) and other
 * functionalities for the corresponding shaders.
 * @returns The fetched imports
 */
export function loadDomainColoringImports(): string {
    return domaincoloring;
}
