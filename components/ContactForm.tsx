import React from 'react';

interface ContactFormProps {
  defaultInquiry?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ defaultInquiry }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. We will get back to you shortly.");
  };

  return (
    <form onSubmit={handleSubmit} className="text-left space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-500 mb-1">Name - Required</label>
        <input type="text" id="name" name="name" required className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-[#8c2b2b] transition" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-500 mb-1">Email - Required</label>
        <input type="email" id="email" name="email" required className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-[#8c2b2b] transition" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-500 mb-1">Phone Number - Required</label>
        <input type="tel" id="phone" name="phone" required className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-[#8c2b2b] transition" />
      </div>
      <div>
        <label htmlFor="inquiry" className="block text-sm font-medium text-gray-500 mb-1">What are you getting in touch about? - Optional</label>
        <select id="inquiry" name="inquiry" defaultValue={defaultInquiry || ""} className="w-full bg-white border border-gray-300 p-3 appearance-none focus:outline-none focus:ring-1 focus:ring-[#8c2b2b] transition">
          <option value="">Select an option</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-500 mb-1">Your Message - Required</label>
        <textarea id="message" name="message" rows={5} required className="w-full bg-white border border-gray-300 p-3 focus:outline-none focus:ring-1 focus:ring-[#8c2b2b] transition"></textarea>
      </div>
      <div>
        <button type="submit" className="w-full bg-[#8c2b2b] text-white py-4 uppercase tracking-widest hover:bg-[#a33a3a] transition-colors duration-300">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;