import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Newzealandimage from "../images/newzealand.png";
import usmeseum from "../images/USmeseum.jpg";
import dubaiuni from "../images/dubai.jpg";
import qatarlibrary from "../images/qatar.jpg";

const Residential = () => {
  const [selectedCategory, setSelectedCategory] = useState("Residential");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Define animation variants for images
  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };

  // Define animation variants for categories
  const categoryVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <>
      <div className="bg-primary font-custom py-6 lg:h-[700px] flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center mx-4 md:mx-8 lg:mx-16 xl:mx-24 gap-12">
          <div className="w-full flex flex-col items-center md:items-start md:px-12 lg:px-24 xl:px-28">
            <h1 className="text-center md:text-left text-3xl md:text-4xl font-semibold text-white pt-8 md:pt-12">
              RESIDENTIAL
            </h1>
            <span className="text-center md:text-left text-3xl md:text-4xl font-bold text-white pb-4">
              HOME.
            </span>
          </div>

          <div className="w-full max-w-4xl mx-auto p-4 flex flex-col md:flex-row md:gap-24 md:px-12 lg:px-24 xl:px-8 items-center md:items-start">
            <ul className="flex flex-col items-center md:items-start gap-2 text-lg md:text-xl mb-8">
              {["Residential", "Museum", "Education", "Library"].map(
                (category) => (
                  <motion.li
                    key={category}
                    className={`cursor-pointer ${
                      selectedCategory === category
                        ? "text-white"
                        : "text-white/50"
                    }`}
                    onClick={() => handleCategoryClick(category)}
                    whileHover="hover" // Apply hover animation
                    variants={categoryVariants}
                  >
                    {category}
                  </motion.li>
                )
              )}
            </ul>

            <div className="text-center transition-opacity duration-500 ease-in-out">
              <AnimatePresence mode="wait">
                {/* Animate presence for each category */}
                {selectedCategory === "Residential" && (
                  <motion.div
                    key="Residential"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <img
                      src={Newzealandimage}
                      alt="Residential"
                      className="w-full max-w-md lg:max-w-lg mx-auto rounded shadow-lg"
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
                  </motion.div>
                )}

                {selectedCategory === "Museum" && (
                  <motion.div
                    key="Museum"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <img
                      src={usmeseum}
                      alt="Museum"
                      className="w-full max-w-md lg:max-w-lg mx-auto rounded shadow-lg"
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
                  </motion.div>
                )}

                {selectedCategory === "Education" && (
                  <motion.div
                    key="Education"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <img
                      src={dubaiuni}
                      alt="Education"
                      className="w-full max-w-md lg:max-w-lg mx-auto rounded shadow-lg"
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
                  </motion.div>
                )}

                {selectedCategory === "Library" && (
                  <motion.div
                    key="Library"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <img
                      src={qatarlibrary}
                      alt="Library"
                      className="w-full max-w-md lg:max-w-lg mx-auto rounded shadow-lg"
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
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Residential;
