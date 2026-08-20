import { useRef, useEffect, useCallback } from 'react';
import { useMotionValue, useSpring, MotionValue } from 'framer-motion';

export interface LiquidRevealState {
  /** Springed lens X position as % of container width (0–100) */
  lensX: MotionValue<number>;
  /** Springed lens Y position as % of container height (0–100) */
  lensY: MotionValue<number>;
  /** Raw (un-springed) lens X — for direct DOM writes when spring is not desired */
  rawLensX: MotionValue<number>;
  rawLensY: MotionValue<number>;
  /** 0 = cursor outside / idle, 1 = cursor actively over hero */
  lensOpacity: MotionValue<number>;
  /** Whether the cursor is currently active in the hero zone */
  isActive: MotionValue<number>;
  /** Ref to attach to the Hero container element */
  containerRef: React.RefObject<HTMLElement | null>;
}

/**
 * useLiquidReveal
 *
 * Tracks cursor / touch position relative to the Hero container
 * and exposes springed MotionValues for the liquid lens position.
 *
 * NO React state updates on mouse move — 100% MotionValue pipeline.
 * Safe to use in requestAnimationFrame / direct DOM mutation contexts.
 */
export function useLiquidReveal(prefersReducedMotion = false): LiquidRevealState {
  const containerRef = useRef<HTMLElement | null>(null);

  // Raw cursor position as % of container (0–100)
  const rawLensX = useMotionValue(50);
  const rawLensY = useMotionValue(40);

  // Whether cursor is inside the hero zone (0 or 1, animated)
  const isActive = useMotionValue(0);
  const lensOpacity = useMotionValue(0);

  // Spring configuration — subtle inertia / trailing
  const springConfig = prefersReducedMotion
    ? { stiffness: 800, damping: 60, mass: 0.2 }
    : { stiffness: 120, damping: 18, mass: 0.6 };

  const lensX = useSpring(rawLensX, springConfig);
  const lensY = useSpring(rawLensY, springConfig);
  const springedOpacity = useSpring(lensOpacity, { stiffness: 80, damping: 20, mass: 0.5 });

  const getRelativePercent = useCallback(
    (clientX: number, clientY: number): { x: number; y: number } | null => {
      const el = containerRef.current;
      if (!el) return null;
      const rect = el.getBoundingClientRect();
      const x = ((clientX - rect.left) / rect.width) * 100;
      const y = ((clientY - rect.top) / rect.height) * 100;
      return { x, y };
    },
    []
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const pos = getRelativePercent(e.clientX, e.clientY);
      if (!pos) return;
      rawLensX.set(pos.x);
      rawLensY.set(pos.y);
      // Also activate on first move in case mouseenter didn't fire
      if (isActive.get() === 0) {
        isActive.set(1);
        lensOpacity.set(1);
      }
    };

    const handleMouseEnter = () => {
      isActive.set(1);
      lensOpacity.set(1);
    };

    const handleMouseLeave = () => {
      isActive.set(0);
      lensOpacity.set(0);
    };

    // Touch support for mobile
    const handleTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      const pos = getRelativePercent(touch.clientX, touch.clientY);
      if (!pos) return;
      rawLensX.set(pos.x);
      rawLensY.set(pos.y);
      isActive.set(1);
      lensOpacity.set(1);
    };

    const handleTouchEnd = () => {
      isActive.set(0);
      lensOpacity.set(0);
    };

    const el = containerRef.current;
    if (!el) return;

    el.addEventListener('mousemove', handleMouseMove, { passive: true });
    el.addEventListener('mouseenter', handleMouseEnter, { passive: true });
    el.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    el.addEventListener('touchmove', handleTouchMove, { passive: true });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });
    el.addEventListener('touchcancel', handleTouchEnd, { passive: true });

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('touchmove', handleTouchMove);
      el.removeEventListener('touchend', handleTouchEnd);
      el.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [getRelativePercent, rawLensX, rawLensY, isActive, lensOpacity]);

  return {
    lensX,
    lensY,
    rawLensX,
    rawLensY,
    lensOpacity: springedOpacity,
    isActive,
    containerRef,
  };
}
