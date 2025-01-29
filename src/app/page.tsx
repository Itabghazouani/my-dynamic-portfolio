import {
  AboutSection,
  ContactSection,
  Header,
  HeroSection,
  LearningAndProfessionalDevelopment,
  ProjectsSection,
  TapeSection,
} from '@/sections';
import { Footer } from '@/sections/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <LearningAndProfessionalDevelopment />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
