import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img5 from "../../assets/img5.avif";
import studio from "../../assets/studio.webp";
import img3 from "../../assets/img3.avif";

const Service = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto mt-10 bg-black m-5">
      <h1 className="text-3xl font-semibold text-center mb-8 text-white uppercase">
        Our Services
      </h1>
      <div className="flex flex-wrap justify-center">
        {/* Branding Card */}
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-8"
          data-aos="zoom-in"
        >
          <img className="w-full h-64 object-cover" src={img3} alt="Branding" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white uppercase">
              Branding
            </div>
            <p className="text-white text-base">
              We specialize in creating unique and memorable brands that
              resonate with your audience.
            </p>
          </div>
        </div>

        {/* Graphics Card */}
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-8"
          data-aos="zoom-in"
        >
          <img className="w-full h-64 object-cover" src={img5} alt="Graphics" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white uppercase">
              Graphics
            </div>
            <p className="text-white text-base">
              Our talented designers bring your ideas to life through stunning
              visual graphics.
            </p>
          </div>
        </div>

        {/* Studio Card */}
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg mx-4 mb-8"
          data-aos="zoom-in"
        >
          <img className="w-full h-64 object-cover" src={studio} alt="Studio" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white uppercase">
              Studio
            </div>
            <p className="text-white text-base">
              Our state-of-the-art studio is equipped to handle all your
              photography and videography needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
