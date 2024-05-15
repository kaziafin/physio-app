import React from 'react';
import AboutImg from '../assets/main-qimg-fe2e166a3f11d01a87a341fed86f1cd8-pjlq.jpeg';

const About = () => {
  return (
    <section name='about' className="py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <img
              src={AboutImg}
              className="w-full"
              alt="about us"
            />
          </div>
          <div className="text-center md:text-left">
            <div className="text-center mb-6">
              <h1 className="text-4xl md:text-5xl font-bold text-blue mb-2">About Us</h1>
            </div>
            <h2 className="text-3xl md:text-4xl leading-10 text-black pt-2">
              The Benefits of Physiotherapy
            </h2>
            <p className="py-5 leading-8 text-light-color">
              Physiotherapy provides a range of benefits for various conditions:
            </p>
            <ul className="list-disc list-inside space-y-3 text-light-color">
              <li>
                <strong>Eliminating or Reducing Pain:</strong> Techniques like Soft Tissue Mobilization and modalities such as TENS, IFT, and Ultrasound help alleviate pain from arthritis, muscle strain, sprain, and tendonitis, ensuring normalcy.
              </li>
              <li>
                <strong>Avoiding Surgery:</strong> Physiotherapy can manage and heal conditions in the early stages, potentially avoiding the need for surgery. It also aids in pre- and post-surgery rehabilitation to reduce complications.
              </li>
              <li>
                <strong>Improving Strength and Coordination:</strong> Physiotherapy includes exercises and stretches that enhance overall strength and body coordination, beneficial for symptoms like vertigo or dizziness.
              </li>
              <li>
                <strong>Reducing Dependency on Medicines:</strong> By addressing pain and other issues through physical methods, physiotherapy can reduce the need for medications and their associated side effects.
              </li>
              {/* <li>
                <strong>Boosting Cardiovascular Functioning and Lung Capacity:</strong> Post-stroke physiotherapy helps patients regain movement, balance, and daily functional abilities, improving their quality of life.
              </li>
              <li>
                <strong>Managing and Preventing Sports-Related Injuries:</strong> Physiotherapy provides targeted treatments for sports injuries such as ACL tears, golfer's elbow, and hamstring strains. Regular sessions also enhance endurance and prevent injuries for athletes.
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
