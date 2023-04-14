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