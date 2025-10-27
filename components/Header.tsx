import React from 'react';

interface HeaderProps {
  onMenuToggle: () => void;
  useDarkContent: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, useDarkContent }) => {
  const headerColorClass = useDarkContent ? 'text-gray-800' : 'text-white';
  const burgerBgClass = useDarkContent ? 'bg-gray-800' : 'bg-white';
  const burgerHoverBgClass = useDarkContent ? 'group-hover:bg-gray-600' : 'group-hover:bg-gray-300';

  return (
    <header className={`fixed top-0 right-0 z-40 p-6 md:p-8 transition-colors duration-300 ${headerColorClass}`}>
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