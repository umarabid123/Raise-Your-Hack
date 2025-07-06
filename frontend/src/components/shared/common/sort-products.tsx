import React from "react";
import { Products } from "@/data";

// import { Product } from "@/data"; // Make sure Product type is exported from your data file


const SortProducts = ({
  setProducts,
  styles,
}: {
  setProducts: (products: typeof Products) => void;
  styles?: string;
}) => {

  const handleSort = (value: string) => {
    let sorted = [...Products]; // Always clone before sorting

    switch (value) {
      case "atoz":
        sorted.sort((a, b) =>
          (a.title as string).localeCompare(b.title as string)
        );
        break;
      case "ztoa":
        sorted.sort((a, b) =>
          (b.title as string).localeCompare(a.title as string)
        );
        break;
      case "lth":
        sorted.sort(
          (a, b) => (a.currentPrice as number) - (b.currentPrice as number)
        );
        break;
      case "htl":
        sorted.sort(
          (a, b) => (b.currentPrice as number) - (a.currentPrice as number)
        );
        break;
      case "new":
        sorted = Products.filter((p) => p.label === "new");
        break;
      case "old":
        sorted = Products.filter((p) => p.label === "old");
        break;
      default:
        sorted = [...Products];
    }

    setProducts(sorted);
  };

  return (
    <div className={`relative ${styles}`}>
      <span className="font-bold ">Sort by: </span>
      <select
        onChange={(e) => handleSort(e.target.value)}
        className="bg-zinc-200 p-2 outline-none cursor-pointer "
      >
        <option value="new">Featured</option>
        <option value="atoz"> A to Z</option>
        <option value="ztoa">Z to A</option>
        <option value="lth">Price Low to High</option>
        <option value="htl">Price High to Low</option>
      </select>
    </div>
  );
};

export default SortProducts;
