import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const blogArr = [
  {
    content: "Box1",
    img: "Path-1",
  },
  {
    content: "Box2",
    img: "Path-2",
  },
  {
    content: "Box3",
    img: "Path-3",
  },
  {
    content: "Box4",
    img: "Path-4",
  },
  {
    content: "Box5",
    img: "Path-5",
  },
  {
    content: "Box6",
    img: "Path-6",
  },
];

const Blog = () => {
  return (
    <div className="h-auto w-full bg-red-60 flex justify-center items-center">
      <div
        className="grid grid-cols-3
       h-[90%] w-[70%] bg-offWhite gap-x-6 gap-y-4 py-10 px-4"
      >
        {blogArr.map((Blog, index) => {
          return (
            <div
              key={index}
              className="bg-slate-500 h-[23rem] duration-[400ms] rounded-2xl hover:scale-105
             flex flex-col justify-center items-center overflow-hidden"
            >
              <div
                className="w-[95%] bg-slate-60 rounded-2xl flex flex-col justify-between"
                style={{ flexBasis: "96%" }}
              >
                <img
                  src="hi"
                  alt={Blog.img}
                  className="basis-5/12 bg-red-400 rounded-t-2xl"
                />
                <div className="basis-7/12 bg-indigo-500 flex flex-col justify-around items-start">
                  <p>{Blog.content}</p>
                  <NavLink className=" flex items-center">
                    Read More <HiArrowNarrowRight className="h-5 w-5 pt-1" />
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
