import React from "react";
import { NavLink, Link } from "react-router-dom";

const Sect4 = () => {
  return (
    <div
      id="container"
      className=" h-full border-none flex justify-center items-center"
      style={{ flexBasis: "20%" }}
    >
      <div
        className="bg-whi h-[68%] flex flex-col justify-between items-center"
        style={{ flexBasis: "80%" }}
      >
        <h1 className="text-2xl font-extrabold">Customer Support</h1>
        <ul className="flex flex-col justify-center items-center [&>li]:cursor-pointer">
          <li>FAQs </li>
          <li>Shipping & Delivery </li>
          <li className="">
            <NavLink to="/return&refundpolicies">
              Return & Refund Policy -
            </NavLink>
          </li>
          <li>
            <NavLink to="/&&privacypolicy"> Privacy Policy </NavLink>
          </li>
          <li>
            <Link to="/terms&&conditions">Terms & Conditions</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sect4;
