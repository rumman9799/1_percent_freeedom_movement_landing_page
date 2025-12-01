import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface StickyCtaButtonProps {
  text: string;
  onClick: () => void;
}

export function StickyCtaButton({ text, onClick }: StickyCtaButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={onClick}
      className={`fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 px-6 py-4 bg-gradient-to-r from-[#267C41] to-green-700 text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-2 md:hidden ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      {text}
      <ArrowRight className="w-5 h-5" />
    </button>
  );
}
