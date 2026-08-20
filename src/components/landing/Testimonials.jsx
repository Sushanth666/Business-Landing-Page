import React from 'react';
import testimonialManCutout from '../../assets/testimonial_man_cutout.png';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#FAFAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: 3 Speech Bubble Cards Stacked */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Testimonial 1 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_6px_25px_rgba(0,0,0,0.03)] border border-slate-100/80 relative">
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at aliquam. Ornare in lorem tristique dolor."
                </p>
                <div className="absolute -bottom-2.5 left-10 w-5 h-5 bg-white border-r border-b border-slate-100/80 transform rotate-45"></div>
              </div>
              <div className="flex items-center gap-3 mt-4 ml-8">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Jerome Bell"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-2xs"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1E2022]">
                    Jerome Bell
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Product Designer
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="relative sm:ml-8 lg:ml-12">
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_6px_25px_rgba(0,0,0,0.03)] border border-slate-100/80 relative">
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at aliquam. Ornare in lorem tristique dolor."
                </p>
                <div className="absolute -bottom-2.5 left-10 w-5 h-5 bg-white border-r border-b border-slate-100/80 transform rotate-45"></div>
              </div>
              <div className="flex items-center gap-3 mt-4 ml-8">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Albert Flores"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-2xs"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1E2022]">
                    Albert Flores
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Mitsubishi
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-[0_6px_25px_rgba(0,0,0,0.03)] border border-slate-100/80 relative">
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel lobortis tincidunt fames quisque mauris at aliquam. Ornare in lorem tristique dolor."
                </p>
                <div className="absolute -bottom-2.5 left-10 w-5 h-5 bg-white border-r border-b border-slate-100/80 transform rotate-45"></div>
              </div>
              <div className="flex items-center gap-3 mt-4 ml-8">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                  alt="Annette Black"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-2xs"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#1E2022]">
                    Annette Black
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Louis Vuitton
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Senior Business Advisor Cutout */}
          <div className="lg:col-span-5 relative flex justify-center items-end self-end">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px]">
              <img
                src={testimonialManCutout}
                alt="Senior business consultant holding tablet"
                className="w-full h-auto object-contain object-bottom pointer-events-none drop-shadow-sm select-none"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
