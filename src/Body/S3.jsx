import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import Pic from "./Pic.jpg";

const S3 = () => {
  const [offset, setOffset] = useState(0);
  const cardWidth = 250; // Adjust based on card size + gap
  const visibleCards = 4; // Number of cards visible at a time

  const val = [
    { img: Pic, content: "Content-1", price: "200" },
    { img: "Path", content: "Content-2", price: "200" },
    { img: "Path", content: "Content-3", price: "200" },
    { img: "Path", content: "Content-4", price: "200" },
    { img: "Path", content: "Content-5", price: "200" },
    { img: "Path", content: "Content-6", price: "200" },
    { img: "Path", content: "Content-7", price: "200" },
    { img: "Path", content: "Content-8", price: "200" },
    { img: "Path", content: "Content-9", price: "200" },
    { img: "Path", content: "Content-10" },
    { img: "Path", content: "Content-11" },
  ];
  const totalCards = val.length;
  const maxOffset = -(totalCards - visibleCards) * cardWidth; // Max left scroll

  const moveCards = (direction) => {
    setOffset((prev) => {
      let newOffset =
        direction === "left" ? prev + cardWidth : prev - cardWidth;
      return Math.max(Math.min(newOffset, 0), maxOffset); // Prevent over-scrolling
    });
  };

  return (
    <div className="py-14">
      <div className="flex justify-center items-center">
        <h1 className="text-5xl font-bold">Products</h1>
      </div>
      <section
        id="S2"
        className="h-80 w-full bg-white flex items-center justify-center my-20 relative "
      >
        {/* Left Button - Fixed Position */}
        <button
          className="h-[3.4rem] w-[3.4rem] absolute left-4 bg-white text-5xl rounded-full z-20
          shadow-slate-950 shadow-2xl
          "
          onClick={() => moveCards("left")}
        >
          {"<"}
        </button>

        {/* Cards Wrapper (Static) */}
        <div className=" overflow-hidden py-10 px-8">
          {/* Cards Container (Moves with translateX) */}
          <div
            className="flex gap-7 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(${offset}px)` }}
          >
            {val.map((value, index) => (
            <React.Fragment key={index}>
              <div
                className="flex flex-col bg-offWhite rounded-3xl hover:scale-105 duration-[400ms]
              "
              >
                <div
                  // {h-80 w-60}
                  className="
                  h-80 w-60
                  bg-offWhite rounded-xl flex flex-col justify-between items-start flex-shrink-0"
                >
                  <img
                    src={`${value.img}`}
                    alt="Image"
                    className="basis-5/6 rounded-xl"
                  />
                  <p className="font-semibold px-4 gap-x-1">{value.content}</p>
                  <p className="font-extrabold px-4 gap-x-1">{value.price}</p>
                </div>
                <div className="flex justify-center items-center mt-2">
                  <button
                    className="w-24 gap-x-3 my-1 bg-Primary py-1 rounded-3xl text-white
                   flex justify-center items-center hover:bg-blue-800"
                  >
                    Add
                    <FaCartArrowDown />
                  </button>
                </div>
              </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Button - Fixed Position */}
        <button
          className="h-[3.4rem] w-[3.4rem] absolute right-5 bg-white text-5xl rounded-full z-20
          shadow-slate-950 shadow-2xl 
          "
          onClick={() => moveCards("right")}
        >
          {">"}
        </button>
      </section>
    </div>
  );
};

export default S3;

// import React, { useState } from "react";

// const S3 = () => {
//   const [offset, setOffset] = useState(0);
//   const cardWidth = 250; // Adjust based on card size + gap
//   const visibleCards = 4.5; // Number of cards visible at a time

//   const val = [

//     { img: "Path", content: "Content-1" },
//     { img: "Path", content: "Content-1" },
//     { img: "Path", content: "Content-2" },
//     { img: "Path", content: "Content-2" },
//     { img: "Path", content: "Content-2" },
//     { img: "Path", content: "Content-2" },
//     { img: "Path", content: "Content-3" },
//     { img: "Path", content: "Content-4" },
//     { img: "Path", content: "Content-5" },
//     { img: "Path", content: "Content-6" },
//     { img: "Path", content: "Content-7" },
//     { img: "Path", content: "Content-8" },
//     { img: "Path", content: "Content-9" },
//   ];
//   const totalCards = val.length;
//   const maxOffset = -(totalCards - visibleCards) * cardWidth; // Max left scroll

//   const moveCards = (direction) => {
//     setOffset((prev) => {
//       let newOffset =
//         direction === "left" ? prev + cardWidth : prev - cardWidth;
//       return Math.max(Math.min(newOffset, 0), maxOffset); // Prevent over-scrolling
//     });
//   };

//   return (
//     <section
//       id="S2"
//       className="h-72 w-full bg-slate-700 flex items-center justify-center mt-32 relative overflow-hidden"
//     >
//       {/* Left Button - Fixed Position */}
//       <button
//         className="h-[3.4rem] w-[3.4rem] absolute left-4 bg-indigo-600 text-5xl rounded-full z-10"
//         onClick={() => moveCards("left")}
//       >
//         {"<"}
//       </button>

//       {/* Cards Container (Moves with translateX) */}
//       <div
//         className="flex gap-7 transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(${offset}px)` }}
//       >
//         {val.map((value, index) => (
//           <div
//             key={index}
//             className="min-h-60 min-w-60 bg-green-500 hover:scale-105 duration-300 rounded-xl flex flex-col justify-between items-center flex-shrink-0"
//           >
//             <img src={`${value.img}`} alt="Image" />
//             <p>{value.content}</p>
//           </div>
//         ))}
//       </div>

//       {/* Right Button - Fixed Position */}
//       <button
//         className="h-[3.4rem] w-[3.4rem] absolute right-5 bg-indigo-700 text-5xl rounded-full z-10"
//         onClick={() => moveCards("right")}
//       >
//         {">"}
//       </button>
//     </section>
//   );
// };

// export default S3;
