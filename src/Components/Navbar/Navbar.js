import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Button from '../Button';
import LogoImage from '../../assets/logo3.jpg'; 
import '../../style/Navbar.css'; // Assuming you have a Navbar.css file

const Navbar = () => {
  const Links = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },  
    { name: "SERVICE", link: "service" },
    { name: "TREATMENTLIST", link: "TreatmentList" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src={LogoImage} alt="Logo" className="logo" />
          <span className="logo-highlight">physioFlex.</span>
        </div>
        <div className="nav-toggle" onClick={() => setOpen(!open)}>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>
        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {Links.map((link) => (
            <li key={link.name} className="nav-item">
              <Link 
                to={link.link} 
                smooth={true} 
                duration={500} 
                className="nav-link" 
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* <li className="nav-item">
            <Button>
              Get Appointment
            </Button>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
