import { useState } from 'react';
import {CLIENT_URL} from "../variables";


const SHADER_FILE_NAME = 'glsl/domaincoloring.glsl';

/**
 * This React hook imports all shaders used with OpenGL for the domain
 * coloring. There are three possible values for this hook:
 * - `undefined`: The shaders are being fetched and are not loaded yet
 * - `string`: The shader was fetched successfully
 * - `null`: The shader failed to load
 * @returns The fetched shader
 */
export function useDomainColoringImports(): string | null | undefined {
    const [data, setData] = useState<string|null|undefined>(undefined);

    fetch(`${CLIENT_URL}/${SHADER_FILE_NAME}`)
        .then(response => response.text())
        .then(text => {
            setData(text);
        })
        .catch(error => {
            console.error(error);
            setData(null);
        });

    return data;
}
