/**
 * Ahmed Al Malah Portfolio — JavaScript Design Tokens
 * Updated for the Midnight Obsidian × Cobalt × Solar Amber × Electric Cyan Visual Identity.
 */

export const COLORS = {
  // Midnight Obsidian & Surfaces
  canvas: '#070A10',
  surfaceBase: '#0D1322',
  surfaceCard: 'rgba(17, 24, 39, 0.72)',
  surfaceHover: 'rgba(26, 37, 60, 0.85)',
  surfaceGlass: 'rgba(13, 19, 34, 0.78)',

  // Cobalt Depth
  cobaltLight: '#1D4ED8',
  cobaltDeep: '#14214B',
  cobaltGlow: 'rgba(29, 78, 216, 0.45)',

  // Solar Amber (Visual Anchor)
  solarAmber: '#F58A07',
  solarAmberDark: '#D97706',
  solarGlow: 'rgba(245, 138, 7, 0.35)',

  // Electric Cyan (Signature Script & Accents)
  electricCyan: '#38BDF8',
  electricCyanBright: '#00C2FF',
  cyanGlow: 'rgba(56, 189, 248, 0.35)',

  // Text & Neutrals
  textPrimary: '#F8FAFC',
  textSecondary: '#CBD5E1',
  textMuted: '#64748B',

  // Backward compatibility keys
  deepBlack: '#070A10',
  deepCrimson: '#131C38',
  cinematicRed: '#1D4ED8',
  hotOrange: '#F58A07',
  warmOrange: '#F58A07',
  creamWhite: '#F8FAFC',
  mutedBeige: '#CBD5E1',
} as const;

export const TYPOGRAPHY = {
  fontDisplay: "'Syne', 'Homoarakhn', sans-serif",
  fontDisplayAlt: "'Plus Jakarta Sans', 'Syne', sans-serif",
  fontArabicDisplay: "'Alexandria', 'ZainMob', system-ui, sans-serif",
  fontScript: "'Caveat', cursive, sans-serif",
  fontArabicScript: "'Alexandria', 'ZainMob', cursive, sans-serif",
  fontArabic: "'Alexandria', 'ZainMob', system-ui, sans-serif",
  fontBody: "'Plus Jakarta Sans', 'Inter', system-ui, -apple-system, sans-serif",
  fontMono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
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
