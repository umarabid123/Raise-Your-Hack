import BottomPageQoute from "@/components/shared/common/bottom-page-qoute";
import ProductsPage from "@/components/shared/common/products-page";
import TitleSlider from "@/components/shared/common/title-slider";
import React from "react";

const page = () => {
  return (
    <div>
      <TitleSlider title="s12025" slideStyle="!bg-zinc-100 !text-black" />

      <ProductsPage filterType="eid-drop" />

      <div className="bg-[url('/assets/eid1.webp')] bg-cover bg-center  text-white ">
        <div className="bg-black/80 p-8 md:p-12">
          <BottomPageQoute
            text="Men’s Casual Shirts | Casual Shirts For Men"
            qouteStyle="!mb-5 text-white"
          />
          
          <p className="text-center font-mulish md:w-3/4 mx-auto  font-normal">
            Get the latest iconic fashion look with our Men’s Casual Shirts.
            Charcoal Casual Shirts for men are in line with latest trends with
            our signature look. Shop the latest summer or winter casual shirts
            in many colors and designs including long sleeve casual shirts up &
            down button shirts and other shirts for men. Free Shipping in
            Pakistan.
            <br />
            <br />
            Our men’s smart casual wear has all your occasions covered, whether
            it’s an evening meal or a night out. You’ll find everything from
            slim fit jeans and chinos to shirts and polo shirts that will help
            you strike that all-important balance between relaxed and refined
            style. With mix and match colour palettes and a range of comfy
            sizes, our casual clothes and outfits are a real staple for any
            man’s wardrobe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
