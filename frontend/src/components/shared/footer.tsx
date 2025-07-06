import React from "react";
import Contacts from "./common/contacts";
import Container from "./container";
import CustomButton from "./common/custom-button";
import { DropDownIcon } from "@/svgs/header-svg-grabber";
 
import Image from "next/image";
import SocialLinks from "./common/social-links";

const Footer = () => {
 

  return (
    <Container parentStyle=" bg-white py-10 md:py-16 px-5 md:px-8 lg:px-4 xl:px-12">
      <div className=" text-black space-y-11 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <Contacts
          label={"Sale Support:"}
          email="Email: onlinesales@storeforge.com.pk"
          phone={"Phone: ( 92 ) - 309 - 4555214"}
        />
        <Contacts
          label={"Customer Care"}
          email="Email: customercare@storeforge.com.pk"
          phone={"Phone: ( 92 ) - 302 - 0408062"}
        />
        <Contacts
          label="About our store"
          links={
            "Store Locator - FAQ's - Return Exchange - Policy - About us - Terms Conditions - Charcaol sweing - Size Guide - All Products - Fabric Care - Blogs - Baadmay"
          }
        />
        <div className="  h-fit sm:col-span-2 md:col-span-3 lg:col-auto space-y-7">
          <h2 className="space-y-3 text-4xl font-optimanova">
            Sign up to our newsletter
          </h2>
          <div className="border border-zinc-200 mb-7">
            <form className="flex gap-1 px-3 ">
              <input
                type="email"
                className="w-full outline-none py-4"
                required
                placeholder="E-mail"
              />
              <CustomButton
                icon={
                  <DropDownIcon
                    stroke={3}
                    size={14}
                    className="-rotate-90 h-7 w-7 bg-gray-300 p-2 rounded-full hover:text-white hover:bg-black "
                  />
                }
              />
            </form>
          </div>
        </div>
      </div>

      {/* social links  */}
      <>
            <SocialLinks/>
      </>
      

      {/* footer bottom part  */}

      <div className="text-[#000000B3] text-sm flex flex-wrap flex-col-reverse md:flex-row gap-5 items-center justify-between mt-10">
        <p>© 2025, Froge Store. Powered by IT Brain</p>

        {/* bank cards  */}
        <div className="flex gap-2">
          <Image
            src={"/AE-card.svg"}
            alt="master card"
            height={30}
            width={50}
            title="American Express"
            className=" "
          />
          <Image
            src={"/master-card.svg"}
            alt="master card"
            height={30}
            width={50}
            title="Mastercard"
            className=" "
          />
          <Image
            src={"/visa-card.svg"}
            alt="master card"
            height={30}
            width={50}
            title="Visa"
            className=" "
          />
        </div>
      </div>
    </Container>
  );
};

export default Footer;
