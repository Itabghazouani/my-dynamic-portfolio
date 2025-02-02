'use client';

import { Fragment, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { SectionHeader } from '@/components';
import Card from '@/components/Card';
import { LEARNING_AND_PROFESIONNAL_DEVELOPMENT } from '@/constants';

const LearningAndProfessionalDevelopment = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
          className="mt-12 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4"
        >
          <div
            className={`flex flex-none gap-8 pr-8 ${
              !selectedCard ? 'animate-move-left [animation-duration:90s]' : ''
            } hover:[animation-play-state:paused] transition-all duration-500`}
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {LEARNING_AND_PROFESIONNAL_DEVELOPMENT.map((experience) => (
                  <Card
                    key={experience.name}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCard(
                        selectedCard === experience.name
                          ? null
                          : experience.name,
                      );
                    }}
                    className={`
                      flex-shrink-0 w-[320px] md:w-[448px] p-6 md:p-8 
                      hover:-rotate-3 transition-all duration-300 
                      cursor-pointer select-none
                      ${
                        selectedCard === experience.name
                          ? 'order-first ml-[10%] -rotate-3'
                          : selectedCard
                          ? 'invisible w-0 opacity-0'
                          : ''
                      }
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
