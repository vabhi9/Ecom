import React from "react";

const Form = () => {
  return (
    <section
      className="h-[60vh] w-full bg-neutra-800 flex flex-col justify-center items-center
    my-16
    "
    >
      <div className="h-[60%] w-[50%] flex justify-between basis-1/2 gap-x-6">
        <div
          className="basis-1 flex flex-col items-center justify-between 
        [&>input]:w-80 [&>input]:rounded-lg [&>input]:px-2 [&>input]:py-1
        [&>input]:border-black [&>input]:border-[1.3px]
        "
        >
          <input
            type="text"
            placeholder="Full Name"
            className="basis-1/4  focus:outline-none"
          />
          <input
            type="number"
            placeholder="Mobile Number"
            className="basis-1/4  p-1 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Email ID"
            className="basis-1/4  focus:outline-none"
          />
        </div>
        <textarea
          type="text"
          name="message"
          id=""
          placeholder="Message"
          className="basis-1/2 rounded-lg border-[1.3px] border-Primary
        placeholder:text-left resize-none p-2 focus:outline-none
        "
        />
      </div>
      <button className="mt-8 text-white rounded-2xl bg-Primary px-6 py-2 active:scale-90 duration-300">
        Submit
      </button>
    </section>
  );
};

export default Form;
