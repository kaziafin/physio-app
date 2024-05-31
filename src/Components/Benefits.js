import React from 'react'
import BenefitsImg from '../assets/lower-limb-pain.jpg';
import '../style/About.css';
export default function Benefits() {
  return (
    <section name='benefits' className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img
              src={BenefitsImg}
              className="about-image"
              alt="about us"
            />
          </div>
          <div className="about-text-wrapper">
            <div className="about-title-wrapper">
              <h1 className="about-title">Benefits</h1>
            </div>
            
            <ul className="about-list">
              <li className="about-list-item">
                <strong>Eliminating or Reducing Pain:</strong> Techniques like Soft Tissue Mobilization and modalities such as TENS, IFT, and Ultrasound help alleviate pain from arthritis, muscle strain, sprain, and tendonitis, ensuring normalcy.
              </li>
              <li className="about-list-item">
                <strong>Avoiding Surgery:</strong> Physiotherapy can manage and heal conditions in the early stages, potentially avoiding the need for surgery. It also aids in pre- and post-surgery rehabilitation to reduce complications.
              </li>
              <li className="about-list-item">
                <strong>Improving Strength and Coordination:</strong> Physiotherapy includes exercises and stretches that enhance overall strength and body coordination, beneficial for symptoms like vertigo or dizziness.
              </li>
              <li className="about-list-item">
                <strong>Reducing Dependency on Medicines:</strong> By addressing pain and other issues through physical methods, physiotherapy can reduce the need for medications and their associated side effects.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
