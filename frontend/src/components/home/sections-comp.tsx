"use client";
import React, { useRef } from "react";
import { ArrowIcon, DropDownIcon } from "@/svgs/header-svg-grabber";
import ProductCard from "../shared/common/product-card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from "../shared/container";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setIndex } from "@/redux-store/slices/toggle-arrow";
import { Products } from "@/data";
import SectionTitle from "../shared/common/section-title";

interface SectionProps {
  category?: string;
  sectionTitle?: string;
  bannerImage1?: string;
  bannerImage2?: string;
  bannerVideo?: string;
  moreStyle?: string;
  iconStyle?: string;
}

const SectionComp = ({
  category,
  sectionTitle,
  bannerImage1,
  bannerImage2,
  moreStyle,
  iconStyle,
}: SectionProps) => {
 
// import { setIndex } from "@/redux-store/slices/toggle";

 
  const sliderRef = useRef<Slider | null>(null);
  const slides = useSelector((state: { slider: { startIndex: number } }) => state.slider.startIndex);
  const dispatch = useDispatch();
  const visibleSlide = 5.1;

  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: visibleSlide,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2.4 } },
      { breakpoint: 640, settings: { slidesToShow: 1.3 } },
    ],
  };

  const filteredData = Products.filter((p) => p.category === category);
 

  return (
    <div>
      {/* Top banner image */}
      {bannerImage1 && (
        <div className="h-[560px] 2xl:h-[800px] relative">
          <Image
            src={bannerImage1}
            alt={sectionTitle ?? "Section banner"}
            priority
            height={1000}
            width={2000}
            className="hidden md:flex object-cover h-full w-full"
          />
          <Image
            src={bannerImage2 ?? ""}
            alt={sectionTitle ?? "Section banner"}
            priority
            height={1000}
            width={2000}
            className="md:hidden object-cover h-full w-full"
          />
        </div>
      )}

      {sectionTitle && (
        <Container parentStyle={`bg-white !pr-0 text-black relative ${moreStyle}`}>
          <SectionTitle title={sectionTitle} iconStyles={iconStyle} />

          {/* Product Slider */}
          <div className="my-6 md:mt-12">
            <Slider
              ref={sliderRef}
              {...settings}
              afterChange={(index) => dispatch(setIndex(index))}
            >
              {filteredData.slice(0, 8).map((i, index) => (
                <div key={index}>
                  <ProductCard product={i} />
                </div>
              ))}
            </Slider>
          </div>

          {/* Arrows */}
          <div className="w-full relative *:h-fit justify-around flex items-center gap-3">
            <div className="w-[80%] border"></div>

            <div className="hidden md:flex gap-3 items-center *:border *:rounded-full">
              <button
                disabled={slides <= 0}
                onClick={() => sliderRef.current?.slickPrev()}
                className={`h-12 w-12 rotate-90 text-center flex justify-center items-center group ${
                  slides <= 0 ? "border-gray-400 text-gray-600 cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                <DropDownIcon stroke={3} size={18} className="group-hover:hidden" />
                <ArrowIcon size={18} className="rotate-90 hidden group-hover:flex" />
              </button>
              <button
                disabled={slides >= 8 - visibleSlide}
                onClick={() => sliderRef.current?.slickNext()}
                className={`h-12 w-12 -rotate-90 text-center flex justify-center items-center group ${
                  slides >= 8 - visibleSlide ? "border-gray-400 text-gray-600 cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                <DropDownIcon stroke={3} size={18} className="group-hover:hidden" />
                <ArrowIcon size={18} className="rotate-90 hidden group-hover:flex" />
              </button>
            </div>
          </div>
        </Container>
      )}
 
  
    </div>
  );
};

export default SectionComp;
