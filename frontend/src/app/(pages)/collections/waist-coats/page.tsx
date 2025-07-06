import BottomPageQoute from "@/components/shared/common/bottom-page-qoute";
import ProductsPage from "@/components/shared/common/products-page";
import TitleSlider from "@/components/shared/common/title-slider";
import React from "react";

const page = () => {
  return (
    <div>
      <TitleSlider title="s12025" slideStyle="!bg-zinc-100 !text-black" />

      <ProductsPage filterType="waist-coats" />

      <div className="bg-[url('/assets/suit1.webp')] bg-cover bg-center  text-white ">
        <div className="bg-black/80 p-8 md:p-12">
          <BottomPageQoute
            text="Waistcoat For Men | Men's Formal Waistcoat"
            qouteStyle="!mb-2 text-white"
          />
          <p className="text-center text-2xl font-optimanova tracking-wider font-semibold my-4">
            WAISTCOAT FOR MEN
          </p>
          <p className="text-center font-mulish md:w-3/4 mx-auto text-base md:text-lg font-normal">
            Make your special day count by wearing an exclusively designed Mens
            Waistcoat from our collection. Charcoals waistcoats for men are the
            perfect fit for any formal or casual occasion. Charcoal is one of
            the leading brands in Mens Formal Waistcoats, kurtas and shalwar
            Kameez. Our waistcoat designs includes double-breasted vests,
            tuxedo, traditional and modren suit vest in different colors like
            navy blue, black, grey, brown, beige, white, off-white, cream etc.
            You can shop our ethnic waistcoats in blue, black, grey, brown,
            beige, white, off-white and cream colors with exclusive designs.
            <br />
            <br />
            SHOP NOW !
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
