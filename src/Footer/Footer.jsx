import React from "react";
import Sect1 from "./FootSections/Sect1";
import Sect2 from "./FootSections/Sect2";
import Sect3 from "./FootSections/Sect3";
import Sect4 from "./FootSections/Sect4";

const Footer = () => {
  return (
    <div className="">
      <section
        className="h-72 w-full flex bg-sky-60 
      [&>#container]:border-r-[1px] [&>#container]:border-black [&>#container]:bg-orange-200
      "
      >
        {/* Section1 is Acquiring 30% of Space */}
        <Sect1 />

        {/* Section2 is Acquiring 25% of Space */}
        <Sect2 />

        {/* Section3 is Acquiring 25% of Space */}
        <Sect3 />

        {/* Section4 is Acquiring 20% of Space*/}
        <Sect4 style={{ flexBasis: "20%" }} />
      </section>
    </div>
  );
};

export default Footer;
