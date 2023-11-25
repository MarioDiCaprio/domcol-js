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
