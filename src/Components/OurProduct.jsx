import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const products = [
  {
    id: 1,
    name: 'Product 1',
    image: '/images/product1.jpg',
    description: 'Agarbatti, also known as incense sticks, are fragrant sticks made primarily from aromatic plant materials combined with essential oils. They have been used for centuries in various cultures for their aromatic and therapeutic properties.',
    price: '120'
  },
  {
    id: 2,
    name: 'Product 2',
    image: '/images/product2.jpg',
    description: 'Description for Product 2',
    price: '330'
  },
  {
    id: 3,
    name: 'Product 3',
    image: '/images/product3.jpg',
    description: 'Description for Product 3',
    price: '225'
  },
  {
    id: 4,
    name: 'Product 4',
    image: '/images/product4.jpg',
    description: 'Description for Product 4',
    price: '895'
  },
  {
    id: 5,
    name: 'Product 5',
    image: '/images/product5.jpg',
    description: 'Description for Product 5',
    price: '340'
  },
  {
    id: 6,
    name: 'Product 6',
    image: '/images/product6.jpg',
    description: 'Description for Product 6',
    price: '250'
  },
  {
    id: 7,
    name: 'Product 7',
    image: '/images/product1.jpg',
    description: 'Description for Product 7',
    price: '225'
  },
  {
    id: 8,
    name: 'Product 8',
    image: '/images/product2.jpg',
    description: 'Description for Product 8',
    price: '895'
  },
  {
    id: 9,
    name: 'Product 9',
    image: '/images/product3.jpg',
    description: 'Description for Product 9',
    price: '340'
  },
  {
    id: 10,
    name: 'Product 10',
    image: '/images/product4.jpg',
    description: 'Description for Product 10',
    price: '250'
  },
  {
    id: 11,
    name: 'Product 10',
    image: '/images/product5.jpg',
    description: 'Description for Product 10',
    price: '250'
  },
  {
    id: 12,
    name: 'Product 10',
    image: '/images/product6.jpg',
    description: 'Description for Product 10',
    price: '250'
  },
  {
    id: 13,
    name: 'Product 10',
    image: '/images/product1.jpg',
    description: 'Description for Product 10',
    price: '250'
  },
  {
    id: 14,
    name: 'Product 10',
    image: '/images/product2.jpg',
    description: 'Description for Product 10',
    price: '250'
  },
  {
    id: 15,
    name: 'Product 10',
    image: '/images/product3.jpg',
    description: 'Description for Product 10',
    price: '250'
  },
  {
    id: 16,
    name: 'Product 10',
    image: '/images/product4.jpg',
    description: 'Description for Product 10',
    price: '250'
  },
  {
    id: 17,
    name: 'Product 10',
    image: '/images/product5.jpg',
    description: 'Description for Product 10',
    price: '250'
  },
  {
    id: 18,
    name: 'Product 10',
    image: '/images/product6.jpg',
    description: 'Description for Product 10',
    price: '250'
  },
  {
    id: 19,
    name: 'Product 10',
    image: '/images/product1.jpg',
    description: 'Description for Product 10',
    price: '250'
  },
  {
    id: 20,
    name: 'Product 10',
    image: '/images/product2.jpg',
    description: 'Description for Product 10',
    price: '250'
  },
];

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + '...';
};

const OurProduct = ({ count }) => {
  const selectedProducts = products.slice(0, count);

  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (productId) => {
    if (expandedIds.includes(productId)) {
      setExpandedIds(expandedIds.filter(id => id !== productId));
    } else {
      setExpandedIds([...expandedIds, productId]);
    }
  };

  return (
    <section className="container mx-auto py-16 mb-4">
      <h2 className="text-3xl font-bold mb-8 bg-black text-white p-9 flex align-center justify-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-11 m-14">
        {selectedProducts.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="text-black">
            <div className="border rounded p-4 cursor-pointer">
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">
                {expandedIds.includes(product.id) ? product.description : truncateText(product.description, 100)}
                {product.description.length > 100 && (
                  <button
                    className="text-blue-500 hover:underline focus:outline-none"
                    onClick={() => toggleExpand(product.id)}
                  >
                    {expandedIds.includes(product.id) ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </p>
              <p className="text-red-500 font-bold">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurProduct;
