import React from "react";
import CustomButton from "../common/custom-button";
import CloseIcon from "@/svgs/header-svg-grabber";
import { Search } from "@/redux-store/slices/toggle-arrow";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "@/redux-store/slices/toggle-arrow";
import Image from "next/image";

const SearchBox = () => {
  type Product = {
    id: string | number;
    img1: string;
    title: string;
    currentPrice?: number;
    oldPrice?: number;
    label?: string;
    discount?: string;
  };

  type SliderState = {
    searchTerm: string;
    products: Product[];
  };

  type RootState = {
    slider: SliderState;
  };

  const { searchTerm, products } = useSelector(
    (state: RootState) => state.slider
  );

  const filteredProducts = products.filter((p: Product) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const dispatch = useDispatch();
  return (
    <div
      className="bg-black/20  h-full w-full fixed top-0 left-0 flex items-center md:justify-start"
      onClick={() => dispatch(Search())}
    >
      <div
        className="text-black p-11 absolute right-0 bg-white  overflow-auto h-[95%] m-auto w-[90%] md:w-1/2 md:mr-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b-2 flex justify-between">
          <input
            type="text"
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            placeholder="Search for ..."
            className="w-full py-3 text-xl font-medium font-mulish outline-none"
          />
          <CustomButton
            icon={
              <CloseIcon
                size={24}
                className="transition-transform duration-300 group-hover:!rotate-90 "
              />
            }
            onClick={() => dispatch(Search())}
          />
        </div>

        {/* show products  */}
        <ul className="mt-4 space-y-2">
          {filteredProducts.map((e) => (
            <li key={e.id} className="text-lg flex items-center gap-2">
              <Image
                src={e.img1}
                alt="image"
                height={100}
                width={100}
                className="object-cover h-20 w-20"
              />
              <div className="flex flex-col">
                <span className="text-sm text-white bg-black w-fit px-1">
                  {e.label}
                </span>
                {e.title}
                <div className="flex gap-2">
                  {e.discount ? (
                    <>
                      <span className="text-red-500 ">
                        Rs.{e.currentPrice?.toFixed(2) ?? "0.00"}{" "}
                      </span>
                      <span className="line-through">
                        Rs.{e.oldPrice?.toFixed(2) ?? "0.00"}
                      </span>
                    </>
                  ) : (
                    <span className="">
                      Rs.{e.oldPrice?.toFixed(2) ?? "0.00"}
                    </span>
                  )}
                </div>
              </div>
            </li>
            
          ))}
        </ul>

      </div>
    </div>
  );
};

export default SearchBox;
