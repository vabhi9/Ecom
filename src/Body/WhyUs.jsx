import React from "react";

const WhyUs = () => {
  const val = [
    "Personalised Corporate Gifts",
    "Wide range of Products for Corporate and Promotional Events",
    "Symmetric and professional approach in Selecting Products",
  ];
  return (
    <section
      className="h-[40vh] w-full flex flex-col justify-around items-center bg-white mt-16 mb-24
    "
    >
      <p className="text-4xl font-bold">Why Us</p>
      <div className="flex justify-end [&>div]:flex-1 gap-x-12 pt-20">
        {val.map((value, index) => (
          <div key={index} 
          className="bg-orange-100 w-auto rounded-xl p-4 flex justify-center items-center">
            {value}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
