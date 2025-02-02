import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-[#00FFFF] to-[#B8E986] text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />
          <div className="flex flex-col gap-8 md:gap-16 items-center md:flex-row">
            <div className="flex-1">
              <h2 className="font-serif text-2xl md:text-3xl">
                Let&apos;s create something amazing together
              </h2>
              <p className="text-sm md:text-base mt-2">
                Ready to bring your next project to life? Let&apos;s connect and
                discuss how I can help you achieve your goals.
              </p>
              <div className="mt-6 space-y-2">
                <a
                  href="mailto:itab.ghazouani@gmail.com"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity w-max"
                >
                  <span className="text-xl">📧</span>
                  <span className="font-medium hover:font-semibold">
                    itab.ghazouani@gmail.com
                  </span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
                <a
                  href="tel:+34722308413"
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity w-max"
                >
                  <span className="text-xl">📱</span>
                  <span className="font-medium hover:font-semibold">
                    +34 722 308 413
                  </span>
                  <ArrowUpRightIcon className="size-4" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:itab.ghazouani@gmail.com"
                className="text-white/90 bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900   transition-colors hover:text-gray-900 hover:bg-white/90"
              >
                <span className="font-semibold">Send Email</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
              <a
                href="https://calendly.com/itab-ghazouani/introcution-call"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 bg-white/90 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 hover:bg-gray-900 hover:text-white/90 transition-colors"
              >
                <span className="font-semibold">Schedule a Call</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
