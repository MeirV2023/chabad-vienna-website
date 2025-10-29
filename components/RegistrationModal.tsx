import React, { useState, useMemo, useEffect } from 'react';
import type { Shabbat } from '../types';
import { SHABBAT_TICKET_OPTIONS, SHABBAT_DATA } from '../data';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedShabbat: Shabbat;
}

// This lets TypeScript know that window.Stripe exists because we added the script in index.html
declare global {
  interface Window {
    Stripe: any;
  }
}

// IMPORTANT: Add your Stripe Publishable Key to your hosting provider's environment variables.
// For local development, you can create a `.env.local` file.
const STRIPE_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_51NH2X6J4ScMFK2AcAOA2696TRJIBHG8HzYQNDSZXoPXVDVlX4g9fhBAgsGbhw143do9p3FFjT2RgrHmVROGhyXLX00haYezh7o'; // Fallback for demonstration

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose, selectedShabbat }) => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [modalSelectedShabbatId, setModalSelectedShabbatId] = useState(selectedShabbat.id);

  useEffect(() => {
    if (isOpen) {
      setModalSelectedShabbatId(selectedShabbat.id);
    }
  }, [isOpen, selectedShabbat.id]);

  const currentShabbatInModal = useMemo(() => {
    return SHABBAT_DATA.find(s => s.id === modalSelectedShabbatId) || selectedShabbat;
  }, [modalSelectedShabbatId, selectedShabbat]);

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
    setIsLoading(false);
    setError(null);
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!window.Stripe) {
        setError('Stripe.js has not loaded. Please check your internet connection.');
        setIsLoading(false);
        return;
    }

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const customerDetails = {
        firstName: formData.get('first-name') as string,
        lastName: formData.get('last-name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
    };

    const lineItems = SHABBAT_TICKET_OPTIONS.flatMap(service => 
        service.options
            .filter(option => (quantities[option.id] || 0) > 0)
            .map(option => ({
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: `${option.label} (${service.title} - ${currentShabbatInModal.parsha})`,
                    },
                    unit_amount: Math.round(option.price * 100), // Stripe expects cents
                },
                quantity: quantities[option.id],
            }))
    );
    
    if (lineItems.length === 0) {
        setError("Please select at least one ticket to register.");
        setIsLoading(false);
        return;
    }

    const registrationData = {
        shabbatInfo: {
            parsha: currentShabbatInModal.parsha,
            dates: currentShabbatInModal.dates,
            begins: currentShabbatInModal.begins,
            ends: currentShabbatInModal.ends,
        },
        customerDetails,
        orderedItems: lineItems.map(item => ({
            name: item.price_data.product_data.name,
            quantity: item.quantity,
            price: (item.price_data.unit_amount / 100).toFixed(2),
        })),
        totalAmount: total.toFixed(2),
        address: 'Tegetthoffstraße 3a, 1010 Wien',
    };

    try {
      // Call the backend serverless function to create a checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          lineItems, 
          customerEmail: customerDetails.email,
          registrationData, // Send all data for metadata
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create payment session.');
      }

      const { sessionId } = await response.json();

      // Redirect to Stripe Checkout
      const stripe = window.Stripe(STRIPE_PUBLISHABLE_KEY);
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        throw new Error(error.message);
      }
    } catch (err: any) {
        setError(`Payment failed: ${err.message}. Please try again.`);
        setIsLoading(false);
    }
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
        <form onSubmit={handleSubmit}>
          <div className="p-8 md:p-12 border-b border-gray-200">
            <div className="mb-8">
              <label htmlFor="shabbat-select-modal" className="block text-lg font-medium text-gray-700 mb-2">Select your registration date</label>
              <select 
                id="shabbat-select-modal" 
                value={modalSelectedShabbatId}
                onChange={(e) => setModalSelectedShabbatId(e.target.value)}
                className="w-full bg-white border border-gray-300 p-3 text-lg focus:outline-none focus:ring-1 focus:ring-[#8c2b2b] transition"
              >
                {SHABBAT_DATA.map(shabbat => (
                  <option key={shabbat.id} value={shabbat.id}>{shabbat.parsha} ({shabbat.dates})</option>
                ))}
              </select>
            </div>
            {SHABBAT_TICKET_OPTIONS.map(service => (
              <div key={service.title} className="mb-8 last:mb-0">
                <h3 className="text-2xl font-bold font-display mb-2">{service.title}</h3>
                <p className="text-gray-500 mb-4">Date: {service.day} {service.getDatePart(currentShabbatInModal.dates)}</p>
                <div className="space-y-4">
                  {service.options.map(option => (
                    <div key={option.id} className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <p className="font-medium text-gray-800 leading-tight">{option.label}</p>
                        <p className="text-gray-600 font-bold">{option.price > 0 ? `€${option.price.toFixed(2)}` : 'Free'}</p>
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
            <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="font-medium text-gray-800 leading-tight">Children (under 3) - free</p>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <h2 className="font-display text-4xl text-center mb-8">Your details</h2>
            <div className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm text-gray-600 mb-1">First Name: *</label>
                  <input type="text" id="first-name" name="first-name" required className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8c2b2b]" />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm text-gray-600 mb-1">Last Name: *</label>
                  <input type="text" id="last-name" name="last-name" required className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8c2b2b]" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-600 mb-1">Email address: *</label>
                <input type="email" id="email" name="email" required className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8c2b2b]" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">Phone number*</label>
                <input type="tel" id="phone" name="phone" required placeholder="e.g. 501234567" className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-1 focus:ring-[#8c2b2b]" />
              </div>
              <div className="space-y-3 pt-2">
                <div className="flex items-start">
                  <input id="terms" name="terms" type="checkbox" required className="h-4 w-4 text-[#8c2b2b] focus:ring-[#8c2b2b] border-gray-300 rounded mt-1" />
                  <label htmlFor="terms" className="ml-3 text-sm text-gray-600">I have read and agreed to the terms of the regulations * <br/><a href="#" className="underline hover:text-[#8c2b2b]">Terms and Conditions</a></label>
                </div>
                <div className="flex items-start">
                  <input id="updates" name="updates" type="checkbox" defaultChecked required className="h-4 w-4 text-[#8c2b2b] focus:ring-[#8c2b2b] border-gray-300 rounded mt-1" />
                  <label htmlFor="updates" className="ml-3 text-sm text-gray-600">I consent to receive future updates regarding my order *</label>
                </div>
              </div>

              <div className="bg-[#fdf5ef] p-6 mt-8 rounded-lg">
                  <div className="flex justify-between items-center text-xl font-bold mb-4">
                      <span>Total:</span>
                      <span>€{total.toFixed(2)}</span>
                  </div>
                  {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-[#8c2b2b] text-white py-4 text-lg font-bold uppercase tracking-wider hover:bg-[#a33a3a] transition-colors duration-300 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed flex justify-center items-center"
                  >
                    {isLoading ? (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : 'Continue'}
                  </button>
                  <p className="text-xs text-gray-500 mt-3 text-center">*Registration is not complete until payment is finalized.</p>
              </div>
            </div>
          </div>
        </form>
      </div>
      <style>{`
          .quantity-btn {
            background-color: #8c2b2b;
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
            background-color: #a33a3a;
          }
        `}</style>
    </div>
  );
};

export default RegistrationModal;