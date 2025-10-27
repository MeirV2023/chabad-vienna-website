import React, { useState, useEffect } from 'react';
import type { GalleryImage } from '../types';

interface LightboxProps {
  images: GalleryImage[];
  startIndex: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center" onClick={onClose} role="dialog" aria-modal="true">
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        className="absolute top-4 right-6 text-white text-5xl font-thin hover:opacity-75 transition-opacity"
        aria-label="Close gallery"
      >
        &times;
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); showPrev(); }}
        className="absolute left-4 md:left-10 text-white text-4xl p-2 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-colors"
        aria-label="Previous image"
      >
        &#8249;
      </button>

      <div className="relative w-full max-w-4xl h-full max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-contain"
        />
        <p className="text-center text-white mt-2 text-sm tracking-wider">{images[currentIndex].alt}</p>
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); showNext(); }}
        className="absolute right-4 md:right-10 text-white text-4xl p-2 bg-black bg-opacity-30 rounded-full hover:bg-opacity-50 transition-colors"
        aria-label="Next image"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Lightbox;
