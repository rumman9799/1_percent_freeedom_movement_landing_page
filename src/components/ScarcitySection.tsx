import { AlertCircle, Users, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ScarcitySectionProps {
  t: {
    headline: string;
    rules: string[];
    counter: string;
    filledLabel: string;
    spotsRemainingSuffix: string;
    selectedInMonths: string;
    maxRegistrations: string;
    spotsLeftCard: string;
    footer: string;
  };
}

export function ScarcitySection({ t }: ScarcitySectionProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startDate = new Date(2025, 11, 8); // December 8, 2025
    const today = new Date();
    
    const daysPassed = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    
    let totalCount = 0;
    for (let i = 0; i < daysPassed; i++) {
      totalCount += Math.floor(Math.random() * 6) + 2; // Random value 2-7
    }
    
    setCount(Math.min(totalCount, 100));
  }, []);

  const percentage = (count / 100) * 100;

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-500 rounded-full mb-6 shadow-lg animate-pulse">
              <AlertCircle className="w-10 h-10 text-white" />
            </div>
            {/* <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              {t.headline}
            </h2> */}
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
            <div className="p-8 sm:p-12">
              <div className="space-y-6 mb-8">
                {t.rules.map((rule, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border-l-4 border-red-500"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      {index === 0 ? <Users className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
                    </div>
                    <p className="text-gray-800 text-lg font-medium pt-1">{rule}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm font-semibold text-gray-700">
                  <span>{t.counter}:</span>
                  <span className="text-2xl text-[#267C41]">
                    {count} / 100
                  </span>
                </div>

                <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#55A7AF] to-[#267C41] transition-all duration-1000 ease-out"
                    style={{ width: `${percentage}%` }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-800">
                      {percentage.toFixed(1)}% {t.filledLabel}
                    </span>
                  </div>
                </div>

                <p className="text-center text-gray-600 text-sm">
                  {100 - count} {t.spotsRemainingSuffix}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-center">
              <p className="text-white text-xl font-bold">
                {t.footer}
              </p>
            </div>
          </div>

{/*           <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-[#267C41] mb-2">50</div>
              <div className="text-gray-600">{t.selectedInMonths}</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-[#267C41] mb-2">500</div>
              <div className="text-gray-600">{t.maxRegistrations}</div>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-red-500 mb-2">{500 - count}</div>
              <div className="text-gray-600">{t.spotsLeftCard}</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
