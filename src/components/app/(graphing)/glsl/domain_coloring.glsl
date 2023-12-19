///////////////////////////////////////////////////////////////////////////////////
// Domain Coloring
///////////////////////////////////////////////////////////////////////////////////

vec3 hsv2rgb(vec3 c){
    vec4 K=vec4(1.,2./3.,1./3.,3.);
    vec3 p=abs(fract(c.xxx+K.xyz)*6.-K.www);
    return c.z*mix(K.xxx,clamp(p-K.xxx,0.,1.),c.y);
}

vec4 domcol(vec2 z){
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
    float polarGrid = showLightGridLines? mix(1.-polarGridStrength,1.,polarGridFactor) : 1.;
    float rectGridFactor=1.-(1.-poleLighteningFactor)*(1.-wireframe((z/rectGridSpacing),lineWidth,1.));
    float rectGrid = showDarkGridLines? mix(1.-rectGridStrength,1.,rectGridFactor) : 1.;
    
    if (isMinimalThemeEnabled) {
        return vec4(
            mix(
                vec3(1.),
                mix(
                    vec3(0.),
                    mix(vec3(1.),cubehelixRainbow(carg+.25),poleLightness),
                    mix(rectGrid,max(rectGrid,1.-polarGridFactor),polarGridStrength)
                ),
                mix(
                    .2,
                    1.-polarGridFactor,
                    showDarkGridLines? rectGridFactor + 1. - polarGridFactor : 1.
                )
            ),
            1.
        );
    }
    
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