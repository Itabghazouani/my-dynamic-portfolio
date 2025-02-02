import Link from 'next/link';

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import { FOOTERLINKS } from '@/constants/footerLinks';

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-[#00FFFF]/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" />
      <div className="container relative z-10">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {FOOTERLINKS.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  className="inline-flex items-center gap-1.5"
                >
                  <Icon className="size-4" />
                  <span className="font-semibold">{link.platform}</span>
                  <ArrowUpRightIcon className="size-4" />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </footer>
  );
};
