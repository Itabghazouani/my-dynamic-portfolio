import { ElementType, FunctionComponent, SVGProps } from 'react';

import { StaticImageData } from 'next/image';

import { TechnologyKey } from '@/constants/technologies';

export type Project = {
  company?: string;
  year: string;
  title: string;
  description: string;
  technologies: TechnologyKey[];
  siteUrl?: string;
  siteUrlUnavailableReason?: string;
  githubUrl?: string;
  githubUrlUnavailableReason?: string;
  image: StaticImageData;
  imageAlt: string;
};

export type LearningAndProfessionalDevelopment = {
  name: string;
  year: string;
  description: string;
  image: StaticImageData;
  link?: string;
};

export type Technology = {
  title: string;
  icon: ElementType;
};

export type Hobby = {
  title: string;
  emoji: string;
  left: string;
  top: string;
};

export type FooterLink = {
  platform: string;
  url: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
};

export type Resume = {
  language: string;
  flag: string;
  file: string;
  fileName: string;
};
