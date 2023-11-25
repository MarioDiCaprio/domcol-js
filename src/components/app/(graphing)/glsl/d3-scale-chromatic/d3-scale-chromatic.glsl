// https://github.com/d3/d3-scale-chromatic
vec3 cubehelixRainbow(float t){
    float ts=.25-.25*cos((t-.5)*PI*2.);
    return cubehelix(vec3(
            (360.*t-100.)*TO_RADIANS,
            1.5-1.5*ts,
            (.8-.9*ts))
    );
}