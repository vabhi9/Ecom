import React, { useState } from "react";
import { useVisibility } from "../utils/Visibilitycontext";

const proArr = [
  { image: "Yha Pr Image Aayegi", content: "Content-1", price: 160 },
  { image: "image2", content: "Content-2", price: 340 },
  { image: "image3", content: "Content-3", price: 170 },
  { image: "image4", content: "Content-4", price: 50 },
  { image: "image5", content: "Content-5", price: 340 },
  { image: "image6", content: "Content-6", price: 140 },
  { image: "image7", content: "Content-7", price: 340 },
  { image: "image8", content: "Content-8", price: 1080 },
];

const checkBoxes = [
  { label: "100 - 499", min: 100, max: 499 },
  { label: "500 - 999", min: 500, max: 999 },
  { label: "1000 - 1499", min: 1000, max: 1499 },
  { label: "1500 - 1999", min: 1500, max: 1999 },
  { label: "2000 - 2499", min: 2000, max: 2499 },
  { label: "2500 - 2999", min: 2500, max: 2999 },
  { label: "3000 - 3499", min: 3000, max: 3499 },
];

const ProductLayout = () => {
  const [selectedCheck, setSelectedCheck] = useState(null);

  const filteredItems = proArr.filter(
    (item) =>
      !selectedCheck ||
      (item.price >= selectedCheck.min && item.price <= selectedCheck.max)
  );

  const handleCheckboxChange = (min, max) => {
    setSelectedCheck((prev) =>
      prev && prev.min === min && prev.max === max ? null : { min, max }
    );
  };

  const { hideRedBox } = useVisibility();
  return (
    <>
      <div className="h-auto w-full bg-red-30 flex">
        <section
          className="bg-indigo-400 basis-[20%] flex justify-center place-items-start"
          id="S1"
        >
          {!hideRedBox && (
            <div
              className="sticky top-10 mt-10 min-h-[80vh] max-h-[80vh] w-[94%] rounded-2xl bg-red-300
            flex flex-col items-center justify-between py-10 z-10"
            >
              <h1 className="font-bold text-4xl">Price:</h1>
              <div
                className="flex flex-col text-2xl px-6 space-y-4 w-full"
                // key={index}
              >
                {checkBoxes.map(({ label, min, max, index }) => {
                  return (
                    <label
                      className="space-y-6 bg-yello-500 w-full"
                      key={index}
                    >
                      <input
                        type="checkbox"
                        className="w-5 h-5 cursor-pointer"
                        checked={
                          selectedCheck &&
                          selectedCheck.min === min &&
                          selectedCheck.max === max
                        }
                        onChange={() => handleCheckboxChange(min, max)}
                      />
                      <span className="ml-3">{label}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          )}
        </section>
        <section
          className=" w-full flex justify-center items-center basis-[80%]"
          id="S2"
        >
          <div
            className="h-[97%] grid grid-cols-4 gap-y-3"
            style={{ flexBasis: "98%" }}
          >
            {filteredItems.length > 0 ? (
              filteredItems.map((Product, index) => (
                <div
                  className="h-[26rem] bg-offWhite border-y-[1.4px] border-x-[1px] border-slate-600
                 flex justify-center items-start hover:-translate-y-2 duration-500 hover:rounded-3xl"
                  key={index}
                >
                  <div
                    className="h-[90%] w-[95%] bg-slae-500 bg-yelow-400 justify-around px-1
                flex flex-col items-start hover: cursor-pointer rounded-xl
                "
                  >
                    <div
                      className="bg-Primary basis-[55%] w-full rounded-xl p-2"
                      id="img"
                    >
                      <p>{Product.image}</p>
                    </div>
                    <div className="">{Product.content}</div>
                    {/* <div className="">{Product.content}</div> */}
                    <p className="">{Product.price}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-spn-4 text-center text-lg">
                No products match the selected filters.
              </p>
            )}
          </div>
        </section>
      </div>
    </>
  );
};
export default ProductLayout;
