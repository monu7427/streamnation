import React from 'react';
import { Link } from 'react-router-dom';

// Define the products array
export const products = [
  {
    id: 1,
    name: 'Netflix 4k (Our Mail)',
    image: 'https://about.netflix.com/images/meta/netflix-symbol-black.png',
    description: 'Netflix 4k on our mail id , single screen login',
    price: '120',
    subPrices: {
      '1month': '125',
      '3month': '350',
      '6month': '690'
    }
  },
  {
    id: 2,
    name: 'Prime Video 4k (Our Mail)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Amazon_Prime_Video_blue_logo_1.svg/2048px-Amazon_Prime_Video_blue_logo_1.svg.png',
    description: 'Primme video 4k , single screen login',
    price: '25',
    subPrices: {
      '1month': '25',
      '12month': '179',
      '6month': '120'
    }
  },
  {
    id: 3,
    name: 'Sony Liv (Your Number)',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLj9bFFpfnB1xAESlmJ2IK3Ixa8XgjYiH0oRjU6Z4jlw&s',
    description: 'Sony liv (premium) on yournumber , You can login multiple screen ',
    price: '300',
    subPrices: {
      '6month': '300',
      '12month': '549',
      
    }
  },
  {
    id: 4,
    name: 'YouTube Premium (Your Personal Mail)',
    image: 'https://logowik.com/content/uploads/images/youtube-premium8029.logowik.com.webp',
    description: 'Youtube premium on you personal mail , we will add in youtube family you can ennjoye youtube with your mail id',
    price: '190',
    subPrices: {
      '3month': '190',
      '6month': '370',
      '12month' : '720'
      
    }
  },
  {
    id: 5,
    name: 'Zee 5 (Your Number)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Zee5-official-logo.jpeg',
    description: '12months Zee 5 HD on your number ,you can login multiple screen',
    price: '279',
    subPrices: {
     
      '12month' : '279'
      
    }
  },
  {
    id: 6,
    name: 'Zee 5 (Our Number)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Zee5-official-logo.jpeg',
    description: '12months Zee 5 HD on our number ,you can login single screen acounts',
    price: '179',
    subPrices: {
     
      '12month' : '179'
      
    }
  },
  {
    id: 7,
    name: 'Disney Hotstar 4k (Your Number)',
    image: 'https://i.gadgets360cdn.com/large/disney_plus_hotstar_logo_1583901149861.jpg',
    description: '12months Disney Hotstar 4k on your number ,you can login multiple screen',
    price: '1099',
    subPrices: {
     
      '12month' : '1099'
      
    }
  },
  {
    id: 8,
    name: 'Disney Hotstar 4k (Our Number)',
    image: 'https://i.gadgets360cdn.com/large/disney_plus_hotstar_logo_1583901149861.jpg',
    description: '12months Disney Hotstar 4k on our number ,you can login single screen acounts',
    price: '449',
    subPrices: {
      
      '12month' : '449'
      
    }
  },
  {
    id: 9,
    name: 'Amazon Prime (Personal)',
    image: 'https://www.shutterstock.com/image-photo/montreal-canada-july-30-2017-260nw-706518910.jpg',
    description: ' Subscription will be provided on your 100% personal subscription, This plan offers Amazon shopping, Prime Video, Amazon music, For activation, customers need to provide an Amazon ID and password to our team',
    price: '399',
    subPrices: {
      '6month' : '399',
      '12month' : '649'
      
    }
  },
  {
    id: 10,
    name: 'Spotify',
    image: 'https://www.pngall.com/wp-content/uploads/13/Spotify-Logo-PNG-HD-Image.png',
    description: 'This plan offers access to Spotify Premium for 3 months at a price of ₹119. With this subscription, you ll get adfree access to millions of songs, albums, and playlists, along with the ability to play music offline and skip tracks as much as you want.',
    price: '119',
    subPrices: {
      
      '3month' : '119'
      
    }
  },
  {
    id: 11,
    name: 'Canva Pro',
    image: 'https://www.rdkey.shop/cdn/shop/articles/14.png?v=1704782962',
    description: 'On your Id. No password required. Activation through link. 100% safe. Take your design game to the next level with Canva  1-year plan at an amazing price of just 149 Rs. With this subscription, you ll have access to a vast library of templates, images, and etc.',
    price: '149',
    subPrices: {
      
      '12month' : '149'
      
    }
  },
  {
    id: 12,
    name: 'Linkedin Business premium',
    image: 'https://lpws.pro/wp-content/uploads/stop-linkedin-premium.jpg',
    description: 'Experience the power of Linked Business Premium! For new users, get 6 months of premium access at an unbeatable price of just ₹559. For existing LinkedIn Premium users, unlock a full year of premium benefits for only ₹4700. Take advantage of this exclusive offer today and elevate your professional journey!',
    price: '549',
    subPrices: {
      
      '6month' : '549',
      '12month' : '4700'
      
      
    }
  },
  
  // Add more product objects here
];

const OurProduct = () => {
  return (
    <section className="container mx-auto py-16 mb-4">
      <h2 className="text-3xl font-bold mb-8 bg-black text-white p-9 flex align-center justify-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 m-14">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="text-black">
            <div className="border rounded p-4 cursor-pointer">
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">starting from</p>
              <p className="text-blue-500 font-bold text-lg">{product.price}/-</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default OurProduct;
