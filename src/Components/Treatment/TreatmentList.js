import React from 'react';
import TreatmentData from './TreatmentData';
import '../../style/Treatment.css'

const TreatmentList = () => {
  return (
    <section id="treatments" className="treatment-container">
      <div className="treatment-wrapper">
        <h1 className="treatment-title">Treatments</h1>
        <p className="treatment-description">
          Explore our comprehensive range of treatments designed to provide the best care for you.
        </p>
        <div className="treatment-grid">
          <TreatmentData />
        </div>
      </div>
    </section>
  );
}

export default TreatmentList;
