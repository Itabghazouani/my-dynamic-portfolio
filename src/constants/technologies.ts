import CloudinaryIcon from '@/assets/icons/technologiesIcons/cloudinary.svg';
import CssIcon from '@/assets/icons/technologiesIcons/css3.svg';
import CsvIcon from '@/assets/icons/technologiesIcons/csv.svg';
import DefaultIcon from '@/assets/icons/technologiesIcons/defaultIcon.svg';
import ExpressIcon from '@/assets/icons/technologiesIcons/express.svg';
import FirebaseIcon from '@/assets/icons/technologiesIcons/firebase.svg';
import GithubIcon from '@/assets/icons/technologiesIcons/github.svg';
import HerokuIcon from '@/assets/icons/technologiesIcons/heroku.svg';
import html2canvasIcon from '@/assets/icons/technologiesIcons/html2canvas.svg';
import HtmlIcon from '@/assets/icons/technologiesIcons/html5.svg';
import JavascriptIcon from '@/assets/icons/technologiesIcons/javascript.svg';
import JSONIcon from '@/assets/icons/technologiesIcons/json.svg';
import JspdfIcon from '@/assets/icons/technologiesIcons/jspdf.svg';
import KindeIcon from '@/assets/icons/technologiesIcons/kinde.svg';
import MantineIcon from '@/assets/icons/technologiesIcons/mantine.svg';
import MongoDBIcon from '@/assets/icons/technologiesIcons/mongodb.svg';
import NextJsIcon from '@/assets/icons/technologiesIcons/next.svg';
import NodeJsIcon from '@/assets/icons/technologiesIcons/nodejs.svg';
import PapaparseIcon from '@/assets/icons/technologiesIcons/papaparse.svg';
import PostgreSqlIcon from '@/assets/icons/technologiesIcons/postgresql.svg';
import PrismaIcon from '@/assets/icons/technologiesIcons/prisma.svg';
import PwaIcon from '@/assets/icons/technologiesIcons/pwa.svg';
import ReactIcon from '@/assets/icons/technologiesIcons/react.svg';
import RubyOnRailsIcon from '@/assets/icons/technologiesIcons/rubyonrails.svg';
import SanityIcon from '@/assets/icons/technologiesIcons/sanity.svg';
import ScssIcon from '@/assets/icons/technologiesIcons/scss.svg';
import ShadcnIcon from '@/assets/icons/technologiesIcons/shadcn.svg';
import SocketIoIcon from '@/assets/icons/technologiesIcons/socket.svg';
import StripeIcon from '@/assets/icons/technologiesIcons/stripe.svg';
import SupabaseIcon from '@/assets/icons/technologiesIcons/supabase.svg';
import TailwindCSSIcon from '@/assets/icons/technologiesIcons/tailwind.svg';
import TypeScriptIcon from '@/assets/icons/technologiesIcons/typescript.svg';
import VercelIcon from '@/assets/icons/technologiesIcons/vercel.svg';
import ViteIcon from '@/assets/icons/technologiesIcons/vite.svg';
import { Technology } from '@/types/types';

export const TECHNOLOGIES: Record<string, Technology> = {
  CLOUDINARY: {
    title: 'Cloudinary',
    icon: CloudinaryIcon,
  },
  CLERK: {
    title: 'Clerk',
    icon: DefaultIcon,
  },
  CSS: {
    title: 'CSS',
    icon: CssIcon,
  },
  CSVPARSER: {
    title: 'Csvparser',
    icon: CsvIcon,
  },
  DEFAULT: {
    title: 'Default',
    icon: DefaultIcon,
  },
  DAISYUI: {
    title: 'DaisyUI',
    icon: DefaultIcon,
  },
  EXPRESS: {
    title: 'Express',
    icon: ExpressIcon,
  },
  FIREBASE: {
    title: 'Firebase',
    icon: FirebaseIcon,
  },
  GITHUB: {
    title: 'GitHub',
    icon: GithubIcon,
  },
  HEROKU: {
    title: 'Heroku',
    icon: HerokuIcon,
  },
  HTML: {
    title: 'HTML',
    icon: HtmlIcon,
  },
  HTML2CANVAS: {
    title: 'Html2canvas',
    icon: html2canvasIcon,
  },
  JAVASCRIPT: {
    title: 'JavaScript',
    icon: JavascriptIcon,
  },
  JSPDF: {
    title: 'Jspdf',
    icon: JspdfIcon,
  },
  JSON: {
    title: 'JSON',
    icon: JSONIcon,
  },
  JWT: {
    title: 'JWT',
    icon: DefaultIcon,
  },
  KINDE: {
    title: 'Kinde',
    icon: KindeIcon,
  },
  MANTINEUI: {
    title: 'Mantine UI',
    icon: MantineIcon,
  },
  MONGODB: {
    title: 'MongoDB',
    icon: MongoDBIcon,
  },
  NEXTJS: {
    title: 'Next.js',
    icon: NextJsIcon,
  },
  NODEJS: {
    title: 'Node.js',
    icon: NodeJsIcon,
  },
  PAPAPARSE: {
    title: 'Papaparse',
    icon: PapaparseIcon,
  },
  POSTGRESQL: {
    title: 'PostgreSQL',
    icon: PostgreSqlIcon,
  },
  PRISMA: {
    title: 'Prisma',
    icon: PrismaIcon,
  },
  PWA: {
    title: 'PWA',
    icon: PwaIcon,
  },
  REACT: {
    title: 'React',
    icon: ReactIcon,
  },
  RECHARTS: {
    title: 'Recharts',
    icon: DefaultIcon,
  },
  RUBYONRAILS: {
    title: 'Ruby on Rails',
    icon: RubyOnRailsIcon,
  },
  SANITY: {
    title: 'Sanity',
    icon: SanityIcon,
  },
  SCSS: {
    title: 'SCSS',
    icon: ScssIcon,
  },
  SHADCN: {
    title: 'Shadcn',
    icon: ShadcnIcon,
  },
  SOCKETIO: {
    title: 'Socket.io',
    icon: SocketIoIcon,
  },
  STRIPE: {
    title: 'Stripe',
    icon: StripeIcon,
  },
  SUPABASE: {
    title: 'Supabase',
    icon: SupabaseIcon,
  },
  TAILWINDCSS: {
    title: 'Tailwind CSS',
    icon: TailwindCSSIcon,
  },
  TYPESCRIPT: {
    title: 'TypeScript',
    icon: TypeScriptIcon,
  },
  VERCEL: {
    title: 'Vercel',
    icon: VercelIcon,
  },
  VITE: {
    title: 'Vite',
    icon: ViteIcon,
  },
  ZUSTAND: {
    title: 'Zustand',
    icon: DefaultIcon,
  },
} as const;

export type TechnologyKey = keyof typeof TECHNOLOGIES;
