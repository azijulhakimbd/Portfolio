export const FRAGMENT_SHADER = `
precision highp float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

/*
  Theme:
  0.0 = dark
  1.0 = light
*/
uniform float u_theme;


/* -------------------------------------------------------
   Utility: pseudo-random noise
------------------------------------------------------- */

float random(vec2 st) {
  return fract(
    sin(
      dot(
        st,
        vec2(12.9898, 78.233)
      )
    ) * 43758.5453123
  );
}


/* -------------------------------------------------------
   Utility: smooth noise
------------------------------------------------------- */

float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);

  f = f * f * (3.0 - 2.0 * f);

  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  return mix(
    mix(a, b, f.x),
    mix(c, d, f.x),
    f.y
  );
}


/* -------------------------------------------------------
   Fractal noise
------------------------------------------------------- */

float fbm(vec2 st) {
  float value = 0.0;
  float amplitude = 0.5;

  for (int i = 0; i < 5; i++) {
    value += amplitude * noise(st);

    st *= 2.0;
    amplitude *= 0.5;
  }

  return value;
}


/* -------------------------------------------------------
   Aurora layer
------------------------------------------------------- */

float auroraLayer(
  vec2 uv,
  float speed,
  float frequency,
  float offset
) {
  float wave =
    sin(
      uv.x * frequency
      + u_time * speed
      + offset
    );

  float organic =
    fbm(
      uv * 2.2
      + vec2(
        u_time * 0.04,
        offset
      )
    );

  float curve =
    wave * 0.15
    + organic * 0.18;

  float distanceFromCurve =
    abs(
      uv.y
      - 0.5
      - curve
    );

  return smoothstep(
    0.32,
    0.0,
    distanceFromCurve
  );
}


/* -------------------------------------------------------
   Main fragment shader
------------------------------------------------------- */

void main() {

  /* -----------------------------------------------
     1. Normalize screen coordinates
  ----------------------------------------------- */

  vec2 uv =
    gl_FragCoord.xy
    / u_resolution.xy;

  vec2 centered =
    uv - 0.5;

  centered.x *=
    u_resolution.x
    / u_resolution.y;


  /* -----------------------------------------------
     2. Mouse influence
  ----------------------------------------------- */

  vec2 mouse =
    u_mouse
    / u_resolution.xy;

  vec2 mouseOffset =
    mouse - 0.5;

  centered.x +=
    mouseOffset.x * 0.12;

  centered.y +=
    mouseOffset.y * 0.06;


  /* -----------------------------------------------
     3. Organic background movement
  ----------------------------------------------- */

  float backgroundNoise =
    fbm(
      centered * 1.8
      + vec2(
        u_time * 0.025,
        -u_time * 0.018
      )
    );


  /* -----------------------------------------------
     4. Aurora ribbons
  ----------------------------------------------- */

  float aurora1 =
    auroraLayer(
      centered,
      0.25,
      3.2,
      0.0
    );

  float aurora2 =
    auroraLayer(
      centered + vec2(0.0, 0.18),
      -0.18,
      4.8,
      2.0
    );

  float aurora3 =
    auroraLayer(
      centered + vec2(0.0, -0.22),
      0.12,
      6.2,
      4.0
    );


  /* -----------------------------------------------
     5. DARK THEME PALETTE
  ----------------------------------------------- */

  vec3 darkBackground =
    vec3(
      0.005,
      0.012,
      0.025
    );

  vec3 darkEmerald =
    vec3(
      0.0,
      0.85,
      0.55
    );

  vec3 darkCyan =
    vec3(
      0.0,
      0.65,
      0.95
    );

  vec3 darkViolet =
    vec3(
      0.35,
      0.25,
      0.85
    );


  /* -----------------------------------------------
     6. LIGHT THEME PALETTE

     The colors are intentionally darker than the
     dark-mode palette so they remain visible against
     a white/light background.
  ----------------------------------------------- */

  vec3 lightBackground =
    vec3(
      0.965,
      0.985,
      0.975
    );

  vec3 lightEmerald =
    vec3(
      0.0,
      0.42,
      0.24
    );

  vec3 lightCyan =
    vec3(
      0.0,
      0.38,
      0.55
    );

  vec3 lightViolet =
    vec3(
      0.28,
      0.20,
      0.62
    );


  /* -----------------------------------------------
     7. THEME COLOR MIXING

     u_theme:
       0.0 -> dark
       1.0 -> light
  ----------------------------------------------- */

  vec3 deepBackground =
    mix(
      darkBackground,
      lightBackground,
      u_theme
    );

  vec3 emerald =
    mix(
      darkEmerald,
      lightEmerald,
      u_theme
    );

  vec3 cyan =
    mix(
      darkCyan,
      lightCyan,
      u_theme
    );

  vec3 violet =
    mix(
      darkViolet,
      lightViolet,
      u_theme
    );


  /* -----------------------------------------------
     8. Combine aurora layers
  ----------------------------------------------- */

  float totalAurora =
    aurora1 * 0.95
    + aurora2 * 0.65
    + aurora3 * 0.45;


  /* -----------------------------------------------
     9. Base color
  ----------------------------------------------- */

  vec3 color =
    deepBackground;


  /* -----------------------------------------------
     10. Aurora colors

     Light mode uses slightly lower intensity to
     preserve readability.
  ----------------------------------------------- */

  float auroraIntensity =
    mix(
      1.0,
      0.62,
      u_theme
    );

  color +=
    emerald
    * aurora1
    * 0.48
    * auroraIntensity;

  color +=
    cyan
    * aurora2
    * 0.42
    * auroraIntensity;

  color +=
    violet
    * aurora3
    * 0.20
    * auroraIntensity;


  /* -----------------------------------------------
     11. Atmospheric noise
  ----------------------------------------------- */

  vec3 atmosphere =
    mix(
      vec3(
        0.3,
        0.7,
        0.65
      ),
      vec3(
        0.2,
        0.42,
        0.32
      ),
      u_theme
    );

  color +=
    backgroundNoise
    * mix(
      0.025,
      0.012,
      u_theme
    )
    * atmosphere;


  /* -----------------------------------------------
     12. Mouse glow
  ----------------------------------------------- */

  float mouseDistance =
    distance(
      uv,
      mouse
    );

  float mouseGlow =
    smoothstep(
      0.45,
      0.0,
      mouseDistance
    );

  vec3 mouseColor =
    mix(
      emerald,
      cyan,
      mouse.x
    );

  color +=
    mouseColor
    * mouseGlow
    * mix(
      0.055,
      0.025,
      u_theme
    );


  /* -----------------------------------------------
     13. Vignette
  ----------------------------------------------- */

  float vignette =
    smoothstep(
      1.15,
      0.15,
      length(centered)
    );

  color *=
    mix(
      0.55,
      1.0,
      vignette
    );


  /* -----------------------------------------------
     14. Center readability

     Dark mode:
       stronger center darkening.

     Light mode:
       much softer center treatment.
  ----------------------------------------------- */

  float centerDarkness =
    smoothstep(
      0.65,
      0.05,
      length(centered)
    );

  color *=
    mix(
      1.0,
      mix(
        0.72,
        0.94,
        u_theme
      ),
      centerDarkness
    );


  /* -----------------------------------------------
     15. Light mode soft center wash

     Prevents the light shader from becoming too
     visually busy behind the hero typography.
  ----------------------------------------------- */

  float centerLight =
    1.0 -
    smoothstep(
      0.0,
      0.75,
      length(centered)
    );

  color +=
    vec3(
      1.0,
      1.0,
      1.0
    )
    * centerLight
    * u_theme
    * 0.035;


  /* -----------------------------------------------
     16. Film grain

     Reduced in light mode.
  ----------------------------------------------- */

  float grain =
    random(
      gl_FragCoord.xy
      + u_time
    );

  grain =
    (grain - 0.5)
    * mix(
      0.025,
      0.008,
      u_theme
    );

  color += grain;


  /* -----------------------------------------------
     17. Final output
  ----------------------------------------------- */

  color =
    clamp(
      color,
      0.0,
      1.0
    );

  gl_FragColor =
    vec4(
      color,
      1.0
    );
}
`;