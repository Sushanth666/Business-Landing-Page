import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScheduleModal } from './components/modals/ScheduleModal';
import { DemoModal } from './components/modals/DemoModal';
import { ProfileModal } from './components/modals/ProfileModal';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { CheckCircle2, LogIn, Sparkles, X } from 'lucide-react';

export function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Initialize currentUser from localStorage
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('undefine_auth_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const showToast = (message, type = 'success') => {
    setToastMessage({ text: message, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 3800);
  };

  const handleLoginSuccess = (userData) => {
    setCurrentUser(userData);
    try {
      localStorage.setItem('undefine_auth_user', JSON.stringify(userData));
    } catch {
      // ignore
    }
    showToast(`Welcome back, ${userData.name}! Workspace ready.`);
  };

  const handleUpdateUser = (updatedData) => {
    setCurrentUser(prev => {
      const merged = { ...prev, ...updatedData };
      try {
        localStorage.setItem('undefine_auth_user', JSON.stringify(merged));
        // Also update in registered users database
        const storedUsers = JSON.parse(localStorage.getItem('undefine_registered_users') || '[]');
        const updatedList = storedUsers.map(u => u.email === merged.email ? { ...u, ...merged } : u);
        localStorage.setItem('undefine_registered_users', JSON.stringify(updatedList));
      } catch {
        // ignore
      }
      return merged;
    });
    showToast('Profile information updated successfully.');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('undefine_auth_user');
    } catch {
      // ignore
    }
    showToast('You have signed out of your account.', 'info');
  };

  // Hash-based routing listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#login') {
        setCurrentPage('login');
      } else if (hash === '#signup') {
        setCurrentPage('signup');
      } else if (hash === '#home' || hash === '') {
        setCurrentPage('landing');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Set accurate brand favicon matching logo (solid filled dot + thick U)
  useEffect(() => {
    const faviconDataUri = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSI+CiAgPCEtLSBUb3AgU29saWQgQ2lyY2xlIERvdCAtLT4KICA8Y2lyY2xlIGN4PSIxNiIgY3k9IjUuOCIgcj0iMi44IiBmaWxsPSIjRkY0ODIwIiAvPgogIDwhLS0gQ2VudGVyIFZlcnRpY2FsIFN0ZW0gLS0+CiAgPHBhdGggZD0iTTE2IDExVjE5LjUiIHN0cm9rZT0iI0ZGNDgyMCIgc3Ryb2tlLXdpZHRoPSIzLjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgLz4KICA8IS0tIE91dGVyIFUgU2hhcGUgLS0+CiAgPHBhdGggZD0iTTYuNSAxMS41VjE5QzYuNSAyNC4yIDEwLjggMjguNSAxNiAyOC41QzIxLjIgMjguNSAyNS41IDI0LjIgMjUuNSAxOVYxMS41IiBzdHJva2U9IiNGRjQ4MjAiIHN0cm9rZS13aWR0aD0iMy4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIC8+Cjwvc3ZnPg==";
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.type = 'image/svg+xml';
    link.href = faviconDataUri;
  }, []);

  // Moving marquee animation in browser tab name
  useEffect(() => {
    let titleText = "Undefine - Everything you need to run your online business 🚀 • ";
    if (currentPage === 'login') {
      titleText = "Sign In | Undefine 🔐 • Everything you need to run your online business • ";
    } else if (currentPage === 'signup') {
      titleText = "Create Account | Undefine ✨ • 14-Day Free Trial • ";
    }

    let pos = 0;
    const interval = setInterval(() => {
      document.title = titleText.substring(pos) + titleText.substring(0, pos);
      pos = (pos + 1) % titleText.length;
    }, 240);

    return () => clearInterval(interval);
  }, [currentPage]);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page === 'landing' ? 'home' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-[#FF4820]/15 selection:text-[#FF4820] flex flex-col justify-between relative">
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <aside
          aria-label="Notification"
          className="fixed bottom-6 right-6 z-50 bg-[#1E2022] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-slate-700/60 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300 max-w-sm"
        >
          <div className="w-8 h-8 rounded-full bg-[#FF4820]/20 text-[#FF4820] flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-[#FF4820]" />
          </div>
          <p className="text-xs sm:text-sm font-semibold text-slate-100 flex-1 leading-snug">
            {toastMessage.text}
          </p>
          <button
            onClick={() => setToastMessage(null)}
            className="text-slate-400 hover:text-white p-1"
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </aside>
      )}

      {currentPage === 'landing' && (
        <Navbar
          onOpenSchedule={() => setIsScheduleModalOpen(true)}
          onOpenDemo={() => setIsDemoModalOpen(true)}
          onOpenProfile={() => setIsProfileModalOpen(true)}
          onNavigate={navigateTo}
          currentPage={currentPage}
          user={currentUser}
          onLogout={handleLogout}
        />
      )}

      {/* Pages View */}
      {currentPage === 'landing' && (
        <LandingPage
          onOpenSchedule={() => setIsScheduleModalOpen(true)}
          onOpenDemo={() => setIsDemoModalOpen(true)}
          user={currentUser}
          onOpenProfile={() => setIsProfileModalOpen(true)}
        />
      )}

      {currentPage === 'login' && (
        <LoginPage
          onNavigate={navigateTo}
          onLoginSuccess={handleLoginSuccess}
          user={currentUser}
          onLogout={handleLogout}
        />
      )}

      {currentPage === 'signup' && (
        <SignupPage
          onNavigate={navigateTo}
          onLoginSuccess={handleLoginSuccess}
          user={currentUser}
          onLogout={handleLogout}
        />
      )}

      {currentPage === 'landing' && (
        <Footer
          onNavigate={navigateTo}
          user={currentUser}
          onOpenProfile={() => setIsProfileModalOpen(true)}
          onLogout={handleLogout}
        />
      )}

      {/* Modals */}
      <ScheduleModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
      />

      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        user={currentUser}
        onLogout={handleLogout}
        onUpdateUser={handleUpdateUser}
      />

    </div>
  );
}

export default App;

