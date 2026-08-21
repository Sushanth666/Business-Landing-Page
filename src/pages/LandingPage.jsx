import React from 'react';
import { Hero } from '../components/landing/Hero';
import { LogoCloud } from '../components/landing/LogoCloud';
import { FeatureShowcase } from '../components/landing/FeatureShowcase';
import { ProductValues } from '../components/landing/ProductValues';
import { Testimonials } from '../components/landing/Testimonials';
import { HowItWorks } from '../components/landing/HowItWorks';
import { CtaBanner } from '../components/landing/CtaBanner';

export const LandingPage = ({
  onOpenSchedule,
  onOpenDemo,
  user,
  onOpenProfile,
}) => {
  return (
    <main>
      <Hero
        onOpenSchedule={onOpenSchedule}
        onOpenDemo={onOpenDemo}
        user={user}
        onOpenProfile={onOpenProfile}
      />
      <LogoCloud />
      <FeatureShowcase />
      <ProductValues />
      <Testimonials />
      <HowItWorks />
      <CtaBanner onOpenSchedule={onOpenSchedule} />
    </main>
  );
};

