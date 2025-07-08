import React from "react";
import TopHeaderSlider from "@/components/shared/top-header-slider";
import HeroSection from "@/components/home/hero-section";
import SectionComp from "@/components/home/sections-comp";
import TitleSlider from "@/components/shared/common/title-slider";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar/navbar";

const page = () => {
  return (
    <div>
      <TopHeaderSlider />
      <div className=" sticky bg-white inset-0 z-30">
        <Navbar />
      </div>
      <HeroSection />

      {/* sections  */}
      <div>
        <SectionComp category="eid-drop" sectionTitle="Eid Drop - 25" />
        <SectionComp
          category="festive"
          sectionTitle="Festive - 25"
          bannerImage1="/assets/festive.webp"
          bannerImage2="/assets/festive2.webp"
          moreStyle="!bg-black text-white"
          iconStyle="!bg-zinc-800 group-hover:!bg-white group-hover:!text-black"
        />
        <SectionComp
          category="suits"
          sectionTitle="suiting - 25"
          bannerImage1="/assets/suit.webp"
          bannerImage2="/assets/suiting.webp"
        />
        <div className="h-[560px] 2xl:h-[800px] relative">
          <video
            src="/assets/video/banner.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
        </div>
        {/* title-slider  */}
        <div>
 
          <TitleSlider title="live sharp | Look smart"/>
 
        </div>

        <SectionComp
          category="perfumes"
          sectionTitle="perfumes & Oud - 25"
          bannerImage1="/assets/perfume.webp"
          bannerImage2="/assets/oud.webp"
        />
        <SectionComp
          category="accessories"
          sectionTitle="accessories - 25"
          bannerImage1="/assets/accessories.webp"
          bannerImage2="/assets/accessories2.webp"
          moreStyle="!bg-black text-white"
          iconStyle="!bg-zinc-800 group-hover:!bg-white group-hover:!text-black"
        />
        <SectionComp bannerImage1="/assets/bespoke.webp" bannerImage2="/assets/bespoke.webp" />
      </div>

      <Footer />
    </div>
  );
};

export default page;
 
