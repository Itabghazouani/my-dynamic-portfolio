import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <div
      className="py-10 pt-8 sm:py-12 sm:pt-10 md:py-16 lg:py-24 lg:pt-20"
      id="contact"
    >
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="bg-gradient-to-r from-[#00FFFF] to-[#B8E986] text-gray-900 py-6 px-5 sm:py-7 sm:px-8 md:py-8 md:px-10 rounded-2xl sm:rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          <div className="flex flex-col gap-6 sm:gap-7 md:gap-16 items-center md:flex-row">
            <div className="flex-1">
              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-xs sm:text-sm md:text-base mt-1.5 sm:mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
              <div className="mt-4 sm:mt-5 md:mt-6 space-y-1.5 sm:space-y-2">
                <a
                  href="mailto:itab.ghazouani@gmail.com"
                  className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity mx-auto md:mx-0"
                >
                  <span className="text-lg sm:text-xl">📧</span>
                  <span className="font-medium hover:font-semibold text-sm sm:text-base">
                    itab.ghazouani@gmail.com
                  </span>
                  <ArrowUpRightIcon className="size-3 sm:size-4" />
                </a>
                <a
                  href="tel:+34722308413"
                  className="flex items-center gap-1.5 sm:gap-2 hover:opacity-80 transition-opacity mx-auto md:mx-0"
                >
                  <span className="text-lg sm:text-xl">📱</span>
                  <span className="font-medium hover:font-semibold text-sm sm:text-base">
                    +34 722 308 413
                  </span>
                  <ArrowUpRightIcon className="size-3 sm:size-4" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:gap-4 w-full md:w-auto">
              <a
                href="mailto:itab.ghazouani@gmail.com"
                className="text-white/90 bg-gray-900 inline-flex items-center justify-center px-4 sm:px-6 h-10 sm:h-12 rounded-lg sm:rounded-xl gap-1.5 sm:gap-2 w-full md:w-max border border-gray-900 transition-colors hover:text-gray-900 hover:bg-white/90"
              >
                <span className="font-semibold text-sm sm:text-base">
                  Send Email
                </span>
                <ArrowUpRightIcon className="size-3 sm:size-4" />
              </a>
              <a
                href="https://calendly.com/itab-ghazouani/introcution-call"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 bg-white/90 inline-flex items-center justify-center px-4 sm:px-6 h-10 sm:h-12 rounded-lg sm:rounded-xl gap-1.5 sm:gap-2 w-full md:w-max border border-gray-900 hover:bg-gray-900 hover:text-white/90 transition-colors"
              >
                <span className="font-semibold text-sm sm:text-base">
                  Schedule a Call
                </span>
                <ArrowUpRightIcon className="size-3 sm:size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
