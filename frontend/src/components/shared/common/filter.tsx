import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleFilterSection,
  setPriceRange,
} from "@/redux-store/slices/filter-slice";
import CloseIcon, { DropDownIcon } from "@/svgs/header-svg-grabber";
import CustomButton from "./custom-button";
import { RootState } from "@/components/shared/types";

const Filter = ({ onToggle }: { onToggle: () => void }) => {
  const dispatch = useDispatch();
  // Define RootState type according to your redux store structure
  const sections = useSelector((state: RootState) => state.filter.sections);

  const handleSectionToggle = (section: "sortBy" | "price" | "size") => {
    dispatch(toggleFilterSection(section));
  };

  return (
    <div
      className="fixed h-full w-full top-0 left-0 flex items-end sm:items-center justify-center md:justify-start bg-black/50 z-40 pb-5"
      onClick={onToggle}
    >
      <div
        className="absolute  h-2/3 sm:h-[94%] z-50 bg-white m-auto w-[90%] md:w-1/3 md:ml-5 "
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <div className="hidden sm:flex justify-between items-center text-lg font-medium font-mulish mb-4 p-8 border-b">
          Filter
          <button
            onClick={onToggle}
            className="cursor-pointer hover:rotate-180 transition-transform duration-300"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Sections */}
        <div className="px-8 space-y-8 text-sm mt-10 overflow-hidden overflow-y-auto h-2/3 ">
          {/* apply btn  */}
          <div
            className=" absolute bottom-0 left-0 w-full px-8 bg-white "
            onClick={onToggle}
          >
            <CustomButton
              btnText="Apply"
              AdditionalStyle="text-center w-full py-4 bg-black text-white"
            />
          </div>

          {/* Sort By */}
          <div className="border-b pb-2 group">
            <div
              className="flex justify-between cursor-pointer "
              onClick={() => handleSectionToggle("sortBy")}
            >
              <span className="font-semibold ">Sort by</span>
              <span>
                {sections.sortBy ? (
                  <DropDownIcon
                    size={16}
                    className="rotate-180 h-7 w-7 p-2  transition-transform duration-300 rounded-full group-hover:bg-black group-hover:text-white bg-gray-300"
                  />
                ) : (
                  <DropDownIcon
                    size={16}
                    className=" transition-transform duration-300 h-7 w-7 p-2 rounded-full group-hover:bg-black group-hover:text-white bg-gray-300"
                  />
                )}
              </span>
            </div>
            {sections.sortBy && (
              <div className="mt-2 pl-2 space-y-1 text-sm">
                <label>
                  <input type="radio" name="sort" /> A to Z
                </label>
                <br />
                <label>
                  <input type="radio" name="sort" /> Z to A
                </label>
                <br />
                <label>
                  <input type="radio" name="sort" /> Price Low to High
                </label>
              </div>
            )}
          </div>

          {/* Price */}
          <div className="border-b pb-2 group">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => handleSectionToggle("price")}
            >
              <span className="font-semibold">Price</span>
              <span>
                {sections.price ? (
                  <DropDownIcon
                    size={16}
                    className="rotate-180 h-7 w-7 p-2  transition-transform duration-300 rounded-full group-hover:bg-black group-hover:text-white bg-gray-300"
                  />
                ) : (
                  <DropDownIcon
                    size={16}
                    className=" transition-transform duration-300 h-7 w-7 p-2 rounded-full group-hover:bg-black group-hover:text-white bg-gray-300"
                  />
                )}
              </span>
            </div>
            {sections.price && (
              <div className="mt-2 text-sm">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  className="w-full"
                  onChange={(e) =>
                    dispatch(setPriceRange([0, parseInt(e.target.value, 10)]))
                  }
                />
              </div>
            )}
          </div>

          {/* Size */}
          <div className="border-b pb-2 group">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => handleSectionToggle("size")}
            >
              <span className="font-semibold">Size</span>
              <span>
                {sections.size ? (
                  <DropDownIcon
                    size={16}
                    className="rotate-180 h-7 w-7 p-2  transition-transform duration-300 rounded-full group-hover:bg-black group-hover:text-white bg-gray-300"
                  />
                ) : (
                  <DropDownIcon
                    size={16}
                    className=" transition-transform duration-300 h-7 w-7 p-2 rounded-full group-hover:bg-black group-hover:text-white bg-gray-300"
                  />
                )}
              </span>
            </div>
            {sections.size && (
              <div className="mt-2 pl-2 text-sm space-y-1">
                <label>
                  <input type="checkbox" /> Small (S)
                </label>
                <br />
                <label>
                  <input type="checkbox" /> Medium (M)
                </label>
                <br />
                <label>
                  <input type="checkbox" /> Large (L)
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
