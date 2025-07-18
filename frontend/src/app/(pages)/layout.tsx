import type { Metadata } from "next";
import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer";
import TopHeaderSlider from "@/components/shared/top-header-slider";
import OurBlogs from "@/components/shared/common/blogs";

export const metadata: Metadata = {
  title: "collection - Forge Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-white  ">
      <TopHeaderSlider />
      <Navbar navParent="!bg-black/90 !text-zinc-200  " />
      {children}
      <OurBlogs/>
      <Footer />
    </div>
  );
}
