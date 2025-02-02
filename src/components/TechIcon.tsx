import { ElementType } from 'react';

interface ITechIconProps {
  component: ElementType;
}

const TechIcon = ({ component }: ITechIconProps) => {
  const Component = component;

  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="#00FFFF" />
          <stop offset="100%" stopColor="#B8E986" />
        </linearGradient>
      </svg>
    </>
  );
};

export default TechIcon;
