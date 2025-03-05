import { Fragment } from 'react';

import StarIcon from '@/assets/icons/star.svg';
import { WORDS } from '@/constants/words';

const TapeSection = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-[#00FFFF] to-[#B8E986] -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            className="flex flex-none gap-2 sm:gap-3 md:gap-4 pr-2 sm:pr-3 md:pr-4 py-2 sm:py-3 
                        animate-move-left [animation-duration:20s] sm:[animation-duration:25s] md:[animation-duration:30s]"
          >
            {[...new Array(2)].map((_, index) => (
              <Fragment key={index}>
                {WORDS.map((word) => (
                  <div
                    key={word}
                    className="inline-flex gap-2 sm:gap-3 md:gap-4 items-center"
                  >
                    <span className="text-gray-900 uppercase font-extrabold text-xs sm:text-sm">
                      {word}
                    </span>
                    <div className="animate-spin [animation-duration:8s] sm:[animation-duration:10s]">
                      <StarIcon className="size-4 sm:size-5 md:size-6 text-gray-900 -rotate-12" />
                    </div>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TapeSection;
