import React from 'react';

export const LogoCloud = () => {
  return (
    <section className="py-10 sm:py-12 bg-white border-b border-slate-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Text: 2-line bold title */}
          <div className="text-center lg:text-left flex-shrink-0">
            <h3 className="text-sm sm:text-base font-bold text-[#1E2022] leading-snug tracking-tight">
              Trusted by companies<br className="hidden sm:inline" /> all over the world
            </h3>
          </div>

          {/* Right Logos: 5 Exact Brand Logos in Horizontal Flow */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-8 sm:gap-12 lg:gap-14 text-slate-700 opacity-80 hover:opacity-100 transition-opacity duration-200">
            
            {/* 1. inTraX SUSPENSION TECHNOLOGY */}
            <div className="flex flex-col items-center justify-center select-none group cursor-pointer">
              <div className="flex items-baseline italic font-black text-xl sm:text-2xl tracking-tighter text-[#1E2022]">
                <span className="font-serif italic lowercase font-bold text-lg sm:text-xl mr-0.5">in</span>
                <span className="font-sans font-black italic tracking-tight uppercase border-b-2 border-[#1E2022] pb-0.5">
                  TraX
                </span>
              </div>
              <span className="text-[6px] tracking-[0.22em] font-bold text-slate-500 uppercase -mt-0.5 scale-90">
                SUSPENSION TECHNOLOGY
              </span>
            </div>

            {/* 2. PUMA with leaping cat */}
            <div className="flex items-center gap-1.5 select-none group cursor-pointer">
              <span className="text-xl sm:text-2xl font-black tracking-widest text-[#1E2022] font-mono uppercase">
                PUMA
              </span>
              <svg
                className="w-5 h-5 text-[#1E2022] fill-current -translate-y-1"
                viewBox="0 0 24 24"
              >
                <path d="M21.5 5.5c-.5-.6-1.3-.9-2.1-1-.6 0-1.2.2-1.6.6-.4.4-.7.9-.8 1.5.1.4.1.7.3 1.1-1.4-.6-3-.7-4.4-.3-1.4.4-2.7 1.2-3.6 2.3-.8.9-1.3 2.1-1.4 3.4 0 .5.1 1 .2 1.4-1.3.2-2.4.9-3.2 1.9-.8 1-1.3 2.3-1.3 3.7v.6h.6c1.6 0 3.1-.7 4.2-1.9.9-1 1.5-2.4 1.5-3.8v-.4c1.5.4 3.1.2 4.5-.4 1.4-.6 2.5-1.6 3.2-2.9.5-.9.7-2 .6-3 .9.6 2 .9 3 .7 1-.2 1.9-.9 2.4-1.8.3-.6.2-1.2-.1-1.6z" />
              </svg>
            </div>

            {/* 3. Rotary with Gear wheel emblem */}
            <div className="flex items-center gap-1.5 select-none group cursor-pointer">
              <span className="text-base sm:text-lg font-bold tracking-tight text-[#1E2022] font-sans">
                Rotary
              </span>
              <svg
                className="w-6 h-6 text-[#1E2022]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 1.5" />
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>

            {/* 4. # slack */}
            <div className="flex items-center gap-1.5 select-none group cursor-pointer">
              <svg className="w-5 h-5 text-[#1E2022]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
              </svg>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#1E2022] lowercase">
                slack
              </span>
            </div>

            {/* 5. HubSpot with linked node */}
            <div className="flex items-center select-none group cursor-pointer">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#1E2022]">
                HubSp
              </span>
              <div className="relative flex items-center justify-center w-5 h-5 mx-0.5">
                <div className="w-3.5 h-3.5 rounded-full border-2 border-[#1E2022] flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-[#1E2022]"></div>
                </div>
                <div className="absolute -top-1 right-0 w-1.5 h-1.5 rounded-full bg-[#1E2022]"></div>
                <div className="absolute -bottom-1 left-0 w-1.5 h-1.5 rounded-full bg-[#1E2022]"></div>
                <div className="absolute top-1/2 -left-1 w-1.5 h-[1.5px] bg-[#1E2022] -translate-y-1/2"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#1E2022]">
                t
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
