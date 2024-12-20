import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from './ApiData';
import { Helmet } from 'react-helmet';
import Process from './Process';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10)); // Parse the ID to base 10
  const [selectedDuration, setSelectedDuration] = useState(
    Object.keys(product.subPrices)[0]
  ); // Default to the first available duration

  const handleDurationChange = (duration) => {
    setSelectedDuration(duration);
  };

  const whatsappMessage = `Good day! I'm interested in purchasing ${product.name} for ${selectedDuration} at a rate of ${product.subPrices[selectedDuration]}/- each (as seen on the website). Could you please provide further details? Thank you.`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="container mx-auto py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Product not found</h2>
          <Link to="/products" className="text-blue-500 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: '#4a5568' },
    tap: { scale: 0.95 },
  };

  return (
    <>
      <Helmet>
        <title>{product.name}</title>
        <meta
          name="description"
          content="Explore our affordable OTT (Over-The-Top) services and software subscriptions. Get access to a wide range of entertainment and productivity tools at discounted rates."
        />
        <meta
          name="keywords"
          content="OTT, Over-The-Top, streaming, software, subscription, cheap, affordable, entertainment, productivity, services"
        />
        <meta name="author" content="Manoj Sharma" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <motion.div
        className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="xl:w-2/6 lg:w-2/5 w-full md:w-auto"
          variants={itemVariants}
        >
          <motion.img
            className="w-full h-auto"
            alt={product.name}
            src={product.image}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6"
          variants={containerVariants}
        >
          <motion.div
            className="border-b border-gray-200 pb-6"
            variants={itemVariants}
          >
            <p className="text-sm leading-none text-gray-600">Service Category</p>
            <h1 className="lg:text-2xl text-xl font-semibold leading-7 text-gray-800 mt-2">
              {product.name}
            </h1>
            <p
              className={
                product.availability === 'available'
                  ? 'text-green-600 mb-2'
                  : 'text-red-600 mb-2'
              }
            >
              {product.availability}
            </p>
          </motion.div>

          <motion.div
            className="py-4 border-b border-gray-200 flex items-center justify-between"
            variants={itemVariants}
          >
            <p className="text-lg leading-4 text-gray-800">Price</p>
            <p className="text-2xl leading-none text-green-600">
              {product.subPrices[selectedDuration]}&#8377;
            </p>
          </motion.div>

          <motion.div
            className="py-4 border-b border-gray-200 flex items-center justify-between"
            variants={itemVariants}
          >
            <p className="leading-4 text-gray-800 text-lg">Select Duration</p>
            <div>
              <select
                className="text-lg px-4"
                value={selectedDuration}
                onChange={(e) => handleDurationChange(e.target.value)}
              >
                {Object.keys(product.subPrices).map((duration) => (
                  <option key={duration} value={duration}>
                    {duration}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          <motion.div
            className="py-4 border-b border-gray-200"
            variants={itemVariants}
          >
            <p className="leading-4 text-gray-800 text-lg">Description</p>
            <p className="text-base leading-none text-gray-400 p-6">
              {product.description}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link
              to={`https://wa.me/9079179449?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gray-800 text-white font-bold py-4 rounded hover:bg-gray-700 mt-6"
            >
              <motion.span
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Buy Now
              </motion.span>
            </Link>
          </motion.div>

          <motion.div className="py-4" variants={itemVariants}>
            <p className="text-base leading-4 text-gray-600 mt-4">
              Service Code: {product.id}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <Process />
    </>
  );
};

export default ProductDetail;
