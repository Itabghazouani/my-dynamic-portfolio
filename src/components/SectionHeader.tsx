interface ISectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
}: ISectionHeaderProps) => {
  return (
    <>
      <div className="flex justify-center">
        <p className="uppercase font-semibold text-xs sm:text-sm tracking-widest bg-gradient-to-r from-[#00FFFF] to-[#B8E986] text-transparent bg-clip-text text-center">
          {eyebrow}
        </p>
      </div>

      <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl text-center mt-4 sm:mt-6">
        {title}
      </h2>
      <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-white/60 mt-3 sm:mt-4 max-w-md mx-auto px-4 sm:px-0">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;
