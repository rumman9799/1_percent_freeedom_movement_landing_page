import { ArrowRight, CheckCircle } from 'lucide-react';

interface FinalCtaSectionProps {
  t: {
    headline: string;
    headlineSub: string;
    cta1: string;
    cta2: string;
    subtext: string;
    //benefits: string[];
    footer: string;
  };
  onCtaClick: () => void;
}

export function FinalCtaSection({ t, onCtaClick }: FinalCtaSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#55A7AF] via-[#267C41] to-green-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFMwIDguMDYgMCAxOHM4LjA2IDE4IDE4IDE4IDE4LTguMDYgMTgtMTh6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              {t.headline}
            </h2>
            {/* <p className="text-xl sm:text-2xl opacity-90">
              {t.headlineSub}
            </p> */}
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 sm:p-12">
              <div className="space-y-6 mb-8">
                <button
                  onClick={onCtaClick}
                  className="group w-full px-8 py-6 bg-gradient-to-r from-[#267C41] to-green-700 text-white rounded-xl font-bold text-xl sm:text-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {t.cta1}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>

               {/*  <button
                  onClick={onCtaClick}
                  className="group w-full px-8 py-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold text-xl sm:text-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {t.cta2}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button> */}
              </div>

{/*               <div className="pt-8 border-t-2 border-gray-200">
                <p className="text-gray-800 text-lg font-semibold mb-4 text-center">
                  {t.subtext}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {t.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-[#267C41] flex-shrink-0" />
                      <span className="text-gray-800 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div> */}
            </div>

            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-center">
              <p className="text-white text-lg font-bold">
                {t.footer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
