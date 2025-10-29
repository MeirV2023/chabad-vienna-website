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
                <strong>At Chabad Opera</strong>, our guiding principle is rooted in the beauty of kosher dining — where tradition meets community and the spirit of Shabbat. We believe that a truly great meal is not just about taste, but about soul — a celebration of heritage, connection, and belonging.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
                Every Shabbat, we open our doors to guests from around the world, uniting people of all backgrounds around one shared table. Each dish we serve honors the richness of kosher tradition while embracing the warmth and joy of togetherness — creating moments that nourish both body and spirit.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
                Located in the heart of <strong>Vienna</strong> — a city known for its cultural grace, timeless beauty, and deep <strong>Jewish heritage — </strong><strong>Chabad Opera</strong> is more than a place to dine. It is a home away from home, where travelers, locals, and visitors from every corner of the globe can celebrate the peace and holiness of Shabbat together.
            </p>
            <p className="text-gray-600 leading-relaxed">
                Join us at <strong>Tegetthoffstraße 3a, 1010 Wien</strong>, and experience the beauty of Shabbat in Vienna — where tradition, hospitality, and heart come together in perfect harmony.
            </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;