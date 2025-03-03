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
        "During my internship at 210Blocks, I developed two key projects: an invoice generator application and the company's website v2. The invoice generator streamlines business operations with features like CSV data parsing, dynamic PDF generation, and lifecycle management. I also contributed to redesigning and implementing the company's new website, enhancing the user experience and modernizing the interface.",
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
