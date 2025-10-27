import React, { useState } from 'react';
import { INTERIOR_GALLERY_IMAGES, MENU_GALLERY_IMAGES } from '../data';
import Lightbox from '../components/Lightbox';
import type { GalleryImage } from '../types';

const GalleryPage: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState<GalleryImage[]>([]);
  const [startIndex, setStartIndex] = useState(0);

  const interiorImages: GalleryImage[] = INTERIOR_GALLERY_IMAGES;
  const menuImages: GalleryImage[] = MENU_GALLERY_IMAGES;

  const openLightbox = (images: GalleryImage[], index: number) => {
    setLightboxImages(images);
    setStartIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const galleryCategories = [
    {
      title: 'Interior',
      coverImage: interiorImages[0],
      images: interiorImages,
    },
    {
      title: 'Menu',
      coverImage: menuImages[1], // The drink photo
      images: menuImages,
    },
  ];

  return (
    <>
      <div className="bg-[#f4f4f4] text-gray-800 min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl mb-4 tracking-widest uppercase">Gallery</h1>
          <div className="w-24 h-px bg-[#8c2b2b] mx-auto mb-16"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {galleryCategories.map(category => (
              <div key={category.title}>
                <button onClick={() => openLightbox(category.images, 0)} className="group w-full text-center">
                  <div className="overflow-hidden">
                    <img src={category.coverImage.src} alt={category.coverImage.alt} className="w-full h-80 object-cover transform transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h2 className="font-display text-3xl mt-6 mb-2 tracking-widest uppercase">{category.title}</h2>
                  <div className="w-16 h-px bg-[#8c2b2b] mx-auto transition-all duration-300 group-hover:w-24"></div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isLightboxOpen && (
        <Lightbox
          images={lightboxImages}
          startIndex={startIndex}
          onClose={closeLightbox}
        />
      )}
    </>
  );
};

export default GalleryPage;