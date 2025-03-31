import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordFill } from "react-icons/ri";

const Sign = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center bg-slate-300">
      <section className="h-[80%] w-[80%] flex z-50 shadow-slate-500 shadow-xl overflow-hiddn rounded-3xl">
        <div className="basis-1/2 bg-white flex flex-col justify-center items-center rounded-s-3xl">
          <div className="h-[80%] w-[60%] bg-re-500 flex flex-col justify-around items-start">
            <h1 className="font-semibold text-3xl">Log in to Your Account</h1>
            {/* <p className="text-gray-10">Welcome back!</p> */}
            <div className="h-12 w-full flex justify-center items-center">
              <button className="h-10 w-20 bg-Primary rounded-xl text-white text-lg">
                Google
              </button>
            </div>
            <div className="flex items-center w-full my-2">
              <hr className="flex-grow border-gray-400" />
              <p className="mx-2 text-gray-700 whitespace-nowrap">
                or Continue with Email
              </p>
              <hr className="flex-grow border-gray-400" />
            </div>
            {/* <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              className="h-9 w-full rounded-lg placeholder:p-2"
            /> */}
            <div className="relative w-full">
              <HiOutlineMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 " />
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="h-9 w-full pl-10 rounded-lg border-[1px] border-black focus:outline-none"
              />
            </div>
            <div className="relative w-full">
              <RiLockPasswordFill className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 " />
              <input
                type="text"
                name="password"
                id="password"
                placeholder="Password"
                className="h-9 w-full pl-10 rounded-lg border-[1px] border-black focus:outline-none"
              />
            </div>
            <div className="h-5 w-full flex justify-end items-center">
              <p className="text-sm hover:cursor-pointer">Forgot Password</p>
            </div>
            <button className="w-full bg-Primary p-2 rounded-xl font-bold text-xl active:scale-[0.85] duration-700 text-white">
              Log in
            </button>
          </div>
        </div>
        <div className="basis-1/2 bg-Primary rounded-r-3xl ">Image</div>
      </section>
    </div>
  );
};

export default Sign;
