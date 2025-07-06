import React from "react";
import CustomLink from "./custom-link";

interface ContactProps {
  label?: string;
  email?: string;
  phone?: string;
  links?: string;
  styles?: string;
}

const Contacts: React.FC<ContactProps> = ({
  label,
  email,
  phone,
  links,
  styles,
}) => {
  const footerlink = [
    { label: "Store Locator ", path: "/store-locator" },
    { label: "FAQ's ", path: "/faqs" },
    { label: "Return Exchange ", path: "/return-exchange" },
    { label: "Policy ", path: "/Policy" },
    { label: "About us ", path: "#" },
    { label: "Terms Conditions ", path: "#" },
    { label: "Charcaol sweing ", path: "#" },
    { label: "Size Guide ", path: "#" },
    { label: "All Products ", path: "#" },
    { label: "Fabric Care ", path: "#" },
    { label: "Blogs ", path: "#" },
    { label: "Baadmay ", path: "#" },
  ];

  return (
    <div
      className={`space-y-7 text-sm lg:text-base sm:w-56 font-mulish *:text-[#000000B3] ${styles}`}
    >
      <h3 className="font-semibold !text-black">{label}</h3>
      <p className="text-grayed">{email}</p>
      <p>{phone}</p>
      <div>
        {links &&
          footerlink.map((i, index) => (
            <CustomLink key={index} to={i.path}>
              {i.label} -
            </CustomLink>
          ))}
      </div>
    </div>
  );
};

export default Contacts;
