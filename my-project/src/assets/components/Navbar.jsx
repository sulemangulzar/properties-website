import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="">
        <nav className="flex items-start justify-between flex-wrap  pt-6 px-6 ">
          <div className="flex flex-col items-start ">
            <h1 className=" text-base font-semibold text-white">EVER</h1>
            <h1 className=" text-base font-semibold text-white">GREEN</h1>
            <h1 className=" text-base font-semibold text-white">ARCHITEX</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className=" font-medium bg-white px-6 py-2 rounded-full">
              Lets Talk
            </button>
            <button className="p-2 bg-white rounded-full">
              <svg
                className="w-6 h-6 text-black fill-current "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
