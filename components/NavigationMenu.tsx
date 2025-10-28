import React, { useState } from 'react';
// FIX: Using namespace import for react-router-dom to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import { RESTAURANTS_DATA } from '../data';

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const { Link } = ReactRouterDOM;

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isOpen, onClose }) => {
  const [restaurantsOpen, setRestaurantsOpen] = useState(false);

  const NavLink: React.FC<{ to: string; children: React.ReactNode; isSub?: boolean }> = ({ to, children, isSub = false }) => (
    <Link 
      to={to} 
      onClick={onClose} 
      className={`block uppercase tracking-widest text-sm transition-colors duration-300 hover:text-[#c0a080] ${isSub ? 'py-2 px-4' : 'py-3'}`}
    >
      {children}
    </Link>
  );

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div className={`fixed top-0 right-0 h-full w-full max-w-sm bg-[#2d2d2d] text-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-6">
          <button onClick={onClose} className="text-3xl font-thin">&times;</button>
        </div>
        <nav className="p-8 space-y-2">
          <NavLink to="/book-shabbat">Book Shabbat</NavLink>
          <NavLink to="/about">About</NavLink>
          
          <div>
            <button onClick={() => setRestaurantsOpen(!restaurantsOpen)} className="w-full text-left uppercase tracking-widest text-sm py-3 flex justify-between items-center transition-colors duration-300 hover:text-[#c0a080]">
              <span>Menu</span>
              <span className={`transform transition-transform duration-200 ${restaurantsOpen ? 'rotate-180' : 'rotate-0'}`}>&#9662;</span>
            </button>
            {restaurantsOpen && (
              <div className="pl-4 mt-2 bg-[#3a3a3a] rounded">
                {RESTAURANTS_DATA.map(restaurant => (
                  <NavLink key={restaurant.id} to={`/restaurants/${restaurant.slug}`} isSub>{restaurant.name}</NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/private-events">Private Events</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          <div className="pt-8">
            <div className="border-t border-[#8c2b2b] w-1/2 mx-auto" />
          </div>

          <div className="flex justify-center pt-4">
             <a href="#" className="p-2 transition-opacity hover:opacity-75">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>

        </nav>
      </div>
    </>
  );
};

export default NavigationMenu;
