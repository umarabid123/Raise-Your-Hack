import { DropDownIcon } from "@/svgs/header-svg-grabber";
import React from "react";

interface Arrow {
  nextIconStyle?: string;
  prevIconStyle?: string;
  onClick?: () => void;
  direction?: string;
  AdditionalStyle?: string;
  disabled?: boolean;
}

const CustomArrow: React.FC<Arrow> = ({
  nextIconStyle,
  prevIconStyle,
  onClick,
  direction,
  AdditionalStyle,
  disabled,
}) => {
  return (
    <button
      className={` absolute -bottom-4 right-2 z-10 p-2 text-white bg-black ${AdditionalStyle} ${
        direction === "next" ? "hover:border " : " right-11 hover:border"
      } transition-colors duration-200  cursor-pointer`}
      onClick={onClick}
      disabled={disabled}
    >
      {direction === "next" ? (
        <DropDownIcon className={`h-4 w-4 ${nextIconStyle}`} />
      ) : (
        <DropDownIcon className={`h-4 w-4 rotate-90 ${prevIconStyle}`} />
      )}
    </button>
  );
};

export default CustomArrow;
