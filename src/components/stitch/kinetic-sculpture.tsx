"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface KineticSculptureProps {
  className?: string;
  height?: string;
  showHud?: boolean;
}

export function KineticSculpture({
  className = "",
  height = "h-[340px] sm:h-[400px]",
  showHud = true,
}: KineticSculptureProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [fps, setFps] = useState<number>(60);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || 400;
    let heightPx = container.clientHeight || 340;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08090c, 0.012);

    const camera = new THREE.PerspectiveCamera(50, width / heightPx, 0.1, 1000);
    camera.position.z = 66;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x08090c, 1);
    container.appendChild(renderer.domElement);

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 2. Jaula Alámbrica Geométrica Torus Knot (Enacta Emerald/Bio-Teal #00E5A3)
    const torusKnotGeo = new THREE.TorusKnotGeometry(16, 3.8, 120, 24, 2, 3);
    const wireGeo = new THREE.WireframeGeometry(torusKnotGeo);
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00e5a3,
      transparent: true,
      opacity: 0.45,
    });
    const wireMesh = new THREE.LineSegments(wireGeo, lineMaterial);
    mainGroup.add(wireMesh);

    // 3. Nube de Partículas de Alta Velocidad (Nodos Cuánticos de Telemetría)
    const count = 320;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(count * 3);
    const initialPos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 22 + Math.random() * 42;
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      pPos[i * 3] = x;
      pPos[i * 3 + 1] = y;
      pPos[i * 3 + 2] = z;
      initialPos[i * 3] = x;
      initialPos[i * 3 + 1] = y;
      initialPos[i * 3 + 2] = z;
    }
    pGeo.setAttribute("position", new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x00e5a3,
      size: 2.2,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(pGeo, pMat);
    mainGroup.add(particles);

    // 4. Núcleo Hardware Central (Cubo Servidor Bare-Metal)
    const boxGeo = new THREE.BoxGeometry(13, 13, 13);
    const boxWire = new THREE.WireframeGeometry(boxGeo);
    const boxMat = new THREE.LineBasicMaterial({
      color: 0xf7f7f6,
      transparent: true,
      opacity: 0.65,
    });
    const coreBox = new THREE.LineSegments(boxWire, boxMat);
    mainGroup.add(coreBox);

    // 5. Interacción Cursor (Mouse & Touch)
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (clientX: number, clientY: number) => {
      setHasInteracted(true);
      const rect = container.getBoundingClientRect();
      const halfX = rect.left + rect.width / 2;
      const halfY = rect.top + rect.height / 2;
      mouseX = ((clientX - halfX) / (rect.width / 2)) * 0.8;
      mouseY = ((clientY - halfY) / (rect.height / 2)) * 0.8;
    };

    const onMouseMove = (e: MouseEvent) => {
      handlePointerMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    // 6. Resize Observer
    const onResize = () => {
      if (!container) return;
      width = container.clientWidth;
      heightPx = container.clientHeight;
      camera.aspect = width / heightPx;
      camera.updateProjectionMatrix();
      renderer.setSize(width, heightPx);
    };

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(onResize);
      resizeObserver.observe(container);
    }
    window.addEventListener("resize", onResize);

    // 7. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();
    let frameCount = 0;
    let lastTime = performance.now();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // FPS Counter calculation
      frameCount++;
      const now = performance.now();
      if (now - lastTime >= 1000) {
        setFps(Math.round((frameCount * 1000) / (now - lastTime)));
        frameCount = 0;
        lastTime = now;
      }

      // Smooth damping interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y = t * 0.12 + targetX * 0.45;
      mainGroup.rotation.x = Math.sin(t * 0.08) * 0.18 + targetY * 0.45;

      coreBox.rotation.y = -t * 0.25;
      coreBox.rotation.z = t * 0.18;

      // Particle oscillation
      const positions = pGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const idx = i * 3;
        positions[idx] =
          initialPos[idx] +
          Math.sin(t * 1.5 + initialPos[idx + 1] * 0.08) * 2;
        positions[idx + 1] =
          initialPos[idx + 1] +
          Math.cos(t * 1.2 + initialPos[idx] * 0.08) * 2;
      }
      pGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", onResize);
      if (resizeObserver) resizeObserver.disconnect();

      torusKnotGeo.dispose();
      wireGeo.dispose();
      lineMaterial.dispose();
      pGeo.dispose();
      pMat.dispose();
      boxGeo.dispose();
      boxWire.dispose();
      boxMat.dispose();
      renderer.dispose();

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      className={`relative w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-[#08090c] shadow-2xl group ${height} ${className}`}
    >
      {/* 3D WebGL Canvas Viewport */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full z-0 cursor-grab active:cursor-grabbing" />

      {/* Futuristic Telemetry HUD Layer */}
      {showHud && (
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-3.5 sm:p-5 select-none">
          {/* Header HUD Badges */}
          <div className="flex items-center justify-between w-full">
            <div className="pointer-events-auto backdrop-blur-md bg-[#101216]/80 px-3 py-1.5 rounded-lg border border-primary/25 flex items-center space-x-2 text-[10px] sm:text-xs tracking-wider shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
              <span className="font-bold text-primary font-mono">ENACTA® /SYS.3D</span>
              <span className="text-zinc-600 hidden sm:inline">|</span>
              <span className="text-zinc-300 font-mono hidden sm:inline text-[10px]">
                KINETIC CORE
              </span>
            </div>

            <div className="pointer-events-auto backdrop-blur-md bg-[#101216]/80 px-2.5 py-1 rounded-lg border border-white/[0.08] text-[10px] sm:text-[11px] text-zinc-400 flex items-center gap-2 shadow-lg">
              <span className="text-zinc-500 hidden sm:inline">WEBGL</span>
              <span className="text-primary font-mono bg-primary/10 px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold">
                {fps} FPS
              </span>
            </div>
          </div>

          {/* Interactive Hint (Desvanece automáticamente al interactuar para dejar la escultura limpia) */}
          <div
            className={`text-center transition-opacity duration-700 ${
              hasInteracted ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <div className="inline-block pointer-events-auto backdrop-blur-md bg-[#101216]/80 px-3 py-1 rounded-full text-[10px] sm:text-[11px] text-zinc-300 border border-white/[0.08] shadow-md">
              [ Mueve el cursor sobre la escultura para interactuar ]
            </div>
          </div>

          {/* Footer HUD Metrics */}
          <div className="flex items-end justify-between w-full text-[10px] sm:text-xs">
            <div className="pointer-events-auto backdrop-blur-md bg-[#101216]/80 p-2 sm:p-2.5 rounded-lg border border-white/[0.08] space-y-0.5 hidden sm:block shadow-lg">
              <div className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono">
                Matriz Geométrica
              </div>
              <div className="text-white text-[11px] font-mono">
                Torus Knot + 320 Nodos Cuánticos
              </div>
            </div>

            <div className="pointer-events-auto backdrop-blur-md bg-[#101216]/80 px-3 py-1.5 rounded-lg border border-white/[0.08] flex items-center space-x-3 text-right shadow-lg ml-auto">
              <div className="text-left">
                <div className="text-[9px] text-zinc-500 font-mono">LATENCIA SCL</div>
                <div className="text-white font-bold font-mono text-[10px] sm:text-xs">
                  &lt; 0.8s TTFB
                </div>
              </div>
              <div className="h-5 w-px bg-white/10" />
              <div className="text-left">
                <div className="text-[9px] text-zinc-500 font-mono">ESTADO RED</div>
                <div className="text-primary font-bold font-mono text-[10px] sm:text-xs">
                  ACTIVO 99.9%
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
