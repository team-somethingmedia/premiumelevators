import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";

interface HoistwayAscent3DProps {
  activePhase: number;
  onPhaseChange?: (phase: number) => void;
}

export function HoistwayAscent3D({ activePhase, onPhaseChange }: HoistwayAscent3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cabinRef = useRef<THREE.Group | null>(null);
  const glowRingRef = useRef<THREE.Mesh | null>(null);
  const [webGlSupported, setWebGlSupported] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 400;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch (e) {
      console.warn("WebGL not supported in HoistwayAscent3D", e);
      setWebGlSupported(false);
      return;
    }

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(5.5, 4.2, 7.5);
    camera.lookAt(0, 3.2, 0);

    // 2. Renderer
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x274a66, 1.5);
    dirLight.position.set(5, 10, 6);
    scene.add(dirLight);

    // 4. Materials
    const steelMat = new THREE.MeshStandardMaterial({
      color: 0x274a66,
      roughness: 0.3,
      metalness: 0.7,
    });
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xececec,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      transmission: 0.8,
    });
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x274a66,
      roughness: 0.4,
    });

    // 5. Modular Tower (4 Milestone Platforms)
    const towerGroup = new THREE.Group();
    scene.add(towerGroup);

    // Central core rails
    const railGeo = new THREE.CylinderGeometry(0.04, 0.04, 8, 16);
    const railLeft = new THREE.Mesh(railGeo, steelMat);
    railLeft.position.set(-1.1, 4, 0);
    towerGroup.add(railLeft);

    const railRight = new THREE.Mesh(railGeo, steelMat);
    railRight.position.set(1.1, 4, 0);
    towerGroup.add(railRight);

    // Milestone Platform Rings (4 milestones: Y = 1.0, 2.8, 4.6, 6.4)
    const platformHeights = [1.0, 2.8, 4.6, 6.4];
    platformHeights.forEach((y) => {
      const ringGeo = new THREE.CylinderGeometry(1.6, 1.6, 0.08, 32);
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.set(0, y, 0);
      towerGroup.add(ringMesh);

      // Floor marker ring
      const edgeGeo = new THREE.EdgesGeometry(ringGeo);
      const edgeLine = new THREE.LineSegments(
        edgeGeo,
        new THREE.LineBasicMaterial({ color: 0x274a66, opacity: 0.4, transparent: true })
      );
      edgeLine.position.set(0, y, 0);
      towerGroup.add(edgeLine);
    });

    // 6. Active Elevator Cabin Marker
    const cabinGroup = new THREE.Group();
    cabinGroup.position.set(0, platformHeights[activePhase] + 0.04, 0);
    scene.add(cabinGroup);
    cabinRef.current = cabinGroup;

    const cabBaseGeo = new THREE.BoxGeometry(1.3, 0.08, 1.3);
    const cabBase = new THREE.Mesh(cabBaseGeo, steelMat);
    cabinGroup.add(cabBase);

    const cabRoof = new THREE.Mesh(cabBaseGeo, steelMat);
    cabRoof.position.set(0, 1.3, 0);
    cabinGroup.add(cabRoof);

    const cabWallGeo = new THREE.BoxGeometry(1.28, 1.2, 0.04);
    const cabBackWall = new THREE.Mesh(cabWallGeo, glassMat);
    cabBackWall.position.set(0, 0.65, -0.62);
    cabinGroup.add(cabBackWall);

    const cabSideGeo = new THREE.BoxGeometry(0.04, 1.2, 1.28);
    const cabLeftWall = new THREE.Mesh(cabSideGeo, glassMat);
    cabLeftWall.position.set(-0.62, 0.65, 0);
    cabinGroup.add(cabLeftWall);

    const cabRightWall = new THREE.Mesh(cabSideGeo, glassMat);
    cabRightWall.position.set(0.62, 0.65, 0);
    cabinGroup.add(cabRightWall);

    // Active floor pulsing indicator ring
    const glowGeo = new THREE.TorusGeometry(1.8, 0.03, 16, 64);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x274a66,
      transparent: true,
      opacity: 0.6,
    });
    const glowRing = new THREE.Mesh(glowGeo, glowMat);
    glowRing.rotation.x = Math.PI / 2;
    glowRing.position.set(0, platformHeights[activePhase], 0);
    scene.add(glowRing);
    glowRingRef.current = glowRing;

    // Mouse & Touch Orbit Controls
    let targetRotationY = 0.4;
    let targetRotationX = 0.1;

    const handlePointerCoord = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const relX = (clientX - rect.left) / rect.width - 0.5;
      const relY = (clientY - rect.top) / rect.height - 0.5;
      targetRotationY = relX * 0.9 + 0.4;
      targetRotationX = relY * 0.4 + 0.1;
    };

    const handleMouseMove = (e: MouseEvent) => {
      handlePointerCoord(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handlePointerCoord(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Animation Loop
    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);

      // Camera smooth interpolation
      camera.position.x += (Math.sin(targetRotationY) * 9.0 - camera.position.x) * 0.05;
      camera.position.z += (Math.cos(targetRotationY) * 9.0 - camera.position.z) * 0.05;
      camera.position.y += (4.0 + targetRotationX * 3.5 - camera.position.y) * 0.05;
      camera.lookAt(0, 3.4, 0);

      // Idle subtle glow rotation
      if (glowRingRef.current) {
        glowRingRef.current.rotation.z += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(reqId);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      scene.clear();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update cabin height whenever activePhase changes
  useEffect(() => {
    const platformHeights = [1.0, 2.8, 4.6, 6.4];
    const targetY = platformHeights[activePhase] ?? 1.0;

    if (cabinRef.current && glowRingRef.current) {
      gsap.to(cabinRef.current.position, {
        y: targetY + 0.04,
        duration: 1.4,
        ease: "power2.inOut",
      });

      gsap.to(glowRingRef.current.position, {
        y: targetY,
        duration: 1.4,
        ease: "power2.inOut",
      });
    }
  }, [activePhase]);

  return (
    <div className="relative w-full rounded-2xl border border-primary/20 bg-background shadow-xs overflow-hidden flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-primary/15 px-4 py-2.5 text-[13px] text-primary bg-primary/[0.02]">
        <span className="font-medium">Engineering Milestones</span>
        <span className="text-[12px] text-gray-700">Phase {activePhase + 1} of 4</span>
      </div>

      <div
        ref={containerRef}
        className="h-[240px] sm:h-[270px] lg:h-[290px] w-full cursor-grab active:cursor-grabbing touch-pan-y"
      />

      <div className="border-t border-primary/15 px-4 py-2.5 bg-background flex items-center justify-between text-[12.5px]">
        <span className="text-gray-700">Select phase:</span>
        <div className="flex gap-1.5">
          {[0, 1, 2, 3].map((idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onPhaseChange?.(idx)}
              className={`h-7 min-w-7 px-2.5 rounded-md border text-[12px] transition-all cursor-pointer ${
                activePhase === idx
                  ? "border-primary bg-primary text-background font-medium shadow-xs"
                  : "border-primary/20 text-primary hover:border-primary/60 hover:bg-primary/5"
              }`}
            >
              Phase {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
