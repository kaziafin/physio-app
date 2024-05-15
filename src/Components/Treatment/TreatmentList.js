import React from 'react';
import treatmentImg from '../../assets/Physiotherapy.webp';
import TreatmentDatas from './TreatmentData';


const TreatmentList = () => {
  return (
    <section name='about' className="py-20 bg-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex justify-center items-center">
            <img
              src={treatmentImg}
              className="w-full h-auto rounded-lg shadow-lg"
              alt="treatment"
            />
          </div>
        
          <div>
            <div className="text-center mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">Treatments</h1>
            </div>
            <TreatmentDatas />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TreatmentList;
