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

function App() {
  const [language, setLanguage] = useState<'bn' | 'en'>('bn');
  const t = translations[language];

  const handleCtaClick = () => {
    alert('Form will be integrated here. This is where your waiting list registration form will appear.');
  };

  return (
    <div className="min-h-screen bg-white">
      <LanguageToggle
        currentLanguage={language}
        onToggle={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
      />

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
