import React, { useState } from 'react';
import { SHABBAT_DATA } from '../data';
import RegistrationModal from '../components/RegistrationModal';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedShabbatId, setSelectedShabbatId] = useState(SHABBAT_DATA[0].id);
  const selectedShabbat = SHABBAT_DATA.find(s => s.id === selectedShabbatId) || SHABBAT_DATA[0];
  const currentShabbat = SHABBAT_DATA[0];

  return (
    <>
      <div className="h-screen w-full relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.wfolio.com/x/Sjpgrm2v20FR6Cth5viRk7BlqOjlhJvA/0gVg86C_OuHWvsaW3lYW0Vd7PyTRQxHM/OwQH1C-ZwyvywCBMA0rMQz-E74JErGGi/GrNY73zTIxBGiKuyUWcVPsI5uXujIbvi/ItQB1Bl9p6LzdBnXPUjo-Q.jpg')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <div>
            <h1 
              className="font-display text-5xl md:text-7xl tracking-widest text-white uppercase"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
            >
              Book Shabbat
            </h1>
            <p 
              className="font-display text-2xl md:text-3xl mt-4 tracking-wider max-w-2xl"
              style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}
            >
              Unforgettable Shabbat in the center of Vienna
            </p>
          </div>
        </div>
      </div>

      <section className="bg-[#f4f4f4] text-gray-800 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center mb-20 bg-white rounded-lg shadow-lg p-8 md:p-12 border border-gray-200">
            <h2 className="font-display text-4xl mb-4 tracking-widest uppercase">About Us</h2>
            <div className="w-24 h-px bg-[#8c2b2b] mx-auto mb-8"></div>
            <p className="text-gray-600 leading-relaxed mb-6 text-left">
                <strong>At Chabad Opera</strong>, our guiding principle is rooted in the beauty of kosher dining — where tradition meets community and the spirit of Shabbat. We believe that a truly great meal is not just about taste, but about soul — a celebration of heritage, connection, and belonging.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-left">
                Every Shabbat, we open our doors to guests from around the world, uniting people of all backgrounds around one shared table. Each dish we serve honors the richness of kosher tradition while embracing the warmth and joy of togetherness — creating moments that nourish both body and spirit.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-left">
                Located in the heart of <strong>Vienna</strong> — a city known for its cultural grace, timeless beauty, and deep <strong>Jewish heritage — </strong><strong>Chabad Opera</strong> is more than a place to dine. It is a home away from home, where travelers, locals, and visitors from every corner of the globe can celebrate the peace and holiness of Shabbat together.
            </p>
            <p className="text-gray-600 leading-relaxed text-left">
                Join us at <strong>Tegetthoffstraße 3a, 1010 Wien</strong>, and experience the beauty of Shabbat in Vienna — where tradition, hospitality, and heart come together in perfect harmony.
            </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-4 tracking-widest uppercase">Shabbat Dinner Experience</h2>
            <div className="w-24 h-px bg-[#8c2b2b] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Silver Menu Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-display text-3xl text-[#8c2b2b]">Friday Evening Silver Shabbat Menu</h3>
              <div className="inline-block bg-[#fdf5ef] px-4 py-1 rounded-full mb-4 mt-2 self-start">
                  <p className="text-2xl font-display font-bold text-[#8c2b2b]">€60</p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Step into the warmth of Shabbat with our Silver Shabbat Menu — a perfect balance of tradition and flavor. Enjoy a variety of homemade salads, comforting soup, and delicious main courses prepared with care. From the freshly baked challah to the homemade apple strudel, every detail brings the taste and spirit of home.
              </p>
              
              <h4 className="font-semibold text-lg mb-3 tracking-wide">Menu highlights:</h4>
              <ul className="space-y-2 text-gray-600 mb-6 text-left">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#8c2b2b] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>A selection of fresh salads – from crispy cabbage and Georgian to creamy hummus with mushrooms</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#8c2b2b] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Traditional chicken soup</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#8c2b2b] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Chicken breast with mashed potatoes and Austrian-style goulash in red wine sauce</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#8c2b2b] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Homemade challah bread</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#8c2b2b] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Dessert – apple strudel made in-house</span>
                </li>
              </ul>

              <p className="font-semibold mb-6">Included: <span className="font-normal text-gray-600">soft drinks and wine for Kiddush</span></p>

              <p className="italic text-gray-700 bg-[#fdf5ef] p-4 rounded-md">✨ Perfect for those who want to experience a cozy and flavorful Shabbat dinner.</p>
              
              <div className="mt-auto pt-6">
                <button onClick={() => setIsModalOpen(true)} className="block w-full text-center bg-[#8c2b2b] text-white py-3 uppercase tracking-widest hover:bg-[#a33a3a] transition-colors duration-300 rounded-md">
                  Book Silver Menu
                </button>
              </div>
            </div>

            {/* Gold Menu Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#8c2b2b] flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-display text-3xl text-[#8c2b2b]">Friday Evening Gold Shabbat Menu</h3>
              <div className="inline-block bg-[#fdf5ef] px-4 py-1 rounded-full mb-4 mt-2 self-start">
                  <p className="text-2xl font-display font-bold text-[#8c2b2b]">€95</p>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Celebrate Shabbat in style with our Gold Shabbat Menu — an elevated dining experience for true connoisseurs of taste and tradition. This is more than a meal — it’s a festive journey of flavors, aromas, and hospitality designed to delight every guest.
              </p>
              
              <h4 className="font-semibold text-lg mb-3 tracking-wide">Menu highlights:</h4>
              <ul className="space-y-2 text-gray-600 mb-6 text-left">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#8c2b2b] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>A lavish variety of salads – from classics to gourmet favorites: “Shuba” layered salad with herring, avocado salad, pickled vegetables, and seasonal fruit platters</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#8c2b2b] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Appetizer – salmon in tomato sauce with vegetables</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#8c2b2b] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Traditional chicken soup</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#8c2b2b] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Main courses – chicken breast with mashed potatoes, Austrian-style goulash, and blini stuffed with chicken and mushrooms</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#8c2b2b] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                  <span>Dessert – homemade apple strudel and fresh fruits</span>
                </li>
              </ul>
              
              <p className="font-semibold mb-6">Included: <span className="font-normal text-gray-600">one bottle of red wine and soft drinks</span></p>

              <p className="italic text-gray-700 bg-[#fdf5ef] p-4 rounded-md">💫 Choose the Gold Menu and make your Shabbat evening truly unforgettable.</p>
              
              <div className="mt-auto pt-6">
                <button onClick={() => setIsModalOpen(true)} className="block w-full text-center bg-[#8c2b2b] text-white py-3 uppercase tracking-widest hover:bg-[#a33a3a] transition-colors duration-300 rounded-md">
                  Book Gold Menu
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12 text-center border border-gray-200">
                <h2 className="font-display text-4xl md:text-5xl text-gray-800 tracking-widest uppercase">Shabbat Times</h2>
                <div className="w-24 h-px bg-[#8c2b2b] mx-auto my-6"></div>
                <p className="font-display text-4xl text-gray-900">{currentShabbat.parsha}</p>
                <p className="text-lg text-gray-600 mt-1 mb-8">({currentShabbat.dates})</p>
                
                <div className="flex justify-center items-stretch divide-x divide-gray-300">
                    <div className="px-8 md:px-12 text-center">
                        <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">Shabbat begins</p>
                        <p className="text-5xl font-display font-bold text-gray-900">{currentShabbat.begins}</p>
                    </div>
                    <div className="px-8 md:px-12 text-center">
                        <p className="text-sm uppercase tracking-widest text-gray-500 mb-1">Shabbat ends</p>
                        <p className="text-5xl font-display font-bold text-gray-900">{currentShabbat.ends}</p>
                    </div>
                </div>
                
                <p className="text-xs text-gray-500 mt-8 tracking-wide">Weekly Torah portion for Chabad of Vienna.</p>
            </div>
          </div>

        </div>
      </section>
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedShabbat={selectedShabbat}
      />
    </>
  );
};

export default HomePage;