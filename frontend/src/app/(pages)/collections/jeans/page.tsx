import BottomPageQoute from "@/components/shared/common/bottom-page-qoute";
import ProductsPage from "@/components/shared/common/products-page";
import TitleSlider from "@/components/shared/common/title-slider";
import React from "react";

const page = () => {
  return (
    <div>
      <TitleSlider title="s12025" slideStyle="!bg-zinc-100 !text-black" />

      <ProductsPage filterType="jeans" />

      <div className="bg-[url('/assets/j1.webp')] bg-cover bg-center  text-white ">
        <div className="bg-black/80 p-8 md:p-12">
          <BottomPageQoute text="Jeans For Men" qouteStyle="!mb-5 text-white" />

          <p className="text-center font-mulish md:w-3/4 mx-auto  font-normal">
            Shop from wide range of Casual Trousers for men. Charcoal brings you
            the best mens casual slacks designs in its signature style. Choose
            from our mens smart casual trousers including Interlock trousers,
            Cargo trousers, sweatpants, slim-cut denim pants, jogger pants and
            many more.
            <br />
            <br />
            Feel at ease by wearing mens Casual Trousers. Charcoal brings you
            the best Casual Trouser designs with comfy fabric in its signature
            style. Dress down with our selection of Interlock trousers, Cargo
            trousers, jogger trousers and many more. Free Shipping is available
            for Pakistan.
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
