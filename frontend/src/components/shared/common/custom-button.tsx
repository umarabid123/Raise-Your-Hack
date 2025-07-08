import { Loader2 } from "lucide-react";
import React, { ReactNode } from "react";

interface BtnProps {
  AdditionalStyle?: string;
  icon?: ReactNode;
  btnText?: string;
  onClick?: () => void;
  position?: string;
  disable?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
}

const CustomButton: React.FC<BtnProps> = ({
  btnText,
  leftIcon,
  loading,
  icon,
  position,
  AdditionalStyle,
  disable,
  onClick,
}) => {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 uppercase cursor-pointer font-mulish font-bold group hover:text-zinc-600 ${AdditionalStyle}`}
    >
      {loading ? (
        <Loader2 className="animate-spin h-5 w-5" />
      ) : (
        <>
          {position === "left" && leftIcon}
          {btnText}
          {icon}
        </>
      )}
    </button>
  );
};

export default CustomButton;
