import BottomPageQoute from "@/components/shared/common/bottom-page-qoute";
import ProductsPage from "@/components/shared/common/products-page";
import TitleSlider from "@/components/shared/common/title-slider";
import React from "react";

const page = () => {
  return (
    <div>
      <TitleSlider title="s12025" slideStyle="!bg-zinc-100 !text-black" />

      <ProductsPage filterType="casual-coats" />

      <div className="bg-[url('/assets/casual1.webp')] bg-cover bg-center  text-white ">
        <div className="bg-black/80 p-8 md:p-12">
          <BottomPageQoute
            text="Casual Coat For Men | Men&#39;s Casual Blazers"
            qouteStyle="!mb-2 text-white"
          />
          <p className="text-center text-2xl font-optimanova tracking-wider font-semibold my-4">
            CASUAL COAT
          </p>
          <p className="text-center font-mulish md:w-3/4 mx-auto text-base md:text-lg font-normal">
            Wear Charcoals high fashion coat at any occasion, choose from this
            years Casual Coat designs. Charcoal is a renowned brand that offers
            versatility to its customers. Charcoal brings you aesthetic coat
            designs that you can style at different events. Coats for men range
            from a simple two buttoned coat to a more modern Bomber Jacket. When
            it comes to style, there are a variety of options. Either pair your
            coat with jeans or pants. Its totally up to you. If you wish to
            appear in a casual dinner, rock your presence in a casual coat.
            <br />
            <br />
            Dressing up is often considered an integral part associated with the
            personality of the people. The way a person style shows a reflection
            of his taste. Being well dressed gives a person self confidence.
            Every event requires a person to dress accordingly. But dont worry,
            Charcoal well takes care of your needs. Casual coats for men are
            available in many colors. Go for navy blue or chocolate brown color.
            Coat for men is designed to add a stylish look to your dressing. So
            are you ready to dress with elegance?
            <br />
            <br />
            Shop latest Polos and Tees now!
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
