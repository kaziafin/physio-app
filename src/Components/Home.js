import React from "react";
import Button from "./Button";
import BackgroundImage from "../assets/physiotherapy-treatment-in-thrissur-5.jpeg";

const Home = () => {
  return (
    <section
      name="home"
      className="w-full bg-cover bg-no-repeat bg-center md:bg-center md:py-20"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 flex items-center min-h-screen">
        <div className="md:w-2/4 text-center md:text-left">
          <h2 className="font-semibold text-3xl md:text-5xl leading-10 text-black uppercase">
            Let us brighten your Health
          </h2>
          <p className="py-5 leading-8 text-blue">
            At{" "}
            <span className="font-bold">
              Physio<span className="text-blue">Care</span>
            </span>
            , we offer physiotherapy treatments that restore mobility and
            function. Using researched methods, we help alleviate pain and
            prevent further injury. Our services benefit all ages, promoting
            optimal health and preventing disease.
          </p>

          {/* <Button>Get Appointment</Button> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
