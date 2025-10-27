import React, { useState } from 'react';
import { SHABBAT_DATA } from '../data';
import RegistrationModal from '../components/RegistrationModal';

const BookShabbatPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedShabbatId, setSelectedShabbatId] = useState(SHABBAT_DATA[0].id);

  const currentShabbat = SHABBAT_DATA[0];
  const selectedShabbat = SHABBAT_DATA.find(s => s.id === selectedShabbatId) || currentShabbat;

  return (
    <>
      <div className="bg-[#f4f4f4] text-gray-800 min-h-screen pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Shabbat Times Section */}
          <div className="text-center mb-16">
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

          {/* Registration Section */}
          <div className="bg-[#fdf5ef] p-8 md:p-12 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="font-display text-3xl text-center text-gray-800 mb-6">Registration for Shabbat and Holiday in Chabad House of Vienna</h3>
            <div className="space-y-4">
              <label htmlFor="shabbat-select" className="block text-lg font-medium text-gray-700">For which date would you like to register?</label>
              <select 
                id="shabbat-select" 
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
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        selectedShabbat={selectedShabbat}
      />
    </>
  );
};

export default BookShabbatPage;
