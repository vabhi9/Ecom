import React from "react";

const PolicyPage = ({ title, content }) => {
  return (
    <div className="min-h-screen w-full bg-white flex justify-center items-stretch overflow-hidden">
      <div className="h-auto w-[100%] bg-white shadow-lg rounded-lg p-6">
        <h1 className="font-bold text-4xl">{title}</h1>
        <br />
        <ul className="flex flex-col space-y-6 [&>li>p]:ml-3">
          {content.map((section, index) => (
            <li key={index}>
              <h3 className="text-2xl font-semibold">{section.title}</h3>
              {section.details.map((detail, subIndex) => (
                <p key={subIndex} className="text-lg text-gray-700">
                  {detail}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PolicyPage;
