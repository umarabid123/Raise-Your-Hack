import BottomPageQoute from "@/components/shared/common/bottom-page-qoute";
import ProductsPage from "@/components/shared/common/products-page";
import TitleSlider from "@/components/shared/common/title-slider";
import React from "react";

const page = () => {
  return (
    <div>
      <TitleSlider title=" " slideStyle="!bg-zinc-100 !text-black !p-0" />

      <ProductsPage filterType="discount" />

      <div className="bg-[url('/assets/suit1.webp')] bg-cover bg-center  text-white ">
        <div className="bg-black/80 p-8 md:p-20">
          <BottomPageQoute
            text="MEN FLASH SALE"
            qouteStyle="!mb-5 text-white"
          />

          <p className="text-center font-mulish md:w-3/4 mx-auto  font-normal">
            Enjoy Men Flash Sale at Charcoal clothing with up to 50% discount.
            Men Summer Sale 2021 is now Available. Get exclusive discounts on
            jeans, shirts, coats, suiting, pant coat, shalwar kameez, kurta,
            trousers, waistcoat, pants and many more.
            <br />
            <br />
            Shop at Flash Sale for Men now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
