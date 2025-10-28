import React from 'react';
// FIX: Using namespace import for react-router-dom to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage';
import ContactPage from './pages/ContactPage';
import GalleryPage from './pages/GalleryPage';
import OurRestaurantsPage from './pages/OurRestaurantsPage';
import PrivateEventsPage from './pages/PrivateEventsPage';
import BookShabbatPage from './pages/BookShabbatPage';

const { HashRouter, Routes, Route } = ReactRouterDOM;

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/restaurants" element={<OurRestaurantsPage />} />
          <Route path="/restaurants/:slug" element={<RestaurantDetailPage />} />
          <Route path="/private-events" element={<PrivateEventsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/book-shabbat" element={<BookShabbatPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
