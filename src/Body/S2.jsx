import React from "react";

const S2 = () => {
  const arr = [
    {
      image: "image1",
      content: "Content-1",
    },
    {
      image: "image2",
      content: "Content-2",
    },
    {
      image: "image3",
      content: "Content-3",
    },
    {
      image: "image4",
      content: "Content-4",
    },
    {
      image: "image5",
      content: "Content-5",
    },
    {
      image: "image6",
      content: "Content-6",
    },
    {
      image: "image7",
      content: "Content-7",
    },
    {
      image: "image8",
      content: "Content-8",
    },
  ];
  return (
    <>
      <section className="py-10" id="noScroll">
        <div className="flex justify-center items-center p-10 font-extrabold text-4xl">
          <h1 className="">Corporate Gifts</h1>
        </div>
        <section className="h-auto w-full bg-white flex justify-center">
          <div
            className=" lg:w-[95%]
        grid grid-cols-4 justify-between items-center gap-y-20 gap-x-10 p-10 [&>div]:lg:h-72
        "
          >
            {/* <h1 className="flex-none">Corporate Gifts</h1> */}
            {arr.map((item, index) => (
              <div
                className=" hover:scale-105 duration-300 rounded-xl flex flex-col justify-between items-center"
                key={index}
              >
                <img
                  src={`${item.image}`}
                  alt={`${item.image}`}
                  className="h-[88%] w-[99%] bg-offWhite rounded-2xl"
                />
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default S2;
