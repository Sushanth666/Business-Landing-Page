import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2 } from 'lucide-react';

export const ScheduleModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    date: '',
    time: '10:00 AM',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-[#1E2022]">Meeting Scheduled!</h3>
            <p className="text-slate-500 text-sm max-w-xs mx-auto">
              We've sent a calendar invite to <span className="font-semibold text-slate-700">{formData.email}</span>. See you soon!
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-[#FF4820] text-xs font-bold mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>Book a Consultation</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#1E2022] tracking-tight">
                Schedule a 1-on-1 Session
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Choose a time that works best for your team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#FF4820]/20 focus:border-[#FF4820] text-sm text-slate-800 transition-all placeholder:text-slate-300"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#FF4820]/20 focus:border-[#FF4820] text-sm text-slate-800 transition-all placeholder:text-slate-300"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#FF4820]/20 focus:border-[#FF4820] text-xs sm:text-sm text-slate-800 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Time Slot
                  </label>
                  <div className="relative">
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#FF4820]/20 focus:border-[#FF4820] text-xs sm:text-sm text-slate-800 bg-white appearance-none transition-all"
                    >
                      <option>09:00 AM EST</option>
                      <option>10:00 AM EST</option>
                      <option>01:00 PM EST</option>
                      <option>03:30 PM EST</option>
                    </select>
                    <Clock className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 text-sm font-bold text-white bg-[#FF4820] hover:bg-[#E03A12] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 cursor-pointer"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
