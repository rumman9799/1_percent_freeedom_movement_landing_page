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
            <div className="relative bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-pink-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-500 hover:scale-105 border border-blue-500/30 hover:border-blue-400/60 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>

              <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300 rotate-3 group-hover:rotate-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-2xl font-bold leading-relaxed text-white text-center">
                  {t.line1}
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-emerald-900/40 via-teal-900/40 to-cyan-900/40 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 hover:scale-105 border border-emerald-500/30 hover:border-emerald-400/60 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/10 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-500"></div>

              <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/50 group-hover:scale-110 transition-transform duration-300 -rotate-3 group-hover:-rotate-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <p className="text-2xl font-bold leading-relaxed text-white text-center">
                  {t.line2}
                </p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-red-900/50 via-rose-900/50 to-pink-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl shadow-red-500/40 transition-all duration-500 hover:scale-105 border-2 border-red-500/50 hover:border-red-400/80 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-rose-500/30 to-pink-500/20 animate-pulse"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

              <div className="relative z-10 flex flex-col items-center justify-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-500/60 group-hover:scale-110 transition-transform duration-300 animate-bounce">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <p className="text-2xl font-bold leading-relaxed text-red-300 text-center drop-shadow-[0_0_12px_rgba(252,165,165,0.6)] mt-4">
                  {t.line3}
                </p>
              </div>
            </div>
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
