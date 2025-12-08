interface FinalCloseSectionProps {
  t: {
    line1: string;
    line2: string;
    line3: string;
    //line4: string;
    //tagline: string;
  };
}

export function FinalCloseSection({ t }: FinalCloseSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#55A7AF] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#267C41] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed opacity-90">
              {t.line1}
            </p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed opacity-90">
              {t.line2}
            </p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed text-red-400 mt-8">
              {t.line3}
            </p>
            {/* <p className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-relaxed text-red-500">
              {t.line4}
            </p> */}
          </div>

          {/* <div className="pt-8">
            <div className="inline-block p-1 bg-gradient-to-r from-[#55A7AF] to-[#267C41] rounded-2xl">
              <div className="bg-gray-900 px-8 py-4 rounded-xl">
                <p className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#55A7AF] to-[#267C41]">
                  {t.tagline}
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
