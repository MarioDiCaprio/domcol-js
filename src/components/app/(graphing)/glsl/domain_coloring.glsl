///////////////////////////////////////////////////////////////////////////////////
// Domain Coloring
///////////////////////////////////////////////////////////////////////////////////

vec3 hsv2rgb(vec3 c){
    vec4 K=vec4(1.,2./3.,1./3.,3.);
    vec3 p=abs(fract(c.xxx+K.xyz)*6.-K.www);
    return c.z*mix(K.xxx,clamp(p-K.xxx,0.,1.),c.y);
}

vec4 domcol(vec2 z){
    ////////////////////////////////////////////////////////////////////////////////
    /// These can be customized!
    ////////////////////////////////////////////////////////////////////////////////
    
    // Factor for how big roots (= zeros) are drawn. High = large, Low = small.
    float rootDarkening = 1.0;
    
    // Threshold for how poles (= points at infinity) are colored. When low, sufficently large magnitudes are colored white.
    float poleLightening = 0.85;
    
    // How "smooth" roots are colored. High = sharp, Low = smooth.
    float rootDarkeningSharpness = 1.0;
    
    // How "smooth" poles are colored. High = sharp, Low = smooth.
    float poleLighteningSharpness = 30.0;
    
    // spacing for light grid lines.
    // x: Draws a grid whenever arg(z) = PI / x. E.g: chose x = 8.0 to draw a grid every time arg(z) shifts by 45deg.
    // y: Draws a grid whenever |z| = y^n for integer n. E.g: Chose y = 2.0 to draw a grid every time z doubles in magnitude.
    vec2 polarGridSpacing = vec2(8.0, 2.0);
    
    // spacing for dark grid lines.
    // x: Draws a grid whenever Re(z) / x is integral
    // y: Draws a grid whenever Im(z) / y is integral
    vec2 rectGridSpacing = vec2(1.0, 1.0);
    
    // width of all grid lines (both dark and light)
    float lineWidth = 0.6;
    
    // opacity of dark grid lines
    float rectGridStrength = 0.2;
    
    // opacity of light grid lines
    float polarGridStrength = 0.6;
    
    ////////////////////////////////////////////////////////////////////////////////
    /// Calculations. These should NOT be customized!
    ////////////////////////////////////////////////////////////////////////////////
    
    vec2 zpolar = polarC(z); // zpolar = vec2(arg(z), |z|)
    float carg = zpolar.x * 0.15915494309; // carg = arg(z) / 2PI
    float logmag = log2(zpolar.y) / log2(polarGridSpacing.y); // Used to check whether |z| = a^n (for light grid lines)
    float rootDarkeningFactor = pow(2.0, -zpolar.y * rootDarkeningSharpness);
    float rootDarkness = 1.0 - rootDarkening * rootDarkeningFactor;
    float poleLighteningFactor = 1.0 - pow(2.0, -zpolar.y / poleLighteningSharpness);
    float poleLightness = 1.0 - poleLightening * poleLighteningFactor;
    float polarGridFactor = wireframe(vec2(carg * polarGridSpacing.x, logmag), lineWidth, 1.0);
    float polarGrid = showLightGridLines? mix(1.0 - polarGridStrength, 1.0, polarGridFactor) : 1.0;
    float rectGridFactor = 1.0 - (1.0 - poleLighteningFactor) * (1.0 - wireframe(z / rectGridSpacing, lineWidth, 1.0));
    float rectGrid = showDarkGridLines? mix(1.0 - rectGridStrength, 1.0, rectGridFactor) : 1.0;
    
    if (isMinimalThemeEnabled) {
        return vec4(
            mix(
                vec3(1.0),
                mix(
                    vec3(0.0),
                    mix(vec3(1.0), cubehelixRainbow(carg + 0.25), poleLightness),
                    mix(rectGrid, max(rectGrid, 1.0 - polarGridFactor), polarGridStrength)
                ),
                mix(
                    rectGridStrength,
                    1.0 - polarGridFactor,
                    showDarkGridLines? (rectGridFactor + 1.0 - polarGridFactor) : 1.0
                )
            ),
            1.0
        );
    }
    
    return vec4(
        mix(
            vec3(1.0),
            mix(
                vec3(0.0),
                mix(vec3(1.0), cubehelixRainbow(carg + 0.25) * rootDarkness, poleLightness),
                mix(rectGrid, max(rectGrid, 1.0 - polarGridFactor), polarGridStrength)
            ),
            polarGrid
        ),
        1.0
    );
    
}