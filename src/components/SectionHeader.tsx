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
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-[#00FFFF] to-[#B8E986] text-transparent bg-clip-text text-center">
          {eyebrow}
        </p>
      </div>

      <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 ">
        {title}
      </h2>
      <p className="text-center  md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;
