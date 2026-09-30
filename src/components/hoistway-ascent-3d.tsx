import { useEffect, useRef } from "react";
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

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 400;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(5.5, 4.2, 7.5);
    camera.lookAt(0, 3.2, 0);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
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

      // Wireframe contour
      const wire = new THREE.LineSegments(
        new THREE.WireframeGeometry(new THREE.BoxGeometry(2.4, 0.08, 2.4)),
        new THREE.LineBasicMaterial({ color: 0x274a66, opacity: 0.35, transparent: true }),
      );
      wire.position.set(0, y, 0);
      towerGroup.add(wire);
    });

    // 6. Traveling 3D Elevator Cabin
    const cabinGroup = new THREE.Group();
    scene.add(cabinGroup);
    cabinRef.current = cabinGroup;

    const carBase = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.08, 1.4), steelMat);
    cabinGroup.add(carBase);

    const carTop = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.08, 1.4), steelMat);
    carTop.position.set(0, 1.4, 0);
    cabinGroup.add(carTop);

    const carGlass = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.3, 1.3), glassMat);
    carGlass.position.set(0, 0.7, 0);
    cabinGroup.add(carGlass);

    const carEdges = new THREE.LineSegments(
      new THREE.WireframeGeometry(new THREE.BoxGeometry(1.4, 1.4, 1.4)),
      new THREE.LineBasicMaterial({ color: 0x274a66, opacity: 0.8 }),
    );
    carEdges.position.set(0, 0.7, 0);
    cabinGroup.add(carEdges);

    // Active Altitude Pulse Ring
    const glowGeo = new THREE.TorusGeometry(1.7, 0.03, 16, 40);
    glowGeo.rotateX(Math.PI / 2);
    const glowMesh = new THREE.Mesh(
      glowGeo,
      new THREE.MeshBasicMaterial({ color: 0x274a66, wireframe: true }),
    );
    glowMesh.position.set(0, platformHeights[0], 0);
    scene.add(glowMesh);
    glowRingRef.current = glowMesh;

    // Set initial position
    cabinGroup.position.set(0, platformHeights[0] + 0.04, 0);

    // Mouse rotation
    let mouseX = 0;
    let targetRotationY = 0.45;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      targetRotationY = relX * 0.8 + 0.45;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Render loop
    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);

      // Smooth camera orbit
      camera.position.x += (Math.sin(targetRotationY) * 8.5 - camera.position.x) * 0.05;
      camera.position.z += (Math.cos(targetRotationY) * 8.5 - camera.position.z) * 0.05;
      camera.lookAt(0, 3.4, 0);

      // Idle subtle glow rotation
      if (glowRingRef.current) {
        glowRingRef.current.rotation.y += 0.01;
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
    <div className="relative w-full border border-primary/25 bg-background shadow-xs overflow-hidden">
      <div className="flex items-center justify-between border-b border-primary/20 p-3.5 text-[12px] font-mono text-primary bg-primary/[0.02]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary pulse-indicator" />
          <span>3D ASCENSION TRACKER</span>
        </div>
        <div>ELEVATION STAGE 0{activePhase + 1} // 04</div>
      </div>

      <div
        ref={containerRef}
        className="h-[320px] md:h-[380px] w-full cursor-grab active:cursor-grabbing"
      />

      <div className="border-t border-primary/20 p-3 bg-background flex items-center justify-between text-[12px] font-mono">
        <span className="text-gray-700">HOISTWAY TRAJECTORY:</span>
        <div className="flex gap-2">
          {[0, 1, 2, 3].map((idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => onPhaseChange?.(idx)}
              className={`px-2 py-0.5 border transition-all ${
                activePhase === idx
                  ? "border-primary bg-primary text-background font-medium"
                  : "border-primary/25 text-primary hover:border-primary"
              }`}
            >
              0{idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
