import React from 'react';
import { Sparkles, ArrowRight, UserCheck } from 'lucide-react';
import heroManCutout from '../../assets/hero_man_cutout.png';

export const Hero = ({ onOpenSchedule, onOpenDemo, user, onOpenProfile }) => {
  return (
    <section id="home" className="relative pt-32 sm:pt-36 lg:pt-40 pb-8 lg:pb-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 text-left z-10 lg:pr-2 py-6">
            
            {/* User Logged-in Welcome Badge or Default Kicker */}
            {user ? (
              <div
                onClick={() => onOpenProfile?.()}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 hover:bg-orange-100 border border-orange-200/80 transition-all cursor-pointer shadow-2xs group"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-[#FF4820]">
                  Welcome back, {user.name}
                </span>
                <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                  • {user.plan || 'Workspace Active'}
                </span>
                <Sparkles className="w-3.5 h-3.5 text-amber-500 group-hover:scale-110 transition-transform" />
              </div>
            ) : (
              <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#64748B] uppercase">
                BUILD YOUR PLAN
              </p>
            )}

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#1E2022] tracking-tight leading-[1.12]">
              <span className="relative inline-block z-10">
                <span className="relative z-10">Everything you</span>
                {/* Soft coral/pink highlight behind "Everything you" */}
                <span className="absolute bottom-1 left-0 w-full h-3.5 sm:h-4 bg-[#FFDDD5] -z-0 rounded-xs"></span>
              </span>
              <br />
              need to run your
              <br />
              online business
            </h1>

            {/* Subtext */}
            <div className="text-sm sm:text-base text-[#94A3B8] max-w-lg leading-relaxed space-y-1">
              <p>Scale faster with automated sales funnels, unified analytics, and high-converting marketing tools.</p>
              <p>Everything your team needs to launch, grow, and monetize in one place.</p>
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-6 pt-2">
              {/* Primary CTA */}
              <button
                onClick={onOpenSchedule}
                id="hero-get-started-btn"
                className="px-7 py-3.5 text-sm font-bold text-white bg-[#FF4820] hover:bg-[#E03A12] rounded-xl shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 whitespace-nowrap cursor-pointer flex items-center gap-2"
              >
                <span>{user ? 'Book Strategy Call' : 'Get Started - For Free'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary: Circular Light Gray Play Icon + Watch Demo */}
              <button
                onClick={onOpenDemo}
                id="hero-watch-demo-btn"
                className="flex items-center gap-3 text-sm font-normal text-[#94A3B8] hover:text-[#1E2022] transition-colors group cursor-pointer py-2"
              >
                <div className="w-10 h-10 rounded-full bg-[#F5F6F8] group-hover:bg-[#ECEEF2] flex items-center justify-center transition-colors">
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="translate-x-0.5"
                  >
                    <path
                      d="M1 2.2V13.8C1 14.6 1.9 15.1 2.6 14.7L12.3 8.9C13 8.5 13 7.5 12.3 7.1L2.6 1.3C1.9 0.9 1 1.4 1 2.2Z"
                      stroke="#94A3B8"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-[15px]">Watch Demo</span>
              </button>
            </div>

          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-6 relative flex justify-center items-end">
            <div className="relative w-full max-w-[560px] sm:max-w-[640px] lg:max-w-[720px] xl:max-w-[800px] -translate-x-3 sm:-translate-x-8 lg:-translate-x-16 xl:-translate-x-20">
              <img
                src={heroManCutout}
                alt="Confident young entrepreneur pointing forward"
                className="w-full h-auto object-contain object-bottom pointer-events-none drop-shadow-sm select-none transform scale-110 sm:scale-120 lg:scale-130 xl:scale-135 origin-bottom"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

