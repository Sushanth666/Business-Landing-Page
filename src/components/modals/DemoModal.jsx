import React from 'react';
import { X, Play, CheckCircle } from 'lucide-react';

export const DemoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-[#FF4820] text-xs font-bold mb-2">
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Interactive Overview</span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#1E2022] tracking-tight">
            How Undefine Accelerates Growth
          </h3>
        </div>

        {/* Video Simulation Mockup */}
        <div className="aspect-video bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 rounded-2xl relative overflow-hidden flex flex-col items-center justify-center text-white p-6 group cursor-pointer shadow-inner">
          <div className="w-16 h-16 rounded-full bg-[#FF4820] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <Play className="w-7 h-7 fill-white translate-x-0.5" />
          </div>
          <p className="mt-4 text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
            2-Minute Architecture & Growth Walkthrough
          </p>
        </div>

        {/* Highlights List */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-600">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>Zero Configuration</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>Modern Tailwind CSS</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>Enterprise SLA</span>
          </div>
        </div>

      </div>
    </div>
  );
};
