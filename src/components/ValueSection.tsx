import { Brain, Wallet, Shield } from 'lucide-react';
import pillarImage1 from '../assets/v1.png';
import pillarImage2 from '../assets/v2.png';
import pillarImage3 from '../assets/v3.png';

interface ValueSectionProps {
  t: {
    headline: string;
    //subtext: string;
    pillar1: { title: string; description: string };
    pillar2: { title: string; description: string };
    pillar3: { title: string; description: string };
  };
}

export function ValueSection({ t }: ValueSectionProps) {
  const pillars = [
    {
      ...t.pillar1,
      icon: Brain,
      image: pillarImage1,
      color: 'from-purple-500 to-blue-500'
    },
    {
      ...t.pillar2,
      icon: Wallet,
      image: pillarImage2,
      color: 'from-[#55A7AF] to-[#267C41]'
    },
    {
      ...t.pillar3,
      icon: Shield,
      image: pillarImage3,
      color: 'from-[#267C41] to-green-700'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12 pb-12">
          {t.headline}
        </h2>

        {/* <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-600 text-center leading-relaxed">
            {t.subtext}
          </p>
        </div> */}

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {pillars.map((pillar, index) => {
            // const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* <div className={`absolute inset-0 bg-gradient-to-t ${pillar.color} opacity-60`}></div> */}
                  {/* <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <Icon className="w-10 h-10 text-[#267C41]" />
                    </div>
                  </div> */}
                </div>

                <div className="p-8 flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{pillar.description}</p>
                </div>

                <div className={`h-1 bg-gradient-to-r ${pillar.color}`}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
