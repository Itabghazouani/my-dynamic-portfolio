import devisGeneratorImage from '@/assets/images/210blocks.png';
import caseCobraImage from '@/assets/images/casecobra.jpg'; //
import codingJourneyImage from '@/assets/images/codingwallpaper.jpeg'; //
import marvelHeroesImage from '@/assets/images/mheroes.jpeg'; //
import realChatImage from '@/assets/images/realchatapp.jpg'; //
import stringsAndThingsImage from '@/assets/images/rackets.jpg';
import snapAndEatImage from '@/assets/images/restaurant_41.jpg';
import secondLifeImage from '@/assets/images/secondlife.jpg'; //
import shoppingList from '@/assets/images/shoppinglist.jpeg'; //
import todoListImage from '@/assets/images/todolist.jpg'; //
import vanLifeImage from '@/assets/images/vanlife.jpeg'; //
import { Project } from '@/types/types';

export const PROJECTS: Project[] = [
  {
    year: '2025',
    title: 'Todo List',
    description:
      'A full-stack mobile-first ToDo application implementing the Eisenhower Matrix for task prioritization with productivity analytics, statistics dashboard, and calendar planning with recurring task functionality.',
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
    title: 'CaseCobra',
    year: '2024',
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
    title: 'Marvel Heroes',
    year: '2024',
    description:
      'A project titled Marvel Heroes List, built with Next.js, that displays detailed information about Marvel characters using an API.',
    technologies: ['HTML', 'TAILWINDCSS', 'TYPESCRIPT', 'NEXTJS', 'VERCEL'],
    siteUrl: 'https://next-marvel-heroes.vercel.app/',
    githubUrl: 'https://github.com/Itabghazouani/next-marvel-heroes',
    image: marvelHeroesImage,
    imageAlt: 'Marvel Heroes List',
  },
  {
    title: 'VanLife',
    year: '2024',
    description:
      'A React-based app, designed for users to easily browse and rent vans for their next adventure.',
    technologies: ['GITHUB', 'HTML', 'CSS', 'JAVASCRIPT', 'REACT'],
    siteUrl: 'https://itab-vanlife.netlify.app/',
    githubUrl: 'https://github.com/Itabghazouani/VanLife',
    image: vanLifeImage,
    imageAlt: 'Van Life',
  },
  {
    title: 'At Least I have My List',
    year: '2023',
    description:
      'A shopping list app, At Least I Have My List, created to simplify grocery trips and keep essentials organized."',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT', 'FIREBASE'],
    siteUrl: 'https://at-least-i-have-my-list.netlify.app/',
    githubUrl: 'https://github.com/Itabghazouani/Shopping-List-App',
    image: shoppingList,
    imageAlt: 'At Least I have My List',
  },
  {
    title: 'My Coding Journey',
    year: '2023',
    description:
      'A personal website showcasing my coding journey, featuring projects, skills, and progress made during the Scrimba course.',
    technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
    siteUrl: 'https://my-coding-journey.netlify.app/',
    githubUrl: 'https://github.com/Itabghazouani/my-coding-journey',
    image: codingJourneyImage,
    imageAlt: 'My Coding Journey',
  },
  {
    company: 'Le Wagon, Batch #845 Iberia',
    title: 'Snap And Eat',
    year: '2022',
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
    title: 'Strings and Things',
    year: '2022',
    description:
      'A mobile app allowing users to search for restaurants based on dishes they crave, view a list of options, and book a table directly.',
    technologies: ['RUBYONRAILS', 'SCSS', 'JAVASCRIPT', 'POSTGRESQL', 'HEROKU'],
    siteUrlUnavailableReason: 'Site no longer maintained - Bootcamp project',
    githubUrl: 'https://github.com/Stephenmcg123/Strings_and_Things',
    image: stringsAndThingsImage,
    imageAlt: 'Strings and Things Image',
  },
];
