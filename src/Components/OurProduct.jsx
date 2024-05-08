import React from 'react';
import { Link } from 'react-router-dom';

// Define the products array
const products = [
  {
    id: 1,
    name: 'Netflix 4k',
    image: 'https://about.netflix.com/images/meta/netflix-symbol-black.png',
    description: ' Netflix 4k on our mail id , single screen login',
    price: '120',
    subPrices: {
      '1month': '125',
      '3month': '350',
      '6month': '690'
    }
  },
  {
    id: 2,
    name: 'Product 2',
    image: '/images/product2.jpg',
    description: 'Description for Product 2',
    price: '330',
    subPrices: {
      '1month': '125',
      '3month': '350',
      '6month': '690'
    }
  },
  {
    id: 3,
    name: 'Product 2',
    image: '/images/product2.jpg',
    description: 'Description for Product 2',
    price: '330',
    subPrices: {
      '1month': '125',
      '3month': '350',
      '6month': '690'
    }
  },
  // Add more product objects here
];

const OurProduct = () => {
  return (
    <section className="container mx-auto py-16 mb-4">
      <h2 className="text-3xl font-bold mb-8 bg-black text-white p-9 flex align-center justify-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 m-14">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="text-black">
            <div className="border rounded p-4 cursor-pointer">
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">starting from</p>
              <p className="text-blue-500 font-bold text-lg">{product.price}/-</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurProduct;
