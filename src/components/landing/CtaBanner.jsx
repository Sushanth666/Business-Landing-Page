import React from 'react';

export const CtaBanner = ({ onOpenSchedule }) => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#FFF4F0] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-orange-100/60 shadow-xs">
          
          {/* Left Text */}
          <div className="max-w-xl text-left z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1E2022] tracking-tight leading-snug">
              Start your{' '}
              <span className="relative inline-block z-10">
                <span className="relative z-10">business journey</span>
                {/* Highlight */}
                <span className="absolute bottom-1 left-0 w-full h-3 sm:h-3.5 bg-[#FFDDD5] -z-0 rounded-xs"></span>
              </span>{' '}
              better with our consulting
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-3 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
            </p>
          </div>

          {/* Right Action Button with Curved Arrow */}
          <div className="relative flex items-center justify-center z-10 flex-shrink-0">
            <div className="hidden sm:block absolute -top-8 -left-12 pointer-events-none">
              <svg width="48" height="32" viewBox="0 0 48 32" fill="none">
                <path
                  d="M4 4 C 18 4, 36 10, 42 24"
                  stroke="#FF4820"
                  strokeWidth="1.8"
                  strokeDasharray="3 3"
                  strokeLinecap="round"
                />
                <path
                  d="M34 22 L42 25 L43 17"
                  stroke="#FF4820"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <button
              onClick={onOpenSchedule}
              id="cta-schedule-btn"
              className="px-8 py-4 text-sm font-bold text-white bg-[#FF4820] hover:bg-[#E03A12] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 whitespace-nowrap cursor-pointer"
            >
              Schedule a Meeting
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
