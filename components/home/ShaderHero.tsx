"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import {
  ArrowRight,
  ArrowUpRight,
  DownloadSimple,
  FacebookLogo,
  GithubLogo,
  LinkedinLogo,
  Sparkle,
} from "@phosphor-icons/react";

/* =========================================================
   SOCIAL LINKS
========================================================= */

const socialLinks = [
  {
    href: "https://github.com/azijulhakimbd",
    label: "GitHub",
    icon: GithubLogo,
  },
  {
    href: "https://www.linkedin.com/in/azijulhakimbd/",
    label: "LinkedIn",
    icon: LinkedinLogo,
  },
  {
    href: "https://www.facebook.com/in/azijulhakimbd/",
    label: "Facebook",
    icon: FacebookLogo,
  },
];

/* =========================================================
   SHADER HERO
========================================================= */

export default function ShaderHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const { resolvedTheme } = useTheme();

  /*
   * Keep theme inside a ref so changing dark/light mode
   * does NOT destroy and recreate the WebGL context.
   */
  const themeRef = useRef<"dark" | "light">(
    resolvedTheme === "light" ? "light" : "dark"
  );

  /*
   * Update the ref whenever next-themes changes.
   */
  useEffect(() => {
    themeRef.current =
      resolvedTheme === "light"
        ? "light"
        : "dark";
  }, [resolvedTheme]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const gl =
      canvas.getContext("webgl", {
        alpha: true,
        antialias: false,
        depth: false,
        stencil: false,
        powerPreference: "high-performance",
      }) ||
      canvas.getContext("experimental-webgl");

    if (!gl) {
      console.warn(
        "WebGL is not supported by this browser."
      );

      return;
    }

    const context =
      gl as WebGLRenderingContext;

    /* =====================================================
       VERTEX SHADER
    ====================================================== */

    const vertexShaderSource = `
      attribute vec2 a_position;

      void main() {
        gl_Position = vec4(
          a_position,
          0.0,
          1.0
        );
      }
    `;

    /* =====================================================
       FRAGMENT SHADER
    ====================================================== */

    const fragmentShaderSource = `
      precision highp float;

      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec2 u_mouse;

      /*
       * Theme:
       *
       * 0.0 = dark
       * 1.0 = light
       */
      uniform float u_theme;

      /* ---------------------------------------------------
         HASH
      --------------------------------------------------- */

      float hash21(vec2 p) {
        p = fract(
          p * vec2(
            123.34,
            456.21
          )
        );

        p += dot(
          p,
          p + 45.32
        );

        return fract(
          p.x * p.y
        );
      }

      /* ---------------------------------------------------
         VALUE NOISE
      --------------------------------------------------- */

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);

        f =
          f *
          f *
          (3.0 - 2.0 * f);

        float a =
          hash21(i);

        float b =
          hash21(
            i + vec2(1.0, 0.0)
          );

        float c =
          hash21(
            i + vec2(0.0, 1.0)
          );

        float d =
          hash21(
            i + vec2(1.0, 1.0)
          );

        return mix(
          mix(a, b, f.x),
          mix(c, d, f.x),
          f.y
        );
      }

      /* ---------------------------------------------------
         FBM
      --------------------------------------------------- */

      float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;

        for (int i = 0; i < 5; i++) {
          value +=
            noise(p) *
            amplitude;

          p *= 2.0;
          amplitude *= 0.5;
        }

        return value;
      }

      /* ---------------------------------------------------
         ORGANIC LIGHT
      --------------------------------------------------- */

      float blob(
        vec2 uv,
        vec2 position,
        float radius,
        float softness
      ) {
        float d =
          distance(
            uv,
            position
          );

        return 1.0 -
          smoothstep(
            radius,
            radius + softness,
            d
          );
      }

      /* ---------------------------------------------------
         MAIN
      --------------------------------------------------- */

      void main() {

        /* -----------------------------------------------
           SCREEN
        ----------------------------------------------- */

        vec2 uv =
          gl_FragCoord.xy /
          u_resolution.xy;

        float aspect =
          u_resolution.x /
          u_resolution.y;

        vec2 centered =
          uv - 0.5;

        centered.x *=
          aspect;


        /* -----------------------------------------------
           MOUSE
        ----------------------------------------------- */

        vec2 mouse =
          u_mouse - 0.5;

        mouse.x *=
          aspect;


        /* -----------------------------------------------
           TIME
        ----------------------------------------------- */

        float time =
          u_time * 0.075;


        /* -----------------------------------------------
           THEME COLORS
        ----------------------------------------------- */

        /*
         * DARK
         */

        vec3 darkBackground =
          vec3(
            0.008,
            0.016,
            0.014
          );

        vec3 darkEmerald =
          vec3(
            0.03,
            0.95,
            0.52
          );

        vec3 darkCyan =
          vec3(
            0.01,
            0.68,
            0.82
          );

        vec3 darkGreen =
          vec3(
            0.01,
            0.18,
            0.12
          );


        /*
         * LIGHT
         */

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

        vec3 lightGreen =
          vec3(
            0.08,
            0.32,
            0.20
          );


        /*
         * Theme interpolation
         */

        vec3 background =
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

        vec3 deepGreen =
          mix(
            darkGreen,
            lightGreen,
            u_theme
          );


        /* -----------------------------------------------
           BASE
        ----------------------------------------------- */

        vec3 color =
          background;


        /* -----------------------------------------------
           ORGANIC FIELD
        ----------------------------------------------- */

        vec2 fieldUv =
          centered;

        fieldUv.x +=
          sin(
            time * 1.15
          ) * 0.035;

        fieldUv.y +=
          cos(
            time * 0.75
          ) * 0.025;

        float fieldNoise =
          fbm(
            fieldUv * 1.7 +
            time * 0.35
          );


        /* -----------------------------------------------
           MAIN EMERALD CORE
        ----------------------------------------------- */

        vec2 corePosition =
          vec2(
            sin(
              time * 0.85
            ) * 0.13,

            cos(
              time * 0.65
            ) * 0.09
          );

        float core =
          blob(
            centered,
            corePosition,
            0.27,
            0.5
          );


        /* -----------------------------------------------
           LEFT CYAN FIELD
        ----------------------------------------------- */

        vec2 leftPosition =
          vec2(
            -0.72 +
              sin(
                time * 0.9
              ) * 0.08,

            0.15 +
              cos(
                time * 0.7
              ) * 0.12
          );

        float leftGlow =
          blob(
            centered,
            leftPosition,
            0.25,
            0.48
          );


        /* -----------------------------------------------
           RIGHT EMERALD FIELD
        ----------------------------------------------- */

        vec2 rightPosition =
          vec2(
            0.76 +
              cos(
                time * 0.75
              ) * 0.07,

            -0.18 +
              sin(
                time * 0.65
              ) * 0.12
          );

        float rightGlow =
          blob(
            centered,
            rightPosition,
            0.25,
            0.5
          );


        /* -----------------------------------------------
           MOUSE LIGHT
        ----------------------------------------------- */

        float mouseDistance =
          distance(
            centered,
            mouse
          );

        float mouseGlow =
          1.0 -
          smoothstep(
            0.0,
            0.9,
            mouseDistance
          );


        /* -----------------------------------------------
           THEME INTENSITY
        ----------------------------------------------- */

        float glowIntensity =
          mix(
            1.0,
            0.62,
            u_theme
          );


        /* -----------------------------------------------
           COMPOSITION
        ----------------------------------------------- */

        color +=
          emerald *
          core *
          0.075 *
          glowIntensity;

        color +=
          cyan *
          leftGlow *
          0.045 *
          glowIntensity;

        color +=
          emerald *
          rightGlow *
          0.05 *
          glowIntensity;

        color +=
          deepGreen *
          fieldNoise *
          mix(
            0.055,
            0.025,
            u_theme
          );


        /* -----------------------------------------------
           MOUSE RESPONSE
        ----------------------------------------------- */

        color +=
          emerald *
          mouseGlow *
          mix(
            0.035,
            0.02,
            u_theme
          );


        /* -----------------------------------------------
           RADIAL LIGHT
        ----------------------------------------------- */

        float radial =
          1.0 -
          smoothstep(
            0.0,
            1.0,
            length(centered)
          );

        color +=
          emerald *
          radial *
          mix(
            0.022,
            0.012,
            u_theme
          );


        /* -----------------------------------------------
           VIGNETTE
        ----------------------------------------------- */

        float vignette =
          1.0 -
          smoothstep(
            0.3,
            1.3,
            length(centered)
          );

        color *=
          mix(
            0.65,
            1.0,
            vignette
          );


        /* -----------------------------------------------
           CENTER READABILITY
        ----------------------------------------------- */

        float centerDarkness =
          smoothstep(
            0.65,
            0.05,
            length(centered)
          );

        float centerFactor =
          mix(
            0.72,
            0.94,
            u_theme
          );

        color *=
          mix(
            1.0,
            centerFactor,
            centerDarkness
          );


        /* -----------------------------------------------
           LIGHT MODE SOFT CENTER
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
          ) *
          centerLight *
          u_theme *
          0.025;


        /* -----------------------------------------------
           GRAIN
        ----------------------------------------------- */

        float grain =
          hash21(
            gl_FragCoord.xy +
            u_time
          );

        color +=
          (grain - 0.5) *
          mix(
            0.0025,
            0.001,
            u_theme
          );


        /* -----------------------------------------------
           FINAL
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
            0.92
          );
      }
    `;

    /* =====================================================
       SHADER CREATION
    ====================================================== */

    function createShader(
      type: number,
      source: string
    ): WebGLShader | null {
      const shader =
        context.createShader(type);

      if (!shader) return null;

      context.shaderSource(
        shader,
        source
      );

      context.compileShader(shader);

      if (
        !context.getShaderParameter(
          shader,
          context.COMPILE_STATUS
        )
      ) {
        console.error(
          "Shader compilation error:",
          context.getShaderInfoLog(
            shader
          )
        );

        context.deleteShader(
          shader
        );

        return null;
      }

      return shader;
    }

    /* =====================================================
       SHADERS
    ====================================================== */

    const vertexShader =
      createShader(
        context.VERTEX_SHADER,
        vertexShaderSource
      );

    const fragmentShader =
      createShader(
        context.FRAGMENT_SHADER,
        fragmentShaderSource
      );

    if (
      !vertexShader ||
      !fragmentShader
    ) {
      return;
    }

    /* =====================================================
       PROGRAM
    ====================================================== */

    const program =
      context.createProgram();

    if (!program) {
      return;
    }

    context.attachShader(
      program,
      vertexShader
    );

    context.attachShader(
      program,
      fragmentShader
    );

    context.linkProgram(
      program
    );

    if (
      !context.getProgramParameter(
        program,
        context.LINK_STATUS
      )
    ) {
      console.error(
        "Shader program link error:",
        context.getProgramInfoLog(
          program
        )
      );

      context.deleteProgram(
        program
      );

      context.deleteShader(
        vertexShader
      );

      context.deleteShader(
        fragmentShader
      );

      return;
    }

    /* =====================================================
       LOCATIONS
    ====================================================== */

    const positionLocation =
      context.getAttribLocation(
        program,
        "a_position"
      );

    const resolutionLocation =
      context.getUniformLocation(
        program,
        "u_resolution"
      );

    const timeLocation =
      context.getUniformLocation(
        program,
        "u_time"
      );

    const mouseLocation =
      context.getUniformLocation(
        program,
        "u_mouse"
      );

    const themeLocation =
      context.getUniformLocation(
        program,
        "u_theme"
      );

    /* =====================================================
       FULLSCREEN BUFFER
    ====================================================== */

    const buffer =
      context.createBuffer();

    if (!buffer) {
      context.deleteProgram(
        program
      );

      context.deleteShader(
        vertexShader
      );

      context.deleteShader(
        fragmentShader
      );

      return;
    }

    context.bindBuffer(
      context.ARRAY_BUFFER,
      buffer
    );

    context.bufferData(
      context.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,

        -1,  1,
         1, -1,
         1,  1,
      ]),
      context.STATIC_DRAW
    );

    /* =====================================================
       MOUSE
    ====================================================== */

    const mouse = {
      x: 0.5,
      y: 0.5,
    };

    let animationFrame = 0;

    const startTime =
      performance.now();

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

    /*
     * Current shader theme value.
     *
     * 0 = dark
     * 1 = light
     */
    let currentTheme =
      themeRef.current === "light"
        ? 1
        : 0;

    /* =====================================================
       RESIZE
    ====================================================== */

    const resize = () => {
      const dpr =
        Math.min(
          window.devicePixelRatio || 1,
          1.5
        );

      const width =
        Math.max(
          1,
          Math.floor(
            canvas.clientWidth *
              dpr
          )
        );

      const height =
        Math.max(
          1,
          Math.floor(
            canvas.clientHeight *
              dpr
          )
        );

      if (
        canvas.width !== width ||
        canvas.height !== height
      ) {
        canvas.width = width;
        canvas.height = height;
      }

      context.viewport(
        0,
        0,
        canvas.width,
        canvas.height
      );
    };

    /* =====================================================
       POINTER MOVE
    ====================================================== */

    const handlePointerMove = (
      event: PointerEvent
    ) => {
      mouse.x =
        event.clientX /
        window.innerWidth;

      mouse.y =
        1 -
        event.clientY /
        window.innerHeight;
    };

    /* =====================================================
       RENDER
    ====================================================== */

    const render = (
      currentTime: number
    ) => {
      resize();

      const elapsed =
        reducedMotion.matches
          ? 0
          : (
              currentTime -
              startTime
            ) / 1000;

      /*
       * Smooth theme transition.
       */
      const targetTheme =
        themeRef.current === "light"
          ? 1
          : 0;

      currentTheme +=
        (
          targetTheme -
          currentTheme
        ) * 0.08;

      context.clearColor(
        0,
        0,
        0,
        0
      );

      context.clear(
        context.COLOR_BUFFER_BIT
      );

      context.useProgram(
        program
      );

      context.bindBuffer(
        context.ARRAY_BUFFER,
        buffer
      );

      context.enableVertexAttribArray(
        positionLocation
      );

      context.vertexAttribPointer(
        positionLocation,
        2,
        context.FLOAT,
        false,
        0,
        0
      );

      context.uniform2f(
        resolutionLocation,
        canvas.width,
        canvas.height
      );

      context.uniform1f(
        timeLocation,
        elapsed
      );

      context.uniform2f(
        mouseLocation,
        mouse.x,
        mouse.y
      );

      context.uniform1f(
        themeLocation,
        currentTheme
      );

      context.drawArrays(
        context.TRIANGLES,
        0,
        6
      );

      animationFrame =
        requestAnimationFrame(
          render
        );
    };

    /* =====================================================
       EVENTS
    ====================================================== */

    window.addEventListener(
      "resize",
      resize,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    resize();

    animationFrame =
      requestAnimationFrame(
        render
      );

    /* =====================================================
       CLEANUP
    ====================================================== */

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      context.deleteBuffer(
        buffer
      );

      context.deleteProgram(
        program
      );

      context.deleteShader(
        vertexShader
      );

      context.deleteShader(
        fragmentShader
      );
    };
  }, []);

   return (
    <section
      className="
        relative
        isolate
        min-h-[calc(100svh-4rem)]
        overflow-hidden
        bg-background
        text-foreground
      "
    >
      {/* =====================================================
          SHADER BACKGROUND
      ====================================================== */}

      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          h-full
          w-full
          opacity-70
          sm:opacity-75
          dark:opacity-90
        "
      />

      {/* =====================================================
          SHADER CONTRAST
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[radial-gradient(circle_at_center,transparent_8%,hsl(var(--background)/0.38)_68%,hsl(var(--background))_100%)]
          sm:bg-[radial-gradient(circle_at_center,transparent_10%,hsl(var(--background)/0.32)_68%,hsl(var(--background))_100%)]
          dark:bg-[radial-gradient(circle_at_center,transparent_12%,hsl(var(--background)/0.45)_75%,hsl(var(--background))_100%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-[1]
          h-28
          sm:h-40
          bg-gradient-to-t
          from-background
          to-transparent
        "
      />

      {/* =====================================================
          GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          opacity-[0.02]
          sm:opacity-[0.025]
          dark:opacity-[0.035]
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize:
            "clamp(26px, 7vw, 44px) clamp(26px, 7vw, 44px)",
        }}
      />

      {/* =====================================================
          DECORATIVE NODES
      ====================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[3]
          hidden
          lg:block
        "
      >
        <span
          className="
            absolute
            left-[7%]
            top-[32%]
            h-2
            w-2
            animate-pulse
            rounded-full
            bg-emerald-500
            shadow-[0_0_25px_rgba(16,185,129,0.7)]
            dark:bg-emerald-400
            dark:shadow-[0_0_25px_rgba(52,211,153,0.8)]
          "
        />

        <span
          className="
            absolute
            right-[7%]
            top-[28%]
            h-2
            w-2
            animate-pulse
            rounded-full
            bg-emerald-500
            shadow-[0_0_25px_rgba(16,185,129,0.7)]
            dark:bg-emerald-400
            dark:shadow-[0_0_25px_rgba(52,211,153,0.8)]
          "
        />

        <div
          className="
            absolute
            left-[7%]
            top-[32%]
            h-px
            w-[13%]
            rotate-[14deg]
            bg-gradient-to-r
            from-emerald-500/25
            to-transparent
            dark:from-emerald-400/30
          "
        />

        <div
          className="
            absolute
            right-[7%]
            top-[28%]
            h-px
            w-[13%]
            -rotate-[14deg]
            bg-gradient-to-l
            from-emerald-500/25
            to-transparent
            dark:from-emerald-400/30
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100svh-4rem)]
          w-full
          max-w-7xl
          items-center
          px-4
          py-7
          xs:py-8
          sm:px-6
          sm:py-12
          md:px-8
          md:py-16
          lg:px-10
          lg:py-20
          xl:px-12
          xl:py-24
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-6xl
            items-center
            gap-7
            sm:gap-10
            md:gap-12
            lg:grid-cols-[1.08fr_0.92fr]
            lg:gap-14
            xl:gap-20
          "
        >
          {/* =================================================
              TEXT CONTENT
          ================================================== */}

          <div
            className="
              order-2
              w-full
              min-w-0
              animate-[heroContent_0.8s_ease-out_both]
              text-center
              lg:order-1
              lg:text-left
            "
          >
            {/* Availability */}

            <div
              className="
                mx-auto
                mb-4
                inline-flex
                max-w-[calc(100vw-2rem)]
                items-center
                gap-2
                rounded-full
                border
                border-emerald-500/20
                bg-background/70
                px-3
                py-1.5
                text-[9px]
                font-medium
                text-muted-foreground
                shadow-lg
                backdrop-blur-md
                sm:mb-6
                sm:px-4
                sm:py-2
                sm:text-xs
                lg:mx-0
                dark:border-emerald-400/20
                dark:bg-background/60
              "
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0 sm:h-2 sm:w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-50 dark:bg-emerald-400 dark:opacity-60" />
                <span className="relative h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400" />
              </span>

              <span className="truncate">
                Available for frontend & AI projects
              </span>
            </div>

            {/* Eyebrow */}

            <div
              className="
                mb-3
                flex
                items-center
                justify-center
                gap-1.5
                font-mono
                text-[8px]
                uppercase
                tracking-[0.14em]
                text-emerald-600
                min-[375px]:text-[9px]
                sm:mb-4
                sm:gap-2
                sm:text-[10px]
                md:text-xs
                lg:justify-start
                dark:text-emerald-400
              "
            >
              <Sparkle
                size={12}
                weight="fill"
                aria-hidden="true"
                className="animate-[sparkle_3s_ease-in-out_infinite] sm:size-[14px]"
              />

              <span>
                Frontend × AI Engineering
              </span>
            </div>

            {/* Heading */}

            <h1
              className="
                mx-auto
                w-full
                max-w-[20rem]
                font-mono
                text-[clamp(2.15rem,10.5vw,3.5rem)]
                font-bold
                leading-[0.98]
                tracking-[-0.06em]
                min-[375px]:max-w-[22rem]
                min-[375px]:text-[clamp(2.35rem,10vw,4rem)]
                sm:max-w-2xl
                sm:text-[clamp(3rem,7vw,5rem)]
                md:text-[clamp(3.2rem,7vw,5rem)]
                lg:mx-0
                lg:max-w-4xl
                lg:text-[clamp(3.4rem,5.2vw,5.8rem)]
              "
            >
              I build{" "}
              <span
                className="
                  relative
                  text-emerald-600
                  dark:text-emerald-400
                "
              >
                <span className="animate-[textGlow_3.5s_ease-in-out_infinite]">
                  intelligent
                </span>

                <span
                  aria-hidden="true"
                  className="
                    absolute
                    -bottom-0.5
                    left-0
                    h-0.5
                    w-full
                    rounded-full
                    bg-emerald-500/10
                    blur-md
                    min-[375px]:h-1
                    sm:h-1.5
                    dark:bg-emerald-400/10
                  "
                />
              </span>{" "}
              <span className="text-foreground">
                digital experiences.
              </span>
            </h1>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-4
                w-full
                max-w-[20rem]
                text-[13px]
                leading-5
                text-muted-foreground
                min-[375px]:max-w-[22rem]
                min-[375px]:text-sm
                min-[375px]:leading-6
                sm:mt-6
                sm:max-w-xl
                sm:text-base
                sm:leading-7
                md:text-lg
                md:leading-8
                lg:mx-0
                lg:max-w-2xl
              "
            >
              I&apos;m{" "}
              <span
                className="
                  font-medium
                  text-emerald-700
                  dark:text-green-300
                "
              >
                Md. Azijul Hakim
              </span>
              , a Frontend AI Engineer crafting fast,
              accessible, and thoughtful products with
              Next.js, TypeScript, and modern AI.
            </p>

            {/* =================================================
                CTA
            ================================================== */}

            <div
              className="
                mx-auto
                mt-6
                grid
                w-full
                max-w-[22rem]
                grid-cols-1
                gap-2.5
                min-[375px]:gap-3
                sm:mt-8
                sm:max-w-md
                sm:grid-cols-2
                lg:mx-0
                lg:max-w-2xl
                xl:max-w-fit
              "
            >
              {/* Projects */}

              <Link
                href="/projects"
                className="
                  group
                  flex
                  min-h-11
                  w-full
                  touch-manipulation
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-emerald-500
                  px-4
                  font-mono
                  text-xs
                  font-semibold
                  text-black
                  shadow-[0_10px_35px_rgba(16,185,129,0.15)]
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-emerald-400
                  hover:shadow-[0_15px_45px_rgba(16,185,129,0.28)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-emerald-500
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-background
                  sm:min-h-12
                  sm:px-5
                  sm:text-sm
                  xl:px-6
                  dark:focus-visible:ring-emerald-400
                "
              >
                Explore my work

                <ArrowRight
                  size={16}
                  weight="bold"
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-x-1
                  "
                />
              </Link>

              {/* Contact */}

              <Link
                href="/contact"
                className="
                  group
                  flex
                  min-h-11
                  w-full
                  touch-manipulation
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-border/80
                  bg-background/60
                  px-4
                  font-mono
                  text-xs
                  font-medium
                  backdrop-blur-md
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-emerald-500/40
                  hover:bg-emerald-500/[0.05]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-emerald-500
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-background
                  sm:min-h-12
                  sm:px-5
                  sm:text-sm
                  xl:px-6
                  dark:hover:border-emerald-400/40
                  dark:focus-visible:ring-emerald-400
                "
              >
                Let&apos;s connect

                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-200
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>

              {/* Resume */}

              <a
                href="/resume/md-azijul-hakim-resume.pdf"
                download
                className="
                  group
                  flex
                  min-h-11
                  w-full
                  touch-manipulation
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-emerald-600/30
                  bg-emerald-500/[0.04]
                  px-4
                  font-mono
                  text-xs
                  font-medium
                  text-emerald-700
                  backdrop-blur-md
                  transition
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-emerald-500/50
                  hover:bg-emerald-500/[0.1]
                  hover:text-emerald-700
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-emerald-500
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-background
                  sm:col-span-2
                  sm:min-h-12
                  sm:px-5
                  sm:text-sm
                  xl:col-span-1
                  xl:px-6
                  dark:border-emerald-500/30
                  dark:text-emerald-400
                  dark:hover:border-emerald-400/50
                  dark:hover:text-emerald-300
                  dark:focus-visible:ring-emerald-400
                "
              >
                Download Resume

                <DownloadSimple
                  size={16}
                  weight="bold"
                  className="
                    transition-transform
                    duration-200
                    group-hover:translate-y-0.5
                  "
                />
              </a>
            </div>

            {/* =================================================
                SOCIAL
            ================================================== */}

            <div
              className="
                mt-5
                flex
                flex-wrap
                items-center
                justify-center
                gap-2
                sm:mt-6
                sm:gap-2.5
                lg:justify-start
              "
            >
              <span
                className="
                  mr-1
                  hidden
                  text-xs
                  text-muted-foreground/60
                  sm:inline
                "
              >
                Find me on
              </span>

              {socialLinks.map(
                ({
                  href,
                  label,
                  icon: Icon,
                }) => (
                  <Link
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${label} profile`}
                    className="
                      flex
                      h-9
                      w-9
                      touch-manipulation
                      items-center
                      justify-center
                      rounded-lg
                      border
                      border-border/70
                      bg-background/50
                      text-muted-foreground
                      backdrop-blur-md
                      transition
                      duration-200
                      hover:-translate-y-0.5
                      hover:border-emerald-500/40
                      hover:bg-emerald-500/[0.05]
                      hover:text-emerald-600
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-emerald-500
                      sm:h-10
                      sm:w-10
                      dark:hover:text-emerald-400
                      dark:focus-visible:ring-emerald-400
                    "
                  >
                    <Icon
                      size={17}
                      weight="regular"
                      aria-hidden="true"
                    />
                  </Link>
                )
              )}
            </div>
          </div>

          {/* =================================================
              PORTRAIT
          ================================================== */}

          <div
            className="
              order-1
              mx-auto
              w-full
              max-w-[11.5rem]
              min-w-0
              animate-[heroPortrait_0.8s_ease-out_0.1s_both]
              min-[375px]:max-w-[13rem]
              sm:max-w-[17rem]
              md:max-w-[21rem]
              lg:order-2
              lg:max-w-[24rem]
              xl:max-w-[27rem]
            "
          >
            <div className="relative mx-auto w-full">

              {/* Outer glow */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-3
                  rounded-full
                  bg-emerald-500/10
                  blur-[45px]
                  min-[375px]:inset-5
                  min-[375px]:blur-[55px]
                  sm:inset-8
                  sm:blur-[75px]
                  dark:bg-emerald-400/10
                "
              />

              {/* Portrait card */}

              <div
                className="
                  relative
                  rounded-[1.4rem]
                  border
                  border-emerald-600/20
                  bg-background/50
                  p-1
                  shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  backdrop-blur-[2px]
                  transition-transform
                  duration-500
                  hover:-translate-y-2
                  hover:scale-[1.015]
                  min-[375px]:rounded-[1.6rem]
                  min-[375px]:p-1.5
                  sm:rounded-[2rem]
                  sm:p-2
                  dark:border-emerald-400/20
                  dark:bg-background/30
                  dark:shadow-[0_25px_80px_rgba(0,0,0,0.3)]
                "
              >
                <div
                  className="
                    relative
                    aspect-[4/5]
                    overflow-hidden
                    rounded-[1.1rem]
                    bg-muted sm:py-5
                    min-[375px]:rounded-[1.3rem]
                    sm:rounded-[1.5rem]
                  "
                >
                  <Image
                    src="/images/azijul-hakim.webp"
                    alt="Md. Azijul Hakim, Frontend AI Engineer"
                    fill
                    priority
                    quality={75}
                    sizes="
                      (max-width: 374px) 184px,
                      (max-width: 639px) 208px,
                      (max-width: 767px) 272px,
                      (max-width: 1023px) 336px,
                      (max-width: 1279px) 384px,
                      432px
                    "
                    className="
                      object-cover
                      object-center
                      transition-transform
                      duration-700 
                      hover:scale-105
                    "
                  />

                  {/* Image gradient */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/10
                      to-transparent
                      dark:from-black/85
                    "
                  />

                  {/* Image information */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      p-2.5
                      text-left
                      min-[375px]:p-3.5
                      sm:p-5
                    "
                  >
                    <div
                      className="
                        mb-1.5
                        inline-flex
                        items-center
                        gap-1
                        rounded-full
                        border
                        border-white/10
                        bg-black/40
                        px-1.5
                        py-1
                        text-[6px]
                        font-medium
                        uppercase
                        tracking-[0.12em]
                        text-white/80
                        backdrop-blur-md
                        min-[375px]:gap-1.5
                        min-[375px]:px-2
                        min-[375px]:text-[7px]
                        sm:mb-2
                        sm:gap-2
                        sm:px-2.5
                        sm:py-1.5
                        sm:text-[9px]
                      "
                    >
                      <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400 min-[375px]:h-1.5 min-[375px]:w-1.5" />

                      Frontend × AI
                    </div>

                    <h2
                      className="
                        font-mono
                        text-sm
                        font-bold
                        tracking-tight
                        text-white
                        min-[375px]:text-base
                        sm:text-xl
                      "
                    >
                      Md. Azijul Hakim
                    </h2>

                    <p
                      className="
                        mt-0.5
                        text-[8px]
                        text-white/60
                        min-[375px]:text-[9px]
                        sm:mt-1
                        sm:text-xs
                      "
                    >
                      Building intelligent interfaces.
                    </p>
                  </div>
                </div>
              </div>

              {/* Available badge */}

              <div
                className="
                  absolute
                  -right-1
                  top-2
                  z-20
                  flex
                  items-center
                  gap-1
                  rounded-full
                  border
                  border-emerald-500/20
                  bg-background/90
                  px-2
                  py-1
                  text-[6px]
                  font-semibold
                  tracking-wide
                  shadow-xl
                  backdrop-blur-md
                  animate-[badgeIn_0.6s_ease-out_0.5s_both]
                  min-[375px]:right-0
                  min-[375px]:top-3
                  min-[375px]:gap-1.5
                  min-[375px]:px-2.5
                  min-[375px]:py-1.5
                  min-[375px]:text-[7px]
                  sm:-right-2
                  sm:top-6
                  sm:gap-2
                  sm:px-3
                  sm:py-2
                  sm:text-[9px]
                  lg:-right-4
                  dark:border-emerald-400/20
                "
              >
                <span className="relative flex h-1.5 w-1.5 shrink-0 sm:h-2 sm:w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative h-full w-full rounded-full bg-emerald-500 dark:bg-emerald-400" />
                </span>

                AVAILABLE
              </div>

              {/* AI badge */}

              <div
                className="
                  absolute
                  bottom-4
                  left-0
                  z-20
                  hidden
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-border/70
                  bg-background/90
                  px-2.5
                  py-2
                  text-[8px]
                  text-muted-foreground
                  shadow-xl
                  backdrop-blur-md
                  animate-[badgeInLeft_0.6s_ease-out_0.7s_both]
                  sm:flex
                  sm:-left-3
                  sm:bottom-8
                  sm:px-3
                  sm:py-2.5
                  sm:text-[9px]
                  lg:-left-5
                "
              >
                <Sparkle
                  size={13}
                  weight="fill"
                  className="
                    shrink-0
                    text-emerald-600
                    dark:text-emerald-400
                  "
                />

                <span>
                  AI-powered
                  <br />
                  interfaces
                </span>
              </div>

              {/* Decorative dot */}

              <span
                aria-hidden="true"
                className="
                  absolute
                  right-0
                  top-1/2
                  hidden
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-emerald-500
                  shadow-[0_0_20px_rgba(16,185,129,0.7)]
                  sm:block
                  dark:bg-emerald-400
                  dark:shadow-[0_0_20px_rgba(52,211,153,0.8)]
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes heroContent {
              from {
                opacity: 0;
                transform: translateY(24px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes heroPortrait {
              from {
                opacity: 0;
                transform: translateY(18px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes textGlow {
              0%, 100% {
                text-shadow:
                  0 0 0
                  rgba(52, 211, 153, 0);
              }

              50% {
                text-shadow:
                  0 0 28px
                  rgba(52, 211, 153, 0.32);
              }
            }

            @keyframes sparkle {
              0%, 100% {
                transform: rotate(0deg);
              }

              50% {
                transform: rotate(10deg);
              }

              75% {
                transform: rotate(-10deg);
              }
            }

            @keyframes badgeIn {
              from {
                opacity: 0;
                transform: translateX(15px);
              }

              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes badgeInLeft {
              from {
                opacity: 0;
                transform: translateX(-15px);
              }

              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @media (max-width: 374px) {
              .hero-mobile-tight {
                letter-spacing: -0.065em;
              }
            }

            @media (hover: none) {
              .group:hover {
                transform: none;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              *,
              *::before,
              *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                scroll-behavior: auto !important;
                transition-duration: 0.01ms !important;
              }
            }
          `,
        }}
      />
    </section>
  );
}