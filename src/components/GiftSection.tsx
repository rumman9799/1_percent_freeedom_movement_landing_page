import { Gift, CheckCircle } from 'lucide-react';
import { SmartVideo } from './SmartVideo';
import giftVideo from '../assets/gm-speech.mp4';

interface GiftSectionProps {
  t: {
    headline: string;
    description: string;
    benefits: string[];
    whatYouGetTitle: string;
    exclusiveNote: string;
    videoAlt: string;
    videoTitle: string;
  };
}

export function GiftSection({ t }: GiftSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#55A7AF]/5 via-white to-[#267C41]/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#55A7AF] to-[#267C41] rounded-full mb-6 shadow-lg">
              <Gift className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t.headline}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-[#267C41]">
                <p className="text-gray-800 text-lg leading-relaxed">
                  {t.description}
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{t.whatYouGetTitle}</h3>
                {t.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <CheckCircle className="w-6 h-6 text-[#267C41] flex-shrink-0 mt-1" />
                    <span className="text-gray-800 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-l-4 border-amber-500">
                <p className="text-gray-800 font-semibold text-lg">
                  {t.exclusiveNote}
                </p>
              </div>
            </div>

            <div className="relative">
              <SmartVideo
                src={giftVideo}
                frameClassName="rounded-2xl overflow-hidden shadow-2xl"
                autoPlay={true}
                loop={true}
              />

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#55A7AF] rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#267C41] rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}