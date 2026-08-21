import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, LogIn, User, LogOut, Sparkles, Shield, Crown } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = ({
  onOpenSchedule,
  onOpenProfile,
  onNavigate,
  currentPage,
  user,
  onLogout,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', hasDropdown: false },
    { name: 'About Us', href: '#features', hasDropdown: false },
    { name: 'Features', href: '#values', hasDropdown: true },
    { name: 'Blog', href: '#testimonials', hasDropdown: true },
    { name: 'Portfolio', href: '#how-it-works', hasDropdown: false },
  ];

  const handleNavLinkClick = (href, name) => {
    setActiveNav(name);
    if (currentPage !== 'landing') {
      onNavigate('landing');
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-3.5 border-b border-slate-100'
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <div
            onClick={() => onNavigate('landing')}
            className="cursor-pointer"
          >
            <Logo size="md" />
          </div>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = activeNav === link.name && currentPage === 'landing';
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (currentPage !== 'landing') {
                      e.preventDefault();
                      handleNavLinkClick(link.href, link.name);
                    } else {
                      setActiveNav(link.name);
                    }
                  }}
                  className={`text-[13px] sm:text-sm font-medium transition-colors flex items-center gap-1 ${
                    isActive
                      ? 'text-[#1E2022] font-semibold'
                      : 'text-[#64748B] hover:text-[#FF4820]'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 stroke-[2.2] translate-y-px" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Section: User Profile or Login/Quote buttons */}
          <div className="hidden md:flex items-center space-x-3.5">
            {user ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  id="user-profile-menu-btn"
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2.5 p-1 pl-1.5 pr-3 rounded-full hover:bg-orange-50/70 border border-slate-200/80 hover:border-[#FF4820]/30 transition-all cursor-pointer shadow-2xs group"
                  aria-label="User account menu"
                >
                  {/* User Initial Avatar */}
                  <div className="relative w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF4820] to-[#FF7A50] text-white flex items-center justify-center font-extrabold text-xs shadow-xs select-none">
                    {getInitials(user.name)}
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                  </div>

                  <div className="text-left leading-tight hidden lg:block">
                    <div className="text-xs font-bold text-[#1E2022] group-hover:text-[#FF4820] transition-colors truncate max-w-[120px]">
                      {user.name}
                    </div>
                    <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                      <span>{user.plan ? 'Active Plan' : 'Logged In'}</span>
                    </div>
                  </div>

                  <ChevronDown
                    className={`w-3.5 h-3.5 text-slate-400 group-hover:text-[#FF4820] transition-transform duration-200 ${
                      profileDropdownOpen ? 'rotate-180 text-[#FF4820]' : ''
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    
                    {/* User Info Header */}
                    <div className="px-4 py-3 border-b border-slate-100 bg-[#FAFBFD] rounded-t-2xl -mt-2 mb-1.5">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF4820] to-[#FF7A50] text-white flex items-center justify-center font-bold text-sm shadow-xs select-none shrink-0">
                          {getInitials(user.name)}
                        </div>
                        <div className="overflow-hidden">
                          <p className="text-xs font-extrabold text-[#1E2022] truncate">{user.name}</p>
                          <p className="text-[11px] text-slate-400 truncate">{user.email}</p>
                        </div>
                      </div>
                      <div className="mt-2.5 flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Plan</span>
                        <span className="text-[10px] font-bold text-[#FF4820] bg-orange-50 px-2 py-0.5 rounded-full border border-orange-100">
                          {user.plan || 'Pro Member'}
                        </span>
                      </div>
                    </div>

                    {/* Menu Actions */}
                    <div className="px-1.5 space-y-0.5">
                      <button
                        type="button"
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          if (onOpenProfile) onOpenProfile();
                        }}
                        className="w-full px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#FF4820] hover:bg-orange-50/60 rounded-xl transition-colors flex items-center gap-2.5 text-left cursor-pointer"
                      >
                        <User className="w-4 h-4 text-slate-400" />
                        <span>My Profile & Settings</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          if (onOpenSchedule) onOpenSchedule();
                        }}
                        className="w-full px-3 py-2 text-xs font-semibold text-slate-700 hover:text-[#FF4820] hover:bg-orange-50/60 rounded-xl transition-colors flex items-center gap-2.5 text-left cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span>Book Strategy Consultation</span>
                      </button>
                    </div>

                    <div className="border-t border-slate-100 my-1.5"></div>

                    {/* Logout Button */}
                    <div className="px-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          if (onLogout) onLogout();
                        }}
                        className="w-full px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-50 rounded-xl transition-colors flex items-center gap-2.5 text-left cursor-pointer"
                      >
                        <LogOut className="w-4 h-4 text-red-500" />
                        <span>Sign Out</span>
                      </button>
                    </div>

                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => onNavigate('login')}
                className={`text-xs sm:text-sm font-semibold transition-colors px-3 py-2 rounded-lg flex items-center gap-1.5 ${
                  currentPage === 'login'
                    ? 'text-[#FF4820]'
                    : 'text-[#64748B] hover:text-[#1E2022]'
                }`}
              >
                <LogIn className="w-4 h-4" />
                <span>Log In</span>
              </button>
            )}

            <button
              onClick={onOpenSchedule}
              id="nav-cta-btn"
              className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#FF4820] hover:bg-[#E03A12] rounded-xl shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 whitespace-nowrap cursor-pointer"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {user ? (
              <button
                onClick={() => onOpenProfile?.()}
                className="flex items-center gap-1.5 p-1 rounded-full bg-orange-50 border border-orange-200 text-xs font-bold text-[#FF4820] px-2.5 py-1"
              >
                <div className="w-5 h-5 rounded-full bg-[#FF4820] text-white flex items-center justify-center text-[10px]">
                  {getInitials(user.name)}
                </div>
                <span className="truncate max-w-[80px]">{user.name.split(' ')[0]}</span>
              </button>
            ) : (
              <button
                onClick={() => onNavigate('login')}
                className="text-xs font-semibold text-slate-700 hover:text-[#FF4820] px-2 py-1"
              >
                Log In
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pt-3 pb-6 space-y-3 shadow-lg">
          
          {/* Mobile Logged-in User Card */}
          {user && (
            <div className="p-3.5 bg-[#FFF8F6] border border-[#FFE4DD] rounded-2xl flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FF4820] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  {getInitials(user.name)}
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-[#1E2022] truncate">{user.name}</p>
                  <p className="text-[11px] text-slate-500 truncate">{user.email}</p>
                </div>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenProfile?.();
                }}
                className="text-xs font-bold text-[#FF4820] hover:underline"
              >
                Profile
              </button>
            </div>
          )}

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (currentPage !== 'landing') {
                    e.preventDefault();
                    handleNavLinkClick(link.href, link.name);
                  } else {
                    setActiveNav(link.name);
                  }
                }}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#FF4820] hover:bg-orange-50/50 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                {link.hasDropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
              </a>
            ))}
            
            <div className="border-t border-slate-100 pt-2 flex flex-col space-y-2">
              {user ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLogout?.();
                  }}
                  className="w-full py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 text-left px-3 rounded-lg flex items-center gap-2"
                >
                  <LogOut className="w-4 h-4 text-red-500" />
                  <span>Sign Out ({user.name})</span>
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate('login');
                    }}
                    className="w-full py-2.5 text-sm font-semibold text-slate-700 hover:text-[#FF4820] text-left px-3 rounded-lg hover:bg-slate-50 flex items-center gap-2"
                  >
                    <LogIn className="w-4 h-4" />
                    <span>Log In</span>
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onNavigate('signup');
                    }}
                    className="w-full py-2.5 text-sm font-semibold text-slate-700 hover:text-[#FF4820] text-left px-3 rounded-lg hover:bg-slate-50"
                  >
                    Create Account
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
              className="w-full py-3 text-sm font-bold text-white bg-[#FF4820] hover:bg-[#E03A12] rounded-xl shadow-sm cursor-pointer"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

