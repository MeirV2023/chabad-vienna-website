import React, { useState, useEffect } from 'react';
// FIX: Using namespace import for react-router-dom to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import Header from './Header';
import NavigationMenu from './NavigationMenu';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const { useLocation } = ReactRouterDOM;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 10; // Trigger change early
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Set initial state on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // Pages with a full-screen hero image where the header is initially transparent.
  const pagesWithHero = ['/', '/private-events'];
  const hasHeroImage = pagesWithHero.includes(location.pathname) || location.pathname.startsWith('/restaurants');

  // Header is "active" (solid background) only when scrolled AND not on the home page.
  const isHeaderActive = isScrolled && location.pathname !== '/';
  
  // On pages without a hero, we need dark text from the start for visibility.
  const useDarkTextInitially = !hasHeroImage;
  
  // Define on which pages the logo should appear in the header and transform.
  const pagesWithTransformingLogo = ['/gallery', '/contact'];
  const isRestaurantDetail = location.pathname.startsWith('/restaurants/') && location.pathname.split('/').length > 2;
  const showLogoInHeader = pagesWithTransformingLogo.includes(location.pathname) || isRestaurantDetail;


  return (
    <div className="relative min-h-screen bg-[#1a1a1a]">
      <Header 
        isHeaderActive={isHeaderActive}
        showLogo={showLogoInHeader}
        useDarkTextInitially={useDarkTextInitially}
        onMenuToggle={() => setIsMenuOpen(true)}
      />
      <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;