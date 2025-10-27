import React, { useState, useMemo } from 'react';
import type { Shabbat } from '../types';
import { SHABBAT_TICKET_OPTIONS } from '../data';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedShabbat: Shabbat;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, selectedShabbat }) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleQuantityChange = (optionId: string, delta: number) => {
    setQuantities(prev => {
        const currentQuantity = prev[optionId] || 0;
        const newQuantity = Math.max(0, currentQuantity + delta);
        return { ...prev, [optionId]: newQuantity };
    });
  };

  const total = useMemo(() => {
    return SHABBAT_TICKET_OPTIONS.reduce((acc, service) => {
      return acc + service.options.reduce((serviceAcc, option) => {
        const quantity = quantities[option.id] || 0;
        return serviceAcc + (quantity * option.price);
      }, 0);
    }, 0);
  }, [quantities]);

  const handleClose = () => {
    setQuantities({});
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for your registration for ${selectedShabbat.parsha}! Your total is €${total.toFixed(2)}.`);
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      <div 
        className="bg-white text-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8 md:p-12 border-b border-gray-200">
           {SHABBAT_TICKET_OPTIONS.map(service => (
                <div key={service.title} className="mb-8 last:mb-0">
                    <h3 className="text-2xl font-bold font-display mb-2">{service.title}</h3>
                    <p className="text-gray-500 mb-4">Date: {service.day} {service.getDatePart(selectedShabbat.dates)}</p>
                    <div className="space-y-4">
                        {service.options.map(option => (
                            <div key={option.id} className="flex items-center justify-between gap-4">
                                <div className="flex-1">
                                    <p className="font-medium text-gray-800 leading-tight">{option.label}</p>
                                    <p className="text-gray-600 font-bold">{option.price > 0 ? `€${option.price.toFixed(2)}` : ''}</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <button type="button" onClick={() => handleQuantityChange(option.id, -1)} className="quantity-btn">-</button>
                                    <span className="w-8 text-center text-lg font-medium">{quantities[option.id] || 0}</span>
                                    <button type="button" onClick={() => handleQuantityChange(option.id, 1)} className="quantity-btn">+</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <div className="p-8 md:p-12">
          <h2 className="font-display text-4xl text-center mb-8">Your details</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="first-name" className="block text-sm text-gray-600 mb-1">First Name : *</label>
              <input type="text" id="first-name" required className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#e67e22]" />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm text-gray-600 mb-1">Last Name : *</label>
              <input type="text" id="last-name" required className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#e67e22]" />
            </div>
            <div>
              <label htmlFor="passport-name" className="block text-sm text-gray-600 mb-1">English full name (passport name): *</label>
              <input type="text" id="passport-name" required className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#e67e22]" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Email address: *</label>
              <input type="email" id="email" required className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#e67e22]" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">Phone number*</label>
              <div className="flex">
                <span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md">🇮🇱 +972</span>
                <input type="tel" id="phone" required className="w-full border border-gray-300 p-3 rounded-r-md focus:outline-none focus:ring-1 focus:ring-[#e67e22]" />
              </div>
            </div>
            <div className="space-y-3 pt-2">
              <div className="flex items-start">
                <input id="terms" type="checkbox" required className="h-4 w-4 text-[#e67e22] focus:ring-[#e67e22] border-gray-300 rounded mt-1" />
                <label htmlFor="terms" className="ml-3 text-sm text-gray-600">I have read and agreed to the terms of the regulations * <br/><a href="#" className="underline hover:text-[#e67e22]">Terms and Conditions</a></label>
              </div>
              <div className="flex items-start">
                <input id="updates" type="checkbox" defaultChecked required className="h-4 w-4 text-[#e67e22] focus:ring-[#e67e22] border-gray-300 rounded mt-1" />
                <label htmlFor="updates" className="ml-3 text-sm text-gray-600">I consent to receive future updates regarding my order *</label>
              </div>
            </div>

            <div className="bg-[#fff3e0] p-6 mt-8 rounded-lg">
                <div className="flex justify-between items-center text-xl font-bold mb-4">
                    <span>Total:</span>
                    <span>€{total.toFixed(2)}</span>
                </div>
                <button type="submit" className="w-full bg-[#f39c12] text-white py-4 text-lg font-bold uppercase tracking-wider hover:bg-[#e67e22] transition-colors duration-300 rounded-md">
                    Continue
                </button>
                <p className="text-xs text-gray-500 mt-3 text-center">*The registration will not be completed without completing the payment</p>
            </div>
          </form>
        </div>
      </div>
      <style>{`
          .quantity-btn {
            background-color: #f39c12;
            color: white;
            border-radius: 9999px;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            line-height: 1;
            font-weight: 300;
            transition: background-color 0.2s;
            flex-shrink: 0;
          }
          .quantity-btn:hover {
            background-color: #e67e22;
          }
        `}</style>
    </div>
  );
};

export default RegistrationModal;
