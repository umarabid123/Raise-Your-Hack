import Image from 'next/image'
import React from 'react'
import CustomLink from '../common/custom-link'
import { ToggleEvent } from '@/redux-store/slices/toggle-arrow'
import CloseIcon from '@/svgs/header-svg-grabber'
import CustomButton from '../common/custom-button'
import { useDispatch } from 'react-redux'

const AccessoriesItems = ( ) => {

    const accessoriesList = [
    { label: "Ties", path: "/collections/ties" },
    { label: "Belts", path: "/collections/belts" },
    { label: "Tie Boxes", path: "/collections/tie-boxes" },
    { label: "Lapel pin", path: "/collections/lapel-pin" },
    { label: "Cufflinks", path: "/collections/cufflinks" },
    { label: "Wallets", path: "/collections/wallets" },
    { label: "Tie Pin", path: "/collections/tie-pin" },
    { label: "Boxers", path: "/collections/boxers" },
    { label: "Gift Boxes", path: "/collections/gift-boxes" },
    { label: "Vests", path: "/collections/vests" },
    { label: "Bow Tie", path: "/collections/bow-tie" },
    // { label: "View all", path: "/collections/accessories" },
  ];

    const dispatch = useDispatch()
  return (
    <div>
        <div
          className="bg-black/60 h-full w-full fixed top-0 left-0 flex items-center"
          onClick={() => dispatch(ToggleEvent())}
        >
          <div
            className="text-black p-11 bg-white z-80 overflow-auto h-[95%] m-auto w-[90%] md:w-96 md:ml-4"
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
              onClick={() => dispatch(ToggleEvent())}
            />

            {/* nav Accessories menu element  */}
            <ul>
              {accessoriesList.map((i, index) => (
                <li
                  key={index}
                  className="font-mulish tracking-wider font-semibold text-[1.25rem] my-4 group cursor-pointer w-full"
                >
                  <CustomLink
                    to={i.path}
                    styles="group-hover:border-b group-hover:"
                  >
                    {i.label}
                  </CustomLink>
                </li>
              ))}
              {/* meny end image in accessories  */}
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
  )
}

export default AccessoriesItems