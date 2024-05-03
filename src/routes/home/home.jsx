import React, { useEffect } from "react";
import Navbar from "../../components/navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "react-bootstrap";
import art from "../../assets/art.jpg";
import cam from "../../assets/cam.jpg";
import brands from "../../assets/brands.webp";
import About from "../../components/about/about";
import Footer from "../../components/footer/footer";
import { FaWhatsappSquare } from "react-icons/fa";
import Service from "../../components/services/services";
function Home() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="main">
      <Navbar />

      <Carousel fade>
        <Carousel.Item>
          <img
            className="block w-full max-h-screen"
            src={art}
            alt="First slide"
          />
          <Carousel.Caption className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h5
              className="text-white-800 font-bold text-5xl"
              data-aos="fade-up-right"
            >
              EXMEDIA <br /> GRAPHICS <br /> TRANSFORMING <br /> BUSINESS
              STRATEGY{" "}
            </h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="block w-full max-h-screen"
            src={cam}
            alt="Second slide"
          />
          <Carousel.Caption className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-3/4">
            <h5
              className="font-bold uppercase text-5xl p-2"
              data-aos="fade-up-right"
            >
              crafting <br /> brand identity
              <br /> capturing moments
            </h5>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="block w-full max-h-screen"
            src={brands}
            alt="Third slide"
            data-aos="fade-up-right"
          />
          <Carousel.Caption className="text-center text-white absolute top-1/2 left-1/2 transform -translate-x-1/4 -translate-y-3/4">
            <h5
              className="text-white font-extrabold uppercase text-5xl"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              start strong <br /> with effective <br /> branding STRATEGY
            </h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="bg-black flex items-center justify-start p-5">
        <a
          href="https://api.whatsapp.com/send?phone=9656123466"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 hover:text-green-800"
        >
          <FaWhatsappSquare className="text-6xl" />
        </a>
        <h4 className="text-white text-xl ml-2">Chat with us</h4>
      </div>

      <About data-aos="fade-up"/>
      <Service data-aos="zoom-in"/>
      <Footer />
    </div>
  );
}

export default Home;
