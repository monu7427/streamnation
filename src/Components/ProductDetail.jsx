import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from './OurProduct'; // Import the products array


const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id, 10));
  const [showShipping, setShowShipping] = useState(false);
  const [showContact, setShowContact] = useState(false);
  console.log("Image Path:", product.image);
  if (!product) {
    return (
      <div className="container mx-auto py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Product not found</h2>
          <Link to="/products" className="text-blue-500 hover:underline">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
      <img className="w-full" alt={product.name} src={product.image} />


      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">Product Category</p>
          <h1 className="lg:text-2xl text-xl font-semibold leading-7 text-gray-800 mt-2">{product.name}</h1>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-lg leading-4 text-gray-800">Price</p>
          <p className="text-base leading-none text-gray-600">{product.price}</p>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className=" leading-4 text-gray-800 text-lg">Description</p>
          <p className="text-base leading-none text-gray-600 p-6">{product.description}</p>
        </div>
        <button
          className="
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
            text-base flex items-center justify-center leading-none text-white
            bg-gray-800 w-full py-4 hover:bg-gray-700 mt-6
          "
        >
          Get Deal
        </button>
        <div className="py-4">
          <p className="text-base leading-4 text-gray-600 mt-4">Product Code: {product.id}</p>
        </div>
        <div className="border-t border-b py-4 mt-7 border-gray-200">
          <div onClick={() => setShowShipping(!showShipping)} className="flex justify-between items-center cursor-pointer">
            <p className="text-base leading-4 text-gray-800">Shipping and returns</p>
            <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" aria-label="show or hide">
              <svg className={`transform ${showShipping ? 'rotate-180' : 'rotate-0'}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className={`pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 ${showShipping ? 'block' : 'hidden'}`}>
            You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable.
          </div>
        </div>
        <div className="border-b py-4 border-gray-200">
          <div onClick={() => setShowContact(!showContact)} className="flex justify-between items-center cursor-pointer">
            <p className="text-base leading-4 text-gray-800">Contact us</p>
            <button className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 rounded" aria-label="show or hide">
              <svg className={`transform ${showContact ? 'rotate-180' : 'rotate-0'}`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <div className={`pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 ${showContact ? 'block' : 'hidden'}`}>
            If you have any questions on how to return your item to us, contact us.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
