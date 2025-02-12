import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import ScrollToTop from './component/ScrollToTop';
import Homepage from './pages/Homepage';
import Servicepage from './pages/Servicepage';
import Aboutuspage from './pages/Aboutuspage';
import Footer from './component/Homepage_component/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';



const App = () => {
  return (
    <>
      
      <Router>

      <ScrollToTop />
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
