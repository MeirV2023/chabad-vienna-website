import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] text-white">
      <div className="h-[60vh] relative flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <h1 className="relative z-10 font-display text-5xl md:text-7xl tracking-wider text-white">
          ABOUT CHABAD OPERA
        </h1>
      </div>
      
      <div className="bg-[#f4f4f4] text-gray-800 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl mb-4 tracking-widest">OUR PHILOSOPHY</h2>
            <div className="w-24 h-px bg-[#8c2b2b] mx-auto mb-8"></div>
            <p className="text-gray-600 leading-relaxed mb-6">
                At Chabad Opera, our guiding principle is rooted in the beauty of kosher dining — where tradition meets culinary excellence. We believe that a truly great meal is not just about taste, but about soul — a celebration of heritage, community, and connection.
            </p>
            <p className="text-gray-600 leading-relaxed">
                Every dish we create honors the richness of kosher standards while embracing creativity and refinement. From carefully selected ingredients to the warmth of our atmosphere, we aim to craft experiences that nourish both body and spirit.
                Our mission is to be more than a restaurant — a welcoming haven where every guest can celebrate life’s moments with authenticity, joy, and meaning.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;