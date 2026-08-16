import React from 'react';
import { motion } from 'framer-motion';
import { CAPABILITY_NODES, SYSTEM_INTERSECTION_STATEMENT } from './capabilitiesData';

export const MobileCapabilitiesChain: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-12)',
        position: 'relative',
        paddingLeft: 'var(--space-6)',
        width: '100%',
      }}
    >
      {/* Vertical Connecting Spine Line */}
      <div
        style={{
          position: 'absolute',
          left: '12px',
          top: '24px',
          bottom: '24px',
          width: '2px',
          background: 'linear-gradient(to bottom, #E64A24 0%, #B82024 50%, #F27A32 100%)',
          opacity: 0.5,
        }}
      />

      {CAPABILITY_NODES.map((node, idx) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: idx * 0.15 }}
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)',
          }}
        >
          {/* Spatial Anchor Point Node Dot */}
          <div
            style={{
              position: 'absolute',
              left: '-31px',
              top: '6px',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: node.accentColor,
              boxShadow: `0 0 10px ${node.accentColor}`,
            }}
          />

          {/* Subtitle & Sequence Index */}
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: node.accentColor,
              textTransform: 'uppercase',
            }}
          >
            {node.number} / {node.subtitle}
          </div>

          {/* Display Pillar Title */}
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 7vw, 3.2rem)',
              lineHeight: 0.9,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: 'var(--color-cream-white)',
              margin: 0,
            }}
          >
            {node.title}
          </h3>

          {/* Supporting Technical Capabilities List */}
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-xs)',
              fontWeight: 500,
              letterSpacing: '0.1em',
              lineHeight: 1.6,
              color: 'var(--color-muted-beige)',
              textTransform: 'uppercase',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 'var(--space-2)',
            }}
          >
            {node.supportingCapabilities.map((term, tIdx) => (
              <span
                key={term}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                }}
              >
                <span>{term}</span>
                {tIdx < node.supportingCapabilities.length - 1 && (
                  <span style={{ color: node.accentColor, opacity: 0.6 }}>·</span>
                )}
              </span>
            ))}
          </div>

          {/* Confirmed Technologies Tag (Software Node) */}
          {node.technologies && (
            <div
              style={{
                marginTop: 'var(--space-2)',
                padding: 'var(--space-3)',
                backgroundColor: 'rgba(9, 8, 10, 0.8)',
                border: `1px solid ${node.accentColor}33`,
                borderRadius: 'var(--border-radius-sm)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-1)',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  color: node.accentColor,
                }}
              >
                CONFIRMED TECH STACK
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-cream-white)',
                  letterSpacing: '0.08em',
                }}
              >
                {node.technologies.join('  ·  ')}
              </span>
            </div>
          )}

          {/* OSS Reference (Product Node) */}
          {node.ossReference && (
            <div
              style={{
                marginTop: 'var(--space-1)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                color: node.accentColor,
                letterSpacing: '0.1em',
              }}
            >
              <span style={{ opacity: 0.6 }}>REF //</span>
              <span>{node.ossReference}</span>
            </div>
          )}
        </motion.div>
      ))}

      {/* Mobile System Intersection Statement */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{
          marginTop: 'var(--space-4)',
          padding: 'var(--space-4)',
          backgroundColor: 'rgba(9, 8, 10, 0.9)',
          border: '1px solid rgba(243, 237, 227, 0.15)',
          borderRadius: 'var(--border-radius-md)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-2xl)',
            letterSpacing: '0.12em',
            color: 'var(--color-cream-white)',
          }}
        >
          {SYSTEM_INTERSECTION_STATEMENT}
        </div>
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.2em',
            color: 'var(--color-muted-beige)',
            marginTop: 'var(--space-1)',
          }}
        >
          PROFESSIONAL ENGINEERING INTERSECTION
        </div>
      </motion.div>
    </div>
  );
};
