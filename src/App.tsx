import { useState } from 'react';
import { translations } from './translations';
import { LanguageToggle } from './components/LanguageToggle';
import { HeroSection } from './components/HeroSection';
import { PainSection } from './components/PainSection';
import { HopeSection } from './components/HopeSection';
import { ValueSection } from './components/ValueSection';
import { CredibilitySection } from './components/CredibilitySection';
import { GiftSection } from './components/GiftSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { ScarcitySection } from './components/ScarcitySection';
import { FinalCloseSection } from './components/FinalCloseSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { StickyCtaButton } from './components/StickyCtaButton';

// TODO: Update this path/filename to match your actual logo file
// Example: place logo.png in src/assets and use './assets/logo.png'
import logo from './assets/logo.png';

function App() {
  const [language, setLanguage] = useState<'bn' | 'en'>('bn');
  const t = translations[language];

  const navigateTo = (url: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = url;
    }
  };

  const ctaUrl = 'https://www.southeastlandmark.com/lead/';

  const handleCtaClick = () => {
    navigateTo(ctaUrl);
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Top-left logo (scrolls with page) */}
      <div className="absolute top-4 left-4 sm:top-5 sm:left-6 lg:top-6 lg:left-8 z-20">
        <img
          src={logo}
          alt={t.branding.alt}
          className="h-12 sm:h-14 w-auto"
        />
      </div>

      <LanguageToggle
        label={t.language.toggle}
        onToggle={() => setLanguage(language === 'bn' ? 'en' : 'bn')} currentLanguage={'bn'}      />

      <HeroSection t={t.hero} onCtaClick={handleCtaClick} />
      <PainSection t={t.pain} />
      <HopeSection t={t.hope} />
      <ValueSection t={t.value} />
      <CredibilitySection t={t.credibility} />
      <GiftSection t={t.gift} />
      <HowItWorksSection t={t.howItWorks} />
      <ScarcitySection t={t.scarcity} />
      <FinalCloseSection t={t.finalClose} />
      <FinalCtaSection t={t.finalCta} onCtaClick={handleCtaClick} />

      <StickyCtaButton text={t.hero.cta} onClick={handleCtaClick} />
    </div>
  );
}

export default App;
