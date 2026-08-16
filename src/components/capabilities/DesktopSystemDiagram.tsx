import React, { useState, useCallback, useRef } from 'react';
import { motion, MotionValue, useTransform, useSpring } from 'framer-motion';
import { CAPABILITY_NODES, SYSTEM_INTERSECTION_STATEMENT } from './capabilitiesData';

interface DesktopSystemDiagramProps {
  scrollProgress: MotionValue<number>;
  isReducedMotion: boolean;
}

// Spatial coordinates in 1200 x 720 SVG viewBox
const NODE_COORDS = {
  ai: { cx: 260, cy: 200, color: '#E64A24' },
  software: { cx: 940, cy: 340, color: '#B82024' },
  product: { cx: 380, cy: 560, color: '#F27A32' },
  centroid: { cx: 520, cy: 370, color: '#F3EDE3' },
};

export const DesktopSystemDiagram: React.FC<DesktopSystemDiagramProps> = ({
  scrollProgress,
  isReducedMotion,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position in SVG coordinates (0..1200, 0..720)
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 1200;
    const y = ((e.clientY - rect.top) / rect.height) * 720;
    setMousePos({ x, y });
  }, [isReducedMotion]);

  const handleMouseLeave = useCallback(() => {
    setMousePos(null);
  }, []);

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollProgress, { stiffness: 90, damping: 22 });

  // Camera scale & tilt transforms
  const cameraScale = useTransform(smoothProgress, [0.0, 0.5, 0.9, 1.0], [0.96, 1.0, 1.02, 1.0]);
  const cameraRotateX = useTransform(smoothProgress, [0.0, 0.5, 1.0], [1.5, 0, 0]);

  // Motion values
  const gridOpacityVal = useTransform(smoothProgress, [0.0, 0.1, 0.9, 1.0], [0.2, 0.6, 0.6, 0.3]);

  const aiOpacityVal = useTransform(smoothProgress, [0.08, 0.18], [0.2, 1]);
  const aiPathLengthVal = useTransform(smoothProgress, [0.18, 0.40], [0, 1]);
  const aiTermsOpacityVal = useTransform(smoothProgress, [0.22, 0.38], [0, 1]);

  const swOpacityVal = useTransform(smoothProgress, [0.32, 0.44], [0.2, 1]);
  const swPathLengthVal = useTransform(smoothProgress, [0.42, 0.65], [0, 1]);
  const swTermsOpacityVal = useTransform(smoothProgress, [0.46, 0.62], [0, 1]);

  const prodOpacityVal = useTransform(smoothProgress, [0.58, 0.68], [0.2, 1]);
  const prodPathLengthVal = useTransform(smoothProgress, [0.66, 0.85], [0, 1]);
  const prodTermsOpacityVal = useTransform(smoothProgress, [0.70, 0.84], [0, 1]);

  const intersectionOpacityVal = useTransform(smoothProgress, [0.85, 0.96], [0, 1]);
  const intersectionGlowVal = useTransform(smoothProgress, [0.85, 1.0], [0, 1]);

  const centroidLineOpacityVal = useTransform(intersectionOpacityVal, (v: number) => v * 0.7);

  // Resolved motion or static values
  const aiOpacity = isReducedMotion ? 1 : aiOpacityVal;
  const aiPathLength = isReducedMotion ? 1 : aiPathLengthVal;
  const aiTermsOpacity = isReducedMotion ? 1 : aiTermsOpacityVal;

  const swOpacity = isReducedMotion ? 1 : swOpacityVal;
  const swPathLength = isReducedMotion ? 1 : swPathLengthVal;
  const swTermsOpacity = isReducedMotion ? 1 : swTermsOpacityVal;

  const prodOpacity = isReducedMotion ? 1 : prodOpacityVal;
  const prodPathLength = isReducedMotion ? 1 : prodPathLengthVal;
  const prodTermsOpacity = isReducedMotion ? 1 : prodTermsOpacityVal;

  const intersectionOpacity = isReducedMotion ? 1 : intersectionOpacityVal;
  const intersectionGlow = isReducedMotion ? 0.6 : intersectionGlowVal;
  const centroidLineOpacity = isReducedMotion ? 0.7 : centroidLineOpacityVal;

  // Distance helper for cursor interaction
  const getProximity = (nodeX: number, nodeY: number) => {
    if (!mousePos) return 0;
    const dx = mousePos.x - nodeX;
    const dy = mousePos.y - nodeY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxRadius = 220;
    if (dist > maxRadius) return 0;
    return 1 - dist / maxRadius; // 0 to 1
  };

  const aiProx = getProximity(NODE_COORDS.ai.cx, NODE_COORDS.ai.cy);
  const swProx = getProximity(NODE_COORDS.software.cx, NODE_COORDS.software.cy);
  const prodProx = getProximity(NODE_COORDS.product.cx, NODE_COORDS.product.cy);

  const aiData = CAPABILITY_NODES[0];
  const swData = CAPABILITY_NODES[1];
  const prodData = CAPABILITY_NODES[3];

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        maxWidth: '1200px',
        maxHeight: '720px',
        margin: '0 auto',
        userSelect: 'none',
      }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          scale: isReducedMotion ? 1 : cameraScale,
          rotateX: isReducedMotion ? 0 : cameraRotateX,
          transformPerspective: 1000,
        }}
      >
        <svg
          viewBox="0 0 1200 720"
          style={{
            width: '100%',
            height: '100%',
            overflow: 'visible',
            display: 'block',
          }}
        >
          <defs>
            {/* Ambient Radial Gradient for System Intersection */}
            <radialGradient id="systemIntersectionGlow" cx="43%" cy="51%" r="50%">
              <stop offset="0%" stopColor="#E64A24" stopOpacity="0.25" />
              <stop offset="45%" stopColor="#B82024" stopOpacity="0.15" />
              <stop offset="80%" stopColor="#F27A32" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#09080A" stopOpacity="0" />
            </radialGradient>

            {/* Linear Gradients for Trajectory Paths */}
            <linearGradient id="grad_ai_sw" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E64A24" />
              <stop offset="100%" stopColor="#B82024" />
            </linearGradient>

            <linearGradient id="grad_sw_prod" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#B82024" />
              <stop offset="100%" stopColor="#F27A32" />
            </linearGradient>

            <linearGradient id="grad_prod_ai" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#F27A32" />
              <stop offset="100%" stopColor="#E64A24" />
            </linearGradient>
          </defs>

          {/* Background Technical Alignment Grid */}
          <motion.g style={{ opacity: isReducedMotion ? 0.4 : gridOpacityVal }}>
            {/* Horizontal & Vertical Guide Lines */}
            <line x1="60" y1="200" x2="1140" y2="200" stroke="rgba(243, 237, 227, 0.04)" strokeDasharray="4 8" />
            <line x1="60" y1="340" x2="1140" y2="340" stroke="rgba(243, 237, 227, 0.04)" strokeDasharray="4 8" />
            <line x1="60" y1="560" x2="1140" y2="560" stroke="rgba(243, 237, 227, 0.04)" strokeDasharray="4 8" />

            <line x1="260" y1="60" x2="260" y2="660" stroke="rgba(243, 237, 227, 0.04)" strokeDasharray="4 8" />
            <line x1="520" y1="60" x2="520" y2="660" stroke="rgba(243, 237, 227, 0.04)" strokeDasharray="4 8" />
            <line x1="940" y1="60" x2="940" y2="660" stroke="rgba(243, 237, 227, 0.04)" strokeDasharray="4 8" />

            {/* Technical System Coordinates Header Annotation */}
            <text x="60" y="45" fill="#B9ADA1" fontSize="10" fontFamily="Inter" letterSpacing="0.25em" opacity="0.5">
              SYS // ARCHITECTURE_MAP [CONNECTED NETWORK]
            </text>
            <text x="1140" y="45" textAnchor="end" fill="#B9ADA1" fontSize="10" fontFamily="Inter" letterSpacing="0.2em" opacity="0.5">
              NODE_COUNT: 03 // STATUS: ACTIVE
            </text>
          </motion.g>

          {/* System Intersection Ambient Glow */}
          <motion.circle
            cx={NODE_COORDS.centroid.cx}
            cy={NODE_COORDS.centroid.cy}
            r="320"
            fill="url(#systemIntersectionGlow)"
            style={{ opacity: intersectionGlow }}
          />

          {/* ========================================================
              TRAJECTORY CONNECTIONS (Web / Tension SVG Paths)
             ======================================================== */}

          {/* Faint Guide Paths */}
          <g stroke="rgba(243, 237, 227, 0.08)" strokeWidth="1" fill="none">
            <path d="M 260 200 C 500 170, 780 220, 940 340" />
            <path d="M 940 340 C 900 480, 620 580, 380 560" />
            <path d="M 380 560 C 200 460, 180 290, 260 200" fill="none" />
            <path d="M 260 200 L 520 370" strokeDasharray="2 4" />
            <path d="M 940 340 L 520 370" strokeDasharray="2 4" />
            <path d="M 380 560 L 520 370" strokeDasharray="2 4" />
          </g>

          {/* Active Animated Path 01: AI ➔ SOFTWARE */}
          <motion.path
            d="M 260 200 C 500 170, 780 220, 940 340"
            fill="none"
            stroke="url(#grad_ai_sw)"
            strokeWidth={2 + aiProx * 1.5}
            style={{
              pathLength: aiPathLength,
              filter: aiProx > 0.2 ? 'drop-shadow(0 0 8px #E64A24)' : 'none',
            }}
          />

          {/* Active Animated Path 02: SOFTWARE ➔ PRODUCT */}
          <motion.path
            d="M 940 340 C 900 480, 620 580, 380 560"
            fill="none"
            stroke="url(#grad_sw_prod)"
            strokeWidth={2 + swProx * 1.5}
            style={{
              pathLength: swPathLength,
              filter: swProx > 0.2 ? 'drop-shadow(0 0 8px #B82024)' : 'none',
            }}
          />

          {/* Active Animated Interconnecting Path 03: PRODUCT ➔ AI */}
          <motion.path
            d="M 380 560 C 200 460, 180 290, 260 200"
            fill="none"
            stroke="url(#grad_prod_ai)"
            strokeWidth={1.5 + prodProx * 1.5}
            style={{
              pathLength: prodPathLength,
              filter: prodProx > 0.2 ? 'drop-shadow(0 0 8px #F27A32)' : 'none',
            }}
          />

          {/* Centroid Radial Tension Convergence Lines */}
          <motion.path
            d="M 260 200 L 520 370"
            fill="none"
            stroke="#E64A24"
            strokeWidth="1"
            strokeDasharray="4 6"
            style={{ opacity: centroidLineOpacity }}
          />
          <motion.path
            d="M 940 340 L 520 370"
            fill="none"
            stroke="#B82024"
            strokeWidth="1"
            strokeDasharray="4 6"
            style={{ opacity: centroidLineOpacity }}
          />
          <motion.path
            d="M 380 560 L 520 370"
            fill="none"
            stroke="#F27A32"
            strokeWidth="1"
            strokeDasharray="4 6"
            style={{ opacity: centroidLineOpacity }}
          />

          {/* ========================================================
              SPATIAL ANCHOR NODES
             ======================================================== */}

          {/* ----------------- NODE 01: AI ----------------- */}
          <motion.g style={{ opacity: aiOpacity }}>
            {/* Outer Interactive Ring */}
            <circle
              cx={NODE_COORDS.ai.cx}
              cy={NODE_COORDS.ai.cy}
              r={16 + aiProx * 8}
              fill="none"
              stroke="#E64A24"
              strokeWidth="1"
              strokeDasharray="4 4"
              style={{ opacity: 0.6 + aiProx * 0.4 }}
            />
            {/* Outer Thin Solid Ring */}
            <circle
              cx={NODE_COORDS.ai.cx}
              cy={NODE_COORDS.ai.cy}
              r={26 + aiProx * 6}
              fill="none"
              stroke="rgba(230, 74, 36, 0.25)"
              strokeWidth="1"
            />
            {/* Crosshair Ticks */}
            <line x1={NODE_COORDS.ai.cx - 24} y1={NODE_COORDS.ai.cy} x2={NODE_COORDS.ai.cx - 10} y2={NODE_COORDS.ai.cy} stroke="#E64A24" strokeWidth="1" />
            <line x1={NODE_COORDS.ai.cx + 10} y1={NODE_COORDS.ai.cy} x2={NODE_COORDS.ai.cx + 24} y2={NODE_COORDS.ai.cy} stroke="#E64A24" strokeWidth="1" />
            <line x1={NODE_COORDS.ai.cx} y1={NODE_COORDS.ai.cy - 24} x2={NODE_COORDS.ai.cx} y2={NODE_COORDS.ai.cy - 10} stroke="#E64A24" strokeWidth="1" />
            <line x1={NODE_COORDS.ai.cx} y1={NODE_COORDS.ai.cy + 10} x2={NODE_COORDS.ai.cx} y2={NODE_COORDS.ai.cy + 24} stroke="#E64A24" strokeWidth="1" />
            {/* Core Solid Dot */}
            <circle cx={NODE_COORDS.ai.cx} cy={NODE_COORDS.ai.cy} r={5 + aiProx * 2} fill="#E64A24" />

            {/* Display Title & Subtitle */}
            <g transform="translate(60, 115)">
              <text fill="#E64A24" fontSize="12" fontFamily="Inter" fontWeight="700" letterSpacing="0.25em">
                {aiData.number} / {aiData.subtitle}
              </text>
              <text fill="#F3EDE3" fontSize="42" fontFamily="Homoarakhn" letterSpacing="0.04em" y="38">
                {aiData.title}
              </text>
            </g>
          </motion.g>

          {/* AI Supporting Capability Terms along Leader Lines */}
          <motion.g style={{ opacity: aiTermsOpacity }}>
            {/* Term 1: LLM Applications */}
            <line x1="260" y1="200" x2="190" y2="250" stroke="rgba(230, 74, 36, 0.4)" strokeWidth="1" />
            <line x1="190" y1="250" x2="70" y2="250" stroke="rgba(230, 74, 36, 0.4)" strokeWidth="1" />
            <circle cx="70" cy="250" r="2" fill="#E64A24" />
            <text x="75" y="246" fill={aiProx > 0.3 ? '#F3EDE3' : '#B9ADA1'} fontSize="11" fontFamily="Inter" fontWeight="600" letterSpacing="0.08em">
              LLM Applications
            </text>

            {/* Term 2: Generative AI */}
            <line x1="260" y1="200" x2="320" y2="140" stroke="rgba(230, 74, 36, 0.4)" strokeWidth="1" />
            <line x1="320" y1="140" x2="380" y2="140" stroke="rgba(230, 74, 36, 0.4)" strokeWidth="1" />
            <circle cx="380" cy="140" r="2" fill="#E64A24" />
            <text x="386" y="144" fill={aiProx > 0.3 ? '#F3EDE3' : '#B9ADA1'} fontSize="11" fontFamily="Inter" fontWeight="600" letterSpacing="0.08em">
              Generative AI
            </text>

            {/* Term 3: AI Agents */}
            <line x1="260" y1="200" x2="340" y2="220" stroke="rgba(230, 74, 36, 0.4)" strokeWidth="1" />
            <line x1="340" y1="220" x2="410" y2="220" stroke="rgba(230, 74, 36, 0.4)" strokeWidth="1" />
            <circle cx="410" cy="220" r="2" fill="#E64A24" />
            <text x="416" y="224" fill={aiProx > 0.3 ? '#F3EDE3' : '#B9ADA1'} fontSize="11" fontFamily="Inter" fontWeight="600" letterSpacing="0.08em">
              AI Agents
            </text>

            {/* Term 4: AI Automation */}
            <line x1="260" y1="200" x2="190" y2="300" stroke="rgba(230, 74, 36, 0.4)" strokeWidth="1" />
            <line x1="190" y1="300" x2="100" y2="300" stroke="rgba(230, 74, 36, 0.4)" strokeWidth="1" />
            <circle cx="100" cy="300" r="2" fill="#E64A24" />
            <text x="105" y="296" fill={aiProx > 0.3 ? '#F3EDE3' : '#B9ADA1'} fontSize="11" fontFamily="Inter" fontWeight="600" letterSpacing="0.08em">
              AI Automation
            </text>

            {/* Term 5: Computer Vision */}
            <line x1="260" y1="200" x2="300" y2="280" stroke="rgba(230, 74, 36, 0.4)" strokeWidth="1" />
            <line x1="300" y1="280" x2="330" y2="280" stroke="rgba(230, 74, 36, 0.4)" strokeWidth="1" />
            <circle cx="330" cy="280" r="2" fill="#E64A24" />
            <text x="336" y="284" fill={aiProx > 0.3 ? '#F3EDE3' : '#B9ADA1'} fontSize="11" fontFamily="Inter" fontWeight="600" letterSpacing="0.08em">
              Computer Vision
            </text>

            {/* Term 6: AI-Assisted Development */}
            <line x1="260" y1="200" x2="370" y2="180" stroke="rgba(230, 74, 36, 0.4)" strokeWidth="1" />
            <line x1="370" y1="180" x2="430" y2="180" stroke="rgba(230, 74, 36, 0.4)" strokeWidth="1" />
            <circle cx="430" cy="180" r="2" fill="#E64A24" />
            <text x="436" y="184" fill={aiProx > 0.3 ? '#F3EDE3' : '#B9ADA1'} fontSize="11" fontFamily="Inter" fontWeight="600" letterSpacing="0.08em">
              AI-Assisted Development
            </text>
          </motion.g>

          {/* ----------------- NODE 02: SOFTWARE ----------------- */}
          <motion.g style={{ opacity: swOpacity }}>
            {/* Outer Interactive Ring */}
            <circle
              cx={NODE_COORDS.software.cx}
              cy={NODE_COORDS.software.cy}
              r={16 + swProx * 8}
              fill="none"
              stroke="#B82024"
              strokeWidth="1"
              strokeDasharray="4 4"
              style={{ opacity: 0.6 + swProx * 0.4 }}
            />
            <circle
              cx={NODE_COORDS.software.cx}
              cy={NODE_COORDS.software.cy}
              r={26 + swProx * 6}
              fill="none"
              stroke="rgba(184, 32, 36, 0.25)"
              strokeWidth="1"
            />
            {/* Crosshair Ticks */}
            <line x1={NODE_COORDS.software.cx - 24} y1={NODE_COORDS.software.cy} x2={NODE_COORDS.software.cx - 10} y2={NODE_COORDS.software.cy} stroke="#B82024" strokeWidth="1" />
            <line x1={NODE_COORDS.software.cx + 10} y1={NODE_COORDS.software.cy} x2={NODE_COORDS.software.cx + 24} y2={NODE_COORDS.software.cy} stroke="#B82024" strokeWidth="1" />
            <line x1={NODE_COORDS.software.cx} y1={NODE_COORDS.software.cy - 24} x2={NODE_COORDS.software.cx} y2={NODE_COORDS.software.cy - 10} stroke="#B82024" strokeWidth="1" />
            <line x1={NODE_COORDS.software.cx} y1={NODE_COORDS.software.cy + 10} x2={NODE_COORDS.software.cx} y2={NODE_COORDS.software.cy + 24} stroke="#B82024" strokeWidth="1" />
            {/* Core Dot */}
            <circle cx={NODE_COORDS.software.cx} cy={NODE_COORDS.software.cy} r={5 + swProx * 2} fill="#B82024" />

            {/* Display Title & Subtitle */}
            <g transform="translate(660, 180)">
              <text fill="#B82024" fontSize="12" fontFamily="Inter" fontWeight="700" letterSpacing="0.25em">
                {swData.number} / {swData.subtitle}
              </text>
              <text fill="#F3EDE3" fontSize="42" fontFamily="Homoarakhn" letterSpacing="0.04em" y="38">
                {swData.title}
              </text>
            </g>
          </motion.g>

          {/* Software Supporting Areas & Technical Annotations */}
          <motion.g style={{ opacity: swTermsOpacity }}>
            {/* Supporting Areas */}
            {/* Area 1: Frontend Development */}
            <line x1="940" y1="340" x2="975" y2="260" stroke="rgba(184, 32, 36, 0.4)" strokeWidth="1" />
            <line x1="975" y1="260" x2="1000" y2="260" stroke="rgba(184, 32, 36, 0.4)" strokeWidth="1" />
            <circle cx="1000" cy="260" r="2" fill="#B82024" />
            <text x="1006" y="264" fill={swProx > 0.3 ? '#F3EDE3' : '#B9ADA1'} fontSize="11" fontFamily="Inter" fontWeight="600" letterSpacing="0.08em">
              Frontend Development
            </text>

            {/* Area 2: Backend Development */}
            <line x1="940" y1="340" x2="980" y2="310" stroke="rgba(184, 32, 36, 0.4)" strokeWidth="1" />
            <line x1="980" y1="310" x2="1010" y2="310" stroke="rgba(184, 32, 36, 0.4)" strokeWidth="1" />
            <circle cx="1010" cy="310" r="2" fill="#B82024" />
            <text x="1016" y="314" fill={swProx > 0.3 ? '#F3EDE3' : '#B9ADA1'} fontSize="11" fontFamily="Inter" fontWeight="600" letterSpacing="0.08em">
              Backend Development
            </text>

            {/* Area 3: Full-Stack Development */}
            <line x1="940" y1="340" x2="975" y2="380" stroke="rgba(184, 32, 36, 0.4)" strokeWidth="1" />
            <line x1="975" y1="380" x2="1000" y2="380" stroke="rgba(184, 32, 36, 0.4)" strokeWidth="1" />
            <circle cx="1000" cy="380" r="2" fill="#B82024" />
            <text x="1006" y="384" fill={swProx > 0.3 ? '#F3EDE3' : '#B9ADA1'} fontSize="11" fontFamily="Inter" fontWeight="600" letterSpacing="0.08em">
              Full-Stack Development
            </text>

            {/* Area 4: Mobile Development */}
            <line x1="940" y1="340" x2="850" y2="420" stroke="rgba(184, 32, 36, 0.4)" strokeWidth="1" />
            <line x1="850" y1="420" x2="790" y2="420" stroke="rgba(184, 32, 36, 0.4)" strokeWidth="1" />
            <circle cx="790" cy="420" r="2" fill="#B82024" />
            <text x="660" y="424" fill={swProx > 0.3 ? '#F3EDE3' : '#B9ADA1'} fontSize="11" fontFamily="Inter" fontWeight="600" letterSpacing="0.08em">
              Mobile Development
            </text>

            {/* Area 5: Application / API Development */}
            <line x1="940" y1="340" x2="830" y2="280" stroke="rgba(184, 32, 36, 0.4)" strokeWidth="1" />
            <line x1="830" y1="280" x2="740" y2="280" stroke="rgba(184, 32, 36, 0.4)" strokeWidth="1" />
            <circle cx="740" cy="280" r="2" fill="#B82024" />
            <text x="525" y="284" fill={swProx > 0.3 ? '#F3EDE3' : '#B9ADA1'} fontSize="11" fontFamily="Inter" fontWeight="600" letterSpacing="0.08em">
              Application / API Development
            </text>

            {/* Subtle Known Technologies Annotations */}
            <g transform="translate(730, 455)">
              <rect x="0" y="0" width="240" height="42" fill="rgba(9, 8, 10, 0.75)" stroke="rgba(184, 32, 36, 0.2)" rx="2" />
              <text x="12" y="16" fill="#B82024" fontSize="9" fontFamily="Inter" fontWeight="700" letterSpacing="0.15em">
                CONFIRMED TECH STACK
              </text>
              <text x="12" y="31" fill="#B9ADA1" fontSize="10" fontFamily="Inter" letterSpacing="0.08em">
                {swData.technologies?.join('  ·  ')}
              </text>
            </g>
          </motion.g>

          {/* ----------------- NODE 03: PRODUCT ----------------- */}
          <motion.g style={{ opacity: prodOpacity }}>
            {/* Outer Interactive Ring */}
            <circle
              cx={NODE_COORDS.product.cx}
              cy={NODE_COORDS.product.cy}
              r={16 + prodProx * 8}
              fill="none"
              stroke="#F27A32"
              strokeWidth="1"
              strokeDasharray="4 4"
              style={{ opacity: 0.6 + prodProx * 0.4 }}
            />
            <circle
              cx={NODE_COORDS.product.cx}
              cy={NODE_COORDS.product.cy}
              r={26 + prodProx * 6}
              fill="none"
              stroke="rgba(242, 122, 50, 0.25)"
              strokeWidth="1"
            />
            {/* Crosshair Ticks */}
            <line x1={NODE_COORDS.product.cx - 24} y1={NODE_COORDS.product.cy} x2={NODE_COORDS.product.cx - 10} y2={NODE_COORDS.product.cy} stroke="#F27A32" strokeWidth="1" />
            <line x1={NODE_COORDS.product.cx + 10} y1={NODE_COORDS.product.cy} x2={NODE_COORDS.product.cx + 24} y2={NODE_COORDS.product.cy} stroke="#F27A32" strokeWidth="1" />
            <line x1={NODE_COORDS.product.cx} y1={NODE_COORDS.product.cy - 24} x2={NODE_COORDS.product.cx} y2={NODE_COORDS.product.cy - 10} stroke="#F27A32" strokeWidth="1" />
            <line x1={NODE_COORDS.product.cx} y1={NODE_COORDS.product.cy + 10} x2={NODE_COORDS.product.cx} y2={NODE_COORDS.product.cy + 24} stroke="#F27A32" strokeWidth="1" />
            {/* Core Dot */}
            <circle cx={NODE_COORDS.product.cx} cy={NODE_COORDS.product.cy} r={5 + prodProx * 2} fill="#F27A32" />

            {/* Display Title & Subtitle */}
            <g transform="translate(60, 480)">
              <text fill="#F27A32" fontSize="12" fontFamily="Inter" fontWeight="700" letterSpacing="0.25em">
                {prodData.number} / {prodData.subtitle}
              </text>
              <text fill="#F3EDE3" fontSize="42" fontFamily="Homoarakhn" letterSpacing="0.04em" y="38">
                {prodData.title}
              </text>
            </g>
          </motion.g>

          {/* Product Supporting Concepts Labels */}
          <motion.g style={{ opacity: prodTermsOpacity }}>
            {/* Concept 1: SaaS */}
            <line x1="380" y1="560" x2="290" y2="630" stroke="rgba(242, 122, 50, 0.4)" strokeWidth="1" />
            <line x1="290" y1="630" x2="230" y2="630" stroke="rgba(242, 122, 50, 0.4)" strokeWidth="1" />
            <circle cx="230" cy="630" r="2" fill="#F27A32" />
            <text x="188" y="634" fill={prodProx > 0.3 ? '#F3EDE3' : '#B9ADA1'} fontSize="11" fontFamily="Inter" fontWeight="600" letterSpacing="0.08em">
              SaaS
            </text>

            {/* Concept 2: Web Applications */}
            <line x1="380" y1="560" x2="460" y2="500" stroke="rgba(242, 122, 50, 0.4)" strokeWidth="1" />
            <line x1="460" y1="500" x2="520" y2="500" stroke="rgba(242, 122, 50, 0.4)" strokeWidth="1" />
            <circle cx="520" cy="500" r="2" fill="#F27A32" />
            <text x="526" y="504" fill={prodProx > 0.3 ? '#F3EDE3' : '#B9ADA1'} fontSize="11" fontFamily="Inter" fontWeight="600" letterSpacing="0.08em">
              Web Applications
            </text>

            {/* Concept 3: Mobile Applications */}
            <line x1="380" y1="560" x2="480" y2="560" stroke="rgba(242, 122, 50, 0.4)" strokeWidth="1" />
            <line x1="480" y1="560" x2="540" y2="560" stroke="rgba(242, 122, 50, 0.4)" strokeWidth="1" />
            <circle cx="540" cy="560" r="2" fill="#F27A32" />
            <text x="546" y="564" fill={prodProx > 0.3 ? '#F3EDE3' : '#B9ADA1'} fontSize="11" fontFamily="Inter" fontWeight="600" letterSpacing="0.08em">
              Mobile Applications
            </text>

            {/* Concept 4: Product Architecture */}
            <line x1="380" y1="560" x2="380" y2="650" stroke="rgba(242, 122, 50, 0.4)" strokeWidth="1" />
            <line x1="380" y1="650" x2="320" y2="650" stroke="rgba(242, 122, 50, 0.4)" strokeWidth="1" />
            <circle cx="320" cy="650" r="2" fill="#F27A32" />
            <text x="180" y="654" fill={prodProx > 0.3 ? '#F3EDE3' : '#B9ADA1'} fontSize="11" fontFamily="Inter" fontWeight="600" letterSpacing="0.08em">
              Product Architecture
            </text>

            {/* Concept 5: AI-powered Products */}
            <line x1="380" y1="560" x2="470" y2="620" stroke="rgba(242, 122, 50, 0.4)" strokeWidth="1" />
            <line x1="470" y1="620" x2="520" y2="620" stroke="rgba(242, 122, 50, 0.4)" strokeWidth="1" />
            <circle cx="520" cy="620" r="2" fill="#F27A32" />
            <text x="526" y="624" fill={prodProx > 0.3 ? '#F3EDE3' : '#B9ADA1'} fontSize="11" fontFamily="Inter" fontWeight="600" letterSpacing="0.08em">
              AI-powered Products
            </text>

            {/* Subtle OSS Reference */}
            <g transform="translate(60, 615)">
              <rect x="0" y="0" width="195" height="28" fill="rgba(9, 8, 10, 0.75)" stroke="rgba(242, 122, 50, 0.25)" rx="2" />
              <text x="10" y="18" fill="#F27A32" fontSize="9" fontFamily="Inter" fontWeight="700" letterSpacing="0.12em">
                {prodData.ossReference}
              </text>
            </g>
          </motion.g>

          {/* ========================================================
              SYSTEM INTERSECTION CENTROID (AI × SOFTWARE × PRODUCT)
             ======================================================== */}
          <motion.g style={{ opacity: intersectionOpacity }}>
            {/* Centroid Anchor Crosshair */}
            <circle
              cx={NODE_COORDS.centroid.cx}
              cy={NODE_COORDS.centroid.cy}
              r="22"
              fill="none"
              stroke="#F3EDE3"
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity="0.5"
            />
            <circle cx={NODE_COORDS.centroid.cx} cy={NODE_COORDS.centroid.cy} r="4" fill="#F3EDE3" />

            {/* System Intersection Badge & Visual Statement */}
            <g transform={`translate(${NODE_COORDS.centroid.cx}, ${NODE_COORDS.centroid.cy - 38})`}>
              {/* Outer Badge Border */}
              <rect
                x="-140"
                y="-18"
                width="280"
                height="36"
                fill="rgba(9, 8, 10, 0.9)"
                stroke="url(#systemIntersectionGlow)"
                strokeWidth="1.5"
                rx="4"
              />
              <text
                x="0"
                y="6"
                textAnchor="middle"
                fill="#F3EDE3"
                fontSize="22"
                fontFamily="Homoarakhn"
                letterSpacing="0.15em"
              >
                {SYSTEM_INTERSECTION_STATEMENT}
              </text>
            </g>

            {/* Intersection Subtitle */}
            <text
              x={NODE_COORDS.centroid.cx}
              y={NODE_COORDS.centroid.cy + 34}
              textAnchor="middle"
              fill="#B9ADA1"
              fontSize="10"
              fontFamily="Inter"
              fontWeight="600"
              letterSpacing="0.2em"
              opacity="0.8"
            >
              PROFESSIONAL ENGINEERING INTERSECTION
            </text>
          </motion.g>
        </svg>
      </motion.div>
    </div>
  );
};
