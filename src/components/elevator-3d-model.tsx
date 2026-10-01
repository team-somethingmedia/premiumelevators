import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import gsap from "gsap";

export function Elevator3DExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentFloor, setCurrentFloor] = useState<number>(1);
  const [isMoving, setIsMoving] = useState<boolean>(false);
  const [webGlSupported, setWebGlSupported] = useState<boolean>(true);
  const carGroupRef = useRef<THREE.Group | null>(null);
  const counterweightRef = useRef<THREE.Mesh | null>(null);
  const pulleyRef = useRef<THREE.Group | null>(null);
  const directionRef = useRef<number>(1); // 1 = ascending, -1 = descending
  const currentFloorRef = useRef<number>(1);

  useEffect(() => {
    currentFloorRef.current = currentFloor;
  }, [currentFloor]);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    } catch (e) {
      console.warn("WebGL not supported, falling back to static visual", e);
      setWebGlSupported(false);
      return;
    }

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(5.5, 3, 7.5);
    camera.lookAt(0, 2.5, 0);

    // 2. Renderer Config
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
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
      const ringEdges = new THREE.EdgesGeometry(boxGeo);
      const ringLine = new THREE.LineSegments(ringEdges, floorMarkMat);
      ringLine.position.set(0, ringY, 0);
      shaftGroup.add(ringLine);

      // Floor Landing Plate
      const floorPlateGeo = new THREE.BoxGeometry(shaftWidth + 0.2, 0.08, 0.6);
      const floorPlate = new THREE.Mesh(floorPlateGeo, steelMat);
      floorPlate.position.set(0, ringY, shaftDepth / 2 + 0.3);
      shaftGroup.add(floorPlate);
    }

    // Overhead Machine / Traction Sheave at top
    const machineGroup = new THREE.Group();
    machineGroup.position.set(0, shaftHeight + 0.4, 0);
    scene.add(machineGroup);

    const sheaveGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.18, 24);
    const sheaveMat = new THREE.MeshStandardMaterial({
      color: 0x274a66,
      roughness: 0.25,
      metalness: 0.85,
    });
    const sheave = new THREE.Mesh(sheaveGeo, sheaveMat);
    sheave.rotation.z = Math.PI / 2;
    machineGroup.add(sheave);
    pulleyRef.current = machineGroup;

    // 6. Elevator Cabin (Car Group)
    const carGroup = new THREE.Group();
    carGroup.position.set(0, 0.4, 0); // starts at floor 1
    scene.add(carGroup);
    carGroupRef.current = carGroup;

    // Car Floor / Ceiling
    const carBaseGeo = new THREE.BoxGeometry(1.7, 0.12, 1.7);
    const carBase = new THREE.Mesh(carBaseGeo, steelMat);
    carBase.position.set(0, 0.06, 0);
    carBase.receiveShadow = true;
    carGroup.add(carBase);

    const carRoof = new THREE.Mesh(carBaseGeo, steelMat);
    carRoof.position.set(0, 1.65, 0);
    carGroup.add(carRoof);

    // Car Glass Walls
    const wallGeo = new THREE.BoxGeometry(1.68, 1.5, 0.04);

    // Back wall
    const backWall = new THREE.Mesh(wallGeo, glassMat);
    backWall.position.set(0, 0.85, -0.83);
    carGroup.add(backWall);

    // Left wall
    const sideWallGeo = new THREE.BoxGeometry(0.04, 1.5, 1.68);
    const leftWall = new THREE.Mesh(sideWallGeo, glassMat);
    leftWall.position.set(-0.83, 0.85, 0);
    carGroup.add(leftWall);

    // Right wall
    const rightWall = new THREE.Mesh(sideWallGeo, glassMat);
    rightWall.position.set(0.83, 0.85, 0);
    carGroup.add(rightWall);

    // Front Sliding Doors (Bi-parting style)
    const doorGeo = new THREE.BoxGeometry(0.72, 1.5, 0.04);
    const leftDoor = new THREE.Mesh(doorGeo, steelMat);
    leftDoor.position.set(-0.4, 0.85, 0.83);
    carGroup.add(leftDoor);

    const rightDoor = new THREE.Mesh(doorGeo, steelMat);
    rightDoor.position.set(0.4, 0.85, 0.83);
    carGroup.add(rightDoor);

    // Cabin Interior Light
    const carLight = new THREE.PointLight(0xffffff, 1.1, 4);
    carLight.position.set(0, 1.5, 0);
    carGroup.add(carLight);

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

    // Mouse & Touch interactive rotation
    let targetRotationY = 0.35;
    let targetRotationX = 0.08;

    const handlePointerCoord = (clientX: number, clientY: number) => {
      const rect = container.getBoundingClientRect();
      const relX = (clientX - rect.left) / rect.width - 0.5;
      const relY = (clientY - rect.top) / rect.height - 0.5;
      targetRotationY = relX * 0.85 + 0.35;
      targetRotationX = relY * 0.45 + 0.08;
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
      container.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      scene.clear();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  const goToFloor = (floorNumber: number) => {
    if (floorNumber === currentFloorRef.current) return;
    const fromFloor = currentFloorRef.current;
    
    // Set direction appropriately
    if (floorNumber > fromFloor) {
      directionRef.current = 1;
    } else {
      directionRef.current = -1;
    }

    setIsMoving(true);
    setCurrentFloor(floorNumber);

    const targetY = (floorNumber - 1) * 1.5 + 0.4;
    const targetCwY = 8 - targetY - 1.2;
    const floorDiff = Math.abs(floorNumber - fromFloor);
    const duration = Math.min(1.3 + floorDiff * 0.25, 2.0);

    if (carGroupRef.current && counterweightRef.current && pulleyRef.current) {
      // Pulley spin animation
      gsap.to(pulleyRef.current.rotation, {
        x: `+=${(floorNumber - fromFloor) * Math.PI * 1.5}`,
        duration: duration,
        ease: "power2.inOut",
      });

      // Cabin Travel
      gsap.to(carGroupRef.current.position, {
        y: targetY,
        duration: duration,
        ease: "power2.inOut",
        onComplete: () => setIsMoving(false),
      });

      // Counterweight inverse travel
      gsap.to(counterweightRef.current.position, {
        y: targetCwY,
        duration: duration,
        ease: "power2.inOut",
      });
    } else {
      setIsMoving(false);
    }
  };

  // Continuous auto-cycling through floors
  useEffect(() => {
    if (isMoving) return;

    const timer = setTimeout(() => {
      let next = currentFloorRef.current + directionRef.current;
      if (next > 5) {
        directionRef.current = -1;
        next = 4;
      } else if (next < 1) {
        directionRef.current = 1;
        next = 2;
      }
      goToFloor(next);
    }, 2400);

    return () => clearTimeout(timer);
  }, [currentFloor, isMoving]);

  return (
    <div className="relative w-full rounded-2xl border border-primary/20 bg-background shadow-xs overflow-hidden">
      {/* 3D Model Header */}
      <div className="flex items-center justify-between border-b border-primary/15 px-4 py-2.5 text-[12.5px] text-primary bg-primary/[0.02]">
        <span className="font-medium">Hoistway & Cabin Simulator</span>
        <span className="text-[12px] text-gray-700 font-medium">
          {isMoving ? "Elevator in transit..." : `Cabin at Floor ${currentFloor}`}
        </span>
      </div>

      {/* Three.js Canvas Container */}
      <div className="relative">
        <div
          ref={containerRef}
          className="h-[200px] sm:h-[240px] md:h-[260px] lg:h-[280px] w-full cursor-grab active:cursor-grabbing touch-pan-y"
        />
      </div>

      {/* Interactive Floor Call Station Bar */}
      <div className="border-t border-primary/15 px-4 py-2.5 bg-background flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-[12px]">
          <span className="font-medium text-primary">Dispatch Elevator:</span>
          <span className="text-gray-700 hidden sm:inline">Click a floor button to animate transit</span>
        </div>

        <div className="flex items-center gap-1.5">
          {[1, 2, 3, 4, 5].map((fl) => (
            <button
              key={fl}
              type="button"
              onClick={() => goToFloor(fl)}
              title={`Dispatch elevator cabin to Floor ${fl}`}
              className={`h-7 min-w-7 px-2.5 rounded-md border text-[12px] font-medium transition-all duration-300 cursor-pointer ${
                currentFloor === fl
                  ? "border-primary bg-primary text-background shadow-xs ring-1 ring-primary/20 scale-105"
                  : "border-primary/25 bg-background text-primary hover:border-primary hover:bg-primary/10 hover:scale-105 active:scale-95"
              }`}
            >
              Floor {fl}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
