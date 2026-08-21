import React, { useState } from 'react';
import { X, User, Mail, Shield, Sparkles, LogOut, Check, Edit2, Calendar, Crown, Building2 } from 'lucide-react';

export const ProfileModal = ({
  isOpen,
  onClose,
  user,
  onLogout,
  onUpdateUser,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [nameInput, setNameInput] = useState(user?.name || '');
  const [titleInput, setTitleInput] = useState(user?.role || 'Founder & CEO');
  const [companyInput, setCompanyInput] = useState(user?.company || 'Acme Enterprises');
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen || !user) return null;

  const handleSave = (e) => {
    e.preventDefault();
    if (onUpdateUser) {
      onUpdateUser({
        name: nameInput.trim() || user.name,
        role: titleInput.trim() || user.role,
        company: companyInput.trim() || user.company,
      });
    }
    setIsEditing(false);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  const getInitials = (name) => {
    if (!name) return 'U';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Banner */}
        <div className="bg-gradient-to-r from-[#FF4820] to-[#FF7A50] px-6 sm:px-8 pt-8 pb-14 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white bg-black/10 hover:bg-black/20 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span className="text-xs font-bold uppercase tracking-wider text-white/90">
              User Profile & Workspace
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">Account Details</h2>
        </div>

        {/* User Card Overlapping Banner */}
        <div className="px-6 sm:px-8 -mt-9 pb-6">
          <div className="flex items-end justify-between gap-4">
            <div className="flex items-end gap-3.5">
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#1E2022] to-[#3B4252] text-white border-4 border-white shadow-lg flex items-center justify-center font-black text-2xl select-none relative shrink-0">
                {getInitials(user.name)}
                <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
              </div>
              <div className="mb-1">
                <h3 className="text-lg sm:text-xl font-black text-[#1E2022] flex items-center gap-2">
                  <span>{user.name}</span>
                </h3>
                <p className="text-xs font-medium text-slate-500 flex items-center gap-1.5 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span className="truncate max-w-[200px] sm:max-w-[240px]">{user.email}</span>
                </p>
              </div>
            </div>

            {!isEditing && (
              <button
                type="button"
                onClick={() => {
                  setNameInput(user.name);
                  setTitleInput(user.role || 'Founder & CEO');
                  setCompanyInput(user.company || 'Acme Enterprises');
                  setIsEditing(true);
                }}
                className="mb-1 p-2 text-slate-600 hover:text-[#FF4820] bg-slate-100 hover:bg-orange-50 rounded-xl transition-colors text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Edit Profile</span>
              </button>
            )}
          </div>

          {isSaved && (
            <div className="mt-4 p-2.5 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100 flex items-center gap-2 animate-in fade-in">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Profile updated successfully!</span>
            </div>
          )}

          {/* Profile Content / Edit Form */}
          {isEditing ? (
            <form onSubmit={handleSave} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#FF4820]/20 focus:border-[#FF4820] text-sm text-slate-800 transition-all"
                  />
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Job Role / Title
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={titleInput}
                    onChange={(e) => setTitleInput(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#FF4820]/20 focus:border-[#FF4820] text-sm text-slate-800 transition-all"
                  />
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Organization / Company
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={companyInput}
                    onChange={(e) => setCompanyInput(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#FF4820]/20 focus:border-[#FF4820] text-sm text-slate-800 transition-all"
                  />
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-bold text-white bg-[#FF4820] hover:bg-[#E03A12] rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div className="mt-6 space-y-4">
              {/* Account Status Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100/80">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-semibold uppercase tracking-wider mb-1">
                    <Crown className="w-3.5 h-3.5 text-amber-500" />
                    <span>Plan Status</span>
                  </div>
                  <p className="text-sm font-extrabold text-[#1E2022]">{user.plan || '14-Day Free Trial'}</p>
                  <span className="inline-block mt-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    Active & Unlimited
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100/80">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-semibold uppercase tracking-wider mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#FF4820]" />
                    <span>Member Since</span>
                  </div>
                  <p className="text-sm font-extrabold text-[#1E2022]">
                    {user.joinedAt || 'August 2026'}
                  </p>
                  <span className="inline-block mt-1 text-[10px] font-bold text-slate-600 bg-slate-200/60 px-2 py-0.5 rounded-full">
                    Verified User
                  </span>
                </div>
              </div>

              {/* Workspace Info Card */}
              <div className="p-4 rounded-2xl bg-[#FFF8F6] border border-[#FFE7E0] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700">Workspace Environment</span>
                  <span className="text-[11px] font-bold text-[#FF4820] bg-white px-2 py-0.5 rounded-md shadow-2xs">
                    {user.company || 'Personal Org'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Role:</span>
                  <span className="font-semibold text-slate-700">{user.role || 'Workspace Owner'}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>Security:</span>
                  <span className="font-semibold text-emerald-600 flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5" /> 2FA Enabled (SSL-256)
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onLogout();
                  }}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Sign Out of Account</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 text-xs font-bold text-white bg-[#1E2022] hover:bg-[#33383F] rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
