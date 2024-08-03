import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const openNavbar = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  return (
    <>
      {/* sidebar  */}
      <div
        className={`fixed top-0 left-0 z-30 h-screen w-64 bg-primary transition-transform duration-500 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      ></div>{" "}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-20  bg-black/40 transition-transform duration-500 ease-in-out ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
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
            <button
              onClick={openNavbar}
              onDoubleClick={closeNav} // Toggle on single click
              className="p-2 z-40 bg-white rounded-full"
            >
              {nav ? (
                // If nav is open, show "X" mark
                <svg
                  className="w-6 h-6 text-black fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 352 512"
                >
                  <path d="M242.72 256l100.07-100.07c12.49-12.49 12.49-32.76 0-45.25l-22.54-22.54c-12.49-12.49-32.76-12.49-45.25 0L175.03 188.19 74.97 88.13c-12.49-12.49-32.76-12.49-45.25 0L7.18 110.67c-12.49 12.49-12.49 32.76 0 45.25L107.25 256 7.18 356.07c-12.49 12.49-12.49 32.76 0 45.25l22.54 22.54c12.49 12.49 32.76 12.49 45.25 0L175.03 323.81 275.09 423.87c12.49 12.49 32.76 12.49 45.25 0l22.54-22.54c12.49-12.49 12.49-32.76 0-45.25L242.72 256z" />
                </svg>
              ) : (
                // If nav is closed, show hamburger menu
                <svg
                  className="w-6 h-6 text-black fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
