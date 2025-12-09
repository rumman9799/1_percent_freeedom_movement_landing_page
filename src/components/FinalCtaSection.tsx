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
            <div className="p-6 sm:p-8 flex items-center justify-center">
              <div className="space-y-4 w-full max-w-2xl">
                <button
                  onClick={onCtaClick}
                  className="group w-full px-6 py-4 bg-gradient-to-r from-[#267C41] to-green-700 text-white rounded-xl font-bold text-lg sm:text-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {t.cta1}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>

                {/*  <button
                  onClick={onCtaClick}
                  className="group w-full px-8 py-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-bold text-xl sm:text-2xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {t.cta2}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button> */}
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-700 via-red-800 to-red-900 p-6 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-700 to-transparent opacity-30 animate-pulse"></div>
              <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="animate-bounce">
                    <svg className="w-8 h-8 text-yellow-300 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      <animateTransform
                        attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        from="0 12 12"
                        to="360 12 12"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    </svg>
                  </div>
                  <div className="animate-pulse">
                    <svg className="w-8 h-8 text-yellow-300 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                      <animate
                        attributeName="opacity"
                        values="1;0.3;1"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </svg>
                  </div>
                </div>
                <p className="text-white text-base font-bold relative z-10">
                  {t.footer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
