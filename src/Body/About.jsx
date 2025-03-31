import React from "react";

const About = ({aboutRef}) => {
  return (
    <div className="h-[110vh] w-full flex justify-center items-center"
    ref={aboutRef} id="About-us"
    >
      <div
        id="img"
        className="bg-Primary text-white basis-1/2 h-full flex justify-center items-center  rounded-2xl"
      >
        <img src="h.jpg" alt="Image" className="" />
      </div>
      <div
        id="text"
        className="bg-green-40 basis-1/2 h-full flex items-center justify-center"
      >
        <div className="basis-10/12 h-[75%] flex flex-col justify-evenly items-center">
          <h1 className="font-extrabold text-4xl">About Us</h1>
          <p className="">
            Welcome to M Divine Creation, where every gift tells a unique story!
            Transform ordinary moments into extraordinary memories with our
            customized T-shirts, caps, bottles, mugs, bags, and specially
            curated employee welcome kits. At M Divine Creation Corporates, we
            go beyond gifts—we create experiences. Make your corporate gestures
            truly memorable and personal with our thoughtfully designed gifting
            solutions. M Divine Creation in Gurgaon began with a simple yet
            powerful idea—adding a touch of emotion to every gift! Today, we are
            more than just a gifting company; we are curators of joy, delivering
            smiles through thoughtfully crafted gift baskets. Our passionate
            team of gift concept designers offers world-class corporate gifting
            solutions with a personal touch. Choose M Divine Creation for the
            art of thoughtful gifting! Here’s a refined version of the content
            for your e-commerce corporate gifting website:
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
