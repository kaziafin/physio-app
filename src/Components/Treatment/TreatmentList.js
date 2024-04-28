import React from 'react';
import treatmentImg from '../../assets/Physiotherapy.webp';
import TreatmentData from './TreatmentData';

const TreatmentList = () => {
  return (
    <section name='about' className="py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <img
              src={treatmentImg}
              className="w-full"
              alt="treatment"
            />
          </div>
          <div>
            <div className="text-center mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-blue mb-2">Treatment</h1>
            </div>
            <TreatmentData />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TreatmentList;
