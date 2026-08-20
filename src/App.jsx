import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScheduleModal } from './components/modals/ScheduleModal';
import { DemoModal } from './components/modals/DemoModal';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';

export function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

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

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page === 'landing' ? 'home' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-[#FF4820]/15 selection:text-[#FF4820] flex flex-col justify-between">
      
      {currentPage === 'landing' && (
        <Navbar
          onOpenSchedule={() => setIsScheduleModalOpen(true)}
          onOpenDemo={() => setIsDemoModalOpen(true)}
          onNavigate={navigateTo}
          currentPage={currentPage}
        />
      )}

      {/* Pages View */}
      {currentPage === 'landing' && (
        <LandingPage
          onOpenSchedule={() => setIsScheduleModalOpen(true)}
          onOpenDemo={() => setIsDemoModalOpen(true)}
        />
      )}

      {currentPage === 'login' && (
        <LoginPage onNavigate={navigateTo} />
      )}

      {currentPage === 'signup' && (
        <SignupPage onNavigate={navigateTo} />
      )}

      {currentPage === 'landing' && (
        <Footer onNavigate={navigateTo} />
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

    </div>
  );
}

export default App;
