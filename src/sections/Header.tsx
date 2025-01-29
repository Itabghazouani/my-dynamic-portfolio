'use client';

import Link from 'next/link';

import { handleClick } from '@/lib/handleClick';

const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href="#" className="nav-item" onClick={(e) => handleClick(e)}>
          Home
        </Link>
        <Link
          href="#projects"
          className="nav-item"
          onClick={(e) => handleClick(e, '#projects')}
        >
          Projects
        </Link>
        <Link
          href="#about"
          className="nav-item"
          onClick={(e) => handleClick(e, '#about')}
        >
          About
        </Link>
        <Link
          href="#contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
          onClick={(e) => handleClick(e, '#contact')}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Header;
