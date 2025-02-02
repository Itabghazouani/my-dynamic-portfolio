import { FooterLink } from '@/types/types';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import GithubIcon from '@/assets/icons/technologiesIcons/github.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import XIcon from '@/assets/icons/x.svg';

export const FOOTERLINKS: FooterLink[] = [
  {
    platform: 'Linkedin',
    url: 'https://www.linkedin.com/in/itab-ghazouani/',
    icon: LinkedinIcon,
  },
  {
    platform: 'Github',
    url: 'https://github.com/Itabghazouani',
    icon: GithubIcon,
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/itab_ghazouani',
    icon: InstagramIcon,
  },
  {
    platform: 'X',
    url: 'https://x.com/GhazouaniI45118',
    icon: XIcon,
  },
];
