import React, { useState,useEffect } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

const CouponCode = () => {
  
useEffect(()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
},[])
  const [copied, setCopied] = useState({ stream5: false, primeVideo: false });
  const couponCodes = {
    stream5: 'STREAM5%',
    primeVideo: 'PRIME9',

  };

  const copyCouponCode = (codeKey) => {
    navigator.clipboard.writeText(couponCodes[codeKey]).then(() => {
      setCopied((prevCopied) => ({ ...prevCopied, [codeKey]: true }));
      setTimeout(() => {
        setCopied((prevCopied) => ({ ...prevCopied, [codeKey]: false }));
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-500 p-4">
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg text-center max-w-md w-full mb-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to Streamnation!</h1>
        <p className="text-lg mb-2">Use this coupon code to get 5% off on orders under 600/-</p>
        <p id="coupon-code" className="text-3xl font-bold tracking-wide mb-4">{couponCodes.stream5}</p>
        <div className="flex justify-center">
          <button
            onClick={() => copyCouponCode('stream5')}
            className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition relative group"
          >
            <FiCopy className={`mr-2 ${copied.stream5 ? 'hidden' : 'block'}`} />
            <FiCheck className={`mr-2 ${copied.stream5 ? 'block' : 'hidden'}`} />
            {copied.stream5 ? 'Copied!' : 'Copy Code'}
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Click to copy
            </span>
          </button>
        </div>
      </div>
      <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg text-center max-w-md w-full mb-6">
        <h1 className="text-2xl font-bold mb-4">Prime Video Offer</h1>
        <p className="text-lg mb-2">Get 1 month of Prime Video for just 9/-</p>
        <p id="coupon-code" className="text-3xl font-bold tracking-wide mb-4">{couponCodes.primeVideo}</p>
        <div className="flex justify-center">
          <button
            onClick={() => copyCouponCode('primeVideo')}
            className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition relative group"
          >
            <FiCopy className={`mr-2 ${copied.primeVideo ? 'hidden' : 'block'}`} />
            <FiCheck className={`mr-2 ${copied.primeVideo ? 'block' : 'hidden'}`} />
            {copied.primeVideo ? 'Copied!' : 'Copy Code'}
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-gray-800 text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Click to copy
            </span>
          </button>
        </div>
      </div>
      <div className="bg-white text-gray-800 p-4 rounded-lg shadow-lg text-center max-w-md w-full">
        <h2 className="text-xl font-bold mb-2">Terms and Conditions</h2>
        <p className="text-sm mb-1">STREAM5% coupon is for new users only and gives 5% off on orders under 600/-.</p>
        <p className="text-sm mb-1">PRIME9 coupon is for new users only and provides 1 month of Prime Video for just 9/-.</p>
        <p className="text-sm">Both offers are valid until the end of the month.</p>
      </div>
    </div>
  );
};

export default CouponCode;
