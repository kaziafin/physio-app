import React from 'react';
import Button from './Button';
import BackgroundImage from '../assets/physiotherapy-treatment-in-thrissur-5.jpeg';

const Home = () => {
  return (
    <section name='home' className="w-full bg-cover bg-no-repeat bg-center md:bg-center md:py-20" style={{ backgroundImage: `url(${BackgroundImage})`, backgroundSize: 'cover' }}>
      <div className="max-w-[1200px] mx-auto px-4 flex items-center min-h-screen">
        <div className="md:w-2/4 text-center md:text-left">
          <h2 className="font-semibold text-3xl md:text-5xl leading-10 text-black uppercase">
            Let us brighten your Health
          </h2>
          <p className="py-5 leading-8 text-blue" >
            At   <span>physio<span className="text-blue" style={{ color: 'blue' }}>Care.</span></span>
            Physiotherapy is highly beneficial for the treatment of injury, disorder and disease. Using specific physical methods, it aids in restoring the mobility, function and movement in the affected area. Physiotherapy uses experimented and researched information on how the body works and uses medically certified procedures for treatment.
            Physiotherapy also comes extremely advantageous in preventing further injury or damage on the previously strained body part. It is widely popular as people of any age can receive its benefits by managing and maintaining great shape and health, thereby preventing injury or disease.

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
