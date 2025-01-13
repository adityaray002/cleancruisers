import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Shivam Pandey',
    role: 'Regular Customer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'The attention to detail is amazing. My car looks brand new every time!',
    rating: 5
  },
  {
    name: 'Shweta Roy',
    role: 'Regular Customer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Professional service at my doorstep. Couldn\'t ask for more!',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Don't just take our word for it
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-green-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mt-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}