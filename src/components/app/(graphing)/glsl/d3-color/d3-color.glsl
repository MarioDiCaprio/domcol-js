// https://github.com/d3/d3-color
vec3 cubehelix(vec3 c){
    float a=c.y*c.z*(1.-c.z);
    float cosh=cos(c.x+PI/2.);
    float sinh=sin(c.x+PI/2.);
    return vec3(
        (c.z+a*(1.78277*sinh-.14861*cosh)),
        (c.z-a*(.29227*cosh+.90649*sinh)),
        (c.z+a*(1.97294*cosh))
    );
}