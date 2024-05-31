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
              
              Dr.Mubina Kazi through her exceptional communication skills and a huge experience educates her patients and makes them aware of physical health & fitness. Under her guidance on lifestyle changes, food habits and fitness training many patients have got benefited to date.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
