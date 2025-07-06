import React from "react";
import SectionTitle from "./section-title";
import Container from "../container";
import Image from "next/image";
import CustomLink from "./custom-link";

const OurBlogs = () => {
  const blogImages = [
    {
      title: "The Art of Scent: Matching Fragrances to Your Wardrobe",
      url: "/assets/blog1.jpeg",
    },
    {
      title:
        "The Evolution of Polo Shirts: From Sporting Gear to Fashion Staple",
      url: "/assets/blog2.jpg",
    },
    {
      title: "Men's Summer Fashion ideas: Top Trends & Outfits for 2024",
      url: "/assets/blog3.webp",
    },
  ];

  return (
    <Container parentStyle="bg-zinc-100 text-black py-5 pr-5 lg:pr-14">
      <SectionTitle
        title="Read our Latest Blogs"
        titleSectionStyle=""
        titleStyle="!text-5xl"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 ">
        {blogImages.map((blog, index) => (
          <CustomLink
            to="#blogLink"
            key={index}
            styles="group overflow-hidden cursor-pointer "
          >
            <Image
              width={500}
              height={500}
              src={blog.url}
              alt={`Blog ${index + 1}`}
              className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110 mb-4"
            />
            <h3 className="text-3xl font-optimanova tracking-wider mb-2">
              {blog.title}
            </h3>
          </CustomLink>
        ))}
      </div>
    </Container>
  );
};

export default OurBlogs;
