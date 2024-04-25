import React from 'react';

function About() {
  return (
    <div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <div className="lg:w-10/12 w-full">
          <p className="font-normal leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer text-2xl mb-7">About Agarbatti </p>
          <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">We are dedicated to crafting the finest agarbatti for spiritual and everyday use</h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">Agarbatti, also known as incense sticks, have been an integral part of Indian traditions and rituals for centuries. Our mission is to provide high-quality, aromatic agarbatti that not only elevates your spiritual experience but also adds a touch of tranquility to your everyday life.</p>
        </div>

        <div className="lg:mt-14 sm:mt-10 mt-12">
          <img className="lg:block hidden w-full" src="images/hero3.jpg" alt="Group of people Chilling" />
          <img className="lg:hidden sm:block hidden w-full" src="images/hero3.jpg" alt="Group of people Chilling" />
          <img className="sm:hidden block w-full" src="images/hero3.jpg" alt="Group of people Chilling" />
        </div>

        <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
          <div className="w-full xl:w-5/12 lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Commitment</h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-4">We source the finest natural ingredients to create our agarbatti, ensuring a clean and long-lasting burn. Each stick is handcrafted with care, infusing it with aromatic oils and herbs to create a soothing and calming atmosphere.</p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">At the heart of our business is a commitment to quality and sustainability. We strive to minimize our environmental impact by using eco-friendly packaging and sustainable sourcing practices.</p>
          </div>
          <div className="lg:flex items-center w-full lg:w-1/2 ">
            <img className="lg:block hidden w-full" src="images/unity.jpg" alt="people discussing on board" />
            <img className="lg:hidden sm:block hidden w-full h-3/4" src="images/unity.jpg" alt="people discussing on board" />
            <img className="sm:hidden block w-full" src="images/unity.jpg" alt="people discussing on board" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
