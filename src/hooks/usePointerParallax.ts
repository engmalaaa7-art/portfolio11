import { useEffect, useState } from 'react';
import { useMotionValue, useSpring, MotionValue } from 'framer-motion';

export interface PointerParallaxState {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  rawX: MotionValue<number>;
  rawY: MotionValue<number>;
  isTouchDevice: boolean;
  prefersReducedMotion: boolean;
}

export function usePointerParallax(): PointerParallaxState {
  const rawX: MotionValue<number> = useMotionValue(0);
  const rawY: MotionValue<number> = useMotionValue(0);

  // Smooth springs for high-performance 60fps movement without re-rendering React
  const springConfig = { stiffness: 90, damping: 22, mass: 0.5 };
  const mouseX: MotionValue<number> = useSpring(rawX, springConfig);
  const mouseY: MotionValue<number> = useSpring(rawY, springConfig);

  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    motionQuery.addEventListener('change', handleMotionChange);

    // Check touch capabilities
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };
    checkTouch();

    // Mouse move handler (normalized from -1 to 1)
    const handleMouseMove = (e: MouseEvent) => {
      if (motionQuery.matches) return;
      const { innerWidth, innerHeight } = window;
      const normalizedX = (e.clientX / innerWidth) * 2 - 1;
      const normalizedY = (e.clientY / innerHeight) * 2 - 1;

      rawX.set(normalizedX);
      rawY.set(normalizedY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [rawX, rawY]);

  return {
    mouseX,
    mouseY,
    rawX,
    rawY,
    isTouchDevice,
    prefersReducedMotion,
  };
}
