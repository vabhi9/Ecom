import React from "react";

const Gallery = () => {
  const val = [
    "Personalised Corporate Gifts",
    "Wide range of Products for Corporate and Promotional Events",
    "Symmetric and professional approach in Selecting Products",
  ];

  return (
    <div>
      <section className="h-[60vh] w-full flex flex-col justify-around items-center bg-slate-00 mt-3">
        <p className="text-3xl">Gallery</p>
        <div className="flex justify-end [&>div]:flex-1 gap-x-16">
          {val.map((value, index) => (
            <div
              className="bg-orange-100 h-40 w-auto
          flex justify-center items-center rounded-3xl
          "
              key={index}
            >
              <div className="h-full w-[85%] flex justify-center items-center">{value}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
