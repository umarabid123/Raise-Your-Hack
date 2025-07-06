import BottomPageQoute from "@/components/shared/common/bottom-page-qoute";
import ProductsPage from "@/components/shared/common/products-page";
import TitleSlider from "@/components/shared/common/title-slider";
import React from "react";

const page = () => {
  return (
    <div>
      <TitleSlider title="s12025" slideStyle="!bg-zinc-100 !text-black" />

      <ProductsPage filterType="semi-formal" />

      <div className="bg-[url('/assets/semi1.webp')] bg-cover bg-center  text-white ">
        <div className="bg-black/80 p-8 md:p-20">
          <BottomPageQoute
            text="Semi Formal Full Sleeve Shirts for Men | Men's Semi"
            qouteStyle="!mb-2 text-white"
          />
          <p className="text-center text-2xl font-optimanova tracking-wider font-semibold my-4">
            Formal Shirts
          </p>
          <p className="text-center font-mulish md:w-3/4 mx-auto text-base md:text-lg font-normal">
            Browse men Semi Formal Full Sleeve Shirts at Charcoal. Shop for the
            latest range of full sleeve shirts in blue, white, white and many
            other colors. Wear the best full sleeve smart shirts and feel
            luxury.
            <br />
            <br />
            Shop Now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
