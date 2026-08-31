
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import Logo from "/LOGOFINAL.png";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-black text-white py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo & Social */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="CleanCruisers Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-white">CleanCruisers</span>
          </div>
          <p className="text-sm text-gray-400">Your trusted doorstep car wash partner.</p>
          <div className="flex space-x-4 mt-2">
            <a href="https://www.instagram.com/cleancruisers.in?igsh=MTNtbnI1bWl0ZWoyYQ==" className="text-gray-400 hover:text-green-400"><FaInstagram /></a>
            <a href="https://www.facebook.com/share/1EUVLn1QoN/" className="text-gray-400 hover:text-green-400"><FaFacebookF /></a>
            <a href="https://wa.me/918920230357" className="text-gray-400 hover:text-green-400"><FaWhatsapp /></a>
            <a href="https://www.linkedin.com/company/cleancruisers/about/" className="text-gray-400 hover:text-green-400"><FaLinkedin /></a>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-green-400 font-semibold mb-4 text-base">Pages</h4>
          <ul className="space-y-2">
            <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-gray-400 hover:text-white text-sm">Home</button></li>
            <li><a href="/booking" className="text-gray-400 hover:text-white text-sm">Booking</a></li>
            <li><button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white text-sm">About Us</button></li>
            <li><a href="/blog" className="text-gray-400 hover:text-white text-sm">Blog</a></li>
            <li><button onClick={() => scrollToSection('contact')} className="text-gray-400 hover:text-white text-sm">Contact</button></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-green-400 font-semibold mb-4 text-base">Services</h4>
          <ul className="space-y-2">
            <li><button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white text-sm">Premium Doorstep Car Wash</button></li>
            <li><button onClick={() => {
              sessionStorage.setItem('selectedServiceType', 'premium-addons');
              window.location.href = '/booking';
            }} className="text-gray-400 hover:text-white text-sm">Complete Car Care</button></li>
          </ul>

          <h4 className="text-green-400 font-semibold mt-6 mb-4 text-base">Areas We Serve</h4>
          <ul className="space-y-2">
            <li><a href="/car-wash-in-dwarka" className="text-gray-400 hover:text-white text-sm">Car Wash in Dwarka</a></li>
            <li><a href="/car-wash-services-in-janakpuri" className="text-gray-400 hover:text-white text-sm">Car Wash in Janakpuri</a></li>
            <li><a href="/car-wash-in-south-delhi/" className="text-gray-400 hover:text-white text-sm">Car Wash in South Delhi</a></li>
            <li><a href="/car-wash-in-new-delhi/" className="text-gray-400 hover:text-white text-sm">Car Wash in New Delhi</a></li>
            <li><a href="/doorstep-car-wash-services-in-east-delhi/" className="text-gray-400 hover:text-white text-sm">Car Wash in East Delhi</a></li>
            <li><a href="/car-wash-in-noida/" className="text-gray-400 hover:text-white text-sm">Car Wash in Noida</a></li>
            <li><a href="/car-wash-in-gurgaon/" className="text-gray-400 hover:text-white text-sm">Car Wash in Gurgaon</a></li>
            <li><a href="/car-wash-in-punjabi-bagh/" className="text-gray-400 hover:text-white text-sm">Car Wash in Punjabi Bagh</a></li>
            <li><a href="/car-wash-in-tilak-nagar/" className="text-gray-400 hover:text-white text-sm">Car Wash in Tilak Nagar</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-green-400 font-semibold mb-4 text-base">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 Plot No. 66, Upper Ground Floor A-Block,</li>
            <li>Bhagwati Garden Road, Uttam Nagar</li>
            <li>New Delhi - 110059, India</li>
            <li>📞 +91 89202 30357</li>
            <li>📧 cleancruisers.in@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
        © 2025 CleanCruisers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
