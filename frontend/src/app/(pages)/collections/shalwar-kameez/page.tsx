import BottomPageQoute from "@/components/shared/common/bottom-page-qoute";
import ProductsPage from "@/components/shared/common/products-page";
import TitleSlider from "@/components/shared/common/title-slider";
import React from "react";

const page = () => {
  return (
    <div>
      <TitleSlider title="s12025" slideStyle="!bg-zinc-100 !text-black" />

      <ProductsPage filterType="festive" />

      <div className="bg-[url('/assets/fes1.webp')] bg-cover bg-center  text-white ">
        <div className="bg-black/80 p-8 md:p-12">
          <BottomPageQoute
            text="MENS SHALWAR KAMEEZ"
            qouteStyle="!mb-2 text-white"
          />
          <p className="text-center text-2xl font-optimanova tracking-wider font-semibold my-4">
            MENS SHALWAR KAMEEZ (AFROZ)
          </p>
          <p className="text-center font-mulish md:w-3/4 mx-auto text-base md:text-lg font-normal">
            Shop our men shalwar kameez made from skin friendly fabric which
            gives the graceful look you need for any event. Afroz shalwar kameez
            men maintains the premium quality clothing as that of suiting and
            western wear. Wear our kameez with ban collar and full collar for
            formal occasions.
            <br />
            <br />
            Shop our Shalwar Kameez for men now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
