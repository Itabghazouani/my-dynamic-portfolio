import { FooterLink } from '@/types/types';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import GithubIcon from '@/assets/icons/technologiesIcons/github.svg';
import DiscordIcon from '@/assets/icons/discord.svg';
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
    platform: 'Discord',
    url: 'https://www.discord.com/users/1107549032554975305',
    icon: DiscordIcon,
  },
  {
    platform: 'X',
    url: 'https://x.com/GhazouaniI45118',
    icon: XIcon,
  },
];
