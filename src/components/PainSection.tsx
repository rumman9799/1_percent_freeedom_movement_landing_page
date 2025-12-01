import { Clock, TrendingUp, Users, Briefcase, FileText } from 'lucide-react';

interface PainSectionProps {
  t: {
    headline: string;
    bullets: string[];
  };
}

export function PainSection({ t }: PainSectionProps) {
  const icons = [Clock, TrendingUp, Users, Briefcase, FileText];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
            {t.headline}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {t.bullets.map((bullet, index) => {
              const Icon = icons[index];
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <p className="text-gray-800 text-lg leading-relaxed pt-2">{bullet}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl border-l-4 border-red-500">
            <p className="text-gray-800 text-xl font-medium text-center leading-relaxed">
              Every month, your hard-earned money flows away... building someone else's future, not yours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
