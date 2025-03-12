import React from 'react';


const WhatsappIcon = () => {
  const whatsappNumber = "9079179449";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text= 'Hello! I came across your website and I'm curious to learn more. Could you provide additional information?'`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <div className=" rounded-xl fixed bottom-8 right-6 z-50 cursor-pointer">
        {/* WhatsApp icon */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp Icon" className="w-12 h-auto" />
      </div>
    </a>
  );
};

export default WhatsappIcon;
