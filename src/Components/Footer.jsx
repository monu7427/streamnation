import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Follow Us */}
          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faYoutube} size="lg" />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="text-slate-500">123, Agarbatti Street,</p>
            <p className="text-slate-500">Aromatic City,</p>
            <p className="text-slate-500 cursor-pointer">+91 01234 56789</p>
            <p className="text-slate-500 cursor-pointer">
              contact@agarbattibusiness.com
            </p>
          </div>

          {/* Agarbatti Types */}
          <div>
            <h4 className="text-xl font-bold mb-4">Agarbatti Types</h4>
            <ul className="text-slate-500 cursor-pointer">
              <li>Rose</li>
              <li>Jasmine</li>
              <li>Lavender</li>
              <li>Sandalwood</li>
              <li>Mixed Fragrance</li>
            </ul>
          </div>
        </div>

        {/* Help Links */}
        <div className="mt-8">
          <h4 className="text-xl font-bold mb-4">Help</h4>
          <ul className="text-slate-500 cursor-pointer">
            <li>Ordering & Payment</li>
            <li>Shipping & Delivery</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
