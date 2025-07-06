import BottomPageQoute from "@/components/shared/common/bottom-page-qoute";
import ProductsPage from "@/components/shared/common/products-page";
import TitleSlider from "@/components/shared/common/title-slider";
import React from "react";

const page = () => {
  return (
    <div>
      <TitleSlider title="s12025" slideStyle="!bg-zinc-100 !text-black" />

      <ProductsPage filterType="polo-tees" />

      <div className="bg-[url('/assets/polo1.webp')] bg-cover bg-center  text-white ">
      <div className="bg-black/70 p-8 md:p-20">
        <BottomPageQoute text="Polo Shirts & Tees For Men" qouteStyle="!mb-8 text-white"/>
        <p className="text-center font-mulish md:w-3/4 mx-auto text-base md:text-lg font-normal">
          Wear beautifully Crafted Polo shirts to any casual or semi formal
          occasions. Our t-shirts are made with airy & skin friendly fabric
          which is pleasing to touch. Browse Charcoals latest Polo-shirts and
          Tees in many colors and designs like white, black and many more
          <br />
          <br />
          Shop latest Polos and Tees now!
        </p>
      </div>
      </div>
    </div>
  );
};

export default page;
