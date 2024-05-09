import React from 'react';

const WhatsappIcon = () => {
  const whatsappNumber = "9351655497";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <div className="rounded-xl fixed bottom-8 right-4 z-50 cursor-pointer">
        {/* Add your WhatsApp icon image or SVG here */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp Icon" className="w-12 h-auto hover:opacity-50" />
      </div>
    </a>
  );
};

export default WhatsappIcon;
