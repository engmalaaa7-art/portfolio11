import { useEffect, useState, RefObject } from 'react';
import { useScroll, MotionValue, useSpring } from 'framer-motion';

export interface HeroScrollProgressState {
  scrollProgress: MotionValue<number>;
  smoothProgress: MotionValue<number>;
  rawProgress: number;
}

export function useHeroScrollProgress(targetRef: RefObject<HTMLElement | null>): HeroScrollProgressState {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  const [rawProgress, setRawProgress] = useState(0);

  // Smooth spring for fluid scroll transitions
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      setRawProgress(v);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return {
    scrollProgress: scrollYProgress,
    smoothProgress,
    rawProgress,
  };
}
