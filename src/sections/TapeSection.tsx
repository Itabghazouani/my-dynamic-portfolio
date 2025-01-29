import { Fragment } from 'react';

import StarIcon from '@/assets/icons/star.svg';
import { WORDS } from '@/constants/words';

const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-[#FF7043] to-[#00FFFF]  -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black 10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4  pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].map((_, index) => (
              <Fragment key={index}>
                {WORDS.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <div className="animate-spin [animation-duration:10s]">
                      <StarIcon className="size-6 text-gray-900 -rotate-12" />
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
