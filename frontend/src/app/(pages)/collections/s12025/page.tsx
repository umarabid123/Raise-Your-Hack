import BottomPageQoute from "@/components/shared/common/bottom-page-qoute";
import ProductsPage from "@/components/shared/common/products-page";
import TitleSlider from "@/components/shared/common/title-slider";
import React from "react";

const page = () => {
  return (
    <div>
      <TitleSlider title="s12025" slideStyle="!bg-zinc-100 !text-black" />

      <ProductsPage filterType="new" />
      <BottomPageQoute text="s12025"/>
    </div>
  );
};

export default page;
