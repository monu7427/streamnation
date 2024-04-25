import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('images/hero3.jpg')", height: "calc(100vh - 64px)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-3">Experience Divine Fragrance with Our Agarbatti</h1>
            <h4 className="text-lg md:text-xl mb-3">Crafted with precision and devotion, our agarbattis offer a sensory journey that elevates every moment. Whether you're seeking serenity during meditation or looking to create a welcoming ambiance in your space, our agarbattis are designed to enhance every experience. Dive into our collection and discover the perfect scent to enrich your daily rituals.</h4>
            <a href="#" className="inline-block px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200">Deal Now</a>
          </div>
        </div>
      </div>
    </div>
  );
}
