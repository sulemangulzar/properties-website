import React from "react";
import { motion } from "framer-motion";
import floatinghouses from "../images/house5.png";
import frenchhouse from "../images/house11.jpg";
import cotswoldcottage from "../images/house13.jpg";
import shinglestyle from "../images/shingle.jpg";

const Latestprojects = () => {
  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  const projects = [
    { title: "Floating Houses", imgSrc: floatinghouses },
    { title: "French Houses", imgSrc: frenchhouse },
    { title: "Cotswold Cottage", imgSrc: cotswoldcottage },
    { title: "Shingle Style", imgSrc: shinglestyle },
  ];

  return (
    <>
      <div className="bg-primary">
        <div className="md:w-64 md:mx-24 lg:mx-40 xl:mx-48">
          <h1 className="text-center md:text-start text-4xl font-semibold text-white pt-12 pb-2">
            OUR LATEST <span className="font-bold"> PROJECTS</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center mt-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-center"
              initial="hidden"
              animate="visible"
              variants={projectVariants}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <div className="w-36 h-36 lg:w-44 lg:h-44 xl:w-56 xl:h-56 bg-[#364436] shadow-2xl shadow-[#182318] py-2 px-2">
                <div className="flex flex-col items-start">
                  <h1 className="text-white text-base leading-4">
                    {project.title.split(" ")[0]}
                  </h1>
                  <h1 className="text-white text-base leading-4">
                    {project.title.split(" ")[1]}
                  </h1>
                </div>
                <div className="flex flex-col items-end mt-[60%] lg:mt-[65%] xl:mt-[75%]">
                  <motion.button variants={buttonVariants} whileHover="hover">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-white"
                    >
                      <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
                    </svg>
                  </motion.button>
                </div>
              </div>
              <img
                src={project.imgSrc}
                alt="house"
                className="w-36 h-36 lg:w-44 lg:h-44 xl:w-56 xl:h-56 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Latestprojects;
