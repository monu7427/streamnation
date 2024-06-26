import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from './ApiData';
import { Helmet } from 'react-helmet';

const OurProduct = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

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
        <h2 className="text-3xl font-bold mb-8 bg-black text-white p-9 flex align-center justify-center">Our Subscriptions</h2>
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search services..."
            className="border rounded p-2 md:w-1/2 w-full mx-7 bg-black text-yellow-300 placeholder-yellow-300 text-center"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 m-14">
          {filteredProducts.map(product => (
            <Link to={`/product/${product.id}`} key={product.id} className="text-black">
              <div className="border rounded p-4 cursor-pointer">
                <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className={product.availability === 'available' ? 'text-green-600 mb-2' : 'text-red-600 mb-2'}>
  {product.availability}
</p>

                <p className="text-gray-600 mb-2">Starting From</p>
                <p className="text-blue-800 font-bold text-lg">{product.price}&#8377;</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurProduct;
