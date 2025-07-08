import React from "react";

interface CustomHeadingProps {
  text: string;
  className?: string;
  ariaLebel?: string;
}

const CustomHeading: React.FC<CustomHeadingProps> = ({
  text,
  className,
  ariaLebel,
}) => {
  return (
    <h1
      aria-label={ariaLebel}
      className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:my-4 text-darkBlack font-alice ${className}`}
    >
      {text}
    </h1>
  );
};

export default CustomHeading;
