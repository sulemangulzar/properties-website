import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const Quietspace = () => {
  // Define animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="">
      <div className="w-full h-screen flex flex-col items-center justify-end pb-24 xl:pb-0">
        <motion.h1
          className="text-center text-5xl md:text-7xl font-bold text-white leading-5 md:leading-7 z-20 shadow-xl shadow-black"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          QUIET
        </motion.h1>
        <motion.h1
          className="text-center text-6xl md:text-8xl font-bold text-white"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          SPACE
        </motion.h1>
      </div>
    </div>
  );
};

export default Quietspace;
