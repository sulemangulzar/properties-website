import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const Contact = () => {
  // Define animation variants for the form elements
  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full h-auto px-2 py-12 bg-primary">
      <div className="w-full flex flex-col items-center md:items-start md:w-64 md:mx-24 lg:mx-40 xl:mx-48">
        <motion.h1
          className="text-center md:text-left text-3xl md:text-4xl font-semibold text-white pt-8 md:pt-12"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          CONTACT
        </motion.h1>
        <motion.span
          className="text-center md:text-left text-3xl md:text-4xl font-bold text-white pb-4"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          US.
        </motion.span>
      </div>
      <form className="flex flex-col items-center justify-center gap-4 md:gap-8 md:mt-4 lg:mt-12">
        <motion.div
          className="flex flex-col items-start gap-2"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <label className="text-white" htmlFor="name">
            Name
          </label>
          <input
            className="w-[300px] md:w-[500px] xl:w-[600px] p-1 bg-transparent text-white border-b border-white/50 focus:outline-none"
            type="text"
            id="name"
            name="name"
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-start gap-2"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <label className="text-white" htmlFor="email">
            Email
          </label>
          <input
            className="w-[300px] md:w-[500px] xl:w-[600px] p-1 bg-transparent text-white border-b border-white/50 focus:outline-none"
            type="email"
            id="email"
            name="email"
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-start gap-2"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <label className="text-white" htmlFor="number">
            Number
          </label>
          <input
            className="w-[300px] md:w-[500px] xl:w-[600px] p-1 bg-transparent text-white border-b border-white/50 focus:outline-none"
            type="number"
            id="number"
            name="number"
          />
        </motion.div>

        <motion.div
          className="flex flex-col items-start gap-2"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <label className="text-white" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-[300px] md:w-[500px] xl:w-[600px] h-[150px] p-2 bg-transparent bg-white focus:outline-none"
            id="message"
            name="message"
          />
        </motion.div>

        <motion.button
          className="font-semibold bg-white px-6 py-2 rounded-full hover:bg-primary hover:text-white"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
