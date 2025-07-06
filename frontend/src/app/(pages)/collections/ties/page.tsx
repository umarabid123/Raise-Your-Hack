import BottomPageQoute from "@/components/shared/common/bottom-page-qoute";
import ProductsPage from "@/components/shared/common/products-page";
import TitleSlider from "@/components/shared/common/title-slider";
import React from "react";

const page = () => {
  return (
    <div>
      <TitleSlider title="TIE" slideStyle="!bg-zinc-100 !text-black" />

      <ProductsPage filterType="accessories" />

      <div className="bg-[url('/assets/suit1.webp')] bg-cover bg-center  text-white ">
        <div className="bg-black/80 p-8 md:p-20">
          <BottomPageQoute text="TIE" qouteStyle="!mb-5 text-white" />

          <p className="text-center font-mulish md:w-3/4 mx-auto  font-normal">
            Charcoal is your one-stop destination for designer accessories like
            quality made ties. Our tie for men collection includes classic and
            latest trendy designs of neckties in velvet, patterned, silk, and
            other fabrics which helps create the perfect look for any occasion.
            from knitted textures to floral prints we have all the designer ties
            in best prices. Free Shipping available in Pakistan. Cash on
            Delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
