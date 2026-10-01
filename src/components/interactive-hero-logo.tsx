import { useRef, useEffect } from "react";
import logo from "@/assets/logo.png";
import gsap from "gsap";

export function InteractiveHeroLogo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const glowBeamRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<SVGCircleElement>(null);
  const ring2Ref = useRef<SVGCircleElement>(null);

  useEffect(() => {
    // 1. Continuous smooth floating levitation
    const floatTween = gsap.to(logoRef.current, {
      y: -12,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    // 2. Custom Elevator Hoistway Ascent Light Beam scanning through logo
    const beamTween = gsap.fromTo(
      glowBeamRef.current,
      { y: 160, opacity: 0 },
      {
        y: -160,
        opacity: 0.85,
        duration: 2.8,
        repeat: -1,
        repeatDelay: 1.2,
        ease: "power2.inOut",
      }
    );

    // 3. Ambient architectural hoistway rotation
    const ring1Tween = gsap.to(ring1Ref.current, {
      rotation: 360,
      transformOrigin: "center center",
      duration: 45,
      repeat: -1,
      ease: "none",
    });

    const ring2Tween = gsap.to(ring2Ref.current, {
      rotation: -360,
      transformOrigin: "center center",
      duration: 65,
      repeat: -1,
      ease: "none",
    });

    return () => {
      floatTween.kill();
      beamTween.kill();
      ring1Tween.kill();
      ring2Tween.kill();
    };
  }, []);

  const handlePointerMove = (clientX: number, clientY: number) => {
    if (!containerRef.current || !logoRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;

    gsap.to(logoRef.current, {
      rotateY: x * 26,
      rotateX: -y * 26,
      x: x * 20,
      y: y * 20,
      duration: 0.7,
      ease: "power2.out",
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    handlePointerMove(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handlePointerReset = () => {
    if (!logoRef.current) return;
    gsap.to(logoRef.current, {
      rotateY: 0,
      rotateX: 0,
      x: 0,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
    });
  };

  const handleClick = () => {
    if (!logoRef.current) return;
    // Interactive kinetic elevator bounce on click/tap
    gsap.timeline()
      .to(logoRef.current, { y: -26, scale: 1.04, duration: 0.3, ease: "power2.out" })
      .to(logoRef.current, { y: 0, scale: 1, duration: 0.65, ease: "elastic.out(1, 0.45)" });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handlePointerReset}
      onTouchMove={handleTouchMove}
      onTouchEnd={handlePointerReset}
      onClick={handleClick}
      role="img"
      aria-label="Interactive Premium Elevators Brand Mark"
      className="relative flex h-full w-full cursor-pointer select-none items-center justify-center lg:justify-end p-0 touch-pan-y"
      style={{ perspective: "1200px" }}
    >
      {/* Subtle Architectural Hoistway Orbit Guides */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center lg:justify-end overflow-visible opacity-50">
        <svg
          viewBox="0 0 440 440"
          className="h-[125%] w-[125%] max-w-[480px] text-primary/15"
          fill="none"
          stroke="currentColor"
        >
          <circle
            ref={ring1Ref}
            cx="220"
            cy="220"
            r="180"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <circle
            ref={ring2Ref}
            cx="220"
            cy="220"
            r="135"
            strokeWidth="1"
            strokeDasharray="6 12"
          />
          <circle
            cx="220"
            cy="220"
            r="90"
            strokeWidth="0.5"
            className="text-primary/10"
          />
          {/* Subtle Hoistway vertical plumb-lines */}
          <line x1="220" y1="20" x2="220" y2="420" strokeWidth="0.5" className="text-primary/15" />
          <line x1="20" y1="220" x2="420" y2="220" strokeWidth="0.5" className="text-primary/10" />
        </svg>
      </div>

      {/* Floating 3D Animated Logo Core without any white background box */}
      <div
        ref={logoRef}
        className="relative z-10 flex items-center justify-center lg:justify-end"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Elevator Kinetic Vertical Ascent Scanning Ray */}
        <div
          ref={glowBeamRef}
          className="pointer-events-none absolute left-1/2 top-1/2 h-20 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-t from-transparent via-primary/15 to-transparent blur-md"
        />

        {/* Brand Logo with seamless blending (no white card / no square background) */}
        <img
          src={logo}
          alt="Premium Elevators Logo"
          width={440}
          height={300}
          className="h-auto max-h-[190px] w-auto max-w-[260px] object-contain mix-blend-multiply drop-shadow-sm transition-transform duration-300 sm:max-h-[250px] sm:max-w-[340px] md:max-h-[280px] md:max-w-[390px] lg:max-h-[320px] lg:max-w-[440px]"
        />
      </div>
    </div>
  );
}
