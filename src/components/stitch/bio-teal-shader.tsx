"use client";

import React, { useEffect, useRef } from "react";

interface BioTealShaderProps {
  id?: string;
  className?: string;
  speedMultiplier?: number;
}

export function BioTealShader({
  id = "shader-canvas",
  className = "w-full h-full block",
  speedMultiplier = 0.2,
}: BioTealShaderProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;
    let resizeObserver: ResizeObserver | null = null;

    const syncSize = () => {
      if (!canvas) return;
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
    };

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(syncSize);
      resizeObserver.observe(canvas);
    }
    syncSize();

    const gl =
      canvas.getContext("webgl") ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) return;

    const vs = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    // Dynamic Zoom & Shape-Morphing Bio-Teal Shader
    const fs = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_scroll;
      varying vec2 v_texCoord;

      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
          dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
          vec2 st = gl_FragCoord.xy / u_resolution.xy;
          float aspect = u_resolution.x / u_resolution.y;
          st.x *= aspect;

          vec2 center = vec2(0.5 * aspect, 0.5);
          vec2 p = st - center;
          float dist = length(p);

          float t = u_time * ${speedMultiplier.toFixed(2)};

          // 1. DYNAMIC PULSING ZOOM (Breathing camera that zooms in and out)
          float zoom = 1.05 + 0.42 * sin(t * 0.8) + 0.16 * cos(t * 1.4);

          // Interactive mouse / touch interaction offset
          vec2 m = u_mouse / u_resolution;
          m.x *= aspect;
          vec2 mOffset = m - center;
          float mouseDist = length(p - mOffset);
          float mouseWarp = exp(-mouseDist * 2.4);

          // Final dynamic zoom combining breathing pulsation and interaction
          float activeZoom = zoom * (1.0 - mouseWarp * 0.28) * (1.0 + u_scroll * 0.5);
          vec2 pos = p * activeZoom;

          // 2. SHAPE MORPHING & ROTATIONAL TWIST (Morphs shape continuously)
          float twist = sin(t * 0.5 + dist * 2.6) * 0.38 + (mouseWarp * 0.55);
          float cosT = cos(twist);
          float sinT = sin(twist);
          mat2 rot = mat2(cosT, -sinT, sinT, cosT);
          pos = rot * pos;

          vec2 uv = pos + center;

          // 3. MULTI-LAYER DOMAIN WARPING (Living fluid geometry that expands & folds)
          float morphX = sin(t * 0.45) * 0.38;
          float morphY = cos(t * 0.38) * 0.38;

          vec2 q = vec2(0.0);
          q.x = snoise(uv * (1.2 + morphX) + vec2(t * 0.15, -t * 0.1));
          q.y = snoise(uv * (1.4 - morphY) + vec2(-t * 0.11, t * 0.16));

          vec2 r = vec2(0.0);
          r.x = snoise(uv + 1.3 * q + vec2(1.7, 9.2) + vec2(cos(t * 0.3), sin(t * 0.25)) * 0.35);
          r.y = snoise(uv + 1.2 * q + vec2(8.3, 2.8) + vec2(sin(t * 0.35), cos(t * 0.3)) * 0.35);

          // Ridges and fluid ripples
          float f = snoise(uv + 1.25 * r + vec2(t * 0.06, t * 0.04));

          // 4. VIBRANT BIO-TEAL PALETTE (Significantly more visible and radiant)
          vec3 deepBlack = vec3(0.005, 0.015, 0.02);       // Obsidian base
          vec3 bioEmerald = vec3(0.01, 0.26, 0.18);        // Rich emerald
          vec3 enactaBioTeal = vec3(0.0, 0.96, 0.68);      // #00E5A3 vibrant electric mint
          vec3 luminescentMint = vec3(0.60, 1.0, 0.92);    // Radiant silk ridge highlights

          // Glow calculation
          float glow = clamp(pow(f * 0.5 + 0.5, 2.2) * 3.2, 0.0, 1.0);
          float edge = smoothstep(0.04, 0.88, r.x);
          float ridge = pow(clamp(edge, 0.0, 1.0), 2.2);

          // Rich color blending
          vec3 color = mix(deepBlack, bioEmerald, clamp(f * 1.9 + 0.35, 0.0, 1.0));
          color = mix(color, enactaBioTeal, glow * 0.88);
          color += luminescentMint * ridge * 0.62;

          // Gentle edge vignette
          vec2 screenUV = gl_FragCoord.xy / u_resolution.xy;
          float vignette = screenUV.x * screenUV.y * (1.0 - screenUV.x) * (1.0 - screenUV.y);
          vignette = clamp(pow(16.0 * vignette, 0.2), 0.0, 1.0);
          color *= (0.50 + 0.50 * vignette);

          gl_FragColor = vec4(color, 1.0);
      }
    `;

    function compileShader(type: number, src: string) {
      if (!gl) return null;
      const s = gl.createShader(type);
      if (!s) return null;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    }

    const prog = gl.createProgram();
    if (!prog) return;

    const vertShader = compileShader(gl.VERTEX_SHADER, vs);
    const fragShader = compileShader(gl.FRAGMENT_SHADER, fs);
    if (!vertShader || !fragShader) return;

    gl.attachShader(prog, vertShader);
    gl.attachShader(prog, fragShader);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");
    const uScroll = gl.getUniformLocation(prog, "u_scroll");

    const targetMouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const currentMouse = { x: canvas.width / 2, y: canvas.height / 2 };
    let currentScroll = 0;
    let targetScroll = 0;

    const handlePointerMove = (clientX: number, clientY: number) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (clientX - rect.left) / rect.width;
        const ny = 1.0 - (clientY - rect.top) / rect.height;
        targetMouse.x = nx * canvas.width;
        targetMouse.y = ny * canvas.height;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      handlePointerMove(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const handleScroll = () => {
      const maxScroll = window.innerHeight || 800;
      targetScroll = Math.min(1.0, window.scrollY / maxScroll);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    const render = (t: number) => {
      if (!gl || !canvas) return;

      // Smooth lerp for mouse and scroll
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.08;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.08;
      currentScroll += (targetScroll - currentScroll) * 0.08;

      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      if (uMouse) gl.uniform2f(uMouse, currentMouse.x, currentMouse.y);
      if (uScroll) gl.uniform1f(uScroll, currentScroll);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scroll", handleScroll);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [speedMultiplier]);

  return <canvas ref={canvasRef} id={id} className={className} />;
}
