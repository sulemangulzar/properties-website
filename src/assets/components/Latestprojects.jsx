import React from "react";
import floatinghouses from "../images/house5.png";
import frenchhouse from "../images/house11.jpg";
import cotswoldcottage from "../images/house13.jpg";
import shinglestyle from "../images/shingle.jpg";

const Latestprojects = () => {
  return (
    <>
      <div className="bg-primary">
        <div className="md:w-64 md:mx-24 lg:mx-40 xl:mx-48">
          <h1 className="text-center md:text-start text-4xl font-semibold  text-white  pt-12 pb-2 ">
            OUR LATEST <span className="font-bold"> PROJECTS</span>
          </h1>
        </div>

        <div className=" flex flex-col md:flex-row md:flex-wrap items-center justify-center ">
          {/* 1 */}
          <div className="flex items-center justify-center md:order- ">
            <div className="w-36 h-36 lg:w-44 lg:h-44 xl:w-56 xl:h-56 bg-[#364436] shadow-2xl  shadow-[#182318] py-2 px-2  ">
              <div className="flex flex-col items-start">
                <h1 className="text-white text-base leading-4">Floating</h1>
                <h1 className="text-white text-base leading-4">Houses</h1>
              </div>
              <div className="flex flex-col items-end  mt-[60%] lg:mt-[65%] xl:mt-[75%]">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white hover:animate-bounce"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <img
                src={floatinghouses}
                alt="house"
                className="w-36 h-36 lg:w-44 lg:h-44 xl:w-56 xl:h-56 object-cover"
              />
            </div>
          </div>
          {/* 2 */}
          <div className="flex items-center justify-center md:order-2 ">
            <div className="w-36 h-36 lg:w-44 lg:h-44 xl:w-56 xl:h-56 bg-[#364436] shadow-[#182318] shadow-2xl py-2 px-2 order-1 ">
              <div className="flex flex-col items-end">
                <h1 className="text-white text-base leading-4">French</h1>
                <h1 className="text-white text-base leading-4">Houses</h1>
              </div>

              <div className="flex flex-col items-start mt-[60%] lg:mt-[65%] xl:mt-[75%]">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white hover:animate-bounce"
                  >
                    <path d="M9.41421 8L18.0208 16.6066L16.6066 18.0208L8 9.41421V17H6V6H17V8H9.41421Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <img
                src={frenchhouse}
                alt="house"
                className="w-36 h-36 lg:w-44 lg:h-44 xl:w-56 xl:h-56 object-cover object-center"
              />
            </div>
          </div>
          {/* 3 */}
          <div className="flex items-center justify-center ">
            <div className="w-36 h-36 lg:w-44 lg:h-44 xl:w-56 xl:h-56 bg-[#364436] border-[#182318] shadow-2xl py-2 px-2  ">
              <div className="flex flex-col items-start">
                <h1 className="text-white text-base  leading-4">Cotswold</h1>
                <h1 className="text-white text-base  leading-4">Cottage</h1>
              </div>
              <div className="flex flex-col items-end  mt-[60%] lg:mt-[65%] xl:mt-[75%]">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white hover:animate-bounce"
                  >
                    <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <img
                src={cotswoldcottage}
                alt="house"
                className="w-36 h-36 lg:w-44 lg:h-44 xl:w-56 xl:h-56 object-cover"
              />
            </div>
          </div>
          {/* 4 */}
          <div className="flex items-center justify-center ">
            <div className="w-36 h-36 lg:w-44 lg:h-44 xl:w-56 xl:h-56 bg-[#364436]  shadow-[#182318] shadow-2xl py-2 px-2 order-1 ">
              <div className="flex flex-col items-end">
                <h1 className="text-white text-base  leading-4">Shingle</h1>
                <h1 className="text-white text-base  leading-4">Style</h1>
              </div>

              <div className="flex flex-col items-start mt-[60%] lg:mt-[65%] xl:mt-[75%]">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-white hover:animate-bounce"
                  >
                    <path d="M9.41421 8L18.0208 16.6066L16.6066 18.0208L8 9.41421V17H6V6H17V8H9.41421Z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <img
                src={shinglestyle}
                alt="house"
                className="w-36 h-36 lg:w-44 lg:h-44 xl:w-56 xl:h-56 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Latestprojects;
