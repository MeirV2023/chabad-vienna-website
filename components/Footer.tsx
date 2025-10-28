import React from 'react';
// FIX: Using namespace import for react-router-dom to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import { SmallLogo } from './Logo';

const { Link } = ReactRouterDOM;

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f4f4f4] text-gray-700 py-12 px-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center mb-6">
            <Link to="/">
                <div className="text-gray-800 text-center w-24">
                     <svg viewBox="0 0 100 100" className="w-full h-auto font-display">
                        <text x="50" y="35" textAnchor="middle" fontSize="40" fontWeight="bold" fill="currentColor">C</text>
                        <text x="50" y="70" textAnchor="middle" fontSize="40" fontWeight="bold" fill="currentColor">O</text>
                        <line x1="45" y1="50" x2="55" y2="50" stroke="currentColor" strokeWidth="1"/>
                    </svg>
                    <span className="text-[8px] tracking-wider font-light leading-none block -mt-1">
                        Chabad Opera
                    </span>
                </div>
            </Link>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="p-2 transition-opacity hover:opacity-75">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
        </div>
        <p className="text-xs tracking-wider">&copy; {new Date().getFullYear()} Chabad Opera. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
