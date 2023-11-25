// stereographic projection of the extended complex plane onto the
// unit sphere in R^3. Accepts coords of a point on the sphere and
// returns the corresponding color

vec2 riemann_sphere(vec3 coords) {
    float real = coords.x / (1.0 - coords.y);
    float imag = coords.z / (1.0 - coords.y);
    return vec2(real, imag);
}