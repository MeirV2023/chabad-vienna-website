import React from 'react';
import { RESTAURANTS_DATA } from '../data';
import { Link } from 'react-router-dom';

const OurRestaurantsPage: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] text-white">
      <div className="h-[60vh] relative flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1579027989536-b7b1f875659b?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <h1 className="relative z-10 font-display text-5xl md:text-7xl tracking-wider text-white uppercase">
          Menu
        </h1>
      </div>
      
      <div className="bg-[#f4f4f4] text-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {RESTAURANTS_DATA.map(restaurant => (
            <Link to={`/restaurants/${restaurant.slug}`} key={restaurant.id} className="group block text-center">
              <div className="overflow-hidden">
                <img src={restaurant.heroImage} alt={restaurant.name} className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110" />
              </div>
              <h2 className="font-display text-3xl mt-6 mb-2 tracking-widest uppercase">{restaurant.name}</h2>
              <div className="w-16 h-px bg-[#8c2b2b] mx-auto transition-all duration-300 group-hover:w-24"></div>
              <p className="mt-4 text-gray-500 whitespace-pre-line">{restaurant.address.split('\n')[0]}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurRestaurantsPage;
