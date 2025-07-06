"use client";

import Slider from "react-slick";
 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TitleSlider = ({title , slideStyle}:{title :string , slideStyle?:string}) => {
 const settings = {
  infinite: true,
  speed: 2000, // this controls how long one scroll takes
 
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0, // for continuous scroll
  cssEase: "linear", // 👈 IMPORTANT for smooth movement
  arrows: false,
  pauseOnHover: false,
  variableWidth: true,
};

  return (
 
    <div className={`text-white py-4  bg-black ${slideStyle}`}>
      <Slider  {...settings}>
         {Array.from({ length: 9 }).map((_, index) => (
            <p key={index} className="mx-10 my-7 text-2xl font-optimanova tracking-wider uppercase">
              {title} 
 
            </p>
         ))} 
         
      </Slider>
    </div>
  );
};

export default TitleSlider;
