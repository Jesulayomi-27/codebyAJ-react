import React, { useState } from 'react'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

function ContactUs() {
 const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('https://formspree.io/f/xblyjvnq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ fullName: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: 'Email',
      value: 'lizabeth2712@gmail.com',
      href: 'mailto:lizabeth2712@gmail.com',
    },
    {
      icon: PhoneIcon,
      label: 'Phone',
      value: '08165153280',
      href: 'tel:08165153280',
    },
    {
      icon: MapPinIcon,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: null,
    }
  ];

  return (
    <div id='contact' className='py-20 lg:px-15 px-5 font-serif bg-[#f8f9fc]'>
      <div className='text-center'>
        <h1 className='text-3xl font-bold leading-[2]'>Get In Touch</h1>
        <p className='text-[#71717a]'>Let's build something amazing together</p>
      </div>
     <div className="grid lg:grid-cols-2 gap-8 mt-9">
  
  {/* Left Column - Contact Information */}
  <div className="p-8">
    <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
    
    <div className="space-y-6 mb-8">
      {contactInfo.map((item, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="text-[#463acb]">
            <item.icon className="w-6 h-6" />
          </div>
          <div>
            <p className="text-gray-500 text-sm mb-1">{item.label}</p>
            {item.href ? (
              <a 
                href={item.href}
                className="text-gray-800 font-medium hover:text-[#463acb]"
              >
                {item.value}
              </a>
            ) : (
              <p className="text-gray-800 font-medium">{item.value}</p>
            )}
          </div>
        </div>
      ))}
    </div>

    {/* Availability Badge */}
    <div className="border-t border-gray-200 pt-6">
      <p className="text-gray-600">
        <span className="text-[#463acb] font-medium">⚡</span> Available for freelance and full-time opportunities
      </p>
    </div>
  </div>

  {/* Right Column - Form */}
  <div className="p-8">
    <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
    
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Form fields remain the same */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
          Your Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Joe Stone"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#463acb] focus:border-transparent outline-none transition"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="joe@example.com"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#463acb] focus:border-transparent outline-none transition"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Project Inquiry"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#463acb] focus:border-transparent outline-none transition"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write something.."
          rows="5"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#463acb] focus:border-transparent outline-none transition resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-[#463acb] text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-650 transition-colors duration-300 disabled:opacity-50"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message 📩'}
      </button>

      {status === 'success' && (
        <div className="p-3 bg-green-100 text-green-700 rounded-lg text-center">
          ✅ Message sent successfully!
        </div>
      )}
      
      {status === 'error' && (
        <div className="p-3 bg-red-100 text-red-700 rounded-lg text-center">
          ❌ Failed to send message. Please try again.
        </div>
      )}
    </form>
  </div>
</div>
      
    </div>
  )
}

export default ContactUs
