import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import studio from "../../assets/studio.jpg";
import graph from "../../assets/graph.avif";
import braand from "../../assets/braand.jpg";

function About() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="hero bg-black text-white py-10 px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-6" data-aos="fade-up">
        WHO WE ARE
      </h2>

      <div className="flex flex-wrap items-center justify-center md:justify-between">
        <div
          className="w-full md:w-1/2 px-4 md:px-0 flex flex-wrap justify-between"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        >
          <div className="w-1/2 mt-10">
            <img
              src={braand}
              alt="Studio"
              className="w-full p-3 h-auto mb-4 md:mb-0 "
            />
          </div>
          <div className="w-1/2">
            <img
              src={graph}
              alt="Graphics"
              className="w-full p-3 h-auto mb-4 md:mb-0"
            />
          </div>
          <div className="w-full">
            <img
              src={studio}
              alt="Branding"
              className="w-1/2 md:w-full p-2 h-20 md:h-auto mb-4 md:mb-0"
            />{" "}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-lg">
            Since 2006, Exmedia has been a trailblazing Advertisement agency,
            driving brand success through innovation, creativity, and strategic
            excellence. With an illustrious history, we've honed our craft to
            deliver impactful campaigns that transcend conventional boundaries.
            From dynamic visuals to compelling narratives, our diverse expertise
            in advertising, design, and branding has fueled the growth of
            numerous clients. We're not just an agency; we're your partners in
            shaping brand legacies. With a deep understanding of market
            dynamics, consumer behavior, and emerging trends, Exmedia is your
            compass to navigate the ever-evolving advertising landscape,
            ensuring your brand remains at the forefront of industry innovation.
            Based on our strategy work, we create distinctive brand Your
            Ultimate Advertisement Company, where innovation meets creativity to
            redefine your brand's journey. Our agency stands as a pillar of
            excellence, providing a comprehensive suite of services including
            Studio, Graphics, and Branding. Step into our cutting-edge studio, a
            hub of ingenuity where ideas take shape. From brainstorming sessions
            to concept realization, our team collaborates to bring your vision
            to life. Our studio is the birthplace of dynamic campaigns that
            captivate and resonate.
          </p>
        </div>
      </div>
      <div className="d-flex justify-center align-center">
        <h2 className="uppercase text-red-600" data-aos="fade-right">
          Branding | Graphics | Studio
        </h2>
      </div>
    </div>
  );
}

export default About;
