import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const Services = () => {
  // Define animation variants for service items
  const serviceVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-primary font-custom py-6">
      <div className="flex flex-col items-center justify-center mx-2 gap-12">
        <div className="w-full flex flex-col items-center md:items-start md:px-24 lg:px-40 xl:px-48">
          <h1 className="text-center md:text-start text-4xl font-semibold text-white pt-12">
            PROFESSIONAL
          </h1>
          <span className="text-center md:text-start text-4xl font-bold text-white pb-2">
            SERVICES.
          </span>
        </div>
        {/* divs */}
        <div className="relative grid grid-cols-2 grid-row-2 items-center justify-center my-4 gap-4">
          {/* 1 */}
          <motion.div
            className="w-44 h-44 md:w-64 md:h-64 xl:w-72 xl:h-72 border-b border-r rounded border-white/40"
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="flex items-start mx-2 my-1 ">
              <span>
                <h1 className="text-white text-sm tracking-tighter">
                  Years in
                </h1>
                <h1 className="text-white text-sm">Business</h1>
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white hover:animate-bounce"
              >
                <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
              </svg>
            </div>
            <div className="w-[170px] h-[130px] md:w-[250px] md:h-[200px] xl:w-[270px] xl:h-[230px] flex items-end justify-end gap-1">
              <p className="hidden md:block text-xs tracking-tighter leading-4 p-2 text-white">
                Transforming spaces we has 23 years of excellence
              </p>
              <h1 className="text-6xl font-medium text-white tracking-wider">
                23
              </h1>
            </div>
          </motion.div>
          {/* 2 */}
          <motion.div
            className="w-44 h-44 md:w-64 md:h-64 xl:w-72 xl:h-72 border-white/40"
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="flex items-start mx-2 my-1 ">
              <span>
                <h1 className="text-white text-sm tracking-tighter">Awards</h1>
                <h1 className="text-white text-sm">Gain</h1>
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white hover:animate-bounce"
              >
                <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
              </svg>
            </div>
            <div className="w-[170px] h-[130px] md:w-[250px] md:h-[200px] xl:w-[270px] xl:h-[230px] flex items-end justify-end gap-1">
              <p className="hidden md:block text-xs tracking-tighter leading-4 p-2 text-white">
                We got 36 awards for our excellence in work.
              </p>
              <h1 className="text-6xl font-medium text-white tracking-wider">
                36
              </h1>
            </div>
          </motion.div>
          {/* 3 */}
          <motion.div
            className="w-44 h-44 md:w-64 md:h-64 xl:w-72 xl:h-72 border-white/40"
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="flex items-start mx-2 my-1 ">
              <span>
                <h1 className="text-white text-sm tracking-tighter">Our</h1>
                <h1 className="text-white text-sm">Offices</h1>
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white hover:animate-bounce"
              >
                <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
              </svg>
            </div>
            <div className="w-[170px] h-[130px] md:w-[250px] md:h-[200px] xl:w-[270px] xl:h-[230px] flex items-end justify-end gap-1">
              <p className="hidden md:block text-xs tracking-tighter leading-4 p-2 text-white">
                We have 19 offices in 5 countries.
              </p>
              <h1 className="text-6xl font-medium text-white tracking-wider">
                19
              </h1>
            </div>
          </motion.div>
          {/* 4 */}
          <motion.div
            className="w-44 h-44 md:w-64 md:h-64 xl:w-72 xl:h-72 border-l border-t rounded border-white/40"
            variants={serviceVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="flex items-start mx-2 my-1 ">
              <span>
                <h1 className="text-white text-sm tracking-tighter">Team</h1>
                <h1 className="text-white text-sm">Members</h1>
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white hover:animate-bounce"
              >
                <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
              </svg>
            </div>
            <div className="w-[170px] h-[130px] md:w-[250px] md:h-[200px] xl:w-[270px] xl:h-[230px] flex items-end justify-end gap-1">
              <p className="hidden md:block text-xs tracking-tighter leading-4 p-2 text-white">
                We have a team of 92 members who are experts in their field.
              </p>
              <h1 className="text-6xl font-medium text-white tracking-wider">
                92
              </h1>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
