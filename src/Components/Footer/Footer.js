import React from 'react';
import '../../style/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h3>Dr.MubinaKazi</h3>
          <p>Address.Crescent Multispecialty Clinic,shope No. 13/12,
          Shelter Riverside, Plot No.114,sector 14, phase 1,
             Taloja ,Navi Mumbai
          </p>
        </div>
        <div className="footer-right">
          <h3>Contact Us</h3>
          <p>Email: contact@example.com</p>
          <p>Phone: +91 98337 18506</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
