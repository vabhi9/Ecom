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
      "Customized Hampers",
      "Employee Welcome Kit",
      "Festive Gift Hampers",
      "Executive Gift Set",
      "Wellness & Self-care Kit",
      // "Travel Essentials Kit",
    ],
    Drinkware: [
      "Temperature Bottle",
      "Stainless Steel Flask",
      "Personalized Coffee Mug",
      "Sipper Bottles",
      "Bamboo Fiber Mug",
    ],
    "Office Essentials": [
      "Premium Notebooks & Diaries",
      "Customized Pens & Stationery Set",
      "Desktop Organizers",
      "Eco-friendly Jute Files & Folders",
      "Tech & Gadget Holders",
    ],
    "Tech & Gadgets": [
      "Customized Power Banks",
      "Bluetooth Speakers",
      "Wireless Earbuds",
      "Smart Watches & Fitness Bands",
      "Branded USB Drives",
    ],
    "Apparel & Accessories": [
      "Spa & Aromatherapy Kit",
      "Organic Skincare Sets",
      "Yoga & Fitness Kits",
      "Essential Oil Diffusers",
      "Sleep & Relaxation Kits",
    ],
    "Wellness & Personal Care": [
      "Custom Logo T-Shirts",
      "Hoodies & Sweatshirts",
      "Corporate Ties & Scarves",
      "Embroidered Caps",
      "Laptop Bags & Backpacks",
    ],
    "Home & Lifestyle": [
      "Customized Scented Candles",
      "Personalized Wall Clocks",
      "Luxury Home Décor Items",
      "Reusable Shopping Bags",
      "Engraved Photo Frames",
    ],
    "Sustainable & Eco-Friendly Gifts": [
      "Seed Paper Diaries & Pens",
      "Bamboo Toothbrush & Cutlery Sets",
      "Eco-friendly Plan table Kits",
      "Recycled Fabric Bags",
      "Solar Power Gadgets",
    ],
    "Gourmet & Food Items": [
      "Premium Dry Fruits & Nuts Box",
      "Exotic Tea & Coffee Sets",
      "Assorted Chocolates & Sweets",
      "Artisanal Cookies & Snacks",
      "Personalized Wine & Cheese Basket",
    ],
    "Awards & Recognition": [
      "Custom Crystal & Acrylic Trophies",
      "Wooden & Metal Plaques",
      "Personalized Certificates & Frames",
      "Employee Achievement Badges",
      "Branded Medals & Mementos",
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
                      <NavLink>{subCat}</NavLink>
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
