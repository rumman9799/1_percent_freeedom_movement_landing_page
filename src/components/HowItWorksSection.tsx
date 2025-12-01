import { UserPlus, ClipboardCheck, Award, Key } from 'lucide-react';

interface HowItWorksSectionProps {
  t: {
    headline: string;
    steps: Array<{ title: string; description: string }>;
    subtitle: string;
    badges: string[];
  };
}

export function HowItWorksSection({ t }: HowItWorksSectionProps) {
  const icons = [UserPlus, ClipboardCheck, Award, Key];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
            {t.headline}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16">{t.subtitle}</p>

          <div className="relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#55A7AF] to-[#267C41] hidden md:block"></div>

            <div className="space-y-12">
              {t.steps.map((step, index) => {
                const Icon = icons[index];
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center gap-8 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <div
                        className={`inline-block p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow ${
                          isEven ? 'md:ml-auto' : 'md:mr-auto'
                        }`}
                      >
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-700 text-lg">{step.description}</p>
                      </div>
                    </div>

                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-[#55A7AF] to-[#267C41] rounded-full flex items-center justify-center shadow-xl">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#267C41] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                        {index + 1}
                      </div>
                    </div>

                    <div className="flex-1"></div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-gray-50 to-white rounded-2xl border-2 border-[#55A7AF]/30 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
              {t.badges.map((badge, index) => (
                <>
                  {index > 0 && <div className="hidden md:block w-px h-8 bg-gray-300"></div>}
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${index === 2 ? 'bg-[#267C41]' : 'bg-red-500'}`}></div>
                    <span className="text-gray-800 font-semibold">{badge}</span>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
