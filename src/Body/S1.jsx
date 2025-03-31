import React, { useState } from "react";
import Pic from "./Pic.jpg";

const S1 = ({ homeRef }) => {
  const imgAry = [
    Pic,
    "img-1.jpg",
    "img-2.jpg",
    "img-3.jpg",
    "img-4.jpg",
    "img-5.jpg",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle Next Image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgAry.length);
  };

  // Handle Previous Image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imgAry.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      ref={homeRef}
      id="S1"
      className="h-[90vh] w-full bg-slate-20 flex items-center justify-center"
    >
      <div className="relative overflow-hidden w-full h-full ">
        {/* Image Wrapper */}
        <div
          className="flex h-full w-full transition-transform duration-500 ease-in-out"
          style={{
            left: `-${currentIndex * 100}%`,
            position: "relative",
            transition: "left 0.5s ease-in-out",
          }}

          // style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imgAry.map((image, index) => (
            <img
              key={index}
              src={`${image}`}
              alt={`Image ${index + 1}`}
              className="relative h-full w-full object-cover flex-shrink-0 -z-[1] bg-slte-50 bg-transarent"
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute inset-0 flex items-center justify-between px-4 text-4xl">
          <button
            className="bg-slate-100 text-black px-4 py-2 rounded-full hover:shaow-2xl"
            onClick={prevImage}
          >
            {"<"}
          </button>
          <button
            className="bg-slate-100 text-black px-4 py-2 rounded-full hover:shadow-2xl"
            onClick={nextImage}
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default S1;
