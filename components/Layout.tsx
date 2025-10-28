import React, { useState, useEffect } from 'react';
// FIX: Using namespace import for react-router-dom to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import Header from './Header';
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';
import Logo from './Logo';

interface LayoutProps {
  children: React.ReactNode;
}

const { Link, useLocation } = ReactRouterDOM;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 50;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Pages with a full-screen hero image.
  const pagesWithHero = ['/', '/about', '/private-events'];
  const hasHeroImage = pagesWithHero.includes(location.pathname) || location.pathname.startsWith('/restaurants');

  // On pages without a hero, content is dark. On pages with a hero, it becomes dark after scrolling.
  const useDarkContent = !hasHeroImage || isScrolled;
  const colorClass = useDarkContent ? 'text-gray-800' : 'text-white';
  
  const isHomePage = location.pathname === '/';

  return (
    <div className="relative min-h-screen bg-[#1a1a1a]">
      {/* The fixed logo is hidden on the homepage to avoid duplication */}
      {!isHomePage && (
        <div className={`fixed top-0 left-0 z-40 p-6 md:p-8 ${colorClass} transition-colors duration-300`}>
          <Link to="/">
            <Logo />
          </Link>
        </div>
      )}

      <Header onMenuToggle={() => setIsMenuOpen(true)} useDarkContent={useDarkContent} />
      <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
