import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes, Route as Navigate } from 'react-router-dom';
import StickyNavbar from './Components/StickyNavbar';
import Footer from './Components/Footer';



import Page from './Page';
import About from './AllPages/About';
import Contact from './AllPages/Contact';
import OurProduct from './Components/OurProduct';
import './App.css';
import ProductDetail from './Components/ProductDetail';
import WhatsappIcon from './Components/WhatsappIcon';
import RefundPolicy from './AllPages/RefundPolicy';


function App() {

  return (
    <>
    <Router>
      <StickyNavbar />
      
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<OurProduct/>} />
        <Route path="/product/:id" exact element={<ProductDetail/>} />
        <Route path='/RefundPolicy' element={<RefundPolicy/>}/>
      </Routes>
      <WhatsappIcon/>
      <Footer />
    </Router>
   
    </>
  );
}

export default App;
