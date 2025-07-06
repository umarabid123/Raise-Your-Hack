import BottomPageQoute from "@/components/shared/common/bottom-page-qoute";
import ProductsPage from "@/components/shared/common/products-page";
import TitleSlider from "@/components/shared/common/title-slider";
import React from "react";

const page = () => {
  return (
    <div>
      <TitleSlider title="jackets" slideStyle="!bg-zinc-100 !text-black uppercase" />

      <ProductsPage filterType="jackets" />

      <div className="bg-[url('/assets/jac1.jpg')] bg-cover bg-center  text-white ">
        <div className="bg-black/80 p-8 md:p-20">
          <BottomPageQoute
            text="Jackets For Men | Men's Winter Jackets"
            qouteStyle="!mb-5 text-white"
          />

          <p className="text-center font-mulish md:w-3/4 mx-auto  font-normal">
            At Charcoal, we have the best quality Jackets for men with the
            Premium quality available in our Winter collection. we have a wide
            range of Leather jackets, Denim jackets, Puffer jackets, Bomber
            jackets, Varsity Jackets, Fleece Jackets & Sleeveless Jackets. That
            too at the best prices available.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
