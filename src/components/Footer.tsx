import React from 'react';
import { Car, Facebook, Twitter, Instagram } from 'lucide-react';
import logo from '../assets/logo.png';
export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              {/* <Car className="h-8 w-8 text-green-500" /> */}
              <img className="h-10 w-10 " src={logo} alt='CleanCruisers Logo' />
              <span className="ml-2 text-white font-bold text-xl">CleanCruisers</span>
            </div>
            <p className="mt-4 text-gray-400">
              Professional car washing services at your doorstep. Experience the premium care your vehicle deserves.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-green-500">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-green-500">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-green-500">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} CleanCruisers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}