'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import ArrowLeftIcon from '@/assets/icons/arrow-left.svg';
import ArrowRightIcon from '@/assets/icons/arrow-right.svg';
import GithubIcon from '@/assets/icons/technologiesIcons/github.svg';
import { SectionHeader } from '@/components';
import Card from '@/components/Card';
import { PROJECTS, TECHNOLOGIES } from '@/constants';

type CarouselInstance = {
  setState: (state: { isMouseEntered: boolean }, callback?: () => void) => void;
};

const ProjectsCarouselSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<CarouselInstance | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 640);
      };

      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, []);

  const handlePrevClick = (onClickHandler: () => void): void => {
    onClickHandler();

    // Reset the autoplay timer by toggling autoPlay off and on
    if (carouselRef.current) {
      carouselRef.current.setState({ isMouseEntered: true }, () => {
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.setState({ isMouseEntered: false });
          }
        }, 0);
      });
    }
  };

  const handleNextClick = (onClickHandler: () => void): void => {
    onClickHandler();

    // Reset the autoplay timer by toggling autoPlay off and on
    if (carouselRef.current) {
      carouselRef.current.setState({ isMouseEntered: true }, () => {
        setTimeout(() => {
          if (carouselRef.current) {
            carouselRef.current.setState({ isMouseEntered: false });
          }
        }, 0);
      });
    }
  };

  return (
    <section className="pb-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        <div className="mt-8 sm:mt-10 md:mt-20" id="projects">
          <Carousel
            ref={carouselRef as any}
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
            selectedItem={currentSlide}
            onChange={setCurrentSlide}
            className="projects-carousel"
            transitionTime={500}
            showIndicators={false}
            useKeyboardArrows={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={() => handlePrevClick(onClickHandler)}
                  title={label}
                  className="absolute left-0 sm:left-2 md:left-4 lg:left-8 z-10 p-2 -translate-y-1/2 top-1/2 group"
                >
                  <ArrowLeftIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white/70 transition-all group-hover:text-white group-hover:scale-110 group-active:text-white group-active:scale-110" />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={() => handleNextClick(onClickHandler)}
                  title={label}
                  className="absolute right-0 sm:right-2 md:right-4 lg:right-8 z-10 p-2 -translate-y-1/2 top-1/2 group"
                >
                  <ArrowRightIcon className="w-6 h-6 sm:w-8 sm:h-8 text-white/70 transition-all group-hover:text-white group-hover:scale-110 group-active:text-white group-active:scale-110" />
                </button>
              )
            }
          >
            {PROJECTS.map((project) => (
              <div key={project.title} className="px-2 sm:px-4 pb-10">
                <div
                  className={`${
                    isMobile
                      ? 'h-[550px]'
                      : 'h-[750px] md:h-[650px] lg:h-[600px]'
                  }`}
                >
                  <Card className="px-4 sm:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8 h-full md:pt-12 md:px-10 lg:pt-16 lg:px-20 relative mx-auto ">
                    <div
                      className={`${
                        !isMobile ? 'lg:grid lg:grid-cols-2 lg:gap-16' : ''
                      }`}
                    >
                      <div className={`${!isMobile ? 'lg:pb-16' : ''}`}>
                        <div className="bg-gradient-to-r from-[#00FFFF] to-[#B8E986] inline-flex gap-1 sm:gap-2 font-bold uppercase tracking-widest text-[10px] xs:text-xs sm:text-sm text-transparent bg-clip-text">
                          {project.company && (
                            <>
                              <span>{project.company}</span>
                              <span>&bull;</span>
                            </>
                          )}
                          <span>{project.year}</span>
                        </div>

                        <h3 className="font-serif text-xl md:text-4xl mt-2 md:mt-5">
                          {project.title}
                        </h3>
                        <hr className="border-t-2 border-white/5 mt-3 sm:mt-4 md:mt-5" />

                        <p className="text-white/75 mt-3 sm:mt-4 md:mt-5 text-xs sm:text-sm md:text-base line-clamp-5 sm:line-clamp-none">
                          {project.description}
                        </p>

                        <div className="mt-4 sm:mt-6">
                          <h4 className="text-xs sm:text-sm font-semibold text-white/50 mb-2 sm:mb-3 text-left">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {project.technologies.map((techKey) => {
                              const tech = TECHNOLOGIES[techKey];
                              return (
                                <span
                                  key={techKey}
                                  className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs md:text-sm bg-gradient-to-r from-[#00FFFF] to-[#B8E986] text-gray-900 font-semibold flex items-center gap-1"
                                >
                                  <tech.icon className="w-3 h-3 sm:w-4 sm:h-4" />
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
                            className={`flex gap-3 sm:gap-4 mt-6 sm:mt-8 ${
                              project.siteUrlUnavailableReason ||
                              project.githubUrlUnavailableReason
                                ? 'flex-col items-start'
                                : 'flex-col md:flex-row items-start'
                            }`}
                          >
                            {project.siteUrl ? (
                              <Link
                                href={project.siteUrl}
                                target="_blank"
                                className="w-full sm:w-auto"
                              >
                                <button className="whitespace-nowrap bg-white text-gray-950 h-9 sm:h-10 md:h-12 rounded-lg sm:rounded-xl font-semibold inline-flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 w-full sm:w-auto text-xs sm:text-sm md:text-base">
                                  <span>Visit Site</span>
                                  <ArrowUpRightIcon className="size-2.5 sm:size-3 md:size-4" />
                                </button>
                              </Link>
                            ) : (
                              project.siteUrlUnavailableReason && (
                                <div className="text-white/50 text-[10px] xs:text-xs h-9 sm:h-10 md:h-12 rounded-lg sm:rounded-xl font-medium flex items-center px-2 sm:px-3 md:px-4 bg-white/5 w-full">
                                  {project.siteUrlUnavailableReason}
                                </div>
                              )
                            )}

                            {project.githubUrl ? (
                              <Link
                                href={project.githubUrl}
                                target="_blank"
                                className="w-full sm:w-auto"
                              >
                                <button className="whitespace-nowrap border border-white/10 text-white h-9 sm:h-10 md:h-12 rounded-lg sm:rounded-xl font-semibold inline-flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 hover:bg-white/5 transition-colors w-full sm:w-auto text-xs sm:text-sm md:text-base">
                                  <span>View Code</span>
                                  <GithubIcon className="size-4 sm:size-5 md:size-6" />
                                  <ArrowUpRightIcon className="size-2.5 sm:size-3 md:size-4" />
                                </button>
                              </Link>
                            ) : (
                              project.githubUrlUnavailableReason && (
                                <div className="text-white/50 text-[10px] xs:text-xs h-9 sm:h-10 md:h-12 rounded-lg sm:rounded-xl font-medium flex items-center px-2 sm:px-3 md:px-4 bg-white/5 w-full">
                                  {project.githubUrlUnavailableReason}
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>

                      {/* Conditionally render the image section based on screen size */}
                      {!isMobile && (
                        <div className="relative flex items-center justify-center">
                          <Image
                            src={project.image}
                            alt={project.imageAlt}
                            className="mt-6 sm:mt-8 md:mt-8 lg:mt-0 max-w-full object-contain max-h-52 sm:max-h-80 md:max-h-96 lg:max-h-full"
                          />
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </Carousel>

          {/* Custom Indicators */}
          <div className="flex justify-center mt-3 sm:mt-6 md:mt-8">
            {PROJECTS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  // Also reset autoplay timer when clicking indicators
                  if (carouselRef.current) {
                    carouselRef.current.setState(
                      { isMouseEntered: true },
                      () => {
                        setTimeout(() => {
                          if (carouselRef.current) {
                            carouselRef.current.setState({
                              isMouseEntered: false,
                            });
                          }
                        }, 0);
                      },
                    );
                  }
                }}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 mx-0.5 sm:mx-1 rounded-full transition-colors ${
                  currentSlide === index
                    ? 'bg-gradient-to-r from-[#00FFFF] to-[#B8E986]'
                    : 'bg-white/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarouselSection;
