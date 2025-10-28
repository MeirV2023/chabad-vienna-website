import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#f4f4f4] text-gray-800 min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="font-display text-5xl md:text-6xl mb-4 tracking-widest uppercase">Contact Us</h1>
          <div className="w-24 h-px bg-[#8c2b2b] mx-auto mb-16"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="text-left">
            <h2 className="font-display text-3xl mb-4 tracking-widest">Hours & Location</h2>
            <div className="w-16 h-px bg-[#8c2b2b] mb-6"></div>
            <div className="space-y-3 text-gray-600 leading-relaxed">
              <p>Tegetthoffstraße 3a, 1010 Wien</p>
              <p><a href="tel:+436606962277" className="hover:text-[#8c2b2b] transition-colors">+43 660 6962277</a></p>
              <p><a href="mailto:help@chabad-opera.com" className="hover:text-[#8c2b2b] transition-colors">help@chabad-opera.com</a></p>
              <p className="font-medium text-gray-700 pt-2">Hours 12:00-21:00</p>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mb-8 text-left">Send us a message and we’ll get back to you as soon as possible. Looking forward to hearing from you.</p>
            <ContactForm />
          </div>
        </div>

        <div className="mt-20 rounded-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.224419946459!2d16.36856087641243!3d48.20516697125348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079d3e02787d%3A0x868b3e6e6d11c828!2sTegetthoffstra%C3%9Fe%203a%2C%201010%20Wien%2C%20Austria!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map of Tegetthoffstraße 3a, 1010 Wien"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;