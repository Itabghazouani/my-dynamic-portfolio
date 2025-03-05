import devisGeneratorImage from '@/assets/images/devisgenerator.jpg';
import caseCobraImage from '@/assets/images/casecobra2.jpg';
import marvelHeroesImage from '@/assets/images/mheroes2.jpg';
import realChatImage from '@/assets/images/realchatapp2.jpg';
import stringsAndThingsImage from '@/assets/images/rackets.jpg';
import snapAndEatImage from '@/assets/images/snapandeat.jpg';
import secondLifeImage from '@/assets/images/secondlife.jpg';
import todoListImage from '@/assets/images/todolist2.jpg';
import vanLifeImage from '@/assets/images/vanlife2.jpg';
import { Project } from '@/types/types';

export const PROJECTS: Project[] = [
  {
    year: '2025',
    title: 'Todo List',
    description:
      'Full-stack ToDo app featuring the Eisenhower Matrix, productivity analytics, and recurring task scheduling with calendar integration—all designed mobile-first.',
    technologies: [
      'NEXTJS',
      'TYPESCRIPT',
      'TAILWINDCSS',
      'DAISYUI',
      'PRISMA',
      'CLERK',
    ],
    siteUrl: 'https://todo-list-matrix.vercel.app/',
    githubUrl: 'https://github.com/Itabghazouani/todo-list',
    image: todoListImage,
    imageAlt:
      'Task Matrix project interface showing Eisenhower prioritization grid and analytics dashboard',
  },
  {
    year: '2025',
    title: 'Real Chat App',
    description:
      'A real-time chat application built with MERN stack featuring live messaging, user authentication, media sharing, and responsive design.',
    technologies: [
      'MONGODB',
      'EXPRESS',
      'REACT',
      'NODEJS',
      'TYPESCRIPT',
      'SOCKETIO',
    ],
    siteUrl: 'https://chat-app-react-c62q.onrender.com',
    githubUrl: 'https://github.com/Itabghazouani/chat-app/',
    image: realChatImage,
    imageAlt: 'Real Chat application showing real-time messaging interface',
  },
  {
    year: '2024',
    title: 'Second Life',
    description:
      'A full-stack app for selling my personal wardrobe, featuring a clean design, secure payments, and a user-friendly shopping experience.',
    technologies: [
      'TAILWINDCSS',
      'TYPESCRIPT',
      'NEXTJS',
      'CLERK',
      'STRIPE',
      'SANITY',
    ],
    siteUrl: 'https://second-life-swart.vercel.app/',
    githubUrl: 'https://github.com/Itabghazouani/eshop-project',
    image: secondLifeImage,
    imageAlt: 'Second Life project Image',
  },
  {
    company: '210blocks',
    year: '2024',
    title: 'Devis Generator',
    description:
      'Professional invoice application for streamlined quote creation and management with dynamic PDF generation, CSV parsing, and secure invoice lifecycle tracking and storage.',
    technologies: [
      'TYPESCRIPT',
      'NEXTJS',
      'SUPABASE',
      'SCSS',
      'GITHUB',
      'MANTINEUI',
    ],
    siteUrlUnavailableReason:
      'Private project - Not available for public access',
    githubUrlUnavailableReason: 'Private repository - Protected by NDA',
    image: devisGeneratorImage,
    imageAlt:
      'Invoice generator application interface showing form inputs and generated PDF preview',
  },
  {
    year: '2024',
    title: 'CaseCobra',
    description:
      'An app that allows users to upload personal images to create and purchase custom phone cases, integrating Stripe for payments and Kinde for authentication.',
    technologies: [
      'TAILWINDCSS',
      'TYPESCRIPT',
      'NEXTJS',
      'KINDE',
      'STRIPE',
      'VERCEL',
    ],
    siteUrl: 'https://case-cobra-swart.vercel.app/',
    githubUrl: 'https://github.com/Itabghazouani/casecobra',
    image: caseCobraImage,
    imageAlt: 'Case Cobra',
  },
  {
    year: '2024',
    title: 'Marvel Heroes',
    description:
      'A project titled Marvel Heroes List, built with Next.js, that displays detailed information about Marvel characters using an API.',
    technologies: ['HTML', 'TAILWINDCSS', 'TYPESCRIPT', 'NEXTJS', 'VERCEL'],
    siteUrl: 'https://next-marvel-heroes.vercel.app/',
    githubUrl: 'https://github.com/Itabghazouani/next-marvel-heroes',
    image: marvelHeroesImage,
    imageAlt: 'Marvel Heroes List',
  },
  {
    year: '2024',
    title: 'VanLife',
    description:
      'A React-based app, designed for users to easily browse and rent vans for their next adventure.',
    technologies: ['GITHUB', 'HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
    siteUrl: 'https://itab-vanlife.netlify.app/',
    githubUrl: 'https://github.com/Itabghazouani/VanLife',
    image: vanLifeImage,
    imageAlt: 'Van Life',
  },
  {
    company: 'Le Wagon, Batch #845 Iberia',
    year: '2022',
    title: 'Snap And Eat',
    description:
      'A mobile app allowing users to search for restaurants based on dishes they crave, view a list of options, and book a table directly.',
    technologies: ['RUBYONRAILS', 'SCSS', 'JAVASCRIPT', 'POSTGRESQL', 'HEROKU'],
    siteUrlUnavailableReason: 'Site no longer maintained - Bootcamp project',
    githubUrl: 'https://github.com/Itabghazouani/snap_and_eat',
    image: snapAndEatImage,
    imageAlt: 'Snap And Eat',
  },
  {
    company: 'Le Wagon, Batch #845 Iberia',
    year: '2022',
    title: 'Strings and Things',
    description:
      'A mobile app allowing users to rent rackets (for tennis, padel, etc.) from other people in a peer-to-peer manner.',
    technologies: ['RUBYONRAILS', 'SCSS', 'JAVASCRIPT', 'POSTGRESQL', 'HEROKU'],
    siteUrlUnavailableReason: 'Site no longer maintained - Bootcamp project',
    githubUrl: 'https://github.com/Stephenmcg123/Strings_and_Things',
    image: stringsAndThingsImage,
    imageAlt: 'Strings and Things Image',
  },
];
