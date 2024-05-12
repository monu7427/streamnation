import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); 
  return (
    
    <>
   <Helmet>
        <title>Refund Policy - StreamNation</title>
        <meta name="description" content="Learn about StreamNation's refund policy. Understand the terms and conditions for refunds on purchases made through our platform." />
        <meta name="keywords" content="StreamNation, refund policy, returns, refunds, terms and conditions" />
        <meta name="author" content="Your Manoj Sharma" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Refund Policy - StreamNation" />
        <meta property="og:description" content="Learn about StreamNation's refund policy. Understand the terms and conditions for refunds on purchases made through our platform." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://streamnation.xyz/refund-policy" />
        <meta name="twitter:title" content="Refund Policy - StreamNation" />
        <meta name="twitter:description" content="Learn about StreamNation's refund policy. Understand the terms and conditions for refunds on purchases made through our platform." />
      </Helmet>

    <div className=" p-6 rounded-lg shadow-lg my-9">
        <h1 className="text-3xl font-bold mb-4 text-center">Refund Policy</h1>
        <p className="mb-4">
          We have a refund policy in place for our customers at StreamNation. If for any reason, you do not receive your account credentials within 15 hours of making payment, you are eligible for a full refund. However, once the account credentials have been delivered, we will not be able to grant any refunds. We stand behind the quality of our services and strive to deliver on time to ensure our customers have the best possible experience with us. If you have any questions or concerns, please do not hesitate to reach out to our customer service team, who are always here to assist you.
        </p>
        <div className="text-center">
          <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition duration-300 ease-in-out"><Link to="/Contact">Contact Us</Link></button>
        </div>
      </div></>
  );
};

export default RefundPolicy;
