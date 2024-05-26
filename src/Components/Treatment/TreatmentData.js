import React from 'react';
import Slider from 'react-slick';

const TreatmentData = () => {
  // Treatment data hardcoded
  const treatmentData = [
    { id: 1, name: 'Interferential Therapy (IFT)', description: 'Interferential Therapy is a type of electrotherapy that uses electric currents to stimulate tissue which provides pain relief, reduces swelling and it has many other healing benefits.' },
    { id: 2, name: 'Transcutaneous Electrical Nerve Stimulation (TENS)', description: 'Transcutaneous Electrical Nerve Stimulation TENS is a therapy that uses low voltage electrical current to provide pain relief.' },
    { id: 3, name: 'Ultrasound Therapy (US)', description: 'Ultrasound therapy is mostly used in the treatment of chronic pain. It helps relieve pain and promote tissue healing.' },
    { id: 4, name: 'Muscle Stimulator', description: 'Electrical Muscle stimulation also know as neuromuscular electrical stimulation is the technique used for muscle contraction using electric impluses.' },
    { id: 5, name: 'Intermittent Cervical Traction (ICT)', description: 'A treatment that uses a mechanical device to gently stretch the neck, relieving pain and increasing flexibility.' },
    { id: 6, name: 'Lumbar Traction', description: 'A therapy that involves stretching the lower back to relieve pain and improve mobility.' },
    { id: 7, name: 'Stationary Bicycling', description: 'Stationary bicycling is used to boost cardio fitness.It helps with weight loss, burns body fat. It helps in strengthening the legs and lower body muscles.' },
    { id: 8, name: 'Cupping Therapy', description: 'An ancient form of alternative medicine where cups are placed on the skin to create suction, helping with pain, inflammation, and blood flow.' },
    { id: 9, name: 'Pelvic Traction', description: 'Its a form of decompression therapy that relives pressure on the spine. It is performed manually or mechnically. It is used to treat sciatica, degenerative disc, pinched nerves and many back conditions.' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="treatment-carousel">
      {treatmentData.map((treatment) => (
        <div key={treatment.id} className="treatment-item">
          <h3 className="treatment-name">{treatment.name}</h3>
          <p className="treatment-description">{treatment.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default TreatmentData;
