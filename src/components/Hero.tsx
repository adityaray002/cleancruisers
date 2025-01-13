import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative pt-16">
      <div className="absolute inset-0">
        <img
          className="w-full h-[600px] object-cover"
          src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80"
          alt="Car being washed"
        />
        <div className="absolute inset-0 bg-black opacity-70 h-[600px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Your Car Deserves<br />
          <span className="text-green-500">the Best Shine!</span>
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Professional car washing services at your doorstep. Experience the premium care your vehicle deserves with CleanCruisers.
        </p>
        <div className="mt-10">
          <a href="#services" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-500 hover:bg-green-600">
            Explore Packages
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}