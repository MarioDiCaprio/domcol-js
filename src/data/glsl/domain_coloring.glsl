///////////////////////////////////////////////////////////////////////////////////
// CubeHelixRainbow
///////////////////////////////////////////////////////////////////////////////////

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

// https://github.com/d3/d3-scale-chromatic
vec3 cubehelixRainbow(float t){
    float ts=.25-.25*cos((t-.5)*PI*2.);
    return cubehelix(vec3(
            (360.*t-100.)*TO_RADIANS,
            1.5-1.5*ts,
            (.8-.9*ts))
    );
}


///////////////////////////////////////////////////////////////////////////////////
// Wireframe
///////////////////////////////////////////////////////////////////////////////////

// https://github.com/rreusser/glsl-solid-wireframe
float wireframe(float parameter,float width,float feather){
    float w1=width-feather*.5;
    float d=fwidth(parameter);
    float looped=.5-abs(mod(parameter,1.)-.5);
    return smoothstep(d*w1,d*(w1+feather),looped);
}

float wireframe(vec2 parameter,float width,float feather){
    float w1=width-feather*.5;
    vec2 d=fwidth(parameter);
    vec2 looped=.5-abs(mod(parameter,1.)-.5);
    vec2 a2=smoothstep(d*w1,d*(w1+feather),looped);
    return min(a2.x,a2.y);
}

float wireframe(vec3 parameter,float width,float feather){
    float w1=width-feather*.5;
    vec3 d=fwidth(parameter);
    vec3 looped=.5-abs(mod(parameter,1.)-.5);
    vec3 a3=smoothstep(d*w1,d*(w1+feather),looped);
    return min(min(a3.x,a3.y),a3.z);
}

float wireframe(vec4 parameter,float width,float feather){
    float w1=width-feather*.5;
    vec4 d=fwidth(parameter);
    vec4 looped=.5-abs(mod(parameter,1.)-.5);
    vec4 a4=smoothstep(d*w1,d*(w1+feather),looped);
    return min(min(min(a4.x,a4.y),a4.z),a4.w);
}

float wireframe(float parameter,float width){
    float d=fwidth(parameter);
    float looped=.5-abs(mod(parameter,1.)-.5);
    return smoothstep(d*(width-.5),d*(width+.5),looped);
}

float wireframe(vec2 parameter,float width){
    vec2 d=fwidth(parameter);
    vec2 looped=.5-abs(mod(parameter,1.)-.5);
    vec2 a2=smoothstep(d*(width-.5),d*(width+.5),looped);
    return min(a2.x,a2.y);
}

float wireframe(vec3 parameter,float width){
    vec3 d=fwidth(parameter);
    vec3 looped=.5-abs(mod(parameter,1.)-.5);
    vec3 a3=smoothstep(d*(width-.5),d*(width+.5),looped);
    return min(min(a3.x,a3.y),a3.z);
}

float wireframe(vec4 parameter,float width){
    vec4 d=fwidth(parameter);
    vec4 looped=.5-abs(mod(parameter,1.)-.5);
    vec4 a4=smoothstep(d*(width-.5),d*(width+.5),looped);
    return min(min(min(a4.x,a4.y),a4.z),a4.z);
}


///////////////////////////////////////////////////////////////////////////////////
// Domain Coloring
///////////////////////////////////////////////////////////////////////////////////

vec3 hsv2rgb(vec3 c){
    vec4 K=vec4(1.,2./3.,1./3.,3.);
    vec3 p=abs(fract(c.xxx+K.xyz)*6.-K.www);
    return c.z*mix(K.xxx,clamp(p-K.xxx,0.,1.),c.y);
}

vec4 domcolWithDeco(vec2 z){
    float r=absC(z);
    float arg=argC(z);
    
    float rootDarkening=1.;
    float poleLightening=.85;
    float rectangularGridOpacity=.25;
    float polarGridOpacity=.7;
    float rootDarkeningSharpness=1.;
    float poleLighteningSharpness=30.;
    vec2 polarGridSpacing=vec2(.125,1.);
    vec2 rectGridSpacing=vec2(1.);
    float lineWidth=.6;
    float rectGridStrength=.2;
    float polarGridStrength=.6;
    
    vec2 zpolar=polarC(z);
    float carg=zpolar.x*.15915494309;
    float logmag=log2(zpolar.y)*.5/.69314718056;
    float rootDarkeningFactor=pow(2.,-zpolar.y*rootDarkeningSharpness);
    float rootDarkness=1.-rootDarkening*rootDarkeningFactor;
    float poleLighteningFactor=1.-pow(2.,-zpolar.y/poleLighteningSharpness);
    float poleLightness=1.-poleLightening*poleLighteningFactor;
    float polarGridFactor=wireframe((vec2(carg,logmag)/polarGridSpacing),lineWidth,1.);
    float polarGrid=mix(1.-polarGridStrength,1.,polarGridFactor);
    float rectGridFactor=1.-(1.-poleLighteningFactor)*(1.-wireframe((z/rectGridSpacing),lineWidth,1.));
    float rectGrid=mix(1.-rectGridStrength,1.,rectGridFactor);
    return vec4(
        mix(
            vec3(1.),
            mix(
                vec3(0.),
                mix(vec3(1.),cubehelixRainbow(carg+.25)*rootDarkness,poleLightness),
                mix(rectGrid,max(rectGrid,1.-polarGridFactor),polarGridStrength)
            ),
            polarGrid
        ),
        1.
    );
    
}

vec4 domcolForFractals(vec2 z) {
    /*
    float h = z.x / fractalMaxIter;
    float s = 1.0;
    float v = (z.x < fractalMaxIter)? 1.0 : 0.0;
    vec3 hsv = vec3(h, s, v);
    return vec4(hsv2rgb(hsv), 1.0);
    */
    vec3 a = vec3(0.0, 0.03, 0.39);
    vec3 b = vec3(0.13, 0.42, 0.80);
    vec3 c = vec3(0.93, 1.00, 1.00);
    vec3 d = vec3(1.00, 0.67, 0.00);
    vec3 e = vec3(0.00, 0.01, 0.00);
    vec3 color = vec3(0.0, 0.0, 0.0);
    if (z.x <= 0.16)
        color = mix(a, b, (z.x - 0.00) / (0.16 - 0.00));
    else if (z.x <= 0.42)
        color = mix(b, c, (z.x - 0.16) / (0.42 - 0.16));
    else if (z.x <= 0.6425)
        color = mix(c, d, (z.x - 0.42) / (0.6425 - 0.16));
    else
        color = mix(d, e, (z.x - 0.6425) / (1.00 - 0.6425));
    return vec4(color, 1.0);
}

vec4 domain_coloring(vec2 z, float mode) {
    if (mode == 1.0) {
        return domcolForFractals(z);
    } else {
        return domcolWithDeco(z);
    }
}