import React from 'react';
import '../../style/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="footer-title"><span className="bold">Dr.Mubina Kazi</span></h2>
          <address className="footer-address">
            Crescent Multispecialty Clinic, Shop No. 13/12,<br />
            Shelter Riverside, Plot No. 114, Sector 14,<br />
            Phase 1, Taloja, Navi Mumbai 410210
          </address>
        </div>
        <div className="footer-right">
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:Mubina.kazi28@gmail.com">Mubina.kazi28@gmail.com</a></p>
          <p>Phone: <a href="tel:+919833718506">+91 98337 18506</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Afin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
