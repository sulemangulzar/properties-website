import React from "react";
import { motion } from "framer-motion"; // Import framer-motion

const Home = () => {
  // Define animation variants for the headings and button
  const headingVariants = {
    hidden: {
      opacity: 0,
      y: 50, // Start slightly below the view
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Duration of 1 second for the transition
        ease: "easeOut", // Ease out for a smooth animation
      },
    },
  };

  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8, // Start at a smaller scale
    },
    visible: {
      opacity: 1,
      scale: 1, // Scale to normal size
      transition: {
        duration: 0.5,
        delay: 0.5, // Delay the button animation slightly
      },
    },
  };

  return (
    <>
      <div className="w-full h-screen grid grid-cols-1 items-center justify-end mt-0">
        <div className="w-full h-screen flex flex-col items-center justify-center">
          {/* Apply motion to the first heading */}
          <motion.h1
            className="text-center text-5xl md:text-7xl font-bold text-white z-10 shadow-xl shadow-black leading-7 md:leading-7 mt-44"
            initial="hidden"
            animate="visible"
            variants={headingVariants}
          >
            WE SHAPE
          </motion.h1>

          {/* Apply motion to the second heading */}
          <motion.h1
            className="text-center text-6xl md:text-8xl font-bold text-white"
            initial="hidden"
            animate="visible"
            variants={headingVariants}
          >
            SPACES
          </motion.h1>

          {/* Apply motion to the button */}
          <motion.button
            className="bg-white px-6 font-medium py-2.5 mt-4 rounded-full"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            Contact Us
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Home;
