import React from 'react';
import Button from './Button';
import BackgroundImage from '../assets/Physiotherapy.webp'

const Home = () => {
  return (
    <section name='home' className="w-full bg-cover bg-no-repeat bg-center md:bg-center md:py-20" style={{backgroundImage: `url(${BackgroundImage})`}}>
      <div className="max-w-[1200px] mx-auto px-4 flex items-center min-h-screen">
        <div className="md:w-2/4 text-center md:text-left">
          <h2 className="font-semibold text-3xl md:text-5xl leading-10 text-black uppercase">
            Let us brighten your Health
          </h2>
          <p className="py-5 leading-8 text-blue" >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium itaque, quasi aliquam alias tempora voluptatibus.
          </p>
          <Button>
              Get Appointment
            </Button>
        </div>
      </div>
    </section>
  );
}

export default Home;
