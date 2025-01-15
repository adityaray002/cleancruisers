import React, { useState } from 'react';
 import { Car, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
             {/* <Car className="h-8 w-8 text-green-500" />  */}
            <img className="h-10 w-10 " src={logo} alt='CleanCruisers Logo' />
            <span className="ml-2 text-white font-bold text-xl">CleanCruisers</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-green-500">Home</a>
            <a href="#services" className="text-gray-300 hover:text-green-500">Services</a>
            <a href="#contact" className="text-gray-300 hover:text-green-500">Contact</a>
            <a href= "https://wa.me/918920230357?text=Hi%20CleanCruisers,%20I%20would%20like%20to%20book%20know%20more%20about%20your%20services."><button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Book Now
            </button>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
            <a href="#home" className="text-gray-300 block px-3 py-2 hover:text-green-500">Home</a>
            <a href="#services" className="text-gray-300 block px-3 py-2 hover:text-green-500">Services</a>
            <a href="#contact" className="text-gray-300 block px-3 py-2 hover:text-green-500">Contact</a>
            <a href= "https://wa.me/918920230357?text=Hi%20CleanCruisers,%20I%20would%20like%20to%20book%20know%20more%20about%20your%20services."><button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
              Book Now
            </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}