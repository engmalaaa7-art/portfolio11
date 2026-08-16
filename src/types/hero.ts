/**
 * Hero Layer Architecture Types
 * Defines the 8-layer cinematic structure capable of independent scroll/pointer animation.
 */

export enum HeroLayerId {
  Layer1Atmosphere = 'layer-1-atmosphere',
  Layer2Environment = 'layer-2-environment',
  Layer3HeroCharacter = 'layer-3-hero-character',
  Layer4LargeTypography = 'layer-4-large-typography',
  Layer5ParticlesWeb = 'layer-5-particles-web',
  Layer6MaskTransition = 'layer-6-mask-transition',
  Layer7AhmedFace = 'layer-7-ahmed-face',
  Layer8ForegroundEffects = 'layer-8-foreground-effects',
}

export interface HeroLayerConfig {
  id: HeroLayerId;
  name: string;
  zIndex: number;
  interactive: boolean;
  parallaxFactor?: number;
  initialOpacity?: number;
  enabled?: boolean;
}

export type HeroLayerMap = Record<HeroLayerId, HeroLayerConfig>;
