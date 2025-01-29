'use client';

import Image from 'next/image';
import Link from 'next/link';

import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import memojiImage from '@/assets/images/memoji-itab.png';
import { OrbitSystem } from '@/components';
import { handleClick } from '@/lib/handleClick';

const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />
        <OrbitSystem />
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="Person peeking from behind laptop emoji"
            className="size-[120px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 animate-ping-large rounded-full" />
            </div>
            <div className="text-sm font-medium">
              Available for new challenges
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building User Experiences with Passion and Purpose
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I bring designs to life as functional, high-performing web
            applications. As a junior developer, I’m ready to take on new
            challenges and make an impact!
          </p>
        </div>
        <div className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center">
          <Link onClick={(e) => handleClick(e, '#projects')} href="#projects">
            <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
              <span className="font-semibold">Explore my work</span>
              <ArrowDown className="size-4" />
            </button>
          </Link>
          <Link onClick={(e) => handleClick(e, '#contact')} href="#contact">
            <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl">
              <span>🫱🏻‍🫲🏽</span>
              <span className="font-semibold">Let&apos;s connect</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
