import React, { useState } from 'react';
import Button from '../Button';
import LogoImage from '../../assets/images (1).jpeg'; 

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/About" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className='w-full fixed top-0 left-0 bg-gray-200'>
      <div className='md:flex items-center justify-between bg-gray-200 py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            {/* <ion-icon name="logo-ionic"></ion-icon>
             */}
             <img src={LogoImage} alt="Logo" className="w-10 h-10 mr-2" /> {/* Adjust the width, height, and margin as needed */}
         
          </span>
          <span>physio<span className="text-blue" style={{ color: 'blue' }}>Care.</span></span>

        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-200 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-indigo-600 duration-500 transition-colors'>{link.name}</a>
            </li>
          ))}
          <li className='md:ml-8 text-xl md:my-0 my-7'>
            <Button>
              Get Appointment
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
