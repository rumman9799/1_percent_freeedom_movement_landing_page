import { Award, Users, TrendingUp, CheckCircle } from 'lucide-react';

// TODO: Update this path/filename to match your actual founder image
// Example: place founder.jpg in src/assets and use '../assets/founder.jpg'
import founderImage from '../assets/founder.png';

interface CredibilitySectionProps {
  t: {
    headline: string;
    bullets: string[];
    statement: string;
  };
}

export function CredibilitySection({ t }: CredibilitySectionProps) {
  const icons = [Award, Users, TrendingUp, CheckCircle];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
            {t.headline}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {t.bullets.map((bullet, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 bg-gradient-to-r from-[#55A7AF]/10 to-[#267C41]/10 rounded-xl border border-[#55A7AF]/20"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-[#267C41] rounded-full flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-gray-800 text-lg font-medium">{bullet}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white p-8 sm:p-12 rounded-2xl shadow-xl border border-gray-200">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#55A7AF] to-[#267C41] p-1 shadow-lg">
                  <img
                    src={founderImage}
                    alt="Founder"
                    className="w-full h-full rounded-full object-cover border-2 border-white"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-12 bg-gradient-to-r from-[#55A7AF] to-[#267C41] rounded"></div>
                  <span className="text-[#267C41] font-semibold text-sm tracking-wider">
                    FOUNDER MESSAGE
                  </span>
                </div>

                <p className="text-gray-800 text-lg sm:text-xl leading-relaxed italic">
                  "{t.statement}"
                </p>

                <div className="pt-4">
                  <p className="text-gray-600 font-medium">Movement Founder</p>
                  <p className="text-sm text-gray-500">16 Years Field Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
