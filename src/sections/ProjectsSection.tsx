import Image from 'next/image';
import Link from 'next/link';

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import GithubIcon from '@/assets/icons/technologiesIcons/github.svg';
import { SectionHeader } from '@/components';
import Card from '@/components/Card';
import { PROJECTS, TECHNOLOGIES } from '@/constants';

const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-2 md:gap-12 lg:gap-20">
          {PROJECTS.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 h-auto md:pt-12 md:px-10 lg:pt-16 lg:px-20 lg:h-[620px] relative lg:sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-[#00FFFF] to-[#B8E986] inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    {project.company && (
                      <>
                        <span>{project.company}</span>
                        <span>&bull;</span>
                      </>
                    )}
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />

                  <p className="text-white/75 mt-4 md:mt-5">
                    {project.description}
                  </p>

                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-white/50 mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((techKey) => {
                        const tech = TECHNOLOGIES[techKey];
                        return (
                          <span
                            key={techKey}
                            className="px-3 py-1 rounded-full text-xs md:text-sm bg-gradient-to-r from-[#00FFFF] to-[#B8E986] text-gray-900 font-semibold flex items-center gap-1"
                          >
                            <tech.icon className="w-4 h-4" />
                            {tech.title}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {(project.siteUrl ||
                    project.githubUrl ||
                    project.siteUrlUnavailableReason ||
                    project.githubUrlUnavailableReason) && (
                    <div
                      className={`flex gap-4 mt-8 ${
                        project.siteUrlUnavailableReason ||
                        project.githubUrlUnavailableReason
                          ? 'flex-col items-start'
                          : 'flex-col md:flex-row'
                      }`}
                    >
                      {project.siteUrl ? (
                        <Link href={project.siteUrl} target="_blank">
                          <button className="whitespace-nowrap bg-white text-gray-950 h-12 rounded-xl font-semibold inline-flex items-center justify-center gap-2 px-6">
                            <span>Visit Site</span>
                            <ArrowUpRightIcon className="size-4" />
                          </button>
                        </Link>
                      ) : (
                        project.siteUrlUnavailableReason && (
                          <div className="whitespace-nowrap text-white/50 h-12 rounded-xl font-medium inline-flex items-center px-6 bg-white/5">
                            {project.siteUrlUnavailableReason}
                          </div>
                        )
                      )}

                      {project.githubUrl ? (
                        <Link href={project.githubUrl} target="_blank">
                          <button className="whitespace-nowrap border border-white/10 text-white h-12 rounded-xl font-semibold inline-flex items-center justify-center gap-2 px-6 hover:bg-white/5 transition-colors">
                            <span>View Code</span>
                            <GithubIcon className="size-6" />
                            <ArrowUpRightIcon className="size-4" />
                          </button>
                        </Link>
                      ) : (
                        project.githubUrlUnavailableReason && (
                          <div className="whitespace-nowrap text-white/50 h-12 rounded-xl font-medium inline-flex items-center px-6 bg-white/5">
                            {project.githubUrlUnavailableReason}
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
