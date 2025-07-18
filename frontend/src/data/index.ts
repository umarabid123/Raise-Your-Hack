 
interface AllProps {
 
  id?: number;
  label?: string;
  discount?: string;
  category?: string;
  slug?: string;
  title?: string;
  currentPrice?: number;
  oldPrice?: number;
  img1?: string;
  img2?: string;
}
 
export const banners = [
    "/assets/banner1.webp",
    "/assets/banner2.webp",
    "/assets/banner3.webp",
    "/assets/banner4.webp",
  ];

export const Products: AllProps[] = [
  // Eid Drop Category
  
  {
    id: 1,
    label: "new",
    // discount: "30%",
 
    category: "eid-drop",
    slug: "checked-casual-shirt-navy",
    title: "Checked Casual Shirt Navy",
    currentPrice: 3540.0,
    oldPrice: 4310.2,
    img1: "/assets/eid1.webp",
    img2: "/assets/eid2.webp",
  },
  {
    id: 2,
 
    // label: "hot",
    // discount: "25%",
 
    category: "eid-drop",
    slug: "embroidered-kurta-white",
    title: "Embroidered Kurta White",
    currentPrice: 4200.0,
    oldPrice: 5600.0,
    img1: "/assets/eid1.webp",
    img2: "/assets/eid2.webp",
  },
  {
    id: 3,
 
    label: "new",
 
    discount: "20%",
    category: "eid-drop",
    slug: "classic-shalwar-kameez-black",
    title: "Classic Shalwar Kameez Black",
    currentPrice: 3800.0,
    oldPrice: 4750.0,
    img1: "/assets/eid1.webp",
    img2: "/assets/eid2.webp",
  },
  {
    id: 4,
    label: "new",
    discount: "15%",
    category: "eid-drop",
    slug: "printed-kurta-blue",
    title: "Printed Kurta Blue",
    currentPrice: 3400.0,
    oldPrice: 4000.0,
    img1: "/assets/eid1.webp",
    img2: "/assets/eid2.webp",
  },
  {
    id: 5,
 
    // label: "hot",
 
    discount: "10%",
    category: "eid-drop",
    slug: "embroidered-shirt-green",
    title: "Embroidered Shirt Green",
    currentPrice: 3700.0,
    oldPrice: 4100.0,
    img1: "/assets/eid1.webp",
    img2: "/assets/eid2.webp",
  },
  {
    id: 6,
 
    // label: "sale",
 
    discount: "18%",
    category: "eid-drop",
    slug: "casual-shirt-maroon",
    title: "Casual Shirt Maroon",
    currentPrice: 3200.0,
    oldPrice: 3900.0,
    img1: "/assets/eid1.webp",
    img2: "/assets/eid2.webp",
  },
  {
    id: 7,
    label: "new",
    discount: "22%",
    category: "eid-drop",
    slug: "formal-kurta-grey",
    title: "Formal Kurta Grey",
    currentPrice: 4100.0,
    oldPrice: 5250.0,
    img1: "/assets/eid1.webp",
    img2: "/assets/eid2.webp",
  },
  {
    id: 8,
 
    // label: "hot",
 
    discount: "12%",
    category: "eid-drop",
    slug: "embroidered-kurta-pink",
    title: "Embroidered Kurta Pink",
    currentPrice: 3600.0,
    oldPrice: 4100.0,
    img1: "/assets/eid1.webp",
    img2: "/assets/eid2.webp",
  },

  // Festive Category
  {
    id: 9,
    label: "new",
 
    // discount: "28%",
 
    category: "festive",
    slug: "festive-kurta-gold",
    title: "Festive Kurta Gold",
    currentPrice: 4800.0,
    oldPrice: 6660.0,
    img1: "/assets/fes1.webp",
    img2: "/assets/fes2.webp",
  },
  {
    id: 10,
    label: "hot",
 
    // discount: "20%",
 
    category: "festive",
    slug: "embroidered-suit-red",
    title: "Embroidered Suit Red",
    currentPrice: 5400.0,
    oldPrice: 6750.0,
    img1: "/assets/fes1.webp",
    img2: "/assets/fes2.webp",
  },
  {
    id: 11,
 
    // label: "sale",
    // discount: "18%",
 
    category: "festive",
    slug: "festive-shirt-blue",
    title: "Festive Shirt Blue",
    currentPrice: 3900.0,
    oldPrice: 4750.0,
    img1: "/assets/fes1.webp",
    img2: "/assets/fes2.webp",
  },
  {
    id: 12,
    label: "new",
 
    // discount: "15%",
 
    category: "festive",
    slug: "embroidered-kurta-silver",
    title: "Embroidered Kurta Silver",
    currentPrice: 4100.0,
    oldPrice: 4825.0,
    img1: "/assets/fes1.webp",
    img2: "/assets/fes2.webp",
  },
  {
    id: 13,
 
    // label: "hot",
    // discount: "12%",
 
    category: "festive",
    slug: "festive-suit-green",
    title: "Festive Suit Green",
    currentPrice: 4300.0,
    oldPrice: 4886.0,
    img1: "/assets/fes1.webp",
    img2: "/assets/fes2.webp",
  },
  {
    id: 14,
 
    // label: "sale",
    // discount: "22%",
 
    category: "festive",
    slug: "embroidered-shirt-purple",
    title: "Embroidered Shirt Purple",
    currentPrice: 3700.0,
    oldPrice: 4743.0,
    img1: "/assets/fes1.webp",
    img2: "/assets/fes2.webp",
  },
  {
    id: 15,
    label: "new",
 
    // discount: "25%",
 
    category: "festive",
    slug: "festive-kurta-orange",
    title: "Festive Kurta Orange",
    currentPrice: 4000.0,
    oldPrice: 5333.0,
    img1: "/assets/fes1.webp",
    img2: "/assets/fes2.webp",
  },
  {
    id: 16,
 
    // label: "hot",
    // discount: "10%",
 
    category: "festive",
    slug: "embroidered-suit-blue",
    title: "Embroidered Suit Blue",
    currentPrice: 4500.0,
    oldPrice: 5000.0,
    img1: "/assets/fes1.webp",
    img2: "/assets/fes2.webp",
  },

  // Perfumes Category
  {
    id: 17,
    label: "new",
 
    // discount: "18%",
 
    category: "perfumes",
    slug: "oudh-intense",
    title: "Oudh Intense",
    currentPrice: 2200.0,
    oldPrice: 2682.0,
    img1: "/assets/per1.webp",
    img2: "/assets/per2.webp",
  },
  {
    id: 18,
 
    // label: "hot",
    // discount: "15%",
 
    category: "perfumes",
    slug: "rose-bliss",
    title: "Rose Bliss",
    currentPrice: 1800.0,
    oldPrice: 2117.0,
    img1: "/assets/per1.webp",
    img2: "/assets/per2.webp",
  },
  {
    id: 19,
 
    // label: "sale",
    // discount: "20%",
 
    category: "perfumes",
    slug: "amber-musk",
    title: "Amber Musk",
    currentPrice: 2500.0,
    oldPrice: 3125.0,
    img1: "/assets/per1.webp",
    img2: "/assets/per2.webp",
  },
  {
    id: 20,
    label: "new",
 
    // discount: "10%",
 
    category: "perfumes",
    slug: "citrus-breeze",
    title: "Citrus Breeze",
    currentPrice: 2000.0,
    oldPrice: 2222.0,
    img1: "/assets/per1.webp",
    img2: "/assets/per2.webp",
  },
  {
    id: 21,
 
    // label: "hot",
    // discount: "12%",
 
    category: "perfumes",
    slug: "mystic-woods",
    title: "Mystic Woods",
    currentPrice: 2300.0,
    oldPrice: 2613.0,
    img1: "/assets/per1.webp",
    img2: "/assets/per2.webp",
  },
  {
    id: 22,
    label: "sale",
 
    // discount: "25%",
 
    category: "perfumes",
    slug: "oriental-night",
    title: "Oriental Night",
    currentPrice: 2100.0,
    oldPrice: 2800.0,
    img1: "/assets/per1.webp",
    img2: "/assets/per2.webp",
  },
  {
    id: 23,
    label: "new",
 
    // discount: "22%",
 
    category: "perfumes",
    slug: "floral-mist",
    title: "Floral Mist",
    currentPrice: 2400.0,
    oldPrice: 3076.0,
    img1: "/assets/per1.webp",
    img2: "/assets/per2.webp",
  },
  {
    id: 24,
 
    // label: "hot",
    // discount: "30%",
 
    category: "perfumes",
    slug: "spice-essence",
    title: "Spice Essence",
    currentPrice: 1700.0,
    oldPrice: 2428.0,
    img1: "/assets/per1.webp",
    img2: "/assets/per2.webp",
  },

  // Suits Category
  {
    id: 25,
    label: "new",
    discount: "20%",
    category: "suits",
    slug: "classic-suit-black",
    title: "Classic Suit Black",
    currentPrice: 8500.0,
    oldPrice: 10625.0,
    img1: "/assets/suit1.webp",
    img2: "/assets/suit2.webp",
  },
  {
    id: 26,
    label: "hot",
    discount: "18%",
    category: "suits",
    slug: "formal-suit-navy",
    title: "Formal Suit Navy",
    currentPrice: 9000.0,
    oldPrice: 10975.0,
    img1: "/assets/suit1.webp",
    img2: "/assets/suit2.webp",
  },
  {
    id: 27,
    label: "sale",
    discount: "25%",
    category: "suits",
    slug: "slim-fit-suit-grey",
    title: "Slim Fit Suit Grey",
    currentPrice: 7800.0,
    oldPrice: 10400.0,
    img1: "/assets/suit1.webp",
    img2: "/assets/suit2.webp",
  },
  {
    id: 28,
    label: "new",
    discount: "15%",
    category: "suits",
    slug: "three-piece-suit-brown",
    title: "Three Piece Suit Brown",
    currentPrice: 9500.0,
    oldPrice: 11176.0,
    img1: "/assets/suit1.webp",
    img2: "/assets/suit2.webp",
  },
  {
    id: 29,
    label: "hot",
    discount: "10%",
    category: "suits",
    slug: "tuxedo-black",
    title: "Tuxedo Black",
    currentPrice: 120000.0,
    oldPrice: 13333.0,
    img1: "/assets/suit1.webp",
    img2: "/assets/suit2.webp",
  },
  {
    id: 30,
    label: "sale",
    discount: "22%",
    category: "suits",
    slug: "formal-suit-grey",
    title: "Formal Suit Grey",
    currentPrice: 8700.0,
    oldPrice: 11153.0,
    img1: "/assets/suit1.webp",
    img2: "/assets/suit2.webp",
  },
  {
    id: 31,
    label: "new",
    discount: "12%",
    category: "suits",
    slug: "classic-suit-blue",
    title: "Classic Suit Blue",
    currentPrice: 9800.0,
    oldPrice: 11136.0,
    img1: "/assets/suit1.webp",
    img2: "/assets/suit2.webp",
  },
  {
    id: 32,
    label: "hot",
    discount: "30%",
    category: "suits",
    slug: "slim-fit-suit-navy",
    title: "Slim Fit Suit Navy",
    currentPrice: 7600.0,
    oldPrice: 10857.0,
    img1: "/assets/suit1.webp",
    img2: "/assets/suit2.webp",
  },

  // Accessories Category
  {
    id: 33,
    label: "new",
    discount: "15%",
    category: "accessories",
    slug: "leather-belt-brown",
    title: "Leather Belt Brown",
    currentPrice: 1200.0,
    oldPrice: 1411.0,
    img1: "/assets/suit1.webp",
    img2: "/assets/suit2.webp",
  },
  {
    id: 34,
    label: "hot",
    discount: "10%",
    category: "accessories",
    slug: "cufflinks-gold",
    title: "Cufflinks Gold",
    currentPrice: 900.0,
    oldPrice: 1000.0,
    img1: "/assets/suit1.webp",
    img2: "/assets/suit2.webp",
  },
  {
    id: 35,
    label: "sale",
    discount: "20%",
    category: "accessories",
    slug: "wallet-black",
    title: "Wallet Black",
    currentPrice: 800.0,
    oldPrice: 1000.0,
    img1: "/assets/suit1.webp",
    img2: "/assets/suit2.webp",
  },
  {
    id: 36,
    label: "new",
    discount: "18%",
    category: "accessories",
    slug: "tie-navy",
    title: "Tie Navy",
    currentPrice: 650.0,
    oldPrice: 793.0,
    img1: "/assets/suit1.webp",
    img2: "/assets/suit2.webp",
  },
  {
    id: 37,
    label: "hot",
    discount: "12%",
    category: "accessories",
    slug: "socks-grey",
    title: "Socks Grey",
    currentPrice: 300.0,
    oldPrice: 341.0,
    img1: "/assets/suit1.webp",
    img2: "/assets/suit2.webp",
  },
  {
    id: 38,
    label: "sale",
    discount: "25%",
    category: "accessories",
    slug: "sunglasses-black",
    title: "Sunglasses Black",
    currentPrice: 1500.0,
    oldPrice: 2000.0,
    img1: "/assets/suit1.webp",
    img2: "/assets/suit2.webp",
  },
  {
    id: 39,
    label: "new",
    discount: "22%",
    category: "accessories",
    slug: "bracelet-silver",
    title: "Bracelet Silver",
    currentPrice: 1100.0,
    oldPrice: 1410.0,
    img1: "/assets/suit1.webp",
    img2: "/assets/suit2.webp",
  },
  {
    id: 40,
    label: "hot",
    discount: "30%",
    category: "accessories",
    slug: "cap-blue",
    title: "Cap Blue",
    currentPrice: 700.0,
    oldPrice: 1000.0,
    img1: "/assets/suit1.webp",
    img2: "/assets/suit2.webp",
  },
 
    {
    id: 41,
    label: "sale",
    discount: "25%",
    category: "polo-tees",
    slug: "polo-tees",
    title: "Sunglasses Black",
    currentPrice: 1500.0,
    oldPrice: 2000.0,
    img1: "/assets/polo1.webp",
    img2: "/assets/polo2.webp",
  },
  {
    id: 43,
    label: "new",
    discount: "22%",
    category: "casual-coats",
    slug: "bracelet-silver",
    title: "Bracelet Silver",
    currentPrice: 1100.0,
    oldPrice: 1410.0,
    img1: "/assets/casual1.webp",
    img2: "/assets/casual2.jpg",
  },
  {
    id: 45,
    label: "hot",
    discount: "30%",
    category: "semi-formal",
    slug: "cap-blue",
    title: "Cap Blue",
    currentPrice: 700.0,
    oldPrice: 1000.0,
    img1: "/assets/semi1.webp",
    img2: "/assets/semi2.jpg",
  },
  {
    id: 46,
    label: "hot",
    discount: "30%",
    category: "semi-formal",
    slug: "cap-blue",
    title: "Cap Blue",
    currentPrice: 700.0,
    oldPrice: 1000.0,
    img1: "/assets/semi1.webp",
    img2: "/assets/semi2.jpg",
  },
  {
    id: 47,
    label: "hot",
    discount: "30%",
    category: "waist-coats",
    slug: "cap-blue",
    title: "Cap Blue",
    currentPrice: 700.0,
    oldPrice: 1000.0,
    img1: "/assets/waist1.jpg",
    img2: "/assets/waist2.webp",
  },
  {
    id: 48,
    label: "hot",
    discount: "30%",
    category: "waist-coats",
    slug: "cap-blue",
    title: "Cap Blue",
    currentPrice: 700.0,
    oldPrice: 1000.0,
    img1: "/assets/waist1.jpg",
    img2: "/assets/waist2.webp",
  },
{
    id: 49,
    label: "hot",
    discount: "30%",
    category: "trousers",
    slug: "cap-blue",
    title: "Cap Blue",
    currentPrice: 700.0,
    oldPrice: 1000.0,
    img1: "/assets/trouser1.webp",
    img2: "/assets/trouser2.webp",
  },
  {
    id: 50,
    label: "hot",
    discount: "30%",
    category: "jeans",
    slug: "cap-blue",
    title: "Cap Blue",
    currentPrice: 700.0,
    oldPrice: 1000.0,
    img1: "/assets/j1.webp",
    img2: "/assets/j2.webp",
  },
  {
    id: 51,
    label: "hot",
    discount: "30%",
    category: "jackets",
    slug: "cap-blue",
    title: "Cap Blue",
    currentPrice: 700.0,
    oldPrice: 1000.0,
    img1: "/assets/jac1.jpg",
    img2: "/assets/jac2.jpg",
  },

 
];

export const topHeaderSlider: AllProps[] = [
  {
    id: 1,
    label:
      "ORDERS WORTH RS. 20,000/-OR MORE AND SELF COLLECTION PARCELS WILL BE PAID ONLINE IN ADVANCE",
  },
  { id: 2, label: "CUSTOMER SUPPORT ( MON-SUN : 10 AM TO 1 AM)" },
  {
    id: 3,
    label:
      "ORDERS WORTH RS. 20,000/-OR MORE AND SELF COLLECTION PARCELS WILL BE PAID ONLINE IN ADVANCE",
  },
  { id: 4, label: "CUSTOMER SUPPORT ( MON-SUN : 10 AM TO 1 AM)" },
];
 
