import { PropsWithChildren } from 'react';

import { twMerge } from 'tailwind-merge';

interface IHeroOrbitProps {
  size: number;
  rotation: number;
  shouldOrbit?: boolean;
  shouldSpin?: boolean;
  orbitDuration?: string;
  spinDuration?: string;
  orbitDirection?: 'clockwise' | 'counterclockwise';
}

const HeroOrbit = ({
  children,
  size,
  rotation,
  shouldOrbit = false,
  shouldSpin = false,
  orbitDuration,
  spinDuration,
  orbitDirection = 'clockwise',
}: PropsWithChildren<IHeroOrbitProps>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div
        className={twMerge(
          shouldOrbit &&
            (orbitDirection === 'counterclockwise'
              ? 'animate-orbit-reverse'
              : 'animate-spin'),
        )}
        style={{ animationDuration: orbitDuration }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(shouldSpin && 'animate-spin')}
            style={{ animationDuration: spinDuration }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOrbit;
