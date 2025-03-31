import React from "react";

const Sect1 = () => {
  return (
    <div
      id="container"
      className="h-full flex justify-center items-center"
      style={{ flexBasis: "30%" }}
    >
      <div
        className=" h-[80%] flex flex-col justify-around items-center"
        style={{ flexBasis: "80%" }}
      >
        <h1 className="text-2xl font-bold">Get in Touch</h1>
        <span className="flex text-center leading-tight max-w-lg mx-auto">
          📍 Address: 3152, Vikas Marg, Sector 46, Gurugram, Haryana 122003
        </span>
        <span className=" text-center leading-tight max-w-lg mx-auto">
          📞 Phone: +91 9263 3925 📧
        </span>
        <span className=" text-center leading-tight max-w-lg mx-auto">
          Email: info@mdivinecreation.com 📲
        </span>
        <span>WhatsApp: +91 966 39925 </span>
      </div>
    </div>
  );
};

export default Sect1;
