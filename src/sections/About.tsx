'use client';

import { useRef } from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

import bcnMap from '@/assets/images/bcnmap.png';
import smileMemoji from '@/assets/images/smiling-itab-memoji.png';
import { Card, CardHeader, SectionHeader, TechnologyItems } from '@/components';
import { HOBBIES, TECHNOLOGIES } from '@/constants';
import Link from 'next/link';

const AboutSection = () => {
  const constraintRef = useRef(null);

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-28" id="about">
      <div className="container px-4 sm:px-6 md:px-8">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />

        <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 flex flex-col gap-4 sm:gap-6 md:gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <Card className="h-[280px] sm:h-[300px] md:h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Languages"
                description="Human languages, not programming ones!"
              />
              <div className="flex flex-col gap-2 mt-3 md:mt-4 px-4 sm:px-6 md:px-10">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="font-medium min-w-12 sm:min-w-16 md:min-w-20">
                    🇫🇷 French
                  </div>
                  <span className="bg-gradient-to-r from-[#00FFFF] to-[#B8E986] text-transparent bg-clip-text">
                    ★★★★★
                  </span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="font-medium min-w-12 sm:min-w-16 md:min-w-20">
                    🇬🇧 English
                  </div>
                  <span className="relative flex">
                    <span className="bg-gradient-to-r from-[#00FFFF] to-[#B8E986] text-transparent bg-clip-text">
                      ★★★★
                    </span>
                    <span className="relative">
                      <span className="absolute left-0 overflow-hidden w-[50%] bg-gradient-to-r from-[#00FFFF] to-[#B8E986] text-transparent bg-clip-text">
                        ★
                      </span>
                      <span className="text-white/30">★</span>
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="font-medium min-w-12 sm:min-w-16 md:min-w-20">
                    🇪🇸 Spanish
                  </div>
                  <span className="relative">
                    <span className="bg-gradient-to-r from-[#00FFFF] to-[#B8E986] text-transparent bg-clip-text">
                      ★★★★
                    </span>
                    <span className="text-white/30">★</span>
                  </span>
                </div>
              </div>
            </Card>

            <Card className="h-[280px] sm:h-[300px] md:h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional
                digital experiences."
              />
              <TechnologyItems
                items={Object.values(TECHNOLOGIES)}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <TechnologyItems
                items={Object.values(TECHNOLOGIES)}
                className="mt-4 md:mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:25s]"
              />
            </Card>
          </div>

          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[280px] sm:h-[300px] md:h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
                className="px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6"
              />
              <div className="relative flex-1" ref={constraintRef}>
                {HOBBIES.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 bg-gradient-to-r from-[#00FFFF] to-[#B8E986] rounded-full py-1 sm:py-1.5 absolute text-xs sm:text-sm md:text-base"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                    animate={{
                      x: [
                        0,
                        Math.random() * 60 - 30,
                        -Math.random() * 60 + 30,
                        0,
                      ],
                      y: [
                        0,
                        Math.random() * 60 - 30,
                        -Math.random() * 60 + 30,
                        0,
                      ],
                    }}
                    transition={{
                      duration: 15 + Math.random() * 5,
                      repeat: Infinity,
                      ease: 'linear',
                      times: [0, 0.33, 0.66, 1],
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[280px] sm:h-[300px] md:h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={bcnMap}
                alt="Map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 sm:size-18 md:size-20 rounded-full after:content[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00FFFF] to-[#B8E986] -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00FFFF] to-[#B8E986] -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="Memoji smiling"
                  className="size-16 sm:size-18 md:size-20"
                />
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            <Card className="h-[320px] sm:h-[340px] md:h-[360px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="Routine"
                description="A day in my developer life"
              />
              <div className="flex flex-col gap-2 sm:gap-3 px-4 sm:px-5 md:px-6">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="text-xl sm:text-2xl">☀️</div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">
                      Morning
                    </div>
                    <div className="text-xs sm:text-sm text-white/60">
                      Coffee & Code Review
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="text-xl sm:text-2xl">🎯</div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">
                      Afternoon
                    </div>
                    <div className="text-xs sm:text-sm text-white/60">
                      Deep Work & Problem Solving
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="text-xl sm:text-2xl">🌙</div>
                  <div>
                    <div className="font-medium text-sm sm:text-base">
                      Evening
                    </div>
                    <div className="text-xs sm:text-sm text-white/60">
                      Gym, Cooking & Side Projects
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="h-[320px] sm:h-[340px] md:h-[360px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Coding Soundtrack"
                description="What keeps me in the flow"
              />
              <div className="flex flex-col gap-3 sm:gap-4 px-4 sm:px-5 md:px-6">
                <div className="bg-white/5 rounded-lg p-3 sm:p-4">
                  <div className="text-xs sm:text-sm text-white/60">
                    Currently On Repeat
                  </div>
                  <Link
                    href="https://www.youtube.com/watch?v=2OHFgjuy3DI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium mt-1 hover:text-[#00FFFF] transition-colors text-sm sm:text-base"
                  >
                    <span className="inline-block bg-[length:200%] bg-gradient-to-r from-[#00FFFF] via-[#B8E986] to-[#00FFFF] text-transparent bg-clip-text hover:bg-[position:100%] transition-[background-position] duration-300">
                      Sofiane Pamart under the Northern Lights
                    </span>
                  </Link>
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-white/60 mb-2">
                    Top Genres
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 sm:px-3 py-1 rounded-full bg-white/5 text-xs sm:text-sm">
                      Chill House
                    </span>
                    <span className="px-2 sm:px-3 py-1 rounded-full bg-white/5 text-xs sm:text-sm">
                      90s Hip-Hop
                    </span>
                    <span className="px-2 sm:px-3 py-1 rounded-full bg-white/5 text-xs sm:text-sm">
                      Piano
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
