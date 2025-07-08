"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Navbar from "../shared/navbar/navbar";

const HeroSection = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  const mobileImages = ["/assets/smalhero1.jpeg", "/assets/smalhero2.webp"];
  const desktopImages = ["/assets/hero1.webp", "/assets/hero2.webp"];

  return (
    <div className="relative bg-white">
      {/* <div className="absolute inset-0 z-30">
        <Navbar />
      </div> */}

      {/* Mobile slider */}
      <div className="md:hidden">
        <Slider {...settings}>
          {mobileImages.map((src, index) => (
            <div key={`mobile-${index}`} className="w-full">
              <Image
                src={src}
                alt={`Mobile Slide ${index + 1}`}
                width={600}
                height={1000}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop slider */}
      <div className="hidden md:block">
        <Slider {...settings}>
          {desktopImages.map((src, index) => (
            <div key={`desktop-${index}`} className="w-full">
              <Image
                src={src}
                alt={`Desktop Slide ${index + 1}`}
                width={1920}
                height={1080}
                priority
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HeroSection;
