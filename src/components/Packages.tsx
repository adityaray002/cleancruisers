// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Car, Shield, Sparkles } from 'lucide-react';

// export default function Packages() {
//   const categories = [
//     {
//       title: "Daily Car Wash",
//       icon: <Car className="h-9 w-9 text-green-500" />,
//       image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80",
//       link: "/daily-wash"
//     },
//     {
//       title: "Premium Car Wash",
//       icon: <Shield className="h-9 w-9 text-green-500" />,
//       image: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80",
//       link: "/premium-wash"
//     },
//     {
//       title: "Complete Car Spa",
//       icon: <Sparkles className="h-9 w-9 text-green-500 " />,
//       image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
//       link: "/car-spa"
//     },
//     {
//       title: "Complete Bike Spa",
//       icon: <Sparkles className="h-9 w-9 text-green-500 " />,
//       image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
//       link: "/bike-spa"
//     }
//   ];

//   return (
//     <div id="services" className="py-24 bg-gray-50 ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//             Our Services
//           </h2>
//           <p className="mt-4 text-xl text-gray-600">
//             Choose from our range of professional car care services
//           </p>
//         </div>

//         <div className="mt-20 grid grid-cols-1 gap-12 md:grid-cols-3">
//           {categories.map((category, index) => (
//             <Link 
//               to={category.link} 
//               key={index}
//               className="group relative"
//             >
//               <div className="aspect-square rounded-full overflow-hidden relative transform transition-transform duration-300 group-hover:scale-105">
//                 <img
//                   src={category.image}
//                   alt={category.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center">
//                   <div className="bg-white p-4 rounded-full mb-4">
//                     {category.icon}
//                   </div>
//                   <h3 className="text-2xl font-bold text-white">{category.title}</h3>
//                   <p className="text-green-400 mt-2">Click to view packages</p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import { Car, Shield, Sparkles } from 'lucide-react';

export default function Packages() {
  const categories = [
    {
      title: "Daily Car Wash",
      icon: <Car className="h-9 w-9 text-green-500" />,
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80",
      link: "/daily-wash"
    },
    {
      title: "Premium Car Wash",
      icon: <Shield className="h-9 w-9 text-green-500" />,
      image: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&fit=crop&q=80",
      link: "/premium-wash"
    },
    {
      title: "Complete Car Spa",
      icon: <Sparkles className="h-9 w-9 text-green-500 " />,
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
      link: "/car-spa"
    },
    {
      title: "Complete Bike Spa",
      icon: <Sparkles className="h-9 w-9 text-green-500 " />,
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
      link: "/bike-spa"
    }
  ];

  return (
    <div id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose from our range of professional car care services
          </p>
        </div>

        {/* Horizontal Layout */}
        <div className="flex flex-wrap justify-center gap-5">
  {categories.map((category, index) => (
    <Link 
      to={category.link} 
      key={index}
      className="group relative flex flex-col items-center"
      style={{
        width: `calc((100% - ${(categories.length - 1) * 20}px) / ${Math.min(categories.length, 5)})`,
        maxWidth: "360px",
        minWidth: "220px",
      }}
    >
      <div
        className="aspect-square rounded-full overflow-hidden relative transform transition-transform duration-300 group-hover:scale-105"
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center">
          <div className="bg-white p-4 rounded-full mb-4">
            {category.icon}
          </div>
          <h3 className="text-lg font-bold text-white text-center">
            {category.title}
          </h3>
          <p className="text-green-400 mt-2 text-sm">Click to view packages</p>
        </div>
      </div>
    </Link>
  ))}
</div>





      </div>
    </div>
  );
}
