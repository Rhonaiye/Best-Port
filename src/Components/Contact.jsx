import React from 'react';
import { motion } from 'framer-motion';
import {FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp}  from 'react-icons/fa'


const Contact = () => {
  const contacts = [

    {
      name: 'WhatsApp',
      href: 'https://wa.me/+2349131215984?text=Hello%2C%20I%20would%20like%20to%20discuss%20an%20opportunity',
      icon: FaWhatsapp,
      color: 'hover:text-green-500'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/_naiye/',
      icon: FaInstagram,
      color: 'hover:text-pink-500'
    }
  ];

  return (
    <div className="w-full font-prompt max-w-4xl mx-auto px-4 py-16">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
      >
        <h2 className="text-5xl font-extrabold text-center mb-8 text-blue-300">
          Connect
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-2 text-white/80 ${contact.color} transition-colors duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-8 h-8" />
                <span className="text-sm font-medium">{contact.name}</span>
              </motion.a>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;