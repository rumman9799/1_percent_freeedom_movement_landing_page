import { Clock, TrendingUp, Users, Briefcase, FileText } from 'lucide-react';
import { SmartVideo } from './SmartVideo';
import introVideo from '../assets/vid2.mp4';

interface PainSectionProps {
  t: {
    headline: string;
    bullets: string[];
    footer: string;
  };
}

export function PainSection({ t }: PainSectionProps) {
  const icons = [Clock, TrendingUp, Users, Briefcase, FileText];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Video */}
          <div className="relative">
            <SmartVideo
              src={introVideo}
              frameClassName="rounded-2xl overflow-hidden shadow-2xl"
            />
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-red-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-orange-400 rounded-full opacity-20 blur-xl"></div>
          </div>

          {/* Right: Content shifted to the right */}
          <div className="max-w-xl ml-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-10 text-left">
              {t.headline}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {t.bullets.map((bullet, index) => {
                const Icon = icons[index];
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-red-600" />
                    </div>
                    <p className="text-gray-800 text-base sm:text-lg leading-relaxed pt-1">
                      {bullet}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 p-6 sm:p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border-l-4 border-red-500">
              <p className="text-gray-800 text-lg sm:text-xl font-medium text-left leading-relaxed">
                {t.footer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
