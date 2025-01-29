import blocksImage from '@/assets/images/210blocks.png';
import leWagonImage from '@/assets/images/lewagon.png';
import scrimbaImage from '@/assets/images/scrimba.png';
import { LearningAndProfessionalDevelopment } from '@/types/types';

export const LEARNING_AND_PROFESIONNAL_DEVELOPMENT: LearningAndProfessionalDevelopment[] =
  [
    {
      name: '210Blocks',
      year: '2024',
      description:
        'I completed 210Blocks, a 10-week coding bootcamp, learning full-stack web development. I built a final project, a mobile app called 210Blocks, using a RESTful API, PostgreSQL, and Heroku.',
      image: blocksImage,
    },
    {
      name: 'FrontEnd Development career Path - Scrimba',
      year: '2023-24',
      description:
        'I completed Scrimba’s Front-End Career Path, mastering HTML, CSS, JavaScript, and React. Through hands-on projects, I built responsive, accessible websites and dynamic web applications, gaining job-ready skills like API integration, modern JavaScript, and version control.',
      image: scrimbaImage,
    },
    {
      name: 'Le Wagon - Full-Stack Web Development Bootcamp Batch #845 Iberia',
      year: '2022',
      description:
        'I completed the Full-Stack Web Development Bootcamp at Le Wagon, mastering Ruby on Rails, JavaScript, React, and SQL. The program covered both front-end and back-end development, including database design, authentication, and API integration, preparing me to build end-to-end web applications.',
      image: leWagonImage,
    },
  ];
