
import { useState } from 'react';
import './App.css';
import About from './Components/About';
// import Footer from './Components/Footer/footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import Service from './Components/Services/Services';
import TreatmentList from './Components/Treatment/TreatmentList';
import { Routes, Route, Router } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

function App() {

  return (
   
 

<div>
<Navbar  />
<div className="content">
  <Home id="home" />
  <About id="about" />
  <Service id="Service" />
  <TreatmentList id="TreatmentList" />
< Footer />
</div>
</div>
  );
}

export default App;
