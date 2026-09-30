import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";

export function Elevator3DExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFloor, setCurrentFloor] = useState<number>(1);
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const carGroupRef = useRef<THREE.Group | null>(null);
  const counterweightRef = useRef<THREE.Mesh | null>(null);
  const pulleyRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(5.5, 3, 7.5);
    camera.lookAt(0, 2.5, 0);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.innerHTML = "";
    container.appendChild(renderer.domElement);

    // 3. Lighting (Palette: #274A66 and warm architectural ambient)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0x274a66, 1.4);
    dirLight.position.set(6, 10, 6);
    dirLight.castShadow = true;
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(0x274a66, 1.2, 15);
    pointLight.position.set(-4, 6, -3);
    scene.add(pointLight);

    // 4. Materials
    const steelMat = new THREE.MeshStandardMaterial({
      color: 0x274a66,
      roughness: 0.35,
      metalness: 0.7,
    });
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xececec,
      transparent: true,
      opacity: 0.35,
      roughness: 0.1,
      metalness: 0.1,
      transmission: 0.7,
      ior: 1.5,
    });
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0x274a66,
      transparent: true,
      opacity: 0.3,
    });
    const floorMarkMat = new THREE.LineBasicMaterial({
      color: 0x274a66,
      transparent: true,
      opacity: 0.45,
    });

    // 5. Vertical Shaft Frame (4 corner columns + floor rings)
    const shaftHeight = 8;
    const shaftWidth = 2.4;
    const shaftDepth = 2.4;

    const shaftGroup = new THREE.Group();
    scene.add(shaftGroup);

    // Corner Guide Rails
    const colGeo = new THREE.CylinderGeometry(0.035, 0.035, shaftHeight, 12);
    const corners = [
      [-shaftWidth / 2, -shaftDepth / 2],
      [shaftWidth / 2, -shaftDepth / 2],
      [-shaftWidth / 2, shaftDepth / 2],
      [shaftWidth / 2, shaftDepth / 2],
    ];

    corners.forEach(([x, z]) => {
      const col = new THREE.Mesh(colGeo, steelMat);
      col.position.set(x, shaftHeight / 2, z);
      shaftGroup.add(col);
    });

    // Floor Level Rings (5 floors)
    for (let i = 0; i <= 4; i++) {
      const ringY = i * 1.8 + 0.4;
      const boxGeo = new THREE.BoxGeometry(shaftWidth, 0.04, shaftDepth);
      const wireGeo = new THREE.WireframeGeometry(boxGeo);
      const ring = new THREE.LineSegments(wireGeo, floorMarkMat);
      ring.position.set(0, ringY, 0);
      shaftGroup.add(ring);
    }

    // Top Machine Overhead Beam & Pulley
    const topBeam = new THREE.Mesh(
      new THREE.BoxGeometry(shaftWidth + 0.4, 0.15, shaftDepth + 0.4),
      steelMat,
    );
    topBeam.position.set(0, shaftHeight, 0);
    shaftGroup.add(topBeam);

    const pulleyGroup = new THREE.Group();
    const pulleyGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.1, 24);
    pulleyGeo.rotateZ(Math.PI / 2);
    const pulley = new THREE.Mesh(pulleyGeo, steelMat);
    pulleyGroup.position.set(0, shaftHeight - 0.25, 0);
    pulleyGroup.add(pulley);
    scene.add(pulleyGroup);
    pulleyRef.current = pulleyGroup;

    // 6. Elevator Cabin (Car)
    const carGroup = new THREE.Group();
    scene.add(carGroup);
    carGroupRef.current = carGroup;

    // Cabin Base Floor & Ceiling
    const carFloor = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.08, 1.6), steelMat);
    carFloor.position.set(0, 0.04, 0);
    carGroup.add(carFloor);

    const carCeiling = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.08, 1.6), steelMat);
    carCeiling.position.set(0, 1.7, 0);
    carGroup.add(carCeiling);

    // Glass Walls (3 sides)
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(1.5, 1.6, 0.04), glassMat);
    backWall.position.set(0, 0.88, -0.78);
    carGroup.add(backWall);

    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.6, 1.5), glassMat);
    leftWall.position.set(-0.78, 0.88, 0);
    carGroup.add(leftWall);

    const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.6, 1.5), glassMat);
    rightWall.position.set(0.78, 0.88, 0);
    carGroup.add(rightWall);

    // Cabin Frame Edges
    const carFrameGeo = new THREE.WireframeGeometry(new THREE.BoxGeometry(1.6, 1.7, 1.6));
    const carFrame = new THREE.LineSegments(carFrameGeo, wireframeMat);
    carFrame.position.set(0, 0.88, 0);
    carGroup.add(carFrame);

    // Initial position at Floor 1 (Y = 0.4)
    carGroup.position.set(0, 0.4, 0);

    // 7. Counterweight (moves inverse to cabin)
    const cwGeo = new THREE.BoxGeometry(0.8, 1.0, 0.15);
    const cwMesh = new THREE.Mesh(cwGeo, steelMat);
    cwMesh.position.set(0, shaftHeight - 0.4 - 1.0, -1.05);
    scene.add(cwMesh);
    counterweightRef.current = cwMesh;

    // 8. Steel Suspension Cables
    const cableMat = new THREE.LineBasicMaterial({
      color: 0x274a66,
      opacity: 0.6,
      transparent: true,
    });
    const cablePoints = [
      new THREE.Vector3(0, 0.4 + 1.7, 0),
      new THREE.Vector3(0, shaftHeight - 0.25, 0),
    ];
    const cableGeo = new THREE.BufferGeometry().setFromPoints(cablePoints);
    const cableLine = new THREE.Line(cableGeo, cableMat);
    scene.add(cableLine);

    // Mouse interactive rotation
    let mouseX = 0;
    let targetRotationY = 0.35;
    let targetRotationX = 0.08;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = relX * 0.75 + 0.35;
      targetRotationX = relY * 0.4 + 0.08;
    };

    container.addEventListener("mousemove", handleMouseMove);

    // Render loop
    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);

      // Smooth camera orbit damping
      camera.position.x += (Math.sin(targetRotationY) * 8.5 - camera.position.x) * 0.05;
      camera.position.z += (Math.cos(targetRotationY) * 8.5 - camera.position.z) * 0.05;
      camera.position.y += (3.5 + targetRotationX * 4 - camera.position.y) * 0.05;
      camera.lookAt(0, 3.2, 0);

      // Update suspension cable endpoints
      if (carGroupRef.current) {
        const carY = carGroupRef.current.position.y + 1.7;
        const positions = cableLine.geometry.attributes.position.array as Float32Array;
        positions[1] = carY;
        cableLine.geometry.attributes.position.needsUpdate = true;
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

  const goToFloor = (floorNumber: number) => {
    if (isMoving || floorNumber === currentFloor) return;
    setIsMoving(true);
    setCurrentFloor(floorNumber);

    const targetY = (floorNumber - 1) * 1.5 + 0.4;
    const targetCwY = 8 - targetY - 1.2;

    if (carGroupRef.current && counterweightRef.current && pulleyRef.current) {
      // Pulley spin animation
      gsap.to(pulleyRef.current.rotation, {
        x: `+=${(floorNumber - currentFloor) * Math.PI * 1.5}`,
        duration: 1.6,
        ease: "power2.inOut",
      });

      // Cabin Travel
      gsap.to(carGroupRef.current.position, {
        y: targetY,
        duration: 1.6,
        ease: "power2.inOut",
        onComplete: () => setIsMoving(false),
      });

      // Counterweight inverse travel
      gsap.to(counterweightRef.current.position, {
        y: targetCwY,
        duration: 1.6,
        ease: "power2.inOut",
      });
    }
  };

  return (
    <div className="relative w-full border border-primary/25 bg-background shadow-xs overflow-hidden">
      {/* Top 3D Model Header & Telemetry */}
      <div className="flex items-center justify-between border-b border-primary/20 p-4 text-[12.5px] text-primary font-mono bg-primary/[0.02]">
        <div className="flex items-center gap-2.5">
          <span className="h-2 w-2 rounded-full bg-primary pulse-indicator" />
          <span>3D SHAFT SIMULATION // IS 14665</span>
        </div>
        <div className="flex items-center gap-3">
          <span>FLOOR: {currentFloor.toString().padStart(2, "0")}</span>
          <span className="text-primary/30">|</span>
          <span>{isMoving ? "STATUS: IN-TRANSIT" : "STATUS: LEVEL"}</span>
        </div>
      </div>

      {/* Three.js Canvas Container */}
      <div
        ref={containerRef}
        className="h-[360px] md:h-[420px] w-full cursor-grab active:cursor-grabbing"
      />

      {/* Interactive Floor Call Station Bar */}
      <div className="border-t border-primary/20 p-4 bg-background flex flex-wrap items-center justify-between gap-4">
        <div className="text-[13px] text-gray-700">
          <span className="font-mono text-primary font-medium">Interactive Dispatch: </span>
          <span>Click floor call buttons to test vertical transit kinetics.</span>
        </div>

        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((fl) => (
            <button
              key={fl}
              type="button"
              onClick={() => goToFloor(fl)}
              disabled={isMoving}
              className={`h-8 w-9 border text-[12px] font-mono transition-all duration-200 ${
                currentFloor === fl
                  ? "border-primary bg-primary text-background font-medium shadow-xs"
                  : "border-primary/30 bg-background text-primary hover:border-primary hover:bg-primary/5"
              }`}
            >
              L0{fl}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
