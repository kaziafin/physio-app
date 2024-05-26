import React from 'react';
import '../../style/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
        <h3>Dr.MubinaKazi</h3>
          <span>Address.Crescent Multispecialty Clinic,shope No. 13/12,
           </span>
           <br/>
           <span>
            Shelter Riverside, Plot No.114,sector 14,
            <br/>
             phase 1,
             Taloja ,Navi Mumbai
           </span>
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
