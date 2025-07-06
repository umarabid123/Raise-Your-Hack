import React from 'react'
import {
  Facebook,
  Instagram,
  Linkdin,
  WhatsAppIcon,
  YouTube,
} from "@/svgs/social-svg-grabber";
import CustomLink from './custom-link';


const SocialLinks = () => {

 const social = [
    { icon: <Facebook size={25} />, href: "https://web.facebook.com" },
    { icon: <Instagram size={25} />, href: "https://www.instagram.com/" },
    { icon: <YouTube size={25} />, href: "https://www.youtube.com/" },
    {
      icon: <Linkdin size={25} />,
      href: "https://www.linkedin.com/in/ahmadraza161",
    },
    { icon: <WhatsAppIcon size={25} />, href: "https://wa.me/923020408062" },
  ];

  return (
<div className=" flex flex-wrap my-4 gap-8 text-black">
        {social.map((i, index) => (
          <CustomLink key={index} to={i.href}>
            {i.icon}
          </CustomLink>
        ))}
      </div>
        )
}

export default SocialLinks