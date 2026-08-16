import React, { useState } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { Header } from '@/components/layout/Header';
import { CinematicIntroOverlay } from '@/components/intro/CinematicIntroOverlay';
import { HeroContainer } from '@/components/hero/HeroContainer';
import { UnmaskedIntro } from '@/components/intro/UnmaskedIntro';
import { OssProductShowcase } from '@/components/product/OssProductShowcase';
import { ExperienceJourney } from '@/components/experience/ExperienceJourney';
import { CapabilitiesSection } from '@/components/capabilities/CapabilitiesSection';
import { CinematicImpactMoment } from '@/components/impact/CinematicImpactMoment';
import { EducationOrigin } from '@/components/education/EducationOrigin';
import { FinalContactScene } from '@/components/contact/FinalContactScene';
import { SceneTransition } from '@/components/common/SceneTransition';
import { Footer } from '@/components/layout/Footer';
import { NoiseOverlay } from '@/components/common/NoiseOverlay';

const AppContent: React.FC = () => {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="app-root" style={{ position: 'relative', backgroundColor: 'var(--color-deep-black)' }}>
      <NoiseOverlay />
      
      {/* Cinematic Opening Prologue */}
      {!introFinished && (
        <CinematicIntroOverlay onComplete={() => setIntroFinished(true)} />
      )}

      <Header />
      
      <main style={{ position: 'relative', width: '100%' }}>
        {/* World 01: The Mask (Hero Stage) */}
        <HeroContainer />

        {/* World 02: The Person (Identity Statement) */}
        <SceneTransition id="world-person">
          <UnmaskedIntro />
        </SceneTransition>

        {/* World 03: The Builder (OSS Product Reveal) */}
        <SceneTransition id="world-builder">
          <OssProductShowcase />
        </SceneTransition>

        {/* World 04: The Journey (Career Timeline) */}
        <SceneTransition id="world-journey">
          <ExperienceJourney />
        </SceneTransition>

        {/* World 05: The System (Engineering Profile & Scale) */}
        <SceneTransition id="world-system">
          <CapabilitiesSection />
        </SceneTransition>

        {/* World 06: The Impact (13,000+ People Reached) */}
        <SceneTransition id="world-impact">
          <CinematicImpactMoment />
        </SceneTransition>

        {/* World 07: The Origin (Academic Foundation) */}
        <SceneTransition id="world-origin">
          <EducationOrigin />
        </SceneTransition>

        {/* World 08: Final Scene (Let's Build Something & Contact) */}
        <SceneTransition id="world-final">
          <FinalContactScene />
        </SceneTransition>
      </main>

      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
