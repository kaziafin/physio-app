import React from 'react';
import AboutImg from '../assets/main-qimg-fe2e166a3f11d01a87a341fed86f1cd8-pjlq.jpeg';
import '../style/About.css';
const About = () => {
  return (
    <section name='about' className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img
              src={AboutImg}
              className="about-image"
              alt="about us"
            />
          </div>
          <div className="about-text-wrapper">
            <div className="about-title-wrapper">
              <h1 className="about-title">About Us</h1>
            </div>
            <h2 className="about-subtitle">
            Since 2017, I have been providing affordable, high-quality healthcare to the Navi Mumbai Taloja community and surrounding areas.
            </h2>
            <div className="about-list">
              {/* <li className="about-list-item">
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
              </li> */}
              Dr.Mubina Kazi through her exceptional communication skills and a huge experience educates his patients and makes them aware of physical health & fitness. Under his guidance on lifestyle changes, food habits and fitness training many patients have got benefited to date.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
