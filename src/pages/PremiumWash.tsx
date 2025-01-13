
import { Check, Clock } from 'lucide-react';
import React, { useEffect } from 'react';
const packages = [
  {
    name: "Premium Car Wash (Hatchback)",
    price: "400",
    duration: "per wash",
    time: "Estimated 1 Hour 30 Minutes",
    features: [
      "Washing at Doorstep",
      "Smart Pressure Wash",
      "pH Neutral Shampoo Cleaning",
      "Tire Cleaning & Polish",
      "Exterior Black Part Polishing",
      "Interior Vacuum Cleaning",
      "Interior Black Part Polishing",
      "Engine Cleaning & Polishing"
    ]
  },
  {
    name: "Premium Car Wash (Sedan)",
    price: "450",
    duration: "per wash",
    time: "Estimated 1 Hour 30 Minutes",
    features: [
      "Washing at Door Step",
      "Smart Pressure Wash",
      "pH Neutral Shampoo Cleaning",
      "Tire Cleaning & Polish",
      "Exterior Black Part Polishing",
      "Interior Vacuum Cleaning",
      "Interior Black Part Polishing",
      "Engine Cleaning & Polishing"
    ]
  },
  {
    name: "Premium Car Wash (SUV)",
    price: "550",
    duration: "per wash",
    time: "Estimated 1 Hour 30 Minutes",
    features: [
      "Washing at Door Step",
      "Smart Pressure Wash",
      "pH Neutral Shampoo Cleaning",
      "Tire Cleaning & Polish",
      "Exterior Black Part Polishing",
      "Interior Vacuum Cleaning",
      "Interior Black Part Polishing",
      "Engine Cleaning & Polishing"
    ]
  }
];

export default function PremiumWash() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Premium Wash Packages</h1>
          <p className="mt-4 text-xl text-gray-600">Professional washing services for all car types</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900">{pkg.name}</h2>
              <div className="flex items-center mt-2 text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>{pkg.time}</span>
              </div>
              <p className="mt-4">
                <span className="text-4xl font-bold">₹{pkg.price}</span>
                <span className="text-gray-500">/{pkg.duration}</span>
              </p>
              <ul className="mt-6 space-y-4">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="ml-3">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href='https://wa.me/918920230357'> <button className="mt-8 w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600">
                Book Now
              </button></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}