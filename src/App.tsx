import { useState, useEffect } from 'react';
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
import { WelcomeModal } from './components/WelcomeModal';
import { triggerFirstVideo } from './components/SmartVideo';

// TODO: Update this path/filename to match your actual logo file
// Example: place logo.png in src/assets and use './assets/logo.png'
import logo from './assets/logo.png';

function App() {
  const [language, setLanguage] = useState<'bn' | 'en'>('bn');
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);
  const t = translations[language];

  useEffect(() => {
    // Show modal on page load/reload
    setShowWelcomeModal(true);
  }, []);

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
      {/* Welcome Modal */}
      <WelcomeModal
        isOpen={showWelcomeModal}
        onClose={() => {
          setShowWelcomeModal(false);
          // Trigger first video to play when modal closes
          setTimeout(() => {
            triggerFirstVideo();
          }, 300); // Small delay to ensure modal is fully closed
        }}
      />

      {/* Top bar with logo and language toggle, aligned to page padding and scrolling with content */}
      <header className="w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <img
            src={logo}
            alt={t.branding.alt}
            className="h-24 sm:h-28 w-auto cursor-pointer"
            onClick={() => navigateTo('https://www.southeastlandmark.com/')}
          />
          <LanguageToggle
            label={t.language.toggle}
            onToggle={() =>
              setLanguage(language === 'bn' ? 'en' : 'bn')
            }
            currentLanguage={language}
          />
        </div>
      </header>

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
