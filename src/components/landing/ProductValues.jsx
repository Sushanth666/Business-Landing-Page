import React from 'react';
import iconClock from '../../assets/icon_clock.png';
import iconLock from '../../assets/icon_lock.png';
import iconHeadset from '../../assets/icon_headset.png';

export const ProductValues = () => {
  const cards = [
    {
      id: 'time',
      title: 'Accelerate Time Management',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo. Amet, aliquam condimentum.',
      icon: iconClock,
      alt: 'Accelerate Time Management Clock Icon',
    },
    {
      id: 'security',
      title: 'Improve Security',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo. Amet, aliquam condimentum.',
      icon: iconLock,
      alt: 'Improve Security Lock Icon',
    },
    {
      id: 'capital',
      title: 'Rise Capital Online',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo. Amet, aliquam condimentum.',
      icon: iconHeadset,
      alt: 'Rise Capital Online Headset Icon',
    },
  ];

  return (
    <section id="values" className="py-20 lg:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <p className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#64748B] uppercase mb-3">
            YOUR PATH TO SUCCESS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#1E2022] tracking-tight leading-[1.18]">
            Start building the{' '}
            <span className="relative inline-block">
              <span className="relative z-10">products</span>
              {/* Soft pink/salmon highlight behind products */}
              <span className="absolute bottom-1 left-0 w-full h-3 sm:h-3.5 bg-[#FFDDD5] -z-0 rounded-xs"></span>
            </span> <br />
            your customers want
          </h2>
          <div className="mt-3 text-xs sm:text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Imperdiet tempus felis vitae sit est quisque.</p>
          </div>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center text-center px-4 py-2"
            >
              {/* Exact 60 x 60 Icon Image Container */}
              <div className="w-[60px] h-[60px] flex items-center justify-center mb-6 select-none">
                <img
                  src={card.icon}
                  alt={card.alt}
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#1E2022] mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
