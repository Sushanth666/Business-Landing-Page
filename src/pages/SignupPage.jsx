import React, { useState } from 'react';
import { Eye, EyeOff, Lock, Mail, User, ArrowLeft, CheckCircle2, ShieldCheck, LogOut } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Logo } from '../components/common/Logo';

export const SignupPage = ({ onNavigate, onLoginSuccess, user, onLogout }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getPasswordStrength = () => {
    if (!password) return { level: 0, text: '', color: 'bg-slate-200' };
    if (password.length < 6) return { level: 1, text: 'Weak', color: 'bg-red-400' };
    if (password.length < 10) return { level: 2, text: 'Fair', color: 'bg-amber-400' };
    return { level: 3, text: 'Strong', color: 'bg-emerald-500' };
  };

  const strength = getPasswordStrength();

  const handleRegisterUser = (userData) => {
    setIsLoading(true);
    setTimeout(() => {
      // Save to registered users list in localStorage
      try {
        const storedUsers = JSON.parse(localStorage.getItem('undefine_registered_users') || '[]');
        const filtered = storedUsers.filter(u => u.email.toLowerCase() !== userData.email.toLowerCase());
        filtered.push(userData);
        localStorage.setItem('undefine_registered_users', JSON.stringify(filtered));
      } catch {
        // ignore
      }

      setIsLoading(false);
      setIsSuccess(true);
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ['#FF4820', '#10B981', '#6366F1', '#F59E0B'],
      });

      if (onLoginSuccess) {
        onLoginSuccess(userData);
      }

      setTimeout(() => {
        onNavigate('landing');
      }, 1600);
    }, 900);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName || !email || !password) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    if (!agreeTerms) {
      setErrorMessage('Please accept the Terms & Conditions.');
      return;
    }

    const userData = {
      name: fullName.trim(),
      email: email.trim(),
      role: 'Founder & CEO',
      company: `${fullName.trim().split(' ')[0]}'s Workspace`,
      plan: '14-Day Free Trial',
      joinedAt: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    };

    handleRegisterUser(userData);
  };

  const handleSocialSignup = (provider) => {
    const userData = {
      name: provider === 'Google' ? 'Alex Rivera' : 'Taylor Chen',
      email: provider === 'Google' ? 'alex.rivera@gmail.com' : 'taylor.chen@github.io',
      role: 'Business Owner',
      company: provider === 'Google' ? 'Rivera Global' : 'Chen Engineering',
      plan: '14-Day Free Trial',
      joinedAt: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    };
    handleRegisterUser(userData);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFC] flex flex-col justify-between py-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#FFF4F0] -z-0 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#E0F7F6] -z-0 blur-3xl pointer-events-none"></div>

      {/* Top Header */}
      <header className="max-w-6xl mx-auto w-full flex items-center justify-between z-10">
        <div onClick={() => onNavigate('landing')} className="cursor-pointer">
          <Logo size="md" />
        </div>
      </header>

      {/* Main Signup Form */}
      <main className="flex-1 flex items-center justify-center py-8 z-10">
        <div className="w-full max-w-md bg-white rounded-3xl p-7 sm:p-9 shadow-[0_16px_50px_rgba(0,0,0,0.05)] border border-slate-100 relative">
          
          {/* Back to Home button at top-left inside card */}
          {!isSuccess && (
            <div className="mb-4">
              <button
                type="button"
                onClick={() => onNavigate('landing')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#64748B] hover:text-[#FF4820] bg-slate-50 hover:bg-orange-50/80 px-3 py-1.5 rounded-full border border-slate-200/80 hover:border-[#FF4820]/30 transition-all cursor-pointer shadow-2xs group"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#FF4820] group-hover:-translate-x-0.5 transition-transform" />
                <span>Back to Home</span>
              </button>
            </div>
          )}

          {isSuccess ? (
            <div className="py-10 text-center space-y-4 animate-in fade-in zoom-in duration-300">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-xs border border-emerald-100">
                <CheckCircle2 className="w-9 h-9 text-emerald-500" />
              </div>
              <h2 className="text-2xl font-black text-[#1E2022]">Account Created!</h2>
              <p className="text-xs sm:text-sm text-slate-500 max-w-xs mx-auto">
                Welcome to Undefine, <span className="font-bold text-slate-800">{fullName || 'there'}</span>! Your 14-day trial has been activated.
              </p>
            </div>
          ) : user ? (
            /* If already logged in */
            <div className="py-4 text-center space-y-5 animate-in fade-in">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FF4820] to-[#FF7A50] text-white flex items-center justify-center font-black text-2xl mx-auto shadow-md">
                {user.name.charAt(0)}
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                  Already Registered
                </span>
                <h2 className="text-2xl font-black text-[#1E2022] mt-2">{user.name}</h2>
                <p className="text-xs text-slate-400 mt-0.5">{user.email}</p>
              </div>

              <div className="space-y-2 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('landing')}
                  className="w-full py-3.5 text-sm font-bold text-white bg-[#FF4820] hover:bg-[#E03A12] rounded-xl shadow-md transition-colors cursor-pointer"
                >
                  Return to Homepage
                </button>
                <button
                  type="button"
                  onClick={() => onLogout?.()}
                  className="w-full py-2.5 text-xs font-semibold text-slate-600 hover:text-red-600 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Log out to register a new account</span>
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="text-center mb-6">
                <p className="text-[11px] sm:text-xs font-bold tracking-widest text-[#64748B] uppercase mb-2">
                  START FOR FREE
                </p>
                <h1 className="text-2xl sm:text-3xl font-black text-[#1E2022] tracking-tight">
                  Start your{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10">journey</span>
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFDDD5] -z-0 rounded-xs"></span>
                  </span>
                </h1>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  14-day free trial. No credit card required.
                </p>
              </div>

              {errorMessage && (
                <div className="mb-5 p-3 rounded-xl bg-red-50 text-red-600 text-xs font-semibold border border-red-100 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3.5">
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Sarah Jenkins"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#FF4820]/20 focus:border-[#FF4820] text-sm text-slate-800 transition-all placeholder:text-slate-300"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Work Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#FF4820]/20 focus:border-[#FF4820] text-sm text-slate-800 transition-all placeholder:text-slate-300"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="At least 8 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-11 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#FF4820]/20 focus:border-[#FF4820] text-sm text-slate-800 transition-all placeholder:text-slate-300"
                    />
                    <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-hidden cursor-pointer"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  {password && (
                    <div className="mt-2 space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400 font-medium">Strength:</span>
                        <span className="font-bold text-slate-700">{strength.text}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 h-1.5">
                        <div className={`rounded-full ${strength.level >= 1 ? strength.color : 'bg-slate-100'}`}></div>
                        <div className={`rounded-full ${strength.level >= 2 ? strength.color : 'bg-slate-100'}`}></div>
                        <div className={`rounded-full ${strength.level >= 3 ? strength.color : 'bg-slate-100'}`}></div>
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="Repeat your password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-[#FF4820]/20 focus:border-[#FF4820] text-sm text-slate-800 transition-all placeholder:text-slate-300"
                    />
                    <Lock className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <div className="pt-1">
                  <label className="flex items-start gap-2.5 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="w-4 h-4 mt-0.5 rounded-xs border-slate-300 text-[#FF4820] focus:ring-[#FF4820] accent-[#FF4820]"
                    />
                    <span className="text-[11px] sm:text-xs text-slate-500 leading-tight">
                      I agree to Undefine's{' '}
                      <a href="#terms" className="text-[#FF4820] font-semibold hover:underline">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#privacy" className="text-[#FF4820] font-semibold hover:underline">
                        Privacy Policy
                      </a>.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 text-sm font-bold text-white bg-[#FF4820] hover:bg-[#E03A12] disabled:opacity-70 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-98 cursor-pointer mt-2"
                >
                  {isLoading ? 'Creating Account...' : 'Create Free Account'}
                </button>

              </form>

              <div className="relative my-5">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-3 text-slate-400 font-semibold tracking-wider">
                    Or sign up with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleSocialSignup('Google')}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors text-xs font-semibold text-slate-700 cursor-pointer"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                  <span>Google</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSocialSignup('GitHub')}
                  className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors text-xs font-semibold text-slate-700 cursor-pointer"
                >
                  <svg className="w-4 h-4 fill-slate-900" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub</span>
                </button>
              </div>

              <div className="text-center mt-6 pt-4 border-t border-slate-100">
                <p className="text-xs text-slate-500">
                  Already have an account?{' '}
                  <button
                    onClick={() => onNavigate('login')}
                    className="font-bold text-[#FF4820] hover:underline cursor-pointer"
                  >
                    Sign In
                  </button>
                </p>
              </div>

            </div>
          )}

        </div>
      </main>

      <footer className="max-w-md mx-auto w-full text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5 z-10">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
        <span>Enterprise ISO/IEC 27001 Certified Security</span>
      </footer>

    </div>
  );
};

