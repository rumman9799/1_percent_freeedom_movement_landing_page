import { ArrowRight } from 'lucide-react';
import { SmartVideo } from './SmartVideo';
import introVideo from '../assets/intro.mp4';

interface HeroSectionProps {
  t: {
    tagline: string;
    headline: string;
    subheadline: string;
    cta: string;
    ctaAlt: string;
    imageQuestion: string;
  };
  onCtaClick: () => void;
}

const handleScrollDown = () => {
  window.scrollBy({
    top: window.innerHeight,
    behavior: 'smooth',
  });
};

export function HeroSection({ t, onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-top bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#55A7AF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#267C41] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-6 py-2.5 bg-gradient-to-r from-[#55A7AF]/20 to-[#267C41]/20 rounded-full border border-[#55A7AF]/30 backdrop-blur-sm">
              <span className="text-[#267C41] font-bold text-sm sm:text-base lg:text-lg tracking-widest uppercase">
                {t.tagline}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight lg:leading-tight text-gray-900 whitespace-pre-line">
              <span className="bg-gradient-to-r from-gray-900 via-[#267C41] to-gray-900 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                {t.headline}
              </span>
            </h1>

            {/* <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
              {t.subheadline}
            </p> */}

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleScrollDown}
                className="group px-8 py-4 bg-gradient-to-r from-[#267C41] to-[#55A7AF] text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-[#267C41]/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                {t.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative">
            <SmartVideo
              src={introVideo}
              frameClassName="rounded-2xl overflow-hidden shadow-2xl"
            />

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#55A7AF] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#267C41] rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </section>
  );
}