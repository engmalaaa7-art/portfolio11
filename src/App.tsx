import React, { useState } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { Header } from '@/components/layout/Header';
import { CinematicIntroOverlay } from '@/components/intro/CinematicIntroOverlay';
import { CinematicHeroStage } from '@/components/hero/CinematicHeroStage';
import { AboutIdentity } from '@/components/intro/AboutIdentity';
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
    <div className="app-root" style={{ position: 'relative', backgroundColor: '#070A10' }}>
      <NoiseOverlay />
      
      {/* Cinematic Opening Prologue */}
      {!introFinished && (
        <CinematicIntroOverlay onComplete={() => setIntroFinished(true)} />
      )}

      <Header />
      
      <main style={{ position: 'relative', width: '100%' }}>
        {/* 01: Hero Stage */}
        <CinematicHeroStage />

        {/* 02: About Me & Identity */}
        <SceneTransition id="world-about">
          <AboutIdentity />
        </SceneTransition>

        {/* 03: Flagship OSS AI Product */}
        <SceneTransition id="world-product">
          <OssProductShowcase />
        </SceneTransition>

        {/* 04: Career Timeline & Journey */}
        <SceneTransition id="world-journey">
          <ExperienceJourney />
        </SceneTransition>

        {/* 05: Engineering Capabilities & Scale */}
        <SceneTransition id="world-capabilities">
          <CapabilitiesSection />
        </SceneTransition>

        {/* 06: Impact & Reach (13,000+) */}
        <SceneTransition id="world-impact">
          <CinematicImpactMoment />
        </SceneTransition>

        {/* 07: Academic Foundation & Methodology */}
        <SceneTransition id="world-methodology">
          <EducationOrigin />
        </SceneTransition>

        {/* 08: Final Scene & Contact */}
        <SceneTransition id="world-contact">
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
