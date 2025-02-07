import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Servicepage from './pages/Servicepage';
import Aboutuspage from './pages/Aboutuspage';
import Footer from './component/Footer';



const App = () => {
  return (
    <>
      
      <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Servicepage" element={<Servicepage />} />
        <Route path="/Aboutuspage" element={<Aboutuspage />} />

      </Routes>
        <Footer/>
    </Router>
    </>
  );
};

export default App;
