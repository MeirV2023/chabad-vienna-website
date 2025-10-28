import React, { useState } from 'react';
import { SHABBAT_DATA } from '../data';
import RegistrationModal from '../components/RegistrationModal';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedShabbatId, setSelectedShabbatId] = useState(SHABBAT_DATA[0].id);
  const selectedShabbat = SHABBAT_DATA.find(s => s.id === selectedShabbatId) || SHABBAT_DATA[0];
  const currentShabbat = SHABBAT_DATA[0];

  const handleScrollToRegister = () => {
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="h-screen w-full relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://i.wfolio.com/x/Sjpgrm2v20FR6Cth5viRk7BlqOjlhJvA/0gVg86C_OuHWvsaW3lYW0Vd7PyTRQxHM/OwQH1C-ZwyvywCBMA0rMQz-E74JErGGi/GrNY73zTIxBGiKuyUWcVPsI5uXujIbvi/ItQB1Bl9p6LzdBnXPUjo-Q.jpg')" }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <button onClick={handleScrollToRegister} className="cursor-pointer">
            <h1 
              className="font-display text-6xl md:text-8xl tracking-widest text-white uppercase transition-transform duration-300 hover:scale-105"
              style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
            >
              Book Shabbat
            </h1>
          </button>
        </div>
      </div>

      <section className="bg-[#f4f4f4] text-gray-800 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl mb-4 tracking-widest uppercase">Shabbat Dinner Experience</h2>
            <div className="w-24 h-px bg-[#8c2b2b] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Silver Menu Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-display text-3xl text-[#8c2b2b]">Friday Evening Silver Shabbat Menu</h3>
              <p className="text-2xl font-display font-bold mb-4 text-gray-700">€30</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Step into the warmth of Shabbat with our Silver Shabbat Menu — a perfect balance of tradition and flavor. Enjoy a variety of homemade salads, comforting soup, and delicious main courses prepared with care. From the freshly baked challah to the homemade apple strudel, every detail brings the taste and spirit of home.
              </p>
              
              <h4 className="font-semibold text-lg mb-3 tracking-wide">Menu highlights:</h4>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start"><span className="mr-3">🥗</span>A selection of fresh salads – from crispy cabbage and Georgian to creamy hummus with mushrooms</li>
                <li className="flex items-start"><span className="mr-3">🍲</span>Traditional chicken soup</li>
                <li className="flex items-start"><span className="mr-3">🍗</span>Chicken breast with mashed potatoes and Austrian-style goulash in red wine sauce</li>
                <li className="flex items-start"><span className="mr-3">🍞</span>Homemade challah bread</li>
                <li className="flex items-start"><span className="mr-3">🍎</span>Dessert – apple strudel made in-house</li>
              </ul>

              <p className="font-semibold mb-6">Included: <span className="font-normal text-gray-600">soft drinks and wine for Kiddush</span></p>

              <p className="italic text-gray-700 bg-[#fdf5ef] p-4 rounded-md">✨ Perfect for those who want to experience a cozy and flavorful Shabbat dinner.</p>
              
              <div className="mt-auto pt-6">
                <button onClick={handleScrollToRegister} className="block w-full text-center bg-[#8c2b2b] text-white py-3 uppercase tracking-widest hover:bg-[#a33a3a] transition-colors duration-300 rounded-md">
                  Book Silver Menu
                </button>
              </div>
            </div>

            {/* Gold Menu Card */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-[#8c2b2b] flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-display text-3xl text-[#8c2b2b]">Friday Evening Gold Shabbat Menu</h3>
              <p className="text-2xl font-display font-bold mb-4 text-gray-700">€45</p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Celebrate Shabbat in style with our Gold Shabbat Menu — an elevated dining experience for true connoisseurs of taste and tradition. This is more than a meal — it’s a festive journey of flavors, aromas, and hospitality designed to delight every guest.
              </p>
              
              <h4 className="font-semibold text-lg mb-3 tracking-wide">Menu highlights:</h4>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start"><span className="mr-3">🥗</span>A lavish variety of salads – from classics to gourmet favorites: “Shuba” layered salad with herring, avocado salad, pickled vegetables, and seasonal fruit platters</li>
                <li className="flex items-start"><span className="mr-3">🍣</span>Appetizer – salmon in tomato sauce with vegetables</li>
                <li className="flex items-start"><span className="mr-3">🍲</span>Traditional chicken soup</li>
                <li className="flex items-start"><span className="mr-3">🍗</span>Main courses – chicken breast with mashed potatoes, Austrian-style goulash, and blini stuffed with chicken and mushrooms</li>
                <li className="flex items-start"><span className="mr-3">🍰</span>Dessert – homemade apple strudel and fresh fruits</li>
              </ul>
              
              <p className="font-semibold mb-6">Included: <span className="font-normal text-gray-600">one bottle of red wine and soft drinks</span></p>

              <p className="italic text-gray-700 bg-[#fdf5ef] p-4 rounded-md">💫 Choose the Gold Menu and make your Shabbat evening truly unforgettable.</p>
              
              <div className="mt-auto pt-6">
                <button onClick={handleScrollToRegister} className="block w-full text-center bg-[#8c2b2b] text-white py-3 uppercase tracking-widest hover:bg-[#a33a3a] transition-colors duration-300 rounded-md">
                  Book Gold Menu
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <h1 className="font-display text-4xl md:text-5xl text-gray-900 tracking-wider">Chabad of Vienna - Shabbat and holiday in Vienna</h1>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold tracking-wide uppercase text-[#8c2b2b]">Shabbat times</h2>
              <p className="font-display text-3xl mt-2">{currentShabbat.parsha}</p>
              <p className="text-lg text-gray-600">({currentShabbat.dates})</p>
              <div className="mt-6 flex justify-center items-center space-x-12">
                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-500">Shabbat begins</p>
                  <p className="text-4xl font-display font-bold text-gray-900">{currentShabbat.begins}</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-500">Shabbat ends</p>
                  <p className="text-4xl font-display font-bold text-gray-900">{currentShabbat.ends}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16" id="registration-form">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg max-w-2xl mx-auto border border-gray-200">
              <h3 className="font-display text-3xl text-center text-gray-800 mb-6">Registration for Shabbat and Holiday</h3>
              <div className="space-y-4">
                <label htmlFor="shabbat-select-home" className="block text-lg font-medium text-gray-700">For which date would you like to register?</label>
                <select 
                  id="shabbat-select-home" 
                  value={selectedShabbatId}
                  onChange={(e) => setSelectedShabbatId(e.target.value)}
                  className="w-full bg-white border border-gray-300 p-3 text-lg focus:outline-none focus:ring-1 focus:ring-[#8c2b2b] transition"
                >
                  {SHABBAT_DATA.map(shabbat => (
                    <option key={shabbat.id} value={shabbat.id}>{shabbat.parsha} ({shabbat.dates})</option>
                  ))}
                </select>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#8c2b2b] text-white py-4 mt-4 text-lg uppercase tracking-widest hover:bg-[#a33a3a] transition-colors duration-300 rounded-md"
                >
                  Register
                </button>
              </div>
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