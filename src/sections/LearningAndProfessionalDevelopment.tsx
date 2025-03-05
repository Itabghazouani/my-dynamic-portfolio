'use client';

import { Fragment, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components';
import Card from '@/components/Card';
import { LEARNING_AND_PROFESIONNAL_DEVELOPMENT } from '@/constants';
import { motion, AnimatePresence } from 'framer-motion';

interface CardPosition {
  left: number;
  top: number;
}

const LearningAndProfessionalDevelopment = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [selectedCardPosition, setSelectedCardPosition] =
    useState<CardPosition>({ left: 0, top: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    // Check if screen is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setSelectedCard(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCardClick = (
    e: React.MouseEvent<HTMLDivElement>,
    experienceName: string,
  ) => {
    e.stopPropagation();

    if (selectedCard === experienceName) {
      setSelectedCard(null);
      return;
    }

    // Get the card element and its position
    const cardElement = cardsRef.current.get(experienceName);
    if (cardElement) {
      const rect = cardElement.getBoundingClientRect();
      const containerRect = containerRef.current?.getBoundingClientRect() || {
        left: 0,
        top: 0,
      };

      // Calculate relative position to the container
      setSelectedCardPosition({
        left: rect.left - containerRect.left,
        top: rect.top - containerRect.top,
      });
    }

    setSelectedCard(experienceName);
  };

  const setCardRef = (
    el: HTMLDivElement | null,
    experienceName: string,
    index: number,
  ) => {
    if (el && index === 0) {
      cardsRef.current.set(experienceName, el);
    }
  };

  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="My Journey"
          title="Education & Professional Development"
          description="Explore my learning journey and professional experiences that have shaped me into a web developer."
        />
        <div
          ref={containerRef}
          className="mt-12 lg:mt-24 flex overflow-x-clip relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4"
        >
          {/* Selected Card Overlay */}
          <AnimatePresence>
            {selectedCard && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: selectedCardPosition.left,
                  width: 'auto',
                }}
                animate={{
                  opacity: 1,
                  x: isMobile
                    ? 0 // Center on mobile
                    : containerRef.current
                    ? containerRef.current.offsetWidth / 2 - 224
                    : 0,
                  width: isMobile ? '100%' : '448px',
                  zIndex: 50,
                }}
                exit={{
                  opacity: 0,
                  x: selectedCardPosition.left,
                  width: 'auto',
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute top-4 z-50"
              >
                {LEARNING_AND_PROFESIONNAL_DEVELOPMENT.map(
                  (experience) =>
                    experience.name === selectedCard && (
                      <Card
                        key={`selected-${experience.name}`}
                        onClick={(e) => handleCardClick(e, experience.name)}
                        className={`
                          w-full mx-auto p-6 md:p-8 cursor-pointer select-none
                          ${isMobile ? 'max-w-[90%]' : 'md:w-[448px]'}
                        `}
                      >
                        <div className="flex gap-4 items-center">
                          <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                            <Image
                              src={experience.image}
                              alt={experience.name}
                              className="max-h-full"
                            />
                          </div>
                          <div>
                            <div className="font-semibold">
                              {experience.name}
                            </div>
                            <div className="text-sm text-white/40">
                              {experience.year}
                            </div>
                          </div>
                        </div>
                        <p className="mt-4 md:mt-6 text-sm md:text-base">
                          {experience.description}
                        </p>
                      </Card>
                    ),
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scrolling Cards */}
          <div
            className={`flex flex-none gap-8 pr-8 ${
              !selectedCard
                ? 'animate-move-left md:[animation-duration:90s] [animation-duration:60s]'
                : ''
            } hover:[animation-play-state:paused] transition-all duration-500`}
            style={{
              opacity: selectedCard ? 0 : 1,
              visibility: selectedCard ? 'hidden' : 'visible',
            }}
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {LEARNING_AND_PROFESIONNAL_DEVELOPMENT.map((experience) => (
                  <Card
                    key={`${experience.name}-${index}`}
                    ref={(el) => setCardRef(el, experience.name, index)}
                    onClick={(e) => handleCardClick(e, experience.name)}
                    className={`
                      flex-shrink-0 w-[280px] md:w-[448px] p-6 md:p-8 
                      hover:-rotate-3 transition-all duration-300 
                      cursor-pointer select-none
                    `}
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={experience.image}
                          alt={experience.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{experience.name}</div>
                        <div className="text-sm text-white/40">
                          {experience.year}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {experience.description}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningAndProfessionalDevelopment;
