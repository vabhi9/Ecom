import React from "react";
import { MdLocationOn } from "react-icons/md";
import { FaMailBulk } from "react-icons/fa";
import { FcConferenceCall } from "react-icons/fc";
import { GiExtraTime } from "react-icons/gi";

const Contact = ({ contactRef }) => {
  return (
    <section
      className="h-[70vh] w-full flex flex-col justify-around items-center bg-indigo-40"
      ref={contactRef}
      id="contact-us"
    >
      <p className="text-4xl font-bold">Contact Us</p>
      <div
        className="flex h-[80%] bg-green-400 [&>div]:border-r-[1px]
      [&>div]:flex 
      [&>div]:flex-col 
      [&>div]:border-black 
      [&>div]:justify-center 
      [&>div]:items-center
      "
      >
        <div className="flex-1 bg-gray-500">
          <MdLocationOn className="text-Primary h-12 w-12" />
          Sector-36 Gurugram
        </div>
        <div className="flex-1 bg-red-600">
          <FaMailBulk className="text-Primary h-12 w-12" />
        </div>
        <div className="flex-1 bg-sky-900">
          <FcConferenceCall className="h-12 w-12" />
        </div>
        <div className="flex-1 bg-orange-500">
          <GiExtraTime className="text-Primary h-12 w-12" />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga optio a
          ratione laboriosam nihil. Error expedita eligendi fugiat inventore.
          Pariatur.
        </div>
      </div>
    </section>
  );
};

export default Contact;
