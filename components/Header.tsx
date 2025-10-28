import React from 'react';
// FIX: Using namespace import for react-router-dom to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import Logo from './Logo';

const { Link } = ReactRouterDOM;

interface HeaderProps {
  isHeaderActive: boolean;
  showLogo: boolean;
  useDarkTextInitially: boolean;
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ isHeaderActive, showLogo, useDarkTextInitially, onMenuToggle }) => {
  const headerBgClass = isHeaderActive ? 'bg-white shadow-md' : 'bg-transparent';
  
  const isTextDark = isHeaderActive || useDarkTextInitially;
  const colorClass = isTextDark ? 'text-gray-800' : 'text-white';
  const burgerBgClass = isTextDark ? 'bg-gray-800' : 'bg-white';
  const burgerHoverBgClass = isTextDark ? 'group-hover:bg-gray-600' : 'group-hover:bg-gray-300';
  
  const logoScaleClass = isHeaderActive ? 'scale-75' : 'scale-100';
  const paddingClass = isHeaderActive ? 'py-3 px-6 md:px-8' : 'py-6 px-6 md:px-8';

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 flex justify-between items-center transition-all duration-300 ease-in-out ${headerBgClass} ${colorClass} ${paddingClass}`}>
      {/* Logo container */}
      <div 
        className={`transition-all duration-300 ease-in-out transform-gpu ${logoScaleClass} origin-left ${showLogo ? 'opacity-100' : 'opacity-0'}`}
      >
        <Link to="/" className={!showLogo ? 'pointer-events-none' : ''}>
          <Logo />
        </Link>
      </div>
      
      {/* Menu button */}
      <button onClick={onMenuToggle} className="z-50 p-2 group">
        <div className="space-y-2">
          <span className={`block w-8 h-0.5 ${burgerBgClass} transition-transform duration-300 ${burgerHoverBgClass}`}></span>
          <span className={`block w-8 h-0.5 ${burgerBgClass} transition-transform duration-300 ${burgerHoverBgClass}`}></span>
          <span className={`block w-8 h-0.5 ${burgerBgClass} transition-transform duration-300 ${burgerHoverBgClass}`}></span>
        </div>
      </button>
    </header>
  );
};

export default Header;