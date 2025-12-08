import { Sparkles, TrendingUp, Home, Heart } from 'lucide-react';
import hopeImage from '../assets/hope.png';

interface HopeSectionProps {
  t: {
    headline: string;
    bullets: string[];
    footer: string;
  };
}

export function HopeSection({ t }: HopeSectionProps) {
  const icons = [Sparkles, TrendingUp, Home, Heart];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={hopeImage}
                alt="Father with hope and peace"
                className="w-full h-auto object-cover"
              />
              {/* <div className="absolute inset-0 bg-gradient-to-t from-[#267C41]/70 via-transparent to-transparent"></div> */}
              {/* <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p className="text-white text-lg sm:text-xl font-medium leading-relaxed italic">
                  "{t.imageQuestion}"
                </p>
              </div> */}
            </div>

            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#267C41] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#55A7AF] rounded-full opacity-20 blur-xl"></div>
          </div>

          <div className="order-1 space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              {t.headline}
            </h2>

            <div className="space-y-6">
              {t.bullets.map((bullet, index) => {
                const Icon = icons[index];
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-5 bg-gradient-to-r from-[#55A7AF]/5 to-[#267C41]/5 rounded-xl border-l-4 border-[#55A7AF]"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#55A7AF] rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-800 text-lg leading-relaxed pt-2">{bullet}</p>
                  </div>
                );
              })}
            </div>

            <div className="p-8 bg-gradient-to-r from-[#55A7AF] to-[#267C41] rounded-2xl">
              <p className="text-white text-xl font-medium text-center leading-relaxed">
                {t.footer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
