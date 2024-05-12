import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StickyNavbar from './Components/StickyNavbar';
import Footer from './Components/Footer';
import { Helmet } from 'react-helmet';

import Page from './Page';
import About from './AllPages/About';
import Contact from './AllPages/Contact';
import OurProduct from './Components/OurProduct';
import ProductDetail from './Components/ProductDetail';
import WhatsappIcon from './Components/WhatsappIcon';
import RefundPolicy from './AllPages/RefundPolicy';
import ErrorPage from './AllPages/ErrorPage';

function App() {
  return (
    <>
      <Helmet>
        <title>StreamNation - OTT services</title>
        <meta name="description" content="Get affordable OTT (Over-The-Top) services and software subscriptions at discounted rates. Your go-to destination for high-quality entertainment and productivity tools." />
        <meta name="keywords" content="OTT, Over-The-Top, streaming, software, subscription, cheap, affordable, entertainment, productivity" />
        <meta name="author" content="Manoj Sharma" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Router>
        <StickyNavbar />
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<OurProduct />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <WhatsappIcon />
        <Footer />
      </Router>
    </>
  );
}

export default App;
