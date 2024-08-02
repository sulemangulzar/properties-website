import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-full h-screen grid grid-cols-1 items-center justify-end mt-0">
        {/* <div className="flex flex-col items-center justify-center  gap-4"> */}
        {/* <h1 className="bend-text text-6xl md:text-8xl lg:text-7xl xl:text-8xl leading-[48px] md:leading-[72px] lg:leading-[60px] xl:leading-[72px] text-center font-bold text-white mt-24 md:mt-64 lg:mt-24 lg:px-64 xl:px-80 xl:mt-[200px] ">
            WE SHAPE <span className="-z-10">SPACES</span>
          </h1> */}

        <div className="w-full h-screen flex flex-col items-center justify-center ">
          <h1 className="text-center text-5xl md:text-7xl font-bold  text-white z-20 shadow-xl shadow-black  leading-7 md:leading-7 mt-44   ">
            WE SHAPE
          </h1>
          <h1 className="text-center text-6xl  md:text-8xl font-bold   text-white   ">
            {" "}
            SPACES
          </h1>
          <button className="bg-white px-6 font-medium py-2.5 mt-4 rounded-full  ">
            Contact Us
          </button>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Home;
