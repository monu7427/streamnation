import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="text-slate-500">
              <li>
               <Link to="/">Home</Link>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/RefundPolicy">Refund policy</a>
              </li>
             
             
            </ul>
          </div>

          {/* Customer Trust and Growth Highlights */}
          <div>
            <h4 className="text-xl font-bold mb-4">Customer Trust and Growth Highlights</h4>
            <p>
              Over the past three years, we have had the privilege of serving an ever-growing customer base, exceeding 10,000 satisfied clients. Our commitment is evident in the reception of more than 500 daily orders, a testament to the trust and satisfaction our customers place in us. We take pride in maintaining a consistent 100% satisfaction rate, reflecting our dedication to delivering exceptional service and building lasting trust.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <p className="text-slate-500">Pratapnagar, Jaipur, Rajasthan</p>
            <p className="text-slate-500 cursor-pointer">+91 9351655497</p>
            <p className="text-slate-500 cursor-pointer">streamnation_12@gmail.com</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-8">
          <a href="https://wa.me/9351655497?text= hey.. StreamNation OTT" className="mr-4">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
          
          <a href="https://www.instagram.com/streamnation_12/" className="mr-4">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          
        </div>
      </div>
      <div className="text-center mt-8">
        © 2023 by Streamnation.xyz and Manoj Sharma
      </div>
    </footer>
  );
};

export default Footer;
