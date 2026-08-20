import React from 'react';

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#64748B] uppercase mb-3">
            WORK PROCESS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1E2022] tracking-tight leading-[1.18]">
            How it{' '}
            <span className="relative inline-block">
              <span className="relative z-10">works</span>
              {/* Soft pink highlight behind works */}
              <span className="absolute bottom-1 left-0 w-full h-3 sm:h-3.5 bg-[#FFDDD5] -z-0 rounded-xs"></span>
            </span>
          </h2>
          <div className="mt-3 text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Imperdiet tempus felis vitae sit est quisque.</p>
          </div>
        </div>

        {/* 3 Step Workflow Container with Absolute Centered Arrows */}
        <div className="relative">
          
          {/* Arrow 1: Centered at 33.33% between Step 1 & Step 2 */}
          <div className="hidden md:block absolute top-7 left-[33.333%] -translate-x-1/2 w-[135px] h-[36px] pointer-events-none z-20">
            <svg
              width="135"
              height="36"
              viewBox="0 0 135 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 18 C 30 2, 60 2, 78 18 C 94 32, 114 30, 130 14"
                stroke="#CBD5E1"
                strokeWidth="1.6"
                strokeDasharray="4 4"
                strokeLinecap="round"
              />
              <path
                d="M122 12 L131 14 L129 22"
                stroke="#CBD5E1"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Arrow 2: Centered at 66.66% between Step 2 & Step 3 */}
          <div className="hidden md:block absolute top-7 left-[66.666%] -translate-x-1/2 w-[135px] h-[36px] pointer-events-none z-20">
            <svg
              width="135"
              height="36"
              viewBox="0 0 135 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 18 C 30 2, 60 2, 78 18 C 94 32, 114 30, 130 14"
                stroke="#CBD5E1"
                strokeWidth="1.6"
                strokeDasharray="4 4"
                strokeLinecap="round"
              />
              <path
                d="M122 12 L131 14 L129 22"
                stroke="#CBD5E1"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* 3 Step Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 items-start">
            
            {/* Step 1: Idea Validation */}
            <div className="flex flex-col items-center text-center">
              <div
                className="w-20 h-20 bg-[#E8F8F2] text-[#10B981] flex items-center justify-center mb-6 relative z-10"
                style={{
                  borderRadius: '52% 48% 62% 38% / 46% 58% 42% 54%',
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 2H7C5.34315 2 4 3.34315 4 5V19C4 20.6569 5.34315 22 7 22H17C18.6569 22 20 20.6569 20 19V8L14 2Z"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 2V8H20"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 13.5H13.5"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8.5 17H12"
                    stroke="#10B981"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#1E2022] mb-2.5">
                Idea Validation
              </h3>
              <p className="text-xs sm:text-[13px] text-[#94A3B8] leading-[1.65] max-w-[260px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor.
              </p>
            </div>

            {/* Step 2: Business Strategy */}
            <div className="flex flex-col items-center text-center">
              <div
                className="w-20 h-20 bg-[#F6EDFC] text-[#A855F7] flex items-center justify-center mb-6 relative z-10"
                style={{
                  borderRadius: '48% 52% 42% 58% / 56% 44% 56% 44%',
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 4V20" stroke="#A855F7" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M12 4V20" stroke="#A855F7" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M17 4V20" stroke="#A855F7" strokeWidth="2.2" strokeLinecap="round" />
                  <path d="M5 15H9" stroke="#A855F7" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M10 9H14" stroke="#A855F7" strokeWidth="2.4" strokeLinecap="round" />
                  <path d="M15 13H19" stroke="#A855F7" strokeWidth="2.4" strokeLinecap="round" />
                </svg>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#1E2022] mb-2.5">
                Business Strategy
              </h3>
              <p className="text-xs sm:text-[13px] text-[#94A3B8] leading-[1.65] max-w-[260px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor.
              </p>
            </div>

            {/* Step 3: Implementation */}
            <div className="flex flex-col items-center text-center">
              <div
                className="w-20 h-20 bg-[#E2F7F6] text-[#06B6D4] flex items-center justify-center mb-6 relative z-10"
                style={{
                  borderRadius: '58% 42% 54% 46% / 44% 56% 44% 56%',
                }}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 13.5C6.5 9 10 5.5 14.5 5"
                    stroke="#06B6D4"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M11 5H15V9"
                    stroke="#06B6D4"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <rect
                    x="12"
                    y="9"
                    width="11"
                    height="11"
                    rx="3"
                    stroke="#06B6D4"
                    strokeWidth="2.2"
                  />

                  <rect
                    x="8"
                    y="13"
                    width="11"
                    height="11"
                    rx="3"
                    stroke="#06B6D4"
                    strokeWidth="2.2"
                    className="fill-[#E2F7F6]"
                  />

                  <path
                    d="M26 18.5C25.5 23 22 26.5 17.5 27"
                    stroke="#06B6D4"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M21 27H17V23"
                    stroke="#06B6D4"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#1E2022] mb-2.5">
                Implementation
              </h3>
              <p className="text-xs sm:text-[13px] text-[#94A3B8] leading-[1.65] max-w-[260px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
