import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from './OurProduct'; // Import the products array
import OurProduct from './OurProduct';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id, 10)); // Parse the ID to base 10
  const [selectedDuration, setSelectedDuration] = useState(Object.keys(product.subPrices)[0]); // Default to the first available duration

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
  };

  const whatsappMessage = `Hello sir, I want to buy ${product.name} ${selectedDuration} ${product.subPrices[selectedDuration]}/-`;

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
      <div className="xl:w-2/6 lg:w-2/5 w-full md:w-auto">
  <img className="w-full h-auto" alt={product.name} src={product.image} />
</div>

      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">Service Category</p>
          <h1 className="lg:text-2xl text-xl font-semibold leading-7 text-gray-800 mt-2">{product.name}</h1>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="text-lg leading-4 text-gray-800">Price</p>
          <p className="text-2xl leading-none text-green-600">{product.subPrices[selectedDuration]}&#8377;</p>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="leading-4 text-gray-800 text-lg">Description</p>
          <p className="text-base leading-none text-gray-600 p-6">{product.description}</p>
        </div>
        <div className="py-4 border-b border-gray-200 flex items-center justify-between">
          <p className="leading-4 text-gray-800 text-lg">Select Duration</p>
          <div>
            <select value={selectedDuration} onChange={(e) => handleDurationChange(e.target.value)}>
              {Object.keys(product.subPrices).map(duration => (
                <option key={duration} value={duration}>{duration}</option>
              ))}
            </select>
          </div>
        </div>
        <Link
          to={`https://wa.me/9351655497?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-gray-800 text-white font-bold py-4 rounded hover:bg-gray-700 mt-6"
        >
          Get Deal
        </Link>
        <div className="py-4">
          <p className="text-base leading-4 text-gray-600 mt-4">Service Code: {product.id}</p>
        </div>
      </div>
      
    </div>
  );
};

export default ProductDetail;
