import React from 'react';
import ContactForm from '../components/ContactForm';

const PrivateEventsPage: React.FC = () => {
  return (
    <div className="bg-[#1a1a1a] text-white">
      <div className="h-[60vh] relative flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1583793072788-b54156543d2c?q=80&w=2070&auto=format&fit=crop')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <h1 className="relative z-10 font-display text-5xl md:text-7xl tracking-wider text-white uppercase">
          Private Events
        </h1>
      </div>
      
      <div className="bg-[#f4f4f4] text-gray-800 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl mb-4 tracking-widest">HOST YOUR EVENT WITH US</h2>
            <div className="w-24 h-px bg-[#8c2b2b] mx-auto mb-8"></div>
            <p className="text-gray-600 leading-relaxed mb-6">
                From elegant Shabbat dinners to joyous simchas, our spaces offer the perfect setting for every kosher celebration. Whether you’re planning an intimate gathering or a grand occasion, our team will work closely with you to craft a personalized experience that reflects your vision and traditions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-10">
               We provide tailored kosher menus, refined beverage selections, and the attentive service of our experienced staff — ensuring that every detail of your event is seamless, meaningful, and truly unforgettable.
Contact us to discover our private dining rooms and event venues designed for moments that matter.
            </p>
            <div className="mt-12">
              <ContactForm />
            </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateEventsPage;