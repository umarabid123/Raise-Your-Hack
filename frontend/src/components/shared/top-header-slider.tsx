"use client";

import Slider from "react-slick";
import { topHeaderSlider } from "@/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopHeaderSlider = () => {
 
  const settings = {
  infinite: true,
  speed: 7000, 
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear", 
  arrows: false,
  pauseOnHover: false,
  variableWidth: true,
};
 

  return (
    <div className="h-14 flex items-center  overflow-hidden bg-white">
 
      <Slider {...settings}>
        {topHeaderSlider.map((item, index) => (
          <div
            key={index}
            className="text-xs font-semibold font-mulish w-auto "
          >
            <div className="flex items-center text-black">
              {item.label}
              <div className=" mx-20 h-1 w-1 border rounded-full bg-black"></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

 
export default TopHeaderSlider;
 
