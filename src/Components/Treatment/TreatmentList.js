import React from 'react';
import TreatmentData from './TreatmentData';
import '../../style/Treatment.css';

const TreatmentList = () => {
  return (
    <section id="treatments" className="treatment-container">
      <div className="treatment-wrapper">
        <h1 className="treatment-title">Treatments</h1>
        <div className="treatment-carousel">
          <TreatmentData />
        </div>
      </div>
    </section>
  );
};

export default TreatmentList;
