import React from "react";
import Home from "./assets/components/Home";
import bg from "./assets/images/aigenerated2.jpg";
import Navbar from "./assets/components/Navbar";
import Latestprojects from "./assets/components/Latestprojects";
function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto font-custom ">
        <section
          className="relative w-full h-screen lg:h-[600px] xl:h-[800px]"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover", // Adjusts the size of the image
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
          }}
        >
          <div className="absolute top-0 left-0 bg-black/40 w-full h-full ">
            <Navbar />
            <Home />
          </div>
        </section>
        <section>
          <Latestprojects />
        </section>
      </div>
    </>
  );
}

export default App;
