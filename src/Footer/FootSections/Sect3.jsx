import React from "react";
import { NavLink } from "react-router-dom";

const Sect3 = () => {
  return (
    <div
      id="container"
      className="h-full flex justify-center items-center flex-col"
      style={{ flexBasis: "25%" }}
    >
      <div
        className="flex flex-col justify-between"
        style={{ flexBasis: "70%" }}
      >
        <h1 className="text-2xl font-extrabold">Quick Links</h1>
        <ul className="flex flex-col items-center">
          <li>Home</li>
          <li>Shop Gifts</li>
          <li>About Us</li>
          <li>Why Choose Us </li>
          <li>Contact Us</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
};

export default Sect3;
