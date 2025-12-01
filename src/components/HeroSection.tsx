import { ArrowRight } from 'lucide-react';

// TODO: Ensure this path/filename matches your actual video file in assets
// Example: place intor.mp4 in src/assets and keep the import below
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

export function HeroSection({ t, onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#55A7AF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#267C41] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-[#55A7AF]/10 rounded-full">
              <span className="text-[#267C41] font-semibold text-sm tracking-wide">
                {t.tagline}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              {t.headline}
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl">
              {t.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onCtaClick}
                className="group px-8 py-4 bg-[#267C41] text-white rounded-lg font-semibold text-lg hover:bg-[#1e6332] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {t.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <video
                src={introVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              {/* <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-white text-lg sm:text-xl font-medium leading-relaxed italic">
                  "{t.imageQuestion}"
                </p>
              </div> */}
            </div>

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
    </section>
  );
}
