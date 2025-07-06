import BottomPageQoute from "@/components/shared/common/bottom-page-qoute";
import ProductsPage from "@/components/shared/common/products-page";
import TitleSlider from "@/components/shared/common/title-slider";
import React from "react";

const page = () => {
  return (
    <div>
      <TitleSlider title="s12025" slideStyle="!bg-zinc-100 !text-black" />

      <ProductsPage filterType="suits" />

      <div className="bg-[url('/assets/suit1.webp')] bg-cover bg-center  text-white ">
        <div className="bg-black/80 p-8 md:p-20">
          <BottomPageQoute
            text="Men's Formal Suits | Tailored Custom suits For Men"
            qouteStyle="!mb-2 text-white"
          />
          <p className="text-center text-2xl font-optimanova tracking-wider font-semibold my-4">
            SUITING
          </p>
          <p className="text-center font-mulish md:w-3/4 mx-auto text-base md:text-lg font-normal">
            Wear Mens Formal Suits from Charcoal Suiting to get a classy look
            at any occasion. Shop our designer suits for men, blazers, and
            prince coats which are made with finesse and craftsmanship. From
            Tailored suits to Custom suits, get the latest Tailor made
            need-to-measure mens suit in double-breasted, slim, and classic fit
            fittings. Free Shipping available for Pakistan. Cash on Delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
