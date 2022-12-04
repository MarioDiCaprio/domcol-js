precision highp float;

///////////////////////////////////////////////////////////////////////////////////
// Complex Math
///////////////////////////////////////////////////////////////////////////////////

#define TO_RADIANS .01745329251
#define PI 3.14159265359
#define argC(z)atan(z.y,z.x)
#define absC(z)length(z)

float E=2.71828182845;

vec2 e_VAR = vec2(2.71828182845, 0.0);
vec2 pi_VAR = vec2(3.14159265359, 0.0);
vec2 i_VAR = vec2(0.0, 1.0);

float fractalMaxIter = 1000.0;

vec2 addC(vec2 a,vec2 b){
    return vec2(a.x+b.x,a.y+b.y);
}

vec2 subtractC(vec2 a,vec2 b){
    return vec2(a.x-b.x,a.y-b.y);
}

vec2 multiplyC(vec2 a,vec2 b){
    return vec2(a.x*b.x-a.y*b.y,a.y*b.x+a.x*b.y);
}

vec2 divideC(vec2 a,vec2 b){
    float denom=b.x*b.x+b.y*b.y;
    return vec2(
        (a.x*b.x+a.y*b.y)/denom,
        (a.y*b.x-a.x*b.y)/denom
    );
}

float hypot(vec2 z){
    float t;
    float x=abs(z.x);
    float y=abs(z.y);
    t=min(x,y);
    x=max(x,y);
    t=t/x;
    return x*sqrt(1.+t*t);
}

vec2 polarC(vec2 z){
    return vec2(
        atan(z.y,z.x),
        hypot(z)
    );
}

vec2 sinC(vec2 z){
    return vec2(sin(z.x)*cosh(z.y),cos(z.x)*sinh(z.y));
}

vec2 cosC(vec2 z){
    return vec2(cos(z.x)*cosh(z.y),sin(z.x)*sinh(z.y));
}

vec2 tanC(vec2 z){
    return divideC(sinC(z),cosC(z));
}

vec2 cotC(vec2 z){
    return divideC(vec2(1.,0.),tanC(z));
}

vec2 secC(vec2 z){
    return divideC(vec2(1.,0.),cosC(z));
}

vec2 cscC(vec2 z){
    return divideC(vec2(1.,0.),sinC(z));
}

vec2 cisC(vec2 z){
    return addC(
        cosC(z),
        multiplyC(vec2(0,1),sinC(z))
    );
}

vec2 powC(vec2 a,vec2 b){
    float alpha=argC(a);
    float r=absC(a);
    
    vec2 p1=multiplyC(
        vec2(pow(r,b.x),0.),
        cisC(vec2(alpha*b.x,0.))
    );
    
    vec2 p2=multiplyC(
        cisC(vec2(b.y*log(r),0.)),
        vec2(pow(E,-1.*alpha*b.y),0.)
    );
    
    return multiplyC(p1,p2);
}

vec2 sqrtC(vec2 z){
    return powC(z,vec2(.5,0.));
}

vec2 sqC(vec2 z){
    return powC(z,vec2(2.,0.));
}

vec2 sinhC(vec2 z){
    return divideC(
        subtractC(
            powC(vec2(E,0.),z),
            powC(vec2(E,0.),multiplyC(vec2(-1.,0.),z))
        ),vec2(2.,0.)
    );
}

vec2 coshC(vec2 z){
    return divideC(
        addC(
            powC(vec2(E,0.),z),
            powC(vec2(E,0.),multiplyC(vec2(-1.,0.),z))
        ),vec2(2.,0.)
    );
}

vec2 tanhC(vec2 z){
    return divideC(
        sinhC(z),coshC(z)
    );
}

vec2 lnC(vec2 z){
    return vec2(
        log(absC(z)),
        argC(z)
    );
}

vec2 logC(vec2 z){
    return divideC(
        lnC(z),
        lnC(vec2(10.,0.))
    );
}

vec2 log2C(vec2 z){
    return divideC(
        lnC(z),
        lnC(vec2(2.,0.))
    );
}

vec2 ReC(vec2 z){
    return vec2(z.x,0.);
}

vec2 ImC(vec2 z){
    return vec2(0.,z.y);
}

bool isInBounds(float x,float min,float max){
    return(x>=min)&&(x<=max);
}

vec2 Mandelbrot(vec2 z_VAR) {
    float trapPoint = 1e20;
    vec2 z = vec2(0.0, 0.0);
    float i = 0.0;
    while (absC(z) <= 2.0 && i < fractalMaxIter) {
        z = addC(powC(z, vec2(2.0, 0.0)), z_VAR);
        i += 1.0;
        trapPoint = min( trapPoint, absC(z) );
    }
    return vec2(1.5 * trapPoint, i);
}


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

vec4 domcol(vec2 z, float mode) {
    if (mode == 1.0) {
        return domcolForFractals(z);
    } else {
        return domcolWithDeco(z);
    }
}
