import React, { useState, useRef, useEffect } from "react";
import { useVisibility, VisibilityProvider } from "../utils/Visibilitycontext";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Hover = ({ Parent }) => {
  const { setHideRedBox } = useVisibility();
  const [open, setOpen] = useState(false);

  const timeoutRef = useRef(null);
  const catArr = [
    { Cat: "Hampers & Kits" },
    { Cat: "Drinkware" },
    { Cat: "Office Essentials" },
    { Cat: "Tech & Gadgets" },
    { Cat: "Apparel & Accessories" },
    { Cat: "Wellness & Personal Care" },
    { Cat: "Home & Lifestyle" },
    { Cat: "Sustainable & Eco-Friendly Gifts" },
    { Cat: "Gourmet & Food Items" },
    { Cat: "Awards & Recognition" },
  ];

  const subCatArr = {
    "Hampers & Kits": [
      { name: "Customized Hampers", path: "/api/product" },
      { name: "Employee Welcome Kit", path: "/api/product" },
      { name: "Festive Gift Hampers", path: "/api/product" },
      { name: "Executive Gift Set", path: "/api/product" },
      { name: "Wellness & Self-care Kit", path: "/api/product" },
      // "Travel Essentials Kit",
    ],
    Drinkware: [
      { name: "Temperature Bottle", path: "/api/product" },
      { name: "Stainless Steel Flask", path: "/api/product" },
      { name: "Personalized Coffee Mug", path: "/api/product" },
      { name: "Sipper Bottles", path: "/api/product" },
      { name: "Bamboo Fiber Mug", path: "/api/product" },
    ],
    "Office Essentials": [
      { name: "Premium Notebooks & Diaries", path: "/api/product" },
      { name: "Customized Pens & Stationery Set", path: "/api/product" },
      { name: "Desktop Organizers", path: "/api/product" },
      { name: "Eco-friendly Jute Files & Folders", path: "/api/product" },
      { name: "Tech & Gadget Holders", path: "/api/product" },
    ],
    "Tech & Gadgets": [
      { name: "Customized Power Banks", path: "/api/product" },
      { name: "Bluetooth Speakers", path: "/api/product" },
      { name: "Wireless Earbuds", path: "/api/product" },
      { name: "Smart Watches & Fitness Bands", path: "/api/product" },
      { name: "Branded USB Drives", path: "/api/product" },
    ],
    "Apparel & Accessories": [
      { name: "Spa & Aromatherapy Kit", path: "/api/product" },
      { name: "Organic Skincare Sets", path: "/api/product" },
      { name: "Yoga & Fitness Kits", path: "/api/product" },
      { name: "Essential Oil Diffusers", path: "/api/product" },
      { name: "Sleep & Relaxation Kits", path: "/api/product" },
    ],
    "Wellness & Personal Care": [
      { name: "Custom Logo T-Shirts", path: "/api/product" },
      { name: "Hoodies & Sweatshirts", path: "/api/product" },
      { name: "Corporate Ties & Scarves", path: "/api/product" },
      { name: "Embroidered Caps", path: "/api/product" },
      { name: "Laptop Bags & Backpacks", path: "/api/product" },
    ],
    "Home & Lifestyle": [
      { name: "Customized Scented Candles", path: "/api/product" },
      { name: "Personalized Wall Clocks", path: "/api/product" },
      { name: "Luxury Home Décor Items", path: "/api/product" },
      { name: "Reusable Shopping Bags", path: "/api/product" },
      { name: "Engraved Photo Frames", path: "/api/product" },
    ],
    "Sustainable & Eco-Friendly Gifts": [
      { name: "Seed Paper Diaries & Pens", path: "/api/product" },
      { name: "Bamboo Toothbrush & Cutlery Sets", path: "/api/product" },
      { name: "Eco-friendly Plan table Kits", path: "/api/product" },
      { name: "Recycled Fabric Bags", path: "/api/product" },
      { name: "Solar Power Gadgets", path: "/api/product" },
    ],
    "Gourmet & Food Items": [
      { name: "Premium Dry Fruits & Nuts Box", path: "/api/product" },
      { name: "Exotic Tea & Coffee Sets", path: "/api/product" },
      { name: "Assorted Chocolates & Sweets", path: "/api/product" },
      { name: "Artisanal Cookies & Snacks", path: "/api/product" },
      { name: "Personalized Wine & Cheese Basket", path: "/api/product" },
    ],
    "Awards & Recognition": [
      { name: "Custom Crystal & Acrylic Trophies", path: "/api/product" },
      { name: "Wooden & Metal Plaques", path: "/api/product" },
      { name: "Personalized Certificates & Frames", path: "/api/product" },
      { name: "Employee Achievement Badges", path: "/api/product" },
      { name: "Branded Medals & Mementos", path: "/api/product" },
    ],
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current); // Prevent premature closing
    setOpen(true);

    // Updated
    // setOpen(true);
    setHideRedBox(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 800); // Delay closing by 300ms

    // Updated
    setTimeout(() => {
      // setOpen(false);
      setHideRedBox(false); // Show red box again
    }, 1300);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "auto"; // Disable scrolling
      // html.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
      // html.style.overflow = "auto"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
      // html.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [open]);

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-auto w-fit"
    >
      {/* setTimeout(() => {}, timeout); */}
      {
        <div className="flex">
          <div>{Parent}</div>
          <div
            className={`m-[0.3rem] transition-transform duration-500 ${
              open ? "rotate-180" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaAngleDown />
          </div>
        </div>
      }
      {
        <div className="flex justify-center cursor-auto bg-blu-700 z-[50]">
          <div
            id="Category"
            // className="flex h-72 w-96 absolute bg-slate-400 rounded-2xl p-4 pt-2
            // transtion ease-in-out duration-1000 opacity-300"

            className={`absolute z-[150] 
                 grid grid-cols-5 gap-y-6 h-auto w-full rounded-2xl p-4 transition-all ease-in-out duration-700
                left-0
                ${
                  open
                    ? "absolute opacity-100 translate-y-0 z-[150] !bg-slate-50"
                    : "scale-90 opacity-0 translate-y-5 pointer-events-none"
                }`}
          >
            {catArr.map((Categ, index) => (
              <div key={index} className="flex-1 text-center">
                <p className="text-primary font-bold text-xl">{Categ.Cat}</p>
                <ul className="text-black text-base p-1 space-y-3">
                  {subCatArr[Categ.Cat]?.map((subCat, ind) => (
                    <li key={ind} className="hover:cursor-pointer text-gray-20">
                      <NavLink to={subCat.path}>{subCat.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default Hover;
