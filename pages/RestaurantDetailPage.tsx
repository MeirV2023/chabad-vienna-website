import React, { useState, useEffect } from 'react';
// FIX: Using namespace import for react-router-dom to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import { RESTAURANTS_DATA } from '../data';
import type { Restaurant } from '../types';

const { useParams, Link, useNavigate } = ReactRouterDOM;

const RestaurantDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [activeMenu, setActiveMenu] = useState<string>('');

  useEffect(() => {
    const foundRestaurant = RESTAURANTS_DATA.find(r => r.slug === slug);
    if (foundRestaurant) {
      setRestaurant(foundRestaurant);
      if (foundRestaurant.menus.length > 0) {
        setActiveMenu(foundRestaurant.menus[0].type);
      }
    } else {
      // Handle case where restaurant not found, maybe redirect
      navigate('/restaurants');
    }
  }, [slug, navigate]);

  if (!restaurant) {
    return <div className="h-screen flex items-center justify-center bg-[#1a1a1a] text-white">Loading...</div>;
  }
  
  const currentMenu = restaurant.menus.find(m => m.type === activeMenu);

  return (
    <div className="bg-[#1a1a1a] text-white">
      {/* Hero Section */}
      <div className="h-[70vh] relative flex items-center justify-center flex-col">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${restaurant.heroImage})` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center">
          <h1 className="font-display text-6xl md:text-8xl tracking-widest text-white uppercase">{restaurant.name}</h1>
          <div className="mt-12 grid grid-cols-2 gap-2 px-4">
              <button onClick={() => document.getElementById('menus')?.scrollIntoView({ behavior: 'smooth' })} className="nav-button">View Menus</button>
              <Link to="/" className="nav-button bg-[#8c2b2b] hover:bg-[#a33a3a]">Book Shabbat</Link>
          </div>
        </div>
      </div>
      
      {/* Menus Section */}
      <div id="menus" className="bg-[#f4f4f4] text-gray-800 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl mb-4 tracking-widest uppercase">Menus</h2>
          <div className="w-24 h-px bg-[#8c2b2b] mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {restaurant.menus.map(menu => (
              <button 
                key={menu.type} 
                onClick={() => setActiveMenu(menu.type)}
                className={`px-6 py-2 uppercase text-sm tracking-wider border transition-colors duration-300 ${activeMenu === menu.type ? 'bg-[#8c2b2b] text-white border-[#8c2b2b]' : 'bg-transparent text-gray-700 border-gray-400 hover:bg-gray-200'}`}
              >
                {menu.type}
              </button>
            ))}
          </div>

          {currentMenu && (
            <div>
              {currentMenu.categories.map((category, index) => (
                <div key={index} className="mb-12">
                  <h3 className="font-display text-3xl mb-2 tracking-widest">{category.categoryTitle}</h3>
                  <div className="w-20 h-px bg-[#8c2b2b] mx-auto mb-6"></div>
                  <div className="space-y-4">
                    {category.items.map(item => (
                      <div key={item.name}>
                        <div className="flex justify-between items-baseline">
                          <h4 className="text-lg font-medium tracking-wide text-left">{item.name}</h4>
                          {typeof item.price === 'number' && <span className="text-lg font-medium">{item.price}</span>}
                        </div>
                        {item.description && <p className="text-gray-500 text-sm text-left">{item.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Hours & Location Section */}
      <div id="hours" className="bg-[#f4f4f4] text-gray-800 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl mb-4 tracking-widest uppercase">Hours & Location</h2>
            <div className="w-24 h-px bg-[#8c2b2b] mx-auto mb-8"></div>
            <div className="text-gray-600 mb-8 whitespace-pre-line">{restaurant.address}</div>
            <div className="text-gray-600 mb-4"><a href={`tel:${restaurant.phone}`} className="hover:text-[#8c2b2b]">{restaurant.phone}</a></div>
            <div className="text-gray-600 mb-12"><a href={`mailto:${restaurant.email}`} className="hover:text-[#8c2b2b]">{restaurant.email}</a></div>
            <h3 className="font-display text-2xl mb-4 tracking-wider uppercase">Hours</h3>
            {restaurant.hours.map(h => (
              <p key={h.day} className="text-gray-600">{h.day}: {h.time}</p>
            ))}
        </div>
      </div>
      
       <style>{`
          .nav-button {
              display: inline-block;
              padding: 0.75rem 1rem;
              background-color: rgba(140, 43, 43, 0.8);
              color: white;
              text-transform: uppercase;
              font-size: 0.75rem;
              letter-spacing: 0.1em;
              transition: background-color 0.3s;
              border: 1px solid rgba(255, 255, 255, 0.2);
              backdrop-filter: blur(2px);
          }
          .nav-button:hover {
              background-color: rgba(163, 58, 58, 0.9);
          }
       `}</style>
    </div>
  );
};

export default RestaurantDetailPage;