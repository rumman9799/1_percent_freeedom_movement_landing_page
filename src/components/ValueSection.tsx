import { Brain, Wallet, Shield } from 'lucide-react';

interface ValueSectionProps {
  t: {
    headline: string;
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
      image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-purple-500 to-blue-500'
    },
    {
      ...t.pillar2,
      icon: Wallet,
      image: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-[#55A7AF] to-[#267C41]'
    },
    {
      ...t.pillar3,
      icon: Shield,
      image: 'https://images.pexels.com/photos/1146603/pexels-photo-1146603.jpeg?auto=compress&cs=tinysrgb&w=800',
      color: 'from-[#267C41] to-green-700'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
          {t.headline}
        </h2>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-600 text-center leading-relaxed">
            This movement is built on three foundational pillars that transform lives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${pillar.color} opacity-60`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <Icon className="w-10 h-10 text-[#267C41]" />
                    </div>
                  </div>
                </div>

                <div className="p-8">
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
