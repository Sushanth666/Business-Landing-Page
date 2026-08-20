import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = ({
  onOpenSchedule,
  onNavigate,
  currentPage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

          {/* Right Action Buttons: Login + Get a Quote */}
          <div className="hidden md:flex items-center space-x-4">
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

            <button
              onClick={onOpenSchedule}
              id="nav-cta-btn"
              className="px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#FF4820] hover:bg-[#E03A12] rounded-xl shadow-xs hover:shadow-md transition-all duration-200 active:scale-95 whitespace-nowrap cursor-pointer"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onNavigate('login')}
              className="text-xs font-semibold text-slate-700 hover:text-[#FF4820] px-2 py-1"
            >
              Log In
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
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
