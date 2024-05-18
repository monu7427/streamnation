import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

const CouponCode = () => {
  const [copied, setCopied] = useState(false);
  const couponCode = 'STREAM5%';

  const copyCouponCode = () => {
    navigator.clipboard.writeText(couponCode).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg text-center relative max-w-md w-full mb-6 flex justify-center flex-col">
        <h1 className="text-2xl font-semibold mb-2">Welcome New Users!</h1>
        <p id="coupon-code" className="text-3xl font-bold tracking-wide mb-4">{couponCode}</p>
        <button
          onClick={copyCouponCode}
          className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition relative group"
        >
          <FiCopy className={`mr-2 ${copied ? 'hidden' : 'block'}`} />
          <FiCheck className={`mr-2 ${copied ? 'block' : 'hidden'}`} />
          {copied ? 'Copied!' : 'Copy Code'}
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Click to copy
          </span>
        </button>
      </div>
      <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg text-center max-w-md w-full">
        <h2 className="text-xl font-semibold mb-2">Terms and Conditions</h2>
        <p className="text-sm mb-1">This coupon is for new users only.</p>
        <p className="text-sm mb-1">Get 5% off on orders under 600/-.</p>
        <p className="text-sm">Offer valid until the end of the month.</p>
      </div>
    </div>
  );
};

export default CouponCode;
