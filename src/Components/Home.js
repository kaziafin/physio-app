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
            Welcome to{" "}
            <span className="font-bold">Physiotherapy by Dr. Mubina Kazi</span>,
            where we specialize in restoring mobility and enhancing function
            through advanced physiotherapy treatments. Our tailored approach,
            backed by extensive research, is designed to alleviate pain
            effectively while minimizing the risk of future injuries.
            <br />
            Led by Dr. Mubina Kazi, a trusted expert in the field, our practice
            is dedicated to optimizing health and wellness across all age
            groups. From injury rehabilitation to proactive preventive care, we
            are committed to delivering personalized solutions that promote
            vitality and enhance overall quality of life.
          </p>

          {/* <Button>Get Appointment</Button> */}

          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Home;
