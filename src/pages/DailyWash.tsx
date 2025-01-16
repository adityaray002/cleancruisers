
import { Check } from 'lucide-react';
import React, { useEffect } from 'react';
const packages = [
  {
    name: "Daily Car Wash",
    price: "799",
    duration: "per month",
    features: [
      "Washing at Door Step",
      "26 Days Exterior Cleaning (Dusting)",
      "Tire Cleaning",
      "Include 1 Foam Wash + Interior Cleaning + Polishing"
    ],
    bookingMessage: `https://wa.me/918920230357?text=Hi%20CleanCruisers,%20I%20would%20like%20to%20book%20Daily%20Car%20Wash%20package%20for%20₹799%20per%20month.`
  },
  {
    name: "Premium Daily Car Wash",
    price: "999",
    duration: "per month",
    features: [
      "Washing at Door Step",
      "26 Days Exterior Cleaning (Dusting)",
      "Tire Cleaning",
      "Include 2 Foam Wash + Interior Cleaning + Polishing"
    ],
    bookingMessage: `https://wa.me/918920230357?text=Hi%20CleanCruisers,%20I%20would%20like%20to%20book%20Premium%20Daily%20Car%20Wash%20package%20for%20₹999%20per%20month.`
  }
];

export default function DailyWash() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">Daily Wash Packages</h1>
          <p className="mt-4 text-xl text-gray-600">Choose your daily car wash plan</p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900">{pkg.name}</h2>
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
             <a href= {pkg.bookingMessage}> <button className="mt-8 w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600">
               Book Now
              </button></a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}