import React from 'react';
import { Link } from 'react-router-dom';
import { products } from './ApiData';
import { Helmet } from 'react-helmet';
// Define the products array
import { useEffect } from 'react';



const OurProduct = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); 
  return (
    

    <>
    <Helmet>
    <title>Our Services - StreamNation</title>
          <meta name="description" content="Explore our affordable OTT (Over-The-Top) services and software subscriptions. Get access to a wide range of entertainment and productivity tools at discounted rates." />
          <meta name="keywords" content="OTT, Over-The-Top, streaming, software, subscription, cheap, affordable, entertainment, productivity, services" />
          <meta name="author" content="Manoj Sharma" />
          <meta name="robots" content="index, follow" />
    </Helmet>
    <section className="container mx-auto py-16 mb-4">
        <h2 className="text-3xl font-bold mb-8 bg-black text-white p-9 flex align-center justify-center">Our Subscription</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 m-14">
          {products.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="text-black">
              <div className="border rounded p-4 cursor-pointer">
                <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">Starting From</p>
                <p className="text-green-500 font-bold text-lg">{product.price}&#8377;</p>
              </div>
            </Link>
          ))}
        </div>
      </section></>
  );
};

export default OurProduct;
