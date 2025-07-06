"use client";

import ProductCard from "@/components/shared/common/product-card";
import Container from "@/components/shared/container";
import { Products } from "@/data";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "@/redux-store/slices/filter-slice";
import Filter from "@/components/shared/common/filter";
import SortProducts from "@/components/shared/common/sort-products";
import CustomButton from "@/components/shared/common/custom-button";
import FilterIcon from "@/svgs/filter-svg";
import { banners } from "@/data";

interface PageProps {
  //   onFilter?: string;
  filterType?: string;
}

const ProductsPage: React.FC<PageProps> = ({ filterType }) => {
  // Define RootState type based on your redux store structure
  interface RootState {
    filter: {
      open: boolean;
    };
    // add other slices if needed
  }

  const openFilter = useSelector((state: RootState) => state.filter.open);
  
  const [sortedProducts, setSortedProducts] = React.useState(Products);

  const dispatch = useDispatch();

  const showProducts = filterType === "discount"
    ? sortedProducts.filter((product) => product.discount)
    : sortedProducts.filter(
        (product) =>
          product.label === filterType ||
          product.category === filterType
      );

  const length = showProducts.length;

  return (
    <div className="bg-white text-black relative">

      {/* filter + sort bar */}
      <div className=" max-w-[1580px] mx-auto ">
        
        {/* show length of products in small screens  */}
        <div className="flex justify-center md:hidden  text-lg font-semibold mt-8 ">
          {length} products
        </div>
       
        {/* Mobile sticky filter + sort button */}
        <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 w-4/5 md:hidden z-30">
          <CustomButton
            btnText="Filter & Sorting"
            position="left"
            leftIcon={<FilterIcon size={20} />}
            onClick={() => dispatch(toggleFilter())}
            AdditionalStyle="w-full bg-black text-white py-3 "
          />
        </div>

        {/* filter + sort bar  */}
        <div className=" flex justify-between items-center px-5 lg:px-14 pt-8 ">
          <CustomButton
            btnText="Filter"
            position="left"
            leftIcon={<FilterIcon size={20} />}
            onClick={() => dispatch(toggleFilter())}
            AdditionalStyle="hidden md:flex"
          />

          {openFilter && <Filter onToggle={() => dispatch(toggleFilter())} />}

          <SortProducts
            styles="hidden md:block"
            setProducts={setSortedProducts}
          />
        </div>
      </div>

      {/* products section */}
      <Container parentStyle="!pr-5 lg:!pr-14">
        <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
          {showProducts.map((product, index) => {
            const bannerIndexes: Record<number, number> = {
              4: 0,
              15: 1,
              23: 2,
              30: 3,
            };

            // If the current index matches one of the banner indexes
            if (bannerIndexes.hasOwnProperty(index)) {
              const banner = banners[bannerIndexes[index]];
              return (
                <div
                  key={`banner-${index}`}
                  className="col-span-2 relative w-full h-full overflow-hidden"
                >
                  <Image
                    src={banner}
                    alt={`Banner ${bannerIndexes[index] + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              );
            }

            // Render normal product card
            return (
              <div key={index} className="w-full">
                <ProductCard product={product} addStyle="w-full z-0 " />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default ProductsPage;
