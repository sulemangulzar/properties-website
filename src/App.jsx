import React from "react";
import Home from "./assets/components/Home";
import bg from "./assets/images/aigenerated2.jpg";
import bg2 from "./assets/images/aigenerated1.jpg";
import Navbar from "./assets/components/Navbar";
import Latestprojects from "./assets/components/Latestprojects";
import Services from "./assets/components/Services";
import Quietspace from "./assets/components/Quietspace";
import Residential from "./assets/components/Residential";
import Contact from "./assets/components/Contact";
function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto font-custom ">
        <section
          className="relative w-full h-screen  xl:h-[800px]"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover", // Adjusts the size of the image
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
          }}
        >
          <div className="absolute top-0 left-0 bg-black/30 w-full h-full ">
            <Navbar />
            <Home />
          </div>
        </section>
        <section>
          <Latestprojects />
        </section>
        <section className="font-custom ">
          <Services />
        </section>
        <section
          className="relative w-full h-screen xl:h-[800px]"
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "cover", // Adjusts the size of the image
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
          }}
        >
          <Quietspace />
        </section>
        <section>
          <Residential />
        </section>
        <section>
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
