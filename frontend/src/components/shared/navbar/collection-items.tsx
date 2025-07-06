import React from "react";
import CustomButton from "../common/custom-button";
import CloseIcon, { DropDownIcon } from "@/svgs/header-svg-grabber";
import { Collection, SubCollection } from "@/redux-store/slices/toggle-arrow";
import { useDispatch } from "react-redux";
import CustomLink from "../common/custom-link";
import Image from "next/image";

const CollectionItems = ({ subItem }: { subItem: string }) => {
  const collectionsElements = [
    {
      label: "New Arrivals",

      path: "/collections/s12025",
    },
    {
      label: "Fragrances",
      path: "/collections/perfume-bodyworks",
    },
    {
      label: "Polo & Tees",
      path: "/collections/polo-tees",
    },
    {
      label: "Shirts",
      icon: true,
      subCollection: [
        { id: 1, label: "Casual Shirts", path: "/collections/casual-shirts" },
        {
          id: 2,
          label: "Formal Shirts",
          path: "/collections/semi-formal-full-sleeve-shirts",
        },
      ],
    },
    {
      label: "Suiting",
      path: "/collections/suiting",
    },
    {
      label: "Semi Formal Coats",

      path: "/collections/casual-coats",
    },
    {
      label: "Afroz",
      icon: true,
      subCollection: [
        {
          id: 1,
          label: "Kurta Collection",
          path: "/collections/shalwar-kameez",
        },
        { id: 2, label: "Waistcoats", path: "/collections/waist-coats" },
      ],
    },
    {
      label: "Bottoms",
      icon: true,
      subCollection: [
        { id: 1, label: "Trousers", path: "/collections/trousers" },
        { id: 2, label: "Jeans", path: "/collections/jeans" },
      ],
    },
    {
      label: "Winter",
      icon: true,
      subCollection: [
        { id: 1, label: "Jackets", path: "/collections/jackets" },
        { id: 2, label: "Sweaters", path: "/collections/sweaters" },
        { id: 3, label: "Hoodies", path: "/collections/hoodies" },
      ],
    },
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <div
        className="bg-black/60 h-full w-full fixed top-0 left-0 flex items-center"
        onClick={() => dispatch(Collection())}
      >
        {/* inner div  */}
        <div
          className="text-black   p-11 bg-white z-10 overflow-auto h-[95%] w-[90%] md:w-96 m-auto md:ml-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* close btn  */}
          <CustomButton
            icon={
              <CloseIcon
                size={18}
                className="transition-transform duration-300 group-hover:!rotate-90 "
              />
            }
            AdditionalStyle="border !border-gray-300 p-4 rounded-full"
            onClick={() => dispatch(Collection())}
          />

          {/* nav Collection menu element  */}
          <ul className=" ">
            {collectionsElements.map((i, index) => (
              <li
                key={index}
                className="font-mulish tracking-wider font-semibold text-[1.25rem] my-4 group cursor-pointer w-full"
              >
                {i.path ? (
                  <CustomLink
                    to={i.path}
                    styles="group-hover:border-b"
                    click={() => dispatch(Collection())}
                  >
                    {i.label}
                  </CustomLink>
                ) : (
                  <div
                    className="flex items-center justify-between group "
                    onClick={() => dispatch(SubCollection(i.label))}
                  >
                    <span className="group-hover:border-b">{i.label}</span>
                    {i.icon && (
                      <DropDownIcon className="-rotate-90 h-7 w-7 rounded-full bg-gray-200 p-2 group-hover:text-white group-hover:bg-black" />
                    )}
                  </div>
                )}

                {/* nested sub collection menu  */}
                {subItem === i.label && i.subCollection && (
                  <ul className="ml-4 fixed top-4 left-2 md:top-6 md:left-96  w-[90%] md:w-96 m-auto md:ml-4 z-50 h-[95%] p-11 pt-24 border-l border-gray-300 bg-white ">
                    {/* close btn  */}
                    <CustomButton
                      icon={
                        <CloseIcon
                          size={18}
                          className=" transition-transform duration-300 group-hover:!rotate-90 "
                        />
                      }
                      AdditionalStyle="md:hidden border !border-gray-300 p-4 rounded-full"
                      onClick={() => dispatch(SubCollection(i.label))}
                    />

                    {i.subCollection?.map((e, index) => (
                      <li key={index} className="my-4 ">
                        <CustomLink
                          click={() => dispatch(Collection())}
                          to={e.path}
                          styles="w-fit hover:border-b"
                        >
                          {e.label}
                        </CustomLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}

            {/* end image in accessories  */}
            <CustomLink to="/collections/accessories" styles="  h-36 ">
              <div className="relative">
                <Image
                  src={"/assets/access.avif"}
                  alt="Accessories"
                  height={1000}
                  width={1000}
                  className="transition-transform duration-200 hover:scale-105 object-cover  h-full w-full"
                />
                <p className="absolute inset-0 flex items-end w-fit font-bold p-3  text-xl">
                  View all
                </p>
              </div>
            </CustomLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CollectionItems;
