import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://img.freepik.com/free-vector/cartoon-happy-family-watching-television-together_74855-6954.jpg?t=st=1715189184~exp=1715192784~hmac=c7419e7fc3adf1d1f50fe186b74985142fc06da4c387461472bc04031df297a7&w=996')", 
          height: "calc(100vh - 64px)" 
        }}
      >
        <div className="absolute inset-0 bg-black" style={{ opacity: 0.5 }}></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-3">Unleash Unlimited Entertainment with StreamNation</h1>
            <h4 className="text-lg md:text-xl mb-3">Embark on a journey of non-stop entertainment with StreamNation! Dive into a world of blockbuster movies, binge-worthy TV series, and captivating documentaries. Our OTT subscription service offers premium content at unbeatable prices, ensuring you never miss out on your favorite shows and movies. Elevate your streaming experience with StreamNation today!</h4>
            <a href="#" className="inline-block px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
}
