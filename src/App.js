
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import Service from './Components/Services/Services';
import TreatmentList from './Components/Treatment/TreatmentList';


function App() {
  return (
    <>
     <Navbar />
     <Home />
     <About/>
     <Service/>
     <TreatmentList/>
    </>
  );
}

export default App;
