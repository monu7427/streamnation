// Process.jsx

import React, { useState } from 'react';

const Process = () => {
  const [showQR, setShowQR] = useState(false);

  const handleGetDeal = () => {
    // Redirect to WhatsApp with your number
    window.location.href = 'https://wa.me/9351655497';
  };
 var TxtColor = "green-700";
  const copyUPI = () => {
    const upiID = 'streamnation@ybl';
    navigator.clipboard.writeText(upiID);
    var Btn = document.getElementById('Copy');
    Btn.innerText="Copied";
    
    
  };

  return (
    <div className="w-full bg-black text-white py-12">
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-black">Process to Buy Subscription:</h2>
        <ol className="list-decimal pl-6 mb-6">
          <li className="text-black">Select the subscription you want</li>
          <li className="text-black">Pay using my UPI ID or QR Code- price of Subscription</li>
          <li className="text-black">Send me Screenshot of payment with which subscription you want.</li>
          <li className="text-black">After payment, i will activate your acount to subscription or i give id password if subscription on our mail, number.</li>
          <li className='bg-gray-200 text-green-600'>Also You can contact me if you have any Query</li>
        </ol>
        <div className="flex items-center mb-4">
          <p className="text-sm mr-2 text-black ml-5 font-mono">UPI ID:</p>
          <div className='bg-slate-300 flex rounded-lg'>
            <p className="text-lg ml-2 text-black bg-slate-300 font-mono">streamnation@ybl</p>
            <button onClick={copyUPI} 
            id='Copy' className={` bg-slate-400 text-white ml-2 px-2 py-1  hover:bg-gray-600 focus:border-black focus:bg-green-600 `}>Copy</button>
          </div>
        </div>
        <div className="mb-6">
          
          {showQR && (
            <><p className="text-sm mb-2 text-black text-center">Scan QR Code to Pay:</p><div className='flex justify-center'>
                          <img className='cursor-pointer  ' src="images/MyQr.jpg" alt="" style={{ width: '50%', height: 'auto' }} />
                      </div></>
          )}
          <button onClick={() => setShowQR(!showQR)} className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800">{showQR ? 'Hide QR' : 'Show QR'}</button>
        </div>
        <button onClick={handleGetDeal} className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-800">Send Pay Proof</button>
      </div>
    </div>
  );
};

export default Process;
