import React from 'react';

const TreatmentDatas = () => {
  // Treatment data hardcoded
  const treatmentData = [
    { id: 1, name: 'Interferential Therapy (IFT)', description: 'A form of electrical treatment that uses low-frequency electrical currents to stimulate nerves and relieve pain.' },
    { id: 2, name: 'Transcutaneous Electrical Nerve Stimulation (TENS)', description: 'A method of pain relief involving the use of a mild electrical current.' },
    { id: 3, name: 'Ultrasound Therapy (US)', description: 'Uses sound waves to treat injuries, providing deep heating to soft tissues.' },
    { id: 4, name: 'Muscle Stimulator', description: 'A device that uses electrical impulses to stimulate muscle contractions, aiding in muscle strengthening and recovery.' },
    { id: 5, name: 'Intermittent Cervical Traction (ICT)', description: 'A treatment that uses a mechanical device to gently stretch the neck, relieving pain and increasing flexibility.' },
    { id: 6, name: 'Lumbar Traction', description: 'A therapy that involves stretching the lower back to relieve pain and improve mobility.' },
    { id: 7, name: 'Static Cycling', description: 'A low-impact cardiovascular workout that involves cycling on a stationary bike, improving endurance and strength.' },
    { id: 8, name: 'Cupping Therapy', description: 'An ancient form of alternative medicine where cups are placed on the skin to create suction, helping with pain, inflammation, and blood flow.' },
  ];

  return (
    <div className="treatment-container bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Treatments</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {treatmentData.map(treatment => (
          <div key={treatment.id} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800">{treatment.name}</h3>
            <p className="text-gray-600">{treatment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentDatas;
