/**
 * Ahmed Al Malah Portfolio — JavaScript Design Tokens
 * Exported for type-safe usage in Framer Motion, layer orchestration, and web animations.
 */

export const COLORS = {
  deepBlack: '#09080A',
  deepCrimson: '#7A1014',
  cinematicRed: '#B82024',
  hotOrange: '#E64A24',
  warmOrange: '#F27A32',
  creamWhite: '#F3EDE3',
  mutedBeige: '#B9ADA1',
} as const;

export const TYPOGRAPHY = {
  fontDisplay: "'Homoarakhn', sans-serif",
  fontDisplayAlt: "'CombackHome', sans-serif",
  fontArabic: "'ZainMob', system-ui, sans-serif",
  fontBody: "'Inter', system-ui, -apple-system, sans-serif",
} as const;

export const EASINGS = {
  cinematicOut: [0.16, 1, 0.3, 1],
  cinematicInOut: [0.65, 0, 0.35, 1],
  elastic: [0.34, 1.56, 0.64, 1],
} as const;

export const HERO_LAYER_Z_INDEX = {
  layer1Atmosphere: 10,
  layer2Environment: 20,
  layer3Character: 30,
  layer4Typography: 40,
  layer5Particles: 50,
  layer6MaskTransition: 60,
  layer7AhmedFace: 70,
  layer8ForegroundEffects: 80,
  uiOverlay: 100,
} as const;
