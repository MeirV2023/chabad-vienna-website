import React from 'react';
// FIX: Using namespace import for react-router-dom to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import OurRestaurantsPage from './pages/OurRestaurantsPage';

const { HashRouter, Routes, Route } = ReactRouterDOM;

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/restaurants" element={<OurRestaurantsPage />} />
          <Route path="/restaurants/:slug" element={<RestaurantDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;