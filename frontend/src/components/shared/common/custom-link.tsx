import Link from "next/link";
import React, { ReactNode } from "react";

interface linkProps {
  children: ReactNode;
  to : string;
  styles ?: string;
 
  click ?: () => void;
}

const CustomLink: React.FC<linkProps> = ({ children , to , styles ,click}) => {
  return (
    <Link href={to} onClick={click} className={`cursor-pointer ${styles}`}>
 
      {children}
    </Link>
  );
};

export default CustomLink;
