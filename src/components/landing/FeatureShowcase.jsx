import React from 'react';
import { topCustomers } from '../../data/mockData';
import { Copy, Sparkles, Wind } from 'lucide-react';
import avatarsStrip from '../../assets/avatars_strip.png';

export const FeatureShowcase = () => {
  const features = [
    {
      id: 'copy-paste',
      title: 'Simply Copy & Paste',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo.',
      icon: Copy,
      iconBg: 'bg-[#FFEFEA] text-[#FF4820]',
      cardStyle:
        'bg-white rounded-2xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-100/80',
    },
    {
      id: 'customize',
      title: 'Easy to Customize',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo.',
      icon: Sparkles,
      iconBg: 'bg-[#E8F8F2] text-[#10B981]',
      cardStyle:
        'bg-white rounded-2xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.02)] border border-slate-50 hover:border-slate-100 transition-colors',
    },
    {
      id: 'tailwind',
      title: 'Made with TailwindCSS',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo.',
      icon: Wind,
      iconBg: 'bg-[#E0F2FE] text-[#0284C7]',
      cardStyle:
        'bg-white rounded-2xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.02)] border border-slate-50 hover:border-slate-100 transition-colors',
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header (Centered Alignment) */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#64748B] uppercase mb-3">
            WHAT IT DOES
          </p>
          
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1E2022] tracking-tight leading-[1.18]">
            <span className="relative inline-block z-10">
              <span className="relative z-10">Supercharge your online</span>
              {/* Soft coral/pink highlight behind "Supercharge your online" */}
              <span className="absolute bottom-1.5 sm:bottom-2 left-0 w-full h-3.5 sm:h-4 bg-[#FFDDD5] -z-0 rounded-xs"></span>
            </span>
            <br />
            business development
          </h2>

          <div className="mt-3 text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Imperdiet tempus felis vitae sit est quisque.</p>
          </div>
        </div>

        {/* 2-Column Showcase Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Visual Column: Top Customers & Total Invoice Card Stack */}
          <div className="lg:col-span-6 relative flex justify-center">
            
            {/* Top Customers Card with Exact Avatars and Dividers */}
            <div className="w-full max-w-[380px] bg-white rounded-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-slate-100 relative z-10">
              <h3 className="text-base font-bold text-[#1E2022] mb-4">
                Top Customers
              </h3>

              <div className="divide-y divide-slate-100">
                {topCustomers.map((customer, index) => (
                  <div
                    key={customer.id}
                    className="flex items-center justify-between py-2.5 first:pt-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      {/* Exact Circular Avatar from Sprite */}
                      <div
                        className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white shadow-2xs select-none"
                        style={{
                          backgroundImage: `url(${avatarsStrip})`,
                          backgroundSize: '142% 850%',
                          backgroundPosition: `center ${index * 20}%`,
                          backgroundRepeat: 'no-repeat',
                        }}
                        aria-label={customer.name}
                      />
                      <span className="text-xs sm:text-sm font-semibold text-[#1E2022]">
                        {customer.name}
                      </span>
                    </div>

                    {customer.amount && (
                      <span className="text-xs sm:text-sm font-bold text-[#1E2022]">
                        {customer.amount}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Total Invoice Card Floating Bottom-Right */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 lg:-right-4 bg-white rounded-2xl p-5 shadow-[0_16px_36px_rgba(0,0,0,0.08)] border border-slate-100 z-20 w-48 sm:w-56">
              <p className="text-[11px] font-medium text-slate-400 mb-1">
                Total Invoice
              </p>
              
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-black text-[#1E2022] tracking-tight">
                  520
                </span>
                <span className="text-xs font-bold text-emerald-500">
                  (+12%)
                </span>
              </div>

              {/* 4 Meter Bars */}
              <div className="flex items-end justify-between h-14 gap-2 px-1">
                {/* Bar 1 */}
                <div className="w-full flex flex-col items-center gap-1.5">
                  <div className="w-full h-8 bg-slate-100 rounded-xs flex items-end">
                    <div className="w-full h-5 bg-slate-300 rounded-xs"></div>
                  </div>
                  <span className="text-[9px] font-semibold text-slate-400">M</span>
                </div>
                {/* Bar 2 */}
                <div className="w-full flex flex-col items-center gap-1.5">
                  <div className="w-full h-11 bg-slate-100 rounded-xs flex items-end">
                    <div className="w-full h-8 bg-slate-400 rounded-xs"></div>
                  </div>
                  <span className="text-[9px] font-semibold text-slate-400">T</span>
                </div>
                {/* Bar 3 (Active Orange Bar) */}
                <div className="w-full flex flex-col items-center gap-1.5">
                  <div className="w-full h-14 bg-orange-100 rounded-xs flex items-end">
                    <div className="w-full h-12 bg-[#FF4820] rounded-xs shadow-xs"></div>
                  </div>
                  <span className="text-[9px] font-bold text-[#FF4820]">W</span>
                </div>
                {/* Bar 4 */}
                <div className="w-full flex flex-col items-center gap-1.5">
                  <div className="w-full h-9 bg-slate-100 rounded-xs flex items-end">
                    <div className="w-full h-6 bg-slate-300 rounded-xs"></div>
                  </div>
                  <span className="text-[9px] font-semibold text-slate-400">T</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3 Feature Cards */}
          <div className="lg:col-span-6 space-y-4 text-left lg:pl-6">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <div key={feature.id} className={feature.cardStyle}>
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${feature.iconBg}`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#1E2022] mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
