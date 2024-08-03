import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-full h-auto px-2 py-12 bg-primary">
        <div className="w-full flex flex-col items-center md:items-start md:w-64 md:mx-24 lg:mx-40 xl:mx-48">
          <h1 className="text-center md:text-left text-3xl md:text-4xl  font-semibold text-white pt-8 md:pt-12">
            CONTACT
          </h1>
          <span className="text-center md:text-left text-3xl md:text-4xl  font-bold text-white pb-4">
            US.
          </span>
        </div>
        <form className=" flex flex-col items-center justify-center gap-4 md:gap-8 md:mt-4 lg:mt-12">
          <div className="flex flex-col items-start gap-2">
            <label className="text-white" htmlFor="name">
              Name
            </label>
            <input
              className="w-[300px] md:w-[500px] xl:w-[600px] p-1 bg-transparent text-white border-b border-white/50 focus:outline-none"
              type="text"
              id="name"
              name="name"
            />
          </div>

          <div className="flex flex-col items-start gap-2">
            <label className="text-white" htmlFor="name">
              Email
            </label>
            <input
              className="w-[300px] md:w-[500px] xl:w-[600px] p-1 bg-transparent text-white border-b border-white/50 focus:outline-none"
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label className="text-white" htmlFor="name">
              Number
            </label>
            <input
              className="w-[300px] md:w-[500px] xl:w-[600px] p-1 bg-transparent text-white border-b border-white/50 focus:outline-none"
              type="number"
              id="number"
              name="number"
            />
          </div>

          <div className="flex flex-col items-start gap-2">
            <label className="text-white" htmlFor="name">
              Message
            </label>
            <textarea
              className="w-[300px] md:w-[500px] xl:w-[600px] h-[150px] p-2 focus:outline-none"
              type="text"
              id="name"
              name="name"
            />
          </div>
          <button className=" font-semibold bg-white px-6 py-2 rounded-full hover:bg-primary hover:text-white ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
