import React, { useState } from "react";
import Newzealandimage from "../images/newzealand.png";
import usmeseum from "../images/USmeseum.jpg";
import dubaiuni from "../images/dubai.jpg";
import qatarlibrary from "../images/qatar.jpg";

const Residential = () => {
  const [selectedCategory, setSelectedCategory] = useState("Residential");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="bg-primary font-custom py-6 lg:h-[700px] flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center mx-4 md:mx-8 lg:mx-16 xl:mx-24 gap-12">
          <div className="w-full flex flex-col items-center md:items-start md:px-12 lg:px-24 xl:px-28 ">
            <h1 className="text-center md:text-left text-3xl md:text-4xl  font-semibold text-white pt-8 md:pt-12">
              RESIDENTIAL
            </h1>
            <span className="text-center md:text-left text-3xl md:text-4xl  font-bold text-white pb-4">
              HOME.
            </span>
          </div>

          <div className="w-full max-w-4xl mx-auto p-4 flex flex-col md:flex-row md:gap-24 md:px-12 lg:px-24 xl:px-8 items-center md:items-start">
            <ul className="flex flex-col items-center md:items-start gap-2 text-lg md:text-xl mb-8">
              <li
                className={`cursor-pointer ${
                  selectedCategory === "Residential"
                    ? "text-white"
                    : "text-white/50"
                }`}
                onClick={() => handleCategoryClick("Residential")}
              >
                Residential
              </li>
              <li
                className={`cursor-pointer ${
                  selectedCategory === "Museum" ? "text-white" : "text-white/50"
                }`}
                onClick={() => handleCategoryClick("Museum")}
              >
                Museum
              </li>
              <li
                className={`cursor-pointer ${
                  selectedCategory === "Education"
                    ? "text-white"
                    : "text-white/50"
                }`}
                onClick={() => handleCategoryClick("Education")}
              >
                Education
              </li>
              <li
                className={`cursor-pointer ${
                  selectedCategory === "Library"
                    ? "text-white"
                    : "text-white/50"
                }`}
                onClick={() => handleCategoryClick("Library")}
              >
                Library
              </li>
            </ul>

            <div className="text-center transition-opacity duration-500 ease-in-out">
              {selectedCategory === "Residential" && (
                <div
                  className="opacity-0 transition-opacity duration-500 ease-in-out"
                  style={{
                    opacity: selectedCategory === "Residential" ? 1 : 0,
                  }}
                >
                  <img
                    src={Newzealandimage}
                    alt="Residential"
                    className="w-full max-w-md lg:max-w-lg mx-auto rounded shadow-lg transition-transform transform duration-500 ease-in-out"
                    style={{
                      transform:
                        selectedCategory === "Residential"
                          ? "translateY(0)"
                          : "translateY(-20px)",
                    }}
                  />
                  <div className="flex flex-col mt-4 gap-2 items-center justify-center">
                    <p className="text-base text-white">
                      Auckland, New Zealand
                    </p>
                    <h1 className="text-2xl text-white font-semibold tracking-wide">
                      Sightseeing residence
                    </h1>
                    <p className="text-sm text-white hover:underline underline-offset-4">
                      See details
                    </p>
                  </div>
                </div>
              )}
              {selectedCategory === "Museum" && (
                <div
                  className="opacity-0 transition-opacity duration-500 ease-in-out"
                  style={{ opacity: selectedCategory === "Museum" ? 1 : 0 }}
                >
                  <img
                    src={usmeseum}
                    alt="Museum"
                    className="w-full max-w-md lg:max-w-lg mx-auto rounded shadow-lg transition-transform transform duration-500 ease-in-out"
                    style={{
                      transform:
                        selectedCategory === "Museum"
                          ? "translateY(0)"
                          : "translateY(-20px)",
                    }}
                  />
                  <div className="flex flex-col mt-4 gap-2 items-center justify-center">
                    <p className="text-base text-white">
                      San Francisco, United States
                    </p>
                    <h1 className="text-2xl text-white font-semibold tracking-wide">
                      US Museum
                    </h1>
                    <p className="text-sm text-white hover:underline underline-offset-4">
                      See details
                    </p>
                  </div>
                </div>
              )}
              {selectedCategory === "Education" && (
                <div
                  className="opacity-0 transition-opacity duration-500 ease-in-out"
                  style={{ opacity: selectedCategory === "Education" ? 1 : 0 }}
                >
                  <img
                    src={dubaiuni}
                    alt="Education"
                    className="w-full max-w-md lg:max-w-lg mx-auto rounded shadow-lg transition-transform transform duration-500 ease-in-out"
                    style={{
                      transform:
                        selectedCategory === "Education"
                          ? "translateY(0)"
                          : "translateY(-20px)",
                    }}
                  />
                  <div className="flex flex-col mt-4 gap-2 items-center justify-center">
                    <p className="text-base text-white">Dubai, UAE</p>
                    <h1 className="text-2xl text-white font-semibold tracking-wide">
                      Dubai University
                    </h1>
                    <p className="text-sm text-white hover:underline underline-offset-4">
                      See details
                    </p>
                  </div>
                </div>
              )}
              {selectedCategory === "Library" && (
                <div
                  className="opacity-0 transition-opacity duration-500 ease-in-out"
                  style={{ opacity: selectedCategory === "Library" ? 1 : 0 }}
                >
                  <img
                    src={qatarlibrary}
                    alt="Library"
                    className="w-full max-w-md lg:max-w-lg mx-auto rounded shadow-lg transition-transform transform duration-500 ease-in-out"
                    style={{
                      transform:
                        selectedCategory === "Library"
                          ? "translateY(0)"
                          : "translateY(-20px)",
                    }}
                  />
                  <div className="flex flex-col mt-4 gap-2 items-center justify-center">
                    <p className="text-base text-white">Doha, Qatar</p>
                    <h1 className="text-2xl text-white font-semibold tracking-wide">
                      Library
                    </h1>
                    <p className="text-sm text-white hover:underline underline-offset-4">
                      See details
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Residential;
