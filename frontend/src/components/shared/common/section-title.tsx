import React from "react";
import CustomLink from "./custom-link";
import CustomButton from "./custom-button";
import { DropDownIcon } from "@/svgs/header-svg-grabber";

interface SectionTitleProps {
  title: string;
  iconStyles?: string;
  link?: string;
  titleSectionStyle?: string;
    titleStyle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  iconStyles,
  titleSectionStyle,
    titleStyle,
  link = "#",
}) => {
  return (
    <div
      className={`flex md:items-center gap-4 flex-col md:flex-row justify-start md:justify-between md:mr-12 ${titleSectionStyle}`}
    >
      <span className={`text-xl font-optimanova first-letter:uppercase ${titleStyle}`}>
        {title}
      </span>

      {/* view all btn  */}
      <CustomLink to={link}>
        <span className="group flex gap-2 cursor-pointer">
          <CustomButton
            btnText="View all"
            AdditionalStyle="!normal-case !font-normal group-hover:border-b "
          />
          <DropDownIcon
            stroke={3}
            size={12}
            className={`-rotate-90 group-hover:bg-black group-hover:text-white bg-zinc-200 rounded-full p-1.5 h-6 w-6 ${iconStyles}`}
          />
        </span>
      </CustomLink>
    </div>
  );
};

export default SectionTitle;
